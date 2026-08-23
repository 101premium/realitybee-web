import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellations Policy — Reality Bee Limited" },
      { name: "description", content: "How refunds, cancellations, and replacements work for Reality Bee Limited orders — art prints, fabric printing, branded gifts and corporate items." },
      { property: "og:title", content: "Refund & Cancellations Policy — Reality Bee Limited" },
      { property: "og:description", content: "Our commitments on cancellations, replacements and refunds for made-to-order items." },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Policies</p>
      <h1 className="mt-3 font-display text-4xl">Refund &amp; Cancellations Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: July 2026</p>
      <p className="mt-4 text-muted-foreground">
        At Reality Bee Limited, most of what we produce — art prints, printed
        fabrics, branded gifts and corporate items — is made-to-order and
        personalised to your specification. This page explains when
        cancellations and refunds are possible, and how we put things right if
        something goes wrong.
      </p>

      <h2 className="mt-10 font-display text-2xl">Order cancellations</h2>
      <p className="mt-3 text-muted-foreground">
        You may cancel an order for a full refund within <strong>12 hours</strong> of
        placing it, provided production has not yet started. To cancel, email
        us at <a href="mailto:realitybee@gmail.com" className="underline hover:text-accent">realitybee@gmail.com</a> or
        call <a href="tel:+2349125937437" className="underline hover:text-accent">+234 912 593 7437</a> with
        your order number.
      </p>
      <p className="mt-3 text-muted-foreground">
        Once production, printing or personalisation has begun, the order
        cannot be cancelled and any deposit paid is non-refundable, as
        materials and studio time have already been committed to your job.
      </p>

      <h2 className="mt-10 font-display text-2xl">Change-of-mind returns</h2>
      <p className="mt-3 text-muted-foreground">
        Because every item is produced specifically for you, we do not accept
        returns or issue refunds for change of mind, incorrect size selection,
        or a change in colour preference after approval of the artwork or
        proof.
      </p>

      <h2 className="mt-10 font-display text-2xl">Damaged, faulty or incorrect items</h2>
      <p className="mt-3 text-muted-foreground">
        If your order arrives damaged, faulty, or materially different from
        what was agreed, please contact us within <strong>7 days of delivery</strong> with:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
        <li>Your order or invoice number</li>
        <li>Clear photos of the item and its packaging</li>
        <li>A short description of the issue</li>
      </ul>
      <p className="mt-3 text-muted-foreground">
        Once verified, we will at our discretion reprint or replace the item
        free of charge, or issue a full or partial refund. This does not
        cover damage caused by misuse, washing outside our care instructions,
        or normal wear.
      </p>

      <h2 className="mt-10 font-display text-2xl">Corporate &amp; bulk orders</h2>
      <p className="mt-3 text-muted-foreground">
        Corporate branding, uniforms, event fabrics and bulk gift orders are
        governed by the written quotation or contract issued for that job. A
        50% deposit is typically required to begin production and is
        non-refundable once artwork has been approved and materials ordered.
        Any variation must be agreed in writing before production continues.
      </p>

      <h2 className="mt-10 font-display text-2xl">Refund method &amp; timing</h2>
      <p className="mt-3 text-muted-foreground">
        Approved refunds are issued to the original payment method within
        <strong> 7–14 business days</strong>. Bank processing times may add a further
        few days depending on your bank or card issuer.
      </p>

      <h2 className="mt-10 font-display text-2xl">Contact</h2>
      <p className="mt-3 text-muted-foreground">
        Questions about a specific order? Reach us at{" "}
        <a href="mailto:realitybee@gmail.com" className="underline hover:text-accent">realitybee@gmail.com</a>{" "}
        or <a href="tel:+2349125937437" className="underline hover:text-accent">+234 912 593 7437</a>.
      </p>
    </div>
  );
}
