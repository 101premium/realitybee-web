import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop all art prints — SolunaSoul" },
      {
        name: "description",
        content:
          "Browse the full SolunaSoul collection: Afrocentric portraits, cultural motifs, jazz posters, botanical and abstract fine art prints.",
      },
      { property: "og:title", content: "Shop all art prints — SolunaSoul" },
      {
        property: "og:description",
        content: "The full SolunaSoul collection of fine art prints.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState<"featured" | "priceAsc" | "priceDesc">("featured");

  const list = useMemo(() => {
    let l = cat === "All" ? products : products.filter((p) => p.category === cat);
    if (sort === "priceAsc") l = [...l].sort((a, b) => a.salePrice - b.salePrice);
    if (sort === "priceDesc") l = [...l].sort((a, b) => b.salePrice - a.salePrice);
    return l;
  }, [cat, sort]);

  const tabs = ["All", ...categories];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">SolunaSoul Collection</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl">Shop all prints</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          180 archival prints. Every piece is made-to-order and printed on 259gsm matte paper.
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 border-b border-border pb-4 md:flex-row md:items-center md:justify-between">
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
        <div className="flex items-center gap-3 text-sm">
          <label className="text-muted-foreground">Sort</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as "featured" | "priceAsc" | "priceDesc")}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-sm"
          >
            <option value="featured">Featured</option>
            <option value="priceAsc">Price: low to high</option>
            <option value="priceDesc">Price: high to low</option>
          </select>
        </div>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        Showing {list.length} of {products.length} prints
      </p>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-16 rounded-md border border-dashed border-border bg-muted/40 p-6 text-center text-sm text-muted-foreground">
        Looking for something specific? <Link to="/about" className="font-semibold text-primary hover:underline">Get in touch</Link>.
      </div>
    </div>
  );
}