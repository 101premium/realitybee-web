import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Shipping & Delivery Policy — Reality Bee Limited" },
      { name: "description", content: "Production timelines, shipping options, delivery times, tracking, and customs for Reality Bee Limited orders within Nigeria and worldwide." },
      { property: "og:title", content: "Shipping & Delivery Policy — Reality Bee Limited" },
      { property: "og:description", content: "How and when your Reality Bee order is produced, dispatched and delivered." },
    ],
    links: [{ rel: "canonical", href: "/shipping" }],
  }),
  component: ShippingPage,
});

function ShippingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Policies</p>
      <h1 className="mt-3 font-display text-4xl">Shipping &amp; Delivery Policy</h1>
      <p className="mt-4 text-muted-foreground">
        Every Reality Bee order is made-to-order and dispatched with tracked
        shipping from our studio in Lagos, Nigeria. Total delivery time is{" "}
        <strong>production time + shipping time</strong>, and both are confirmed on
        your invoice or order acknowledgement.
      </p>

      <h2 className="mt-10 font-display text-2xl">Production time</h2>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
        <li>Art prints &amp; print designs — 2–4 business days</li>
        <li>Fabric printing — 3–7 business days depending on metreage</li>
        <li>Branded gifts &amp; corporate items — 5–10 business days after artwork approval</li>
        <li>Large corporate / bulk jobs — timeline confirmed in your quotation</li>
      </ul>
      <p className="mt-3 text-muted-foreground">
        Express production is available for many items at an additional charge —
        contact us before ordering to confirm feasibility.
      </p>

      <h2 className="mt-10 font-display text-2xl">Delivery within Nigeria</h2>
      <div className="mt-4 space-y-4 text-sm">
        <div className="rounded-lg border border-border/60 p-5">
          <p className="font-semibold">Lagos</p>
          <p className="mt-1 text-muted-foreground">1–2 business days after dispatch · door-to-door courier</p>
        </div>
        <div className="rounded-lg border border-border/60 p-5">
          <p className="font-semibold">Other states</p>
          <p className="mt-1 text-muted-foreground">2–5 business days after dispatch · GIG, DHL Nigeria or comparable courier</p>
        </div>
        <div className="rounded-lg border border-border/60 p-5">
          <p className="font-semibold">Pickup</p>
          <p className="mt-1 text-muted-foreground">Free collection from 5 Ikosi Road, Oregun, Ikeja, Lagos by prior arrangement</p>
        </div>
      </div>

      <h2 className="mt-10 font-display text-2xl">International delivery</h2>
      <div className="mt-4 space-y-4 text-sm">
        <div className="rounded-lg border border-border/60 p-5">
          <p className="font-semibold">Standard — UK / US / EU</p>
          <p className="mt-1 text-muted-foreground">7–14 business days · tracked · cheaper option</p>
        </div>
        <div className="rounded-lg border border-border/60 p-5">
          <p className="font-semibold">Express — UK / US / EU</p>
          <p className="mt-1 text-muted-foreground">3–5 business days · DHL or UPS · premium priority service</p>
        </div>
        <div className="rounded-lg border border-border/60 p-5">
          <p className="font-semibold">Rest of world</p>
          <p className="mt-1 text-muted-foreground">10–21 business days · tracked · rates calculated at checkout</p>
        </div>
      </div>

      <h2 className="mt-10 font-display text-2xl">Shipping charges</h2>
      <p className="mt-3 text-muted-foreground">
        Shipping is calculated at checkout based on destination, weight and
        courier selected. Bulk and corporate deliveries are quoted separately.
      </p>

      <h2 className="mt-10 font-display text-2xl">Tracking</h2>
      <p className="mt-3 text-muted-foreground">
        A tracking number is emailed to you as soon as your order leaves our
        studio. If you have not received tracking within 48 hours of the expected
        dispatch date, please contact us.
      </p>

      <h2 className="mt-10 font-display text-2xl">Customs, duties &amp; taxes</h2>
      <p className="mt-3 text-muted-foreground">
        International orders may attract import duties or VAT set by the
        destination country. These charges are the responsibility of the
        recipient and are not included in the item price or shipping cost.
      </p>

      <h2 className="mt-10 font-display text-2xl">Packaging</h2>
      <p className="mt-3 text-muted-foreground">
        Prints ship flat in rigid board mailers or rolled in sturdy tubes
        depending on size, protected in acid-free tissue to arrive in
        gallery-ready condition. Fabric, gifts and corporate items are packed
        securely to prevent damage in transit.
      </p>

      <h2 className="mt-10 font-display text-2xl">Failed or delayed delivery</h2>
      <p className="mt-3 text-muted-foreground">
        Please make sure the delivery address and phone number provided are
        correct — we cannot be responsible for parcels returned or lost due to
        incorrect address details or the recipient being unreachable. Where a
        courier delay is caused by weather, customs, strike action or other
        events outside our control, we will keep you updated but such delays do
        not qualify for a refund of shipping charges.
      </p>

      <h2 className="mt-10 font-display text-2xl">Contact</h2>
      <p className="mt-3 text-muted-foreground">
        Delivery questions? Reach us at{" "}
        <a href="mailto:realitybeeltd@gmail.com" className="underline hover:text-accent">realitybeeltd@gmail.com</a>{" "}
        or <a href="tel:+2349125937437" className="underline hover:text-accent">+234 912 593 7437</a>.
      </p>
    </div>
  );
}
