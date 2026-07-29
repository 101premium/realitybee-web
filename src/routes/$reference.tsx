// Post-payment landing at the site root.
//
// The Cham Switch middleware builds the bank's callback as REDIRECT_URL + "/" +
// reference (OrderService.java). In production REDIRECT_URL is the bare site
// root, so the shopper comes back to
//   https://shop.realitybee.com.ng/<reference>?adviceReference=…&paymentReference=…
// rather than /payment-callback/<reference>, which used to render the 404 page.
//
// This catch-all only claims paths that actually look like that callback — a
// 32-character hex reference carrying the gateway's query string. Anything else
// is still a genuine 404.
import { createFileRoute, notFound } from "@tanstack/react-router";
import { z } from "zod";
import { PaymentCallbackResult } from "@/components/payment-callback-result";

const REFERENCE_PATTERN = /^[0-9a-fA-F]{16,64}$/;

export const Route = createFileRoute("/$reference")({
  validateSearch: z.object({
    adviceReference: z.string().optional(),
    paymentReference: z.string().optional(),
    status: z.string().optional(),
  }),
  beforeLoad: ({ params, search }) => {
    const isPaymentReturn =
      REFERENCE_PATTERN.test(params.reference) &&
      Boolean(search.adviceReference || search.paymentReference);

    if (!isPaymentReturn) throw notFound();
  },
  head: () => ({
    meta: [{ title: "Confirming payment — Reality Bee" }, { name: "robots", content: "noindex" }],
  }),
  component: RootPaymentCallbackPage,
});

function RootPaymentCallbackPage() {
  const { reference } = Route.useParams();
  const search = Route.useSearch();

  return <PaymentCallbackResult reference={reference} {...search} />;
}
