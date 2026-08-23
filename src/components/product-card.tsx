import { Link } from "@tanstack/react-router";
import type { ApiProductSummary } from "@/lib/api";
import { parsePrice } from "@/lib/api";
import { money } from "@/lib/cart";

export function ProductCard({ product }: { product: ApiProductSummary }) {
  const salePrice = Math.round(parsePrice(product.priceUsd));

  return (
    <Link
      to="/shop/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-sm bg-muted">
        <img
          src={product.imageUrl}
          alt={product.title}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {product.category}
        </p>
        <h3 className="line-clamp-2 text-sm font-medium leading-snug text-foreground group-hover:text-primary">
          {product.title}
        </h3>
        <p className="flex items-baseline gap-2 pt-1 text-sm">
          <span className="font-semibold text-foreground">{money(salePrice)}</span>
        </p>
      </div>
    </Link>
  );
}
