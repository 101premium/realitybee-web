import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/made-to-order")({
  head: () => ({
    meta: [
      { title: "Made-to-Order Policy — SolunaSoul" },
      { name: "description", content: "How our made-to-order printing works, production times, returns and cancellations." },
      { property: "og:title", content: "Made-to-Order Policy — SolunaSoul" },
      { property: "og:description", content: "Each print is produced on demand — here's what that means for your order." },
    ],
  }),
  component: MadeToOrderPage,
});

function MadeToOrderPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Help</p>
      <h1 className="mt-3 font-display text-4xl">Made-to-order policy</h1>
      <p className="mt-4 text-muted-foreground">
        Every SolunaSoul print is produced individually when you order — we
        don't hold stock. This lets us offer a wider collection, keep waste
        to a minimum, and guarantee every print leaves the studio in perfect
        condition.
      </p>

      <h2 className="mt-10 font-display text-2xl">Production time</h2>
      <p className="mt-3 text-muted-foreground">
        Please allow 2–4 business days for your print to be produced,
        quality-checked and carefully packaged before it ships. Delivery
        time is added on top of production time — see our{" "}
        <a href="/shipping" className="underline hover:text-accent">shipping page</a>{" "}
        for details.
      </p>

      <h2 className="mt-10 font-display text-2xl">Changes &amp; cancellations</h2>
      <p className="mt-3 text-muted-foreground">
        Because production begins soon after you order, please contact us
        within 12 hours if you need to change the size, cancel, or update
        your shipping address. After production has started we may not be
        able to make changes.
      </p>

      <h2 className="mt-10 font-display text-2xl">Returns</h2>
      <p className="mt-3 text-muted-foreground">
        As each print is produced specifically for you, we do not accept
        returns for change of mind. If your order arrives damaged, faulty,
        or incorrect, please email us within 14 days of delivery with a
        photo and your order number — we'll replace it or refund you in
        full.
      </p>

      <h2 className="mt-10 font-display text-2xl">Quality guarantee</h2>
      <p className="mt-3 text-muted-foreground">
        Every print is inspected before dispatch. If anything falls short of
        gallery quality, we'll put it right — no questions asked.
      </p>
    </div>
  );
}