import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode, type InputHTMLAttributes } from "react";
import { useCart, cartTotal, money } from "@/lib/cart";

export const Route = createFileRoute("/checkout/")({
  head: () => ({
    meta: [
      { title: "Checkout — SolunaSoul" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const items = useCart((s) => s.items);
  const clear = useCart((s) => s.clear);
  const total = cartTotal(items);
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setSubmitting(true);
    setTimeout(() => {
      clear();
      navigate({ to: "/checkout/success" });
    }, 700);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl">Checkout</h1>

      <form onSubmit={onSubmit} className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <Fieldset title="Contact">
            <Field label="Email" type="email" name="email" required />
          </Fieldset>
          <Fieldset title="Delivery">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" name="first" required />
              <Field label="Last name" name="last" required />
            </div>
            <Field label="Address" name="address" required />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="City" name="city" required />
              <Field label="Postcode" name="postcode" required />
            </div>
            <Field label="Country" name="country" defaultValue="Nigeria" required />
          </Fieldset>
        </div>

        <aside className="h-fit rounded-md border border-border bg-card p-6">
          <h2 className="font-display text-xl">Order summary</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((i) => (
              <li key={i.id} className="flex gap-3">
                <img src={i.image} alt="" className="h-14 w-12 rounded-sm object-cover" />
                <div className="flex-1">
                  <p className="line-clamp-2 font-medium">{i.title}</p>
                  <p className="text-xs text-muted-foreground">Qty {i.qty}</p>
                </div>
                <p className="font-medium">{money(i.price * i.qty)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex justify-between border-t border-border pt-4 text-base font-semibold">
            <span>Total</span>
            <span>{money(total)}</span>
          </div>
          <button
            type="submit"
            disabled={submitting || items.length === 0}
            className="mt-6 block w-full rounded-md bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-50"
          >
            {submitting ? "Placing order…" : `Place order · ${money(total)}`}
          </button>
        </aside>
      </form>
    </div>
  );
}

function Fieldset({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <input
        {...props}
        className="mt-1.5 block w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
      />
    </label>
  );
}