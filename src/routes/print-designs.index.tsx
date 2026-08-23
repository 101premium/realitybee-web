import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { printDesigns } from "@/data/print-designs";
import { fetchProducts, parsePrice } from "@/lib/api";
import { money } from "@/lib/cart";

export const Route = createFileRoute("/print-designs/")({
  // Only designs registered as products in the cart API (matched by slug) are
  // sellable — everything else is dropped rather than shown with a fake price.
  loader: async () => {
    const products = await fetchProducts();
    const priceBySlug = new Map(products.map((p) => [p.slug, Math.round(parsePrice(p.priceUsd))]));
    const available = printDesigns
      .filter((d) => priceBySlug.has(d.slug))
      .map((d) => ({ design: d, price: priceBySlug.get(d.slug)! }));
    return { available };
  },
  head: () => ({
    meta: [
      { title: "African Print Designs — Digital Fabric Prints | Reality Bee" },
      {
        name: "description",
        content:
          "Digital African print designs for fabric printing. Colour variation available on request. Contemporary & cultural collections.",
      },
      { property: "og:title", content: "African Print Designs — Digital Fabric Prints" },
      {
        property: "og:description",
        content:
          "Digital African fabric print designs. Contemporary and cultural collections for fabric printing.",
      },
    ],
  }),
  component: PrintDesignsIndex,
});

function PrintDesignsIndex() {
  const { available } = Route.useLoaderData();
  const [cat, setCat] = useState<"All" | "Contemporary" | "Cultural">("All");
  const list = useMemo(
    () => (cat === "All" ? available : available.filter((a) => a.design.category === cat)),
    [cat, available],
  );
  const tabs: Array<"All" | "Contemporary" | "Cultural"> = ["All", "Contemporary", "Cultural"];

  return (
    <div className="bg-background">
      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-background to-accent/15">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Reality Bee Studio
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            African <span className="text-primary">Print Designs</span>
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Original digital fabric prints, drawn from contemporary Afro-futurism and rich cultural
            heritage. Designed for fabric printing — rescale and colour variations available on
            request.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border border-border bg-card px-4 py-1.5 font-medium">
              For fabric printing
            </span>
            <span className="rounded-full border border-border bg-card px-4 py-1.5 font-medium">
              Colour variation available on request
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setCat(t)}
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition ${
                  cat === t
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Showing {list.length} of {available.length} designs
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {list.map(({ design: d, price }) => (
            <Link
              key={d.id}
              to="/print-designs/$slug"
              params={{ slug: d.slug }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-sm bg-muted">
                <img
                  src={d.url}
                  alt={d.name}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground">
                  {d.category}
                </span>
              </div>
              <div className="mt-3 space-y-0.5">
                <h3 className="text-sm font-medium leading-snug text-foreground group-hover:text-primary">
                  {d.name}
                </h3>
                <p className="text-sm font-semibold text-primary">{money(price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
