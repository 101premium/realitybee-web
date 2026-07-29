// Where the bank returns the shopper after 3-D Secure authentication.
// The middleware's REDIRECT_URL must point at this path for the flow to close.
// If it is left pointing at the bare site root, the shopper lands on /$reference
// instead — that route renders the same page.
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PaymentCallbackResult } from "@/components/payment-callback-result";

export const Route = createFileRoute("/payment-callback/$reference")({
  validateSearch: z.object({
    adviceReference: z.string().optional(),
    paymentReference: z.string().optional(),
    status: z.string().optional(),
  }),
  head: () => ({
    meta: [{ title: "Confirming payment — Reality Bee" }, { name: "robots", content: "noindex" }],
  }),
  component: PaymentCallbackPage,
});

function PaymentCallbackPage() {
  const { reference } = Route.useParams();
  const search = Route.useSearch();

  return <PaymentCallbackResult reference={reference} {...search} />;
}
