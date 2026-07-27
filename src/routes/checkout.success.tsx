import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/checkout/success")({
  head: () => ({
    meta: [
      { title: "Order confirmed — SolunaSoul" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Success,
});

function Success() {
  const orderNo = "SS-" + Math.floor(100000 + Math.random() * 900000);
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
      <h1 className="mt-6 font-display text-4xl">Thank you!</h1>
      <p className="mt-3 text-muted-foreground">
        Your (demo) order <span className="font-semibold text-foreground">{orderNo}</span> has been placed. A confirmation would normally be sent to your email.
      </p>
      <Link
        to="/shop"
        className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
      >
        Continue shopping
      </Link>
    </div>
  );
}