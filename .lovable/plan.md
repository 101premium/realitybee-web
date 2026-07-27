# SolunaSoul E-commerce (Static Catalog + Demo Cart)

A browsable storefront using real SolunaSoul products, images, and reviews scraped from Etsy. Cart and checkout are demo-only (localStorage), no payments, no backend.

## 1. Data collection (Firecrawl)

- Connect the Firecrawl connector.
- Scrape the 5 shop pages to get product tiles: title, price, image, listing URL, star rating.
- Scrape ~15–25 individual listing pages to enrich each with: full description, image gallery, options/variants (as read-only info), and a few reviews.
- Sample the shop-level review page for standout testimonials.
- Store the result as a single typed file: `src/data/products.ts` (Product[] + Review[]). No runtime scraping — the site ships with the JSON baked in.

## 2. Design directions

Generate 3 rendered visual directions tailored to SolunaSoul (spiritual / handmade / mystical brand). You'll pick one; I'll build it.

## 3. Site to build

Routes (TanStack Start file routes under `src/routes/`):

- `/` — Home: hero, featured products, brand story, testimonial strip.
- `/shop` — Full catalog grid with category + price filters and sort.
- `/shop/$slug` — Product detail: gallery, description, price, "Add to cart", per-product reviews.
- `/cart` — Line items, quantity edit, remove, subtotal, "Checkout" button.
- `/checkout` — Mock form (name/email/address) → success page. No payment.
- `/checkout/success` — Order confirmation with mock order number.
- `/about` — Brand story pulled from Etsy shop bio.
- `/reviews` — Aggregated customer reviews wall.

Shared UI:
- Sticky header with logo, nav, cart badge.
- Footer with links + Etsy attribution.
- Cart state in a small Zustand store persisted to localStorage.
- Toast on add-to-cart (shadcn `sonner`).

## 4. Technical notes

- TanStack Start + TanStack Router, Tailwind v4, shadcn/ui already in the stack.
- Product data imported statically — no loaders needed beyond typed imports.
- Each route sets its own `head()` with real title/description; product pages set `og:image` to the product photo.
- No Lovable Cloud, no auth, no payment provider.
- Clear "Demo store — not affiliated with SolunaSoul; buy on Etsy" note in the footer to be transparent.

## Execution order once approved

1. Connect Firecrawl → scrape → write `src/data/products.ts`.
2. Call design--create_directions and ask you to pick one.
3. Implement the chosen direction across all routes.