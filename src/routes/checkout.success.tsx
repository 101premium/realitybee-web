import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/checkout/success")({
  validateSearch: z.object({
    reference: z.string().optional(),
    paymentReference: z.string().optional(),
  }),
  head: () => ({
    meta: [{ title: "Order confirmed — SolunaSoul" }, { name: "robots", content: "noindex" }],
  }),
  component: Success,
});

function Success() {
  const { reference, paymentReference } = Route.useSearch();

  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <CheckCircle2 className="mx-auto h-16 w-16 text-primary" />
      <h1 className="mt-6 font-display text-4xl">Thank you!</h1>
      <p className="mt-3 text-muted-foreground">
        Your payment was successful and your order has been placed. A confirmation will be sent to
        your email.
      </p>

      {(reference || paymentReference) && (
        <dl className="mx-auto mt-8 max-w-sm space-y-2 rounded-md border border-border bg-card p-4 text-left text-sm">
          {reference && (
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Reference</dt>
              <dd className="font-mono">{reference}</dd>
            </div>
          )}
          {paymentReference && (
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Payment reference</dt>
              <dd className="font-mono">{paymentReference}</dd>
            </div>
          )}
        </dl>
      )}

      <Link
        to="/shop"
        className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
      >
        Continue shopping
      </Link>
    </div>
  );
}
