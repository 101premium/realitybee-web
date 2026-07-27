// Client for the Reality Bee shopping-cart service (Spring Boot, /api/**).
//
// The existing hardcoded catalogue in src/data/* is still the source of truth for
// the rendered pages. This module is the wiring for moving off it: routes can be
// migrated to these calls one at a time without a big-bang rewrite.
//
// Override the host per environment with VITE_API_BASE_URL (e.g. a staging URL or
// http://localhost:8087 when running the cart service locally).

export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ?? "https://cart.realitybee.com.ng"
).replace(/\/+$/, "");

/** Sort values the service accepts; anything else falls back to "featured". */
export type ProductSort = "featured" | "priceAsc" | "priceDesc";

/**
 * Mirrors ProductSummaryDto. Prices arrive pre-formatted as "$24.36", not as
 * numbers — use parsePrice() when you need to do arithmetic on them.
 */
export type ApiProductSummary = {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  priceUsd: string;
  category: string;
};

/**
 * "$24.36" -> 24.36. Returns 0 for anything unparseable so a bad price can never
 * silently become NaN in a total. The value is US dollars and is used as-is —
 * there is no currency conversion anywhere in this app.
 */
export function parsePrice(price: string | null | undefined): number {
  if (!price) return 0;
  const parsed = Number.parseFloat(price.replace(/[^\d.-]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

/** Mirrors ReviewDto. */
export type ApiReview = {
  stars: number | null;
  text: string;
  author: string;
  date: string;
};

/** Mirrors ProductDetailDto. */
export type ApiProductDetail = {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  priceUsd: string;
  originalPriceUsd: string | null;
  discountPercent: number | null;
  sourceUrl: string;
  category: string;
  description: string;
  reviews: ApiReview[];
};

/** Mirrors CategoryDto. */
export type ApiCategory = {
  name: string;
  productCount: number;
};

/** Thrown for any non-2xx response, carrying the status for callers to branch on. */
export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly path: string,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function apiGet<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { Accept: "application/json" },
    signal,
  });

  if (!response.ok) {
    // ApiExceptionHandler returns { timestamp, error }; fall back to the status
    // text for anything it doesn't handle (proxy errors, 500s, HTML pages).
    let message = response.statusText;
    try {
      const body = (await response.json()) as { error?: string };
      if (body?.error) message = body.error;
    } catch {
      // Non-JSON body — keep the status text.
    }
    throw new ApiError(response.status, path, message);
  }

  return (await response.json()) as T;
}

function buildQuery(params: Record<string, string | undefined>): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") search.set(key, value);
  }
  const query = search.toString();
  return query ? `?${query}` : "";
}

/** GET /api/products — optionally filtered by category and sorted. */
export function fetchProducts(
  options: { category?: string; sort?: ProductSort; signal?: AbortSignal } = {},
): Promise<ApiProductSummary[]> {
  const { category, sort, signal } = options;
  return apiGet<ApiProductSummary[]>(`/api/products${buildQuery({ category, sort })}`, signal);
}

/** GET /api/products/{slug} — throws ApiError with status 404 when unknown. */
export function fetchProduct(slug: string, signal?: AbortSignal): Promise<ApiProductDetail> {
  return apiGet<ApiProductDetail>(`/api/products/${encodeURIComponent(slug)}`, signal);
}

/** GET /api/categories */
export function fetchCategories(signal?: AbortSignal): Promise<ApiCategory[]> {
  return apiGet<ApiCategory[]>("/api/categories", signal);
}
