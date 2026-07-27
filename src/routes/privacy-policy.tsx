import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Data Protection & Privacy — Reality Bee Limited" },
      { name: "description", content: "How Reality Bee Limited collects, uses, stores and protects your personal data, in line with the Nigeria Data Protection Act (NDPA) 2023." },
      { property: "og:title", content: "Data Protection & Privacy — Reality Bee Limited" },
      { property: "og:description", content: "Our commitments on the personal data we collect and how it is used and protected." },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Policies</p>
      <h1 className="mt-3 font-display text-4xl">Data Protection &amp; Privacy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: July 2026</p>
      <p className="mt-4 text-muted-foreground">
        This policy explains how <strong>Reality Bee Limited</strong> ("we", "us", "our")
        collects, uses and protects personal information when you use our
        website <a href="https://www.realitybeeltd.com.ng" className="underline hover:text-accent">www.realitybeeltd.com.ng</a>{" "}
        or engage our services. We process personal data in line with the
        Nigeria Data Protection Act (NDPA) 2023 and, where applicable, the EU
        and UK General Data Protection Regulation (GDPR).
      </p>

      <h2 className="mt-10 font-display text-2xl">Who we are</h2>
      <p className="mt-3 text-muted-foreground">
        Reality Bee Limited is the data controller for personal data collected
        through this website and our order channels. You can reach us at{" "}
        <a href="mailto:realitybeeltd@gmail.com" className="underline hover:text-accent">realitybeeltd@gmail.com</a>{" "}
        or at 5 Ikosi Road, Oregun, Ikeja, Lagos, Nigeria.
      </p>

      <h2 className="mt-10 font-display text-2xl">Information we collect</h2>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
        <li><strong>Contact details</strong> — name, email address, phone number, delivery address.</li>
        <li><strong>Order information</strong> — items ordered, sizes, artwork or files you upload, order value and history.</li>
        <li><strong>Payment details</strong> — processed directly by our payment providers; we do not store full card details on our servers.</li>
        <li><strong>Correspondence</strong> — messages you send us by email, phone, WhatsApp or contact form.</li>
        <li><strong>Technical data</strong> — IP address, browser type, device information and pages visited, collected through cookies and similar technologies.</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl">How we use your information</h2>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
        <li>To process, produce and deliver your order.</li>
        <li>To communicate with you about quotes, orders, artwork proofs and support.</li>
        <li>To issue invoices and keep accounting records as required by law.</li>
        <li>To improve our website, products and customer experience.</li>
        <li>To send you occasional updates or offers — only where you have opted in, and you can unsubscribe at any time.</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl">Legal basis for processing</h2>
      <p className="mt-3 text-muted-foreground">
        We rely on the following lawful bases: performance of a contract (to
        deliver your order), legal obligation (tax and accounting), legitimate
        interest (to run and improve our business securely) and consent (for
        marketing communications and non-essential cookies).
      </p>

      <h2 className="mt-10 font-display text-2xl">Sharing your information</h2>
      <p className="mt-3 text-muted-foreground">
        We do not sell your personal data. We share it only with trusted
        service providers who help us run our business, including:
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
        <li>Payment processors to take secure payments.</li>
        <li>Courier and logistics partners (e.g. GIG, DHL) to deliver your order.</li>
        <li>Hosting, email and analytics providers that support our website.</li>
        <li>Regulators, tax authorities or law enforcement where required by law.</li>
      </ul>
      <p className="mt-3 text-muted-foreground">
        Where these providers are outside Nigeria, we take reasonable steps to
        ensure your data is protected to an equivalent standard.
      </p>

      <h2 className="mt-10 font-display text-2xl">How long we keep your data</h2>
      <p className="mt-3 text-muted-foreground">
        We retain personal data only as long as necessary to fulfil the
        purposes for which it was collected and to comply with legal, tax and
        accounting requirements (typically up to 7 years for financial
        records). Marketing data is retained until you unsubscribe.
      </p>

      <h2 className="mt-10 font-display text-2xl">How we protect your data</h2>
      <p className="mt-3 text-muted-foreground">
        We use industry-standard measures — encrypted connections (HTTPS),
        access controls, and vetted service providers — to protect your
        information. No online service can be guaranteed 100% secure, but we
        continuously work to safeguard your data.
      </p>

      <h2 className="mt-10 font-display text-2xl">Your rights</h2>
      <p className="mt-3 text-muted-foreground">Under the NDPA and GDPR you have the right to:</p>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
        <li>Access the personal data we hold about you.</li>
        <li>Request correction of inaccurate or incomplete data.</li>
        <li>Request deletion of your data where there is no legal reason to keep it.</li>
        <li>Object to or restrict certain processing.</li>
        <li>Withdraw consent to marketing at any time.</li>
        <li>Lodge a complaint with the Nigeria Data Protection Commission (NDPC).</li>
      </ul>
      <p className="mt-3 text-muted-foreground">
        To exercise any of these rights, email us at{" "}
        <a href="mailto:realitybeeltd@gmail.com" className="underline hover:text-accent">realitybeeltd@gmail.com</a>.
      </p>

      <h2 className="mt-10 font-display text-2xl">Cookies</h2>
      <p className="mt-3 text-muted-foreground">
        Our website uses essential cookies to keep the site working (for
        example, remembering the contents of your cart) and may use analytics
        cookies to help us understand how the site is used. You can control
        cookies through your browser settings.
      </p>

      <h2 className="mt-10 font-display text-2xl">Changes to this policy</h2>
      <p className="mt-3 text-muted-foreground">
        We may update this policy from time to time. The current version will
        always be available on this page with the "last updated" date above.
      </p>

      <h2 className="mt-10 font-display text-2xl">Contact</h2>
      <p className="mt-3 text-muted-foreground">
        Questions about your data or this policy? Contact us at{" "}
        <a href="mailto:realitybeeltd@gmail.com" className="underline hover:text-accent">realitybeeltd@gmail.com</a>{" "}
        or <a href="tel:+2349125937437" className="underline hover:text-accent">+234 912 593 7437</a>.
      </p>
    </div>
  );
}
