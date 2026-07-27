import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer, Shirt, Gift, Palette, Factory, Truck, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import embroideredCaps from "@/assets/embroidered-caps.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reality Bee Limited — Printing, Branding & Fabric in Lagos" },
      {
        name: "description",
        content:
          "Reality Bee Limited is a Lagos-based printing, corporate branding and fabric printing company serving businesses, brands and creatives across Nigeria and beyond.",
      },
      { property: "og:title", content: "Reality Bee Limited — Printing, Branding & Fabric in Lagos" },
      {
        property: "og:description",
        content:
          "Printing, corporate branding, branded gifts and premium African fabric printing — proudly made in Lagos.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const gallery = [
  { src: "https://hafexcreation.com/assets/images/shop/popular-products/custom-polo-tshirt-print-and-design-in-lagos-nigeria.jpg", alt: "Branded polo shirts" },
  { src: "https://hafexcreation.com/assets/images/shop/popular-products/Premuim-business-card-print-and-design.jpg", alt: "Premium business cards" },
  { src: "https://hafexcreation.com/assets/images/shop/popular-products/top-quality-illuminated-3D-signage.jpg", alt: "Illuminated 3D signage" },
  { src: products[1].image, alt: products[1].title },
];

const values = [
  { icon: Palette, title: "Craft first", text: "We treat every job — one card or ten thousand — as a piece of craft to be finished properly." },
  { icon: ShieldCheck, title: "Quality guaranteed", text: "Every product is inspected before it leaves the studio. If it isn't right, we make it right." },
  { icon: Truck, title: "Reliable delivery", text: "Clear timelines and tracked shipping across Nigeria and internationally through DHL, UPS and GIG." },
  { icon: Users, title: "Partners, not vendors", text: "We work closely with SMEs, agencies and enterprise brands to keep their identity consistent and beautiful." },
];

const services = [
  { icon: Printer, title: "Corporate Branding & Print", href: "/corporate-branding", text: "Business cards, brochures, signage, banners, ID cards and full brand rollouts." },
  { icon: Factory, title: "African Fabric Printing", href: "/fabric-printing", text: "Custom sublimation, polyester, satin, chiffon and Ankara-inspired digital prints — from 20 metres." },
  { icon: Gift, title: "Branded Gifts & Merchandise", href: "/branded-gifts", text: "Corporate gifts, event giveaways and staff kits from 100 pieces upward." },
  { icon: Shirt, title: "Uniforms & Apparel", href: "/branded-gifts", text: "Polos, hoodies, aprons, caps and safety wear printed or embroidered with your brand." },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Reality Bee Limited · Lagos, Nigeria
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              A Lagos studio for{" "}
              <span className="italic text-primary">print</span>, brand and
              fabric.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              We partner with startups, boutiques, fashion designers, hotels,
              banks and event planners — anyone who cares about how their brand
              looks on paper, on fabric and in the room.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/corporate-branding"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110"
              >
                Get a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary"
              >
                More about us
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span>
                <strong className="text-foreground">1000+</strong> brands served
              </span>
              <span>
                <strong className="text-foreground">15+</strong> in-house services
              </span>
              <span>
                <strong className="text-foreground">4.9 ★</strong> client rating
              </span>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={embroideredCaps.url}
                alt="3D logo embroidered caps"
                className="aspect-[4/5] w-full rounded-sm object-cover shadow-lg"
              />
              <img
                src={products[4].image}
                alt={products[4].title}
                className="mt-10 aspect-[4/5] w-full rounded-sm object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro / About */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">About Reality Bee Limited</p>
        <h2 className="mt-3 font-display text-4xl leading-tight">
          Proudly made in Lagos, delivered across Nigeria and beyond.
        </h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              Reality Bee Limited is a Nigerian printing and branding company
              based in Ikeja, Lagos. We partner with startups, boutiques, fashion
              designers, hotels, banks, oil &amp; gas firms and event planners —
              anyone who cares about how their brand looks on paper, on fabric and
              in the room.
            </p>
            <p>
              From a single business card to a 500-metre fabric run, every job
              passes through the same production and QC process. Our studio
              combines digital sublimation, DTF and screen printing with
              embroidery, signage fabrication and finishing — so most jobs never
              have to leave the building.
            </p>
            <p>
              That means faster turnaround, tighter colour control and a single
              point of accountability from artwork to delivery.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Read more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {gallery.map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="aspect-square w-full rounded-md border border-border/60 object-cover"
              />
            ))}
          </div>
        </div>

        <dl className="mt-16 grid gap-6 rounded-md border border-border bg-card p-8 sm:grid-cols-3">
          <Stat value="1000+" label="Brands served" />
          <Stat value="15+" label="In-house services" />
          <Stat value="4.9 ★" label="Client rating" />
        </dl>
      </section>

      {/* Services */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="font-display text-3xl">What we do</h2>
          <p className="mt-2 text-sm text-secondary-foreground/80">Four pillars, all delivered under one roof.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.href}
                className="group flex items-start gap-4 rounded-md border border-secondary-foreground/20 bg-secondary p-5 transition hover:border-accent"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                  <s.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold group-hover:text-accent">{s.title}</p>
                  <p className="mt-1 text-sm text-secondary-foreground/80">{s.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl">How we work</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-md border border-border bg-card p-5">
              <v.icon className="h-6 w-6 text-primary" />
              <p className="mt-3 font-semibold">{v.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-md border border-border bg-secondary p-8 text-secondary-foreground sm:p-12">
          <div className="grid gap-6 sm:grid-cols-[2fr_1fr] sm:items-center">
            <div>
              <h2 className="font-display text-3xl">Let's build your next project.</h2>
              <p className="mt-2 text-sm text-secondary-foreground/80">
                Get a quote for corporate branding, fabric printing or a branded
                gift run — we usually reply within a few hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:justify-end">
              <Link to="/corporate-branding" className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:opacity-90">
                Get a quote
              </Link>
              <Link to="/reviews" className="inline-flex items-center rounded-full border border-secondary-foreground/30 px-5 py-2.5 text-sm font-semibold hover:border-accent hover:text-accent">
                Read reviews
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl text-primary">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </p>
    </div>
  );
}
