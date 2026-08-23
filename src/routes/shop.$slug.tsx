import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Star, ArrowLeft, Truck, Package, Sparkles } from "lucide-react";
import { ApiError, fetchProduct, fetchProducts, parsePrice } from "@/lib/api";
import { useCart, money } from "@/lib/cart";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/shop/$slug")({
  loader: async ({ params }) => {
    const product = await fetchProduct(params.slug).catch((error) => {
      if (error instanceof ApiError && error.status === 404) throw notFound();
      throw error;
    });

    const related = (await fetchProducts({ category: product.category }))
      .filter((p) => p.slug !== product.slug)
      .slice(0, 4);

    return { product, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Print not found — SolunaSoul" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    return {
      meta: [
        { title: `${p.title} — SolunaSoul` },
        { name: "description", content: p.description.slice(0, 155) },
        { property: "og:title", content: `${p.title} — SolunaSoul` },
        { property: "og:description", content: p.description.slice(0, 155) },
        { property: "og:image", content: p.imageUrl },
        { name: "twitter:image", content: p.imageUrl },
      ],
    };
  },
  component: ProductPage,
});

const SIZES = ["A5", "A4", "A3", "A2", "A1"];

// Listed price is for A5. Each larger size is 10% more than the previous.
const SIZE_MULTIPLIER: Record<string, number> = {
  A5: 1,
  A4: 1.1,
  A3: 1.21,
  A2: 1.331,
  A1: 1.4641,
};

function ProductPage() {
  const { product, related } = Route.useLoaderData();
  const add = useCart((s) => s.add);
  const [size, setSize] = useState("A5");
  const [qty, setQty] = useState(1);

  const avgStars = product.reviews.length
    ? product.reviews.reduce((n, r) => n + (r.stars ?? 0), 0) / product.reviews.length
    : 5;

  const sizeMultiplier = SIZE_MULTIPLIER[size] ?? 1;
  // The catalogue's scraped Etsy prices carry odd cents (e.g. $140.11) — round to a
  // whole dollar before applying the size multiplier.
  const basePrice = Math.round(parsePrice(product.priceUsd));
  const unitPrice = basePrice * sizeMultiplier;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" /> Back to shop
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="overflow-hidden rounded-sm bg-muted">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full object-cover"
            />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Props shown are for display purposes only. Prints ship unframed.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {product.category}
          </p>
          <h1 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(avgStars) ? "fill-current" : ""}`}
                />
              ))}
            </div>
            <span>
              {avgStars.toFixed(1)} · {product.reviews.length || "Verified"} review{product.reviews.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-3xl text-foreground">{money(unitPrice)}</span>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {/* Size */}
          <div className="mt-8">
            <label className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Size
            </label>
            <div className="mt-3 flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-14 rounded-md border px-3 py-1.5 text-sm ${
                    size === s
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border hover:border-primary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty + Add to cart */}
          <div className="mt-8 flex items-stretch gap-3">
            <div className="flex items-center rounded-md border border-border">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-2 text-lg"
                aria-label="Decrease"
              >
                −
              </button>
              <span className="w-10 text-center text-sm font-semibold">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-2 text-lg"
                aria-label="Increase"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                add(
                  {
                    id: product.id,
                    slug: product.slug,
                    title: product.title,
                    image: product.imageUrl,
                    salePrice: unitPrice,
                  },
                  qty,
                );
                toast.success("Added to basket", {
                  description: `${product.title.slice(0, 60)}${product.title.length > 60 ? "…" : ""} · ${size} · Print only`,
                });
              }}
              className="flex-1 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:brightness-110"
            >
              Add to basket · {money(unitPrice * qty)}
            </button>
          </div>

          <div className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" /> Free Nigeria delivery · Arrives in 3–5 working days
            </p>
            <p className="flex items-center gap-2">
              <Package className="h-4 w-4 text-primary" /> Ships unframed in a protective tube
            </p>
            <p className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> Premium 259gsm matte, archival quality
            </p>
          </div>

          <div className="mt-6 rounded-md border border-border bg-muted/30 p-4 text-sm">
            <p className="font-semibold text-foreground">International shipping</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li className="flex justify-between gap-4">
                <span>Standard to UK / US / EU · 7–14 days</span>
                <span className="font-medium text-foreground">{money(15)}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Express to UK / US / EU · 3–5 days (DHL/UPS)</span>
                <span className="font-medium text-foreground">{money(45)}</span>
              </li>
            </ul>
            <p className="mt-2 text-xs text-muted-foreground">
              Rates shown per order. Duties &amp; taxes may apply on delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-20 border-t border-border pt-12">
        <h2 className="font-display text-3xl">Customer reviews</h2>
        {product.reviews.length === 0 ? (
          <p className="mt-4 text-muted-foreground">
            Be the first to review this print.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {product.reviews.map((r, i) => (
              <div key={i} className="rounded-md border border-border bg-card p-5">
                <div className="flex text-accent">
                  {Array.from({ length: r.stars ?? 0 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed">"{r.text}"</p>
                <p className="mt-4 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">{r.author}</span> · {r.date}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="font-display text-3xl">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
