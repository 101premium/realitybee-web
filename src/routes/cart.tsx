import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2 } from "lucide-react";
import { useCart, cartTotal, money } from "@/lib/cart";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your basket — SolunaSoul" },
      { name: "description", content: "Review the prints in your basket." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const items = useCart((s) => s.items);
  const remove = useCart((s) => s.remove);
  const setQty = useCart((s) => s.setQty);
  const total = cartTotal(items);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl">Your basket</h1>

      {items.length === 0 ? (
        <div className="mt-12 rounded-md border border-dashed border-border bg-muted/30 p-12 text-center">
          <p className="text-muted-foreground">Your basket is empty.</p>
          <Link
            to="/shop"
            className="mt-6 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            Browse the collection
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
          <ul className="divide-y divide-border">
            {items.map((i) => (
              <li key={i.id} className="flex gap-4 py-5">
                <Link to="/shop/$slug" params={{ slug: i.slug }}>
                  <img
                    src={i.image}
                    alt={i.title}
                    className="h-28 w-24 rounded-sm object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <Link
                    to="/shop/$slug"
                    params={{ slug: i.slug }}
                    className="text-sm font-medium hover:text-primary"
                  >
                    {i.title}
                  </Link>
                  <p className="mt-1 text-xs text-muted-foreground">A3 · Print Only</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center rounded-md border border-border">
                      <button
                        onClick={() => setQty(i.id, i.qty - 1)}
                        className="px-2.5 py-1 text-sm"
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{i.qty}</span>
                      <button
                        onClick={() => setQty(i.id, i.qty + 1)}
                        className="px-2.5 py-1 text-sm"
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => remove(i.id)}
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-3.5 w-3.5" /> Remove
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{money(i.price * i.qty)}</p>
                  <p className="text-xs text-muted-foreground">{money(i.price)} each</p>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-md border border-border bg-card p-6">
            <h2 className="font-display text-xl">Order summary</h2>
            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd className="font-medium">{money(total)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Shipping</dt>
                <dd className="font-medium text-primary">Free</dd>
              </div>
            </dl>
            <div className="mt-5 flex justify-between border-t border-border pt-4 text-base font-semibold">
              <span>Total</span>
              <span>{money(total)}</span>
            </div>
            <Link
              to="/checkout"
              className="mt-6 block rounded-md bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground hover:brightness-110"
            >
              Checkout
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}