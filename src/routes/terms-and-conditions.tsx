import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Reality Bee Limited" },
      { name: "description", content: "The terms and conditions for using the Reality Bee Limited website and purchasing our print, brand and fabric services." },
      { property: "og:title", content: "Terms & Conditions — Reality Bee Limited" },
      { property: "og:description", content: "Terms of use, orders, payment, delivery and liability for Reality Bee Limited customers." },
    ],
    links: [{ rel: "canonical", href: "/terms-and-conditions" }],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Policies</p>
      <h1 className="mt-3 font-display text-4xl">Terms &amp; conditions</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: July 2026</p>
      <p className="mt-4 text-muted-foreground">
        These terms and conditions govern your use of the Reality Bee Limited
        website at <a href="https://www.realitybeeltd.com.ng" className="underline hover:text-accent">www.realitybeeltd.com.ng</a>{" "}
        and any orders you place with us. By using our site or placing an order,
        you agree to these terms. If you do not agree, please do not use our
        website or services.
      </p>

      <h2 className="mt-10 font-display text-2xl">About us</h2>
      <p className="mt-3 text-muted-foreground">
        Reality Bee Limited is a print, brand and fabric studio registered in
        Nigeria, operating from 5 Ikosi Road, Oregun, Ikeja, Lagos, Nigeria. You
        can contact us by email at{" "}
        <a href="mailto:realitybeeltd@gmail.com" className="underline hover:text-accent">realitybeeltd@gmail.com</a>{" "}
        or by phone at <a href="tel:+2349125937437" className="underline hover:text-accent">+234 912 593 7437</a>.
      </p>

      <h2 className="mt-10 font-display text-2xl">Use of our website</h2>
      <p className="mt-3 text-muted-foreground">
        You may use our website only for lawful purposes and in a way that does
        not infringe the rights of others or restrict their use of the site. You
        must not misuse our site by introducing viruses, attempting to gain
        unauthorised access, or interfering with its operation.
      </p>
      <p className="mt-3 text-muted-foreground">
        Product images, descriptions and prices are provided as accurately as
        possible. Minor variations in colour or finish may occur due to screen
        settings or production processes, and we reserve the right to correct any
        errors or update information at any time.
      </p>

      <h2 className="mt-10 font-display text-2xl">Orders and quotes</h2>
      <p className="mt-3 text-muted-foreground">
        An order is placed when you complete the checkout process and receive an
        order confirmation. For corporate, bulk or bespoke items, we may issue a
        written quotation which, once accepted, forms part of these terms.
      </p>
      <p className="mt-3 text-muted-foreground">
        We reserve the right to refuse or cancel an order for any reason,
        including unavailability, errors in pricing or description, or suspected
        fraud. If we cancel an order after payment, we will refund any amount
        charged.
      </p>

      <h2 className="mt-10 font-display text-2xl">Artwork, files and approvals</h2>
      <p className="mt-3 text-muted-foreground">
        You are responsible for ensuring that any artwork, logo, text or file
        you supply is accurate, complete and that you have the right to use it.
        Once you approve a design proof or mock-up, we are not responsible for
        errors that were visible in the approved version.
      </p>
      <p className="mt-3 text-muted-foreground">
        We may use approved project images in our portfolio or marketing unless
        you request otherwise in writing before production begins.
      </p>

      <h2 className="mt-10 font-display text-2xl">Pricing and payment</h2>
      <p className="mt-3 text-muted-foreground">
        Prices shown on the website are in Nigerian Naira (NGN) unless otherwise
        stated and do not include shipping or delivery charges, which are
        calculated at checkout. Bulk and corporate orders may require a deposit
        or full payment before production begins.
      </p>
      <p className="mt-3 text-muted-foreground">
        Payments are processed through secure third-party payment providers. We do
        not store full card details on our servers.
      </p>

      <h2 className="mt-10 font-display text-2xl">Production and delivery</h2>
      <p className="mt-3 text-muted-foreground">
        Most items are made-to-order. Production and delivery times are estimates
        and begin after payment (and artwork approval, where applicable). We are
        not liable for delays caused by events outside our reasonable control,
        such as courier delays, customs, weather or supplier shortages.
      </p>
      <p className="mt-3 text-muted-foreground">
        Risk in the goods passes to you on delivery. Please inspect your order on
        receipt and report any damage or shortage within 7 days.
      </p>

      <h2 className="mt-10 font-display text-2xl">Cancellations and returns</h2>
      <p className="mt-3 text-muted-foreground">
        Because most items are produced individually, cancellations are only
        accepted before production begins. Please see our{" "}
        <a href="/refund-policy" className="underline hover:text-accent">Refund &amp; Cancellations Policy</a>{" "}
        for full details on returns, replacements and refunds.
      </p>

      <h2 className="mt-10 font-display text-2xl">Intellectual property</h2>
      <p className="mt-3 text-muted-foreground">
        All content on this website, including designs, images, text and logos,
        is owned by or licensed to Reality Bee Limited and is protected by
        copyright and other intellectual property laws. You may not reproduce,
        distribute or use our content for commercial purposes without our written
        permission.
      </p>
      <p className="mt-3 text-muted-foreground">
        We respect the intellectual property rights of others. If you believe any
        content on our site infringes your rights, please contact us.
      </p>

      <h2 className="mt-10 font-display text-2xl">Limitation of liability</h2>
      <p className="mt-3 text-muted-foreground">
        We provide our products and services with reasonable care and skill. Our
        liability is limited to the purchase price of the item or service in
        question. We are not liable for any indirect, consequential or loss of
        profit damages arising from the use of our website or products.
      </p>

      <h2 className="mt-10 font-display text-2xl">Privacy and data protection</h2>
      <p className="mt-3 text-muted-foreground">
        We collect and use personal data in accordance with our{" "}
        <a href="/privacy-policy" className="underline hover:text-accent">Data Protection &amp; Privacy</a>{" "}
        policy and applicable data protection laws.
      </p>

      <h2 className="mt-10 font-display text-2xl">Changes to these terms</h2>
      <p className="mt-3 text-muted-foreground">
        We may update these terms from time to time. The current version will
        always be available on this page with the "last updated" date above.
        Continued use of the website after changes means you accept the updated
        terms.
      </p>

      <h2 className="mt-10 font-display text-2xl">Governing law</h2>
      <p className="mt-3 text-muted-foreground">
        These terms are governed by the laws of the Federal Republic of Nigeria.
        Any dispute arising from these terms or your use of our services will be
        subject to the exclusive jurisdiction of the Nigerian courts.
      </p>

      <h2 className="mt-10 font-display text-2xl">Contact us</h2>
      <p className="mt-3 text-muted-foreground">
        If you have any questions about these terms, please contact us at{" "}
        <a href="mailto:realitybeeltd@gmail.com" className="underline hover:text-accent">realitybeeltd@gmail.com</a>{" "}
        or <a href="tel:+2349125937437" className="underline hover:text-accent">+234 912 593 7437</a>.
      </p>
    </div>
  );
}
