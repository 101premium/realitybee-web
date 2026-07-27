import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode, type InputHTMLAttributes } from "react";
import { toast } from "sonner";
import { useCart, cartTotal, money, toNaira } from "@/lib/cart";
import { createOrder, submitOrderPayment } from "@/lib/order-api";

export const Route = createFileRoute("/checkout/")({
  head: () => ({
    meta: [{ title: "Checkout — SolunaSoul" }, { name: "robots", content: "noindex" }],
  }),
  component: CheckoutPage,
});

type Details = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  stateCode: string;
  postalCode: string;
};

function CheckoutPage() {
  const items = useCart((s) => s.items);
  const clear = useCart((s) => s.clear);
  const total = cartTotal(items);
  const navigate = useNavigate();

  const [step, setStep] = useState<"details" | "payment">("details");
  const [submitting, setSubmitting] = useState(false);
  const [details, setDetails] = useState<Details | null>(null);
  const [card, setCard] = useState({ number: "", expiry: "", cvv: "" });

  // The order API models one product per order, so a multi-line basket becomes
  // one order per line. Payment stays a single transaction for the basket total —
  // the gateway's payment payload carries no order id, so this reconciles the
  // same way a single-item order does in quantum-core.
  async function onDetailsSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (items.length === 0) return;

    const form = new FormData(e.currentTarget);
    const value = (name: string) => String(form.get(name) ?? "").trim();
    const next: Details = {
      email: value("email"),
      firstName: value("firstName"),
      lastName: value("lastName"),
      phone: value("phone"),
      address: value("address"),
      city: value("city"),
      stateCode: value("stateCode"),
      postalCode: value("postalCode"),
    };

    setSubmitting(true);
    try {
      for (const item of items) {
        await createOrder({
          data: {
            ...next,
            productName: item.title,
            price: String(toNaira(item.price)),
            quantity: String(item.qty),
            totalAmount: String(toNaira(item.price * item.qty)),
          },
        });
      }
      setDetails(next);
      setStep("payment");
      toast.success("Order created — enter your card details to pay.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not create your order.");
    } finally {
      setSubmitting(false);
    }
  }

  async function onPaymentSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!details) return;

    // Accept MM/YY or MM/YYYY.
    const [expiryMonth, shortYear] = card.expiry.split("/");
    const expiryYear = shortYear ? (shortYear.length === 2 ? `20${shortYear}` : shortYear) : "";
    if (!expiryMonth || !expiryYear) {
      toast.error("Enter the card expiry as MM/YY.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await submitOrderPayment({
        data: {
          ...details,
          totalAmount: String(toNaira(total)),
          cardNumber: card.number.replace(/\s+/g, ""),
          expiryMonth: expiryMonth.trim(),
          expiryYear: expiryYear.trim(),
          cvvCode: card.cvv.trim(),
        },
      });

      // 3-D Secure: the gateway returns a self-posting form that takes the
      // shopper to their bank. Submitting it navigates away from this page,
      // and the bank returns to /payment-callback/$reference.
      if (response.formString) {
        toast.info("Redirecting you to your bank to authorise the payment…");
        const holder = document.createElement("div");
        holder.style.display = "none";
        holder.innerHTML = response.formString;
        document.body.appendChild(holder);
        const bankForm = holder.querySelector("form");
        if (bankForm) {
          bankForm.submit();
          return;
        }
      }

      clear();
      navigate({
        to: "/checkout/success",
        search: {
          reference: response.reference,
          paymentReference: response.paymentReference,
        },
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Payment could not be completed.");
    } finally {
      setSubmitting(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-4xl">Checkout</h1>
        <p className="mt-4 text-muted-foreground">Your basket is empty.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-4xl">Checkout</h1>

      <form
        onSubmit={step === "details" ? onDetailsSubmit : onPaymentSubmit}
        className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]"
      >
        <div className="space-y-8">
          {step === "details" ? (
            <>
              <Fieldset title="Contact">
                <Field label="Email" type="email" name="email" required />
                <Field label="Phone" name="phone" required />
              </Fieldset>
              <Fieldset title="Delivery">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First name" name="firstName" required />
                  <Field label="Last name" name="lastName" required />
                </div>
                <Field label="Address" name="address" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="City" name="city" required />
                  <Field label="State" name="stateCode" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Postcode" name="postalCode" required />
                  <Field label="Country" name="country" defaultValue="Nigeria" readOnly />
                </div>
              </Fieldset>
            </>
          ) : (
            <Fieldset title="Payment">
              <p className="text-sm text-muted-foreground">
                Paying {money(total)} by card. Your card details are encrypted on our server before
                being sent to the payment provider.
              </p>
              <Field
                label="Card number"
                inputMode="numeric"
                autoComplete="cc-number"
                value={card.number}
                onChange={(e) => setCard((c) => ({ ...c, number: e.target.value }))}
                required
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Expiry (MM/YY)"
                  placeholder="09/29"
                  autoComplete="cc-exp"
                  value={card.expiry}
                  onChange={(e) => setCard((c) => ({ ...c, expiry: e.target.value }))}
                  required
                />
                <Field
                  label="CVV"
                  inputMode="numeric"
                  autoComplete="cc-csc"
                  value={card.cvv}
                  onChange={(e) => setCard((c) => ({ ...c, cvv: e.target.value }))}
                  required
                />
              </div>
              <button
                type="button"
                onClick={() => setStep("details")}
                className="text-sm text-muted-foreground underline hover:text-foreground"
              >
                Back to delivery details
              </button>
            </Fieldset>
          )}
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
            disabled={submitting}
            className="mt-6 block w-full rounded-md bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground hover:brightness-110 disabled:opacity-50"
          >
            {submitting
              ? step === "details"
                ? "Creating order…"
                : "Processing payment…"
              : step === "details"
                ? "Continue to payment"
                : `Pay ${money(total)}`}
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
