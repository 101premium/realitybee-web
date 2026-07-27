// Server-side proxy for the Cham Switch order/payment integration service.
//
// Unlike the cart API (public, called directly from the browser — see src/lib/api.ts),
// every /api/v1/order/** endpoint sits behind HTTP Basic auth: the service's
// SpringSecurityConfig permits only /public/**, /api/v1/challenge/**, /healthcheck
// and swagger, and requires authentication for everything else.
//
// So these are server functions, not plain fetches. The browser calls them by RPC;
// the handler runs on the Railway server, where MIDDLEWARE_USER/MIDDLEWARE_PASS live.
// None of these vars are VITE_-prefixed, so Vite cannot inline them into the client
// bundle — credentials, the card-encryption key and the merchant id stay server-side.
//
// Mirrors the working integration in quantum-core-web-app/src/lib/orders.server.ts,
// minus the local Prisma persistence (this app has no order database).

import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import crypto from "crypto";

/**
 * Client-supplied order fields. merchantId and company are deliberately absent —
 * they come from server env so a caller cannot bill a different merchant.
 */
const orderRequestSchema = z.object({
  productName: z.string().min(1),
  price: z.string().min(1),
  quantity: z.string().min(1),
  totalAmount: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  stateCode: z.string().min(1),
  postalCode: z.string().min(1),
});

/**
 * Raw card fields. The browser sends these over the RPC call and the server
 * encrypts them into `cardData` — the client never performs the encryption, so
 * PAYMENT_SECRET_KEY never leaves the server.
 */
const orderPaymentRequestSchema = z.object({
  totalAmount: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  address: z.string().min(1),
  city: z.string().min(1),
  stateCode: z.string().min(1),
  postalCode: z.string().min(1),
  cardNumber: z.string().min(1),
  expiryMonth: z.string().min(1),
  expiryYear: z.string().min(1),
  cvvCode: z.string().min(1),
});

/** Mirrors TransactionStatusRequest; merchantId is filled in server-side. */
const transactionStatusRequestSchema = z.object({
  reference: z.string().min(1),
});

const orderLookupSchema = z.object({
  orderId: z.string().min(1),
  company: z.string().min(1).optional(),
});

export type OrderRequest = z.infer<typeof orderRequestSchema>;
export type OrderPaymentRequest = z.infer<typeof orderPaymentRequestSchema>;
export type TransactionStatusRequest = z.infer<typeof transactionStatusRequestSchema>;

/**
 * Mirrors OrderResponse. Serialised with @JsonInclude(NON_NULL), so any field may
 * be absent. `createdDate` is a LocalDateTime rendered as an ISO-8601 string under
 * Spring Boot's default Jackson config.
 */
export type OrderResponse = {
  id?: number;
  price?: string;
  quantity?: string;
  totalAmount?: string;
  productName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  stateCode?: string;
  postalCode?: string;
  orderId?: string;
  orderStatus?: string;
  deliveryStatus?: string;
  merchantId?: string;
  city?: string;
  company?: string;
  createdDate?: string;
};

/** Mirrors CardPaymentResponse. `JWT` is serialised uppercase via @JsonProperty. */
export type CardPaymentResponse = {
  code?: string;
  message?: string;
  description?: string;
  reference?: string;
  paymentReference?: string;
  amount?: string;
  url?: string;
  formString?: string;
  JWT?: string;
};

/** Mirrors TransactionStatusResponse. */
export type TransactionStatusResponse = {
  code?: string;
  amount?: string;
  description?: string;
  cardPan?: string;
  createdDate?: string;
  currency?: string;
  ipAddress?: string;
  reference?: string;
  transactionCompleted?: string;
  transactionId?: string;
  transactionStatus?: string;
  transactionType?: string;
  message?: string;
  paymentReference?: string;
};

/** Surfaced to the client; carries no credential or upstream-URL detail. */
export class OrderApiError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "OrderApiError";
  }
}

const MERCHANT_ID = () => process.env.MERCHANT_ID || "SCHKGWUF";
const COMPANY_NAME = () => process.env.COMPANY_NAME || "OPTIMUM-SYSTEM";

function orderApiConfig() {
  const baseUrl = (process.env.ORDER_API_URL ?? "https://payments.realitybee.com.ng").replace(
    /\/+$/,
    "",
  );
  const username = process.env.MIDDLEWARE_USER;
  const password = process.env.MIDDLEWARE_PASS;

  if (!username || !password) {
    // Fail loudly on the server rather than sending an unauthenticated request
    // that would come back as an opaque 401.
    throw new OrderApiError(
      500,
      "Order API credentials are not configured (MIDDLEWARE_USER / MIDDLEWARE_PASS).",
    );
  }

  const authorization = `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
  return { baseUrl, authorization };
}

async function orderApiFetch<T>(
  path: string,
  init: { method: "GET" | "POST"; body?: unknown },
): Promise<T> {
  const { baseUrl, authorization } = orderApiConfig();

  const response = await fetch(`${baseUrl}/api/v1/order${path}`, {
    method: init.method,
    headers: {
      Authorization: authorization,
      Accept: "*/*",
      ...(init.body === undefined ? {} : { "Content-Type": "application/json" }),
    },
    body: init.body === undefined ? undefined : JSON.stringify(init.body),
  });

  const raw = await response.text();

  if (!response.ok) {
    // Deliberately vague for 401/403 — an auth failure here is a server
    // misconfiguration, not something to explain to the shopper. Never echo the
    // upstream body for payment calls; it can restate submitted card fields.
    if (response.status === 401 || response.status === 403) {
      console.error(
        `Order API rejected credentials for ${init.method} ${path} (${response.status})`,
      );
      throw new OrderApiError(502, "Payment service is unavailable.");
    }

    let message = response.statusText;
    try {
      const parsed = JSON.parse(raw) as { message?: string; error?: string };
      message = parsed.message ?? parsed.error ?? message;
    } catch {
      // Non-JSON error body — keep the status text.
    }
    throw new OrderApiError(response.status, message);
  }

  return (raw ? JSON.parse(raw) : null) as T;
}

/**
 * AES-128-ECB over the JSON card object, keyed by the first 16 bytes of SHA-1
 * of PAYMENT_SECRET_KEY. This scheme is dictated by the payment gateway — it is
 * reproduced verbatim from the working quantum-core integration.
 */
function encryptCardData(cardObj: Record<string, string>, secret: string) {
  const sha = crypto.createHash("sha1");
  sha.update(secret, "utf8");
  const key = sha.digest().subarray(0, 16);

  const cipher = crypto.createCipheriv("aes-128-ecb", key, null);
  let encrypted = cipher.update(JSON.stringify(cardObj), "utf8", "base64");
  encrypted += cipher.final("base64");

  return encrypted;
}

/** POST /api/v1/order */
export const createOrder = createServerFn({ method: "POST" })
  .validator(orderRequestSchema)
  .handler(({ data }) =>
    orderApiFetch<OrderResponse>("", {
      method: "POST",
      body: {
        ...data,
        merchantId: MERCHANT_ID(),
        company: COMPANY_NAME(),
      },
    }),
  );

/** GET /api/v1/order/{orderId}/{company} */
export const fetchOrder = createServerFn({ method: "GET" })
  .validator(orderLookupSchema)
  .handler(({ data }) =>
    orderApiFetch<OrderResponse>(
      `/${encodeURIComponent(data.orderId)}/${encodeURIComponent(data.company ?? COMPANY_NAME())}`,
      { method: "GET" },
    ),
  );

/**
 * POST /api/v1/order/payment
 *
 * Card fields are encrypted here and discarded — never log `data`, and never
 * surface the upstream error body to the client for this call.
 */
export const submitOrderPayment = createServerFn({ method: "POST" })
  .validator(orderPaymentRequestSchema)
  .handler(({ data }) => {
    const secretKey = process.env.PAYMENT_SECRET_KEY;
    if (!secretKey) {
      console.error("PAYMENT_SECRET_KEY is not configured");
      throw new OrderApiError(500, "Payment configuration error.");
    }

    const cardData = encryptCardData(
      {
        cardNumber: data.cardNumber,
        expiryMonth: data.expiryMonth,
        expiryYear: data.expiryYear,
        cvvCode: data.cvvCode,
      },
      secretKey,
    );

    return orderApiFetch<CardPaymentResponse>("/payment", {
      method: "POST",
      body: {
        totalAmount: data.totalAmount,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        address: data.address,
        stateCode: data.stateCode,
        postalCode: data.postalCode,
        email: data.email,
        city: data.city,
        merchantId: MERCHANT_ID(),
        cardData,
      },
    });
  });

/** POST /api/v1/order/status */
export const fetchOrderStatus = createServerFn({ method: "POST" })
  .validator(transactionStatusRequestSchema)
  .handler(({ data }) =>
    orderApiFetch<TransactionStatusResponse>("/status", {
      method: "POST",
      body: {
        reference: data.reference,
        merchantId: MERCHANT_ID(),
      },
    }),
  );
