import { createFileRoute } from "@tanstack/react-router";
import {
  Palette,
  Award,
  Truck,
  Globe,
  Printer,
  ShieldCheck,
  Leaf,
  MapPin,
  Ruler,
  Package,
  Clock,
  Mail,
  Phone,
  Globe2,
  Download,
} from "lucide-react";
import flyerAsset from "@/assets/fabric-printing-flyer.png.asset.json";

export const Route = createFileRoute("/fabric-printing")({
  head: () => ({
    meta: [
      { title: "African Fabric Printing Services — Premium Fabric Printing in Nigeria" },
      {
        name: "description",
        content:
          "Premium African fabric printing by Reality Bee Limited. Sublimation, polyester, satin, chiffon, silk & Ankara inspired prints. Made in Africa, worn by the world.",
      },
      { property: "og:title", content: "African Fabric Printing Services" },
      {
        property: "og:description",
        content:
          "Vibrant colours, premium quality, fast delivery and global shipping. Full price list, design services and volume discounts.",
      },
      { property: "og:image", content: flyerAsset.url },
    ],
  }),
  component: FabricPrintingPage,
});

type Row = { label: string; unit?: string; retail: string; wholesale: string };

const priceList: Row[] = [
  {
    label: "Custom Sublimation Printing (Customer Fabric)",
    unit: "Per Metre",
    retail: "$5.00",
    wholesale: "$4.80",
  },
  {
    label: "Polyester Fabric + Printing (150gsm)",
    unit: "Per Metre",
    retail: "$8.50",
    wholesale: "$7.50",
  },
  {
    label: "Premium Polyester + Printing",
    unit: "Per Metre",
    retail: "$10.50",
    wholesale: "$9.2",
  },
  { label: "Satin Fabric Printing", unit: "Per Metre", retail: "$12,500", wholesale: "$11,000" },
  { label: "Chiffon Printing", unit: "Per Metre", retail: "$11,500", wholesale: "$10,000" },
  {
    label: "Silk Feel Polyester Printing",
    unit: "Per Metre",
    retail: "$13.50",
    wholesale: "$12.00",
  },
  { label: "Cotton Blend Printing", unit: "Per Metre", retail: "$12,000", wholesale: "$10,800" },
  {
    label: "Ankara Inspired Digital Prints",
    unit: "Per Metre",
    retail: "$9.50",
    wholesale: "$8.50",
  },
  { label: "Custom Scarf Printing", unit: "Each", retail: "$8,500", wholesale: "$7,000" },
  { label: "Head Wrap (Gele) Printing", unit: "Each", retail: "$9,500", wholesale: "$8,000" },
  { label: "Table Cloth Printing", unit: "Each", retail: "From $18,000", wholesale: "Quote" },
  { label: "Curtain Fabric Printing", unit: "Per Metre", retail: "$11,500", wholesale: "$10,000" },
  {
    label: "Upholstery Fabric Printing",
    unit: "Per Metre",
    retail: "$14.50",
    wholesale: "$13.00",
  },
];

const designServices = [
  ["Basic Artwork Adjustment", "$5.00"],
  ["Pattern Repeat Setup", "$8.00"],
  ["Custom African Print Design", "$35.00 – $150.00"],
  ["Logo Placement Design", "$15.00"],
  ["Colour Matching Service", "$10.00"],
];

const sampling = [
  ["A4 Fabric Sample", "$3.50"],
  ["0.5 Metre Sample", "$5.50"],
  ["1 Metre Trial Print", "Standard Rate"],
];

const packages = [
  ["Startup Designer Package (10m)", "$80.00"],
  ["Boutique Package (25m)", "$185.00"],
  ["Fashion Brand Package (50m)", "$350.00"],
  ["Commercial Production (100m+)", "Custom Quote"],
];

const corporate = [
  "Event Fabrics",
  "Uniform Fabrics",
  "Hotel Linen Printing",
  "Promotional Fabrics",
  "Exhibition Display Fabrics",
];

const volume = [
  ["20 – 49 metres", "5% OFF"],
  ["50 – 99 metres", "10% OFF"],
  ["100 – 249 metres", "15% OFF"],
  ["250 – 499 metres", "20% OFF"],
  ["500 metres+", "Custom Pricing"],
];

const addOns = [
  ["Express Printing (24 Hours)", "+30%"],
  ["Colour Proof", "$7.50"],
  ["Premium Packaging", "From $3.00"],
  ["Nationwide Delivery", "At Cost"],
  ["International Shipping", "At Cost"],
];

const perks = [
  { icon: Palette, label: "Vibrant Colours" },
  { icon: Award, label: "Premium Quality" },
  { icon: Truck, label: "Fast Delivery" },
  { icon: Globe, label: "Global Shipping" },
];

const whyUs = [
  { icon: Printer, label: "High Definition Digital Prints" },
  { icon: ShieldCheck, label: "Fade Resistant & Long Lasting" },
  { icon: Leaf, label: "Eco-Friendly Inks" },
  { icon: Globe, label: "Worldwide Delivery" },
  { icon: MapPin, label: "Made in Nigeria" },
];

function FabricPrintingPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-primary/10 via-background to-accent/15">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Reality Bee Limited
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
              Premium <span className="text-primary">Fabric Printing</span>
            </h1>
            <p className="mt-4 font-display text-xl italic text-secondary sm:text-2xl">
              Made in Africa, Worn by the World
            </p>
            <p className="mt-6 max-w-xl text-base text-muted-foreground">
              High-definition digital printing on polyester, satin, chiffon, silk and cotton blends
              — vibrant Ankara-inspired designs produced in Nigeria and shipped worldwide.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {perks.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-lg border border-border/60 bg-card/70 px-3 py-2 text-xs font-medium"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                See price list
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
              >
                Request a quote
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { value: "1000+", label: "Designs printed" },
                { value: "500k+", label: "Metres delivered" },
                { value: "40+", label: "Countries shipped" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border/60 bg-card/70 px-4 py-3 text-center"
                >
                  <div className="font-display text-2xl text-primary">{s.value}</div>
                  <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div className="mt-8 rounded-2xl border border-border/60 bg-card/70 p-5">
              <h3 className="font-display text-lg text-foreground">How it works</h3>
              <ol className="mt-4 space-y-3 text-sm">
                {[
                  [
                    "Share your design",
                    "Send your artwork, sketch or reference — we'll advise on the best fabric and finish.",
                  ],
                  [
                    "Approve digital proof",
                    "We prepare a colour-accurate proof and optional printed sample before production.",
                  ],
                  [
                    "Print & finish",
                    "High-definition sublimation on your chosen fabric, cut and quality-checked.",
                  ],
                  [
                    "Delivered to your door",
                    "Nationwide dispatch in 3–5 days, worldwide shipping on request.",
                  ],
                ].map(([title, desc], i) => (
                  <li key={title} className="flex gap-3">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <span>
                      <span className="font-semibold text-foreground">{title}.</span>{" "}
                      <span className="text-muted-foreground">{desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="relative flex flex-col items-center gap-4">
            <img
              src={flyerAsset.url}
              alt="African Fabric Printing Services flyer"
              className="mx-auto w-full max-w-md rounded-2xl border border-border/60 shadow-2xl"
            />
            <a
              href={flyerAsset.url}
              download="Reality-Bee-Fabric-Printing-Flyer.png"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" /> Download flyer
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl text-foreground sm:text-4xl">Price List</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              All prices in US Dollars ($). Wholesale from 100 metres.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Ruler className="h-4 w-4 text-primary" /> Min. order: 20 metres
            </span>
            <span className="flex items-center gap-1">
              <Award className="h-4 w-4 text-primary" /> Premium quality
            </span>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-border/60 bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Service</th>
                <th className="px-4 py-3 text-left font-semibold">Unit</th>
                <th className="px-4 py-3 text-left font-semibold">Retail</th>
                <th className="px-4 py-3 text-left font-semibold">Wholesale (100m+)</th>
              </tr>
            </thead>
            <tbody>
              {priceList.map((row, i) => (
                <tr key={row.label} className={i % 2 ? "bg-muted/40" : ""}>
                  <td className="px-4 py-3 font-medium text-foreground">{row.label}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.unit}</td>
                  <td className="px-4 py-3 text-foreground">{row.retail}</td>
                  <td className="px-4 py-3 font-semibold text-primary">{row.wholesale}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Design + Sampling + Packages */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-3">
        <PriceCard title="Design Services" rows={designServices} />
        <PriceCard title="Sampling" rows={sampling} />
        <PriceCard title="Fashion Business Packages" rows={packages} />
      </section>

      {/* Corporate + Volume */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-secondary p-6 text-secondary-foreground">
          <h3 className="font-display text-2xl">Corporate Printing</h3>
          <ul className="mt-4 divide-y divide-white/10">
            {corporate.map((label) => (
              <li key={label} className="flex items-center justify-between py-3 text-sm">
                <span>{label}</span>
                <span className="font-semibold text-accent">Custom Quote</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl text-foreground">Volume Discounts</h3>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              The more you order, the more you save
            </span>
          </div>
          <ul className="mt-4 divide-y divide-border/60">
            {volume.map(([range, off]) => (
              <li key={range} className="flex items-center justify-between py-3 text-sm">
                <span className="text-foreground">{range}</span>
                <span className="font-semibold text-primary">{off}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Add-ons + Why us */}
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-card p-6">
          <h3 className="font-display text-2xl text-foreground">Add-On Services</h3>
          <ul className="mt-4 divide-y divide-border/60">
            {addOns.map(([label, price]) => (
              <li key={label} className="flex items-center justify-between py-3 text-sm">
                <span className="flex items-center gap-2 text-foreground">
                  {label.startsWith("Express") ? (
                    <Clock className="h-4 w-4 text-primary" />
                  ) : label.startsWith("Premium") ? (
                    <Package className="h-4 w-4 text-primary" />
                  ) : (
                    <Truck className="h-4 w-4 text-primary" />
                  )}
                  {label}
                </span>
                <span className="font-semibold text-primary">{price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-accent/20 to-primary/10 p-6">
          <h3 className="font-display text-2xl text-foreground">Why Choose Us</h3>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {whyUs.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Perfect For
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                "Fashion Designers",
                "Boutiques",
                "Brands",
                "Corporate Organizations",
                "Events & Occasions",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-border/60 bg-secondary text-secondary-foreground"
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-2xl">Let's print your vision beautifully.</p>
            <p className="mt-1 text-sm text-white/70">
              Proudly Nigerian — delivering to the world.
            </p>
          </div>
          <div className="grid gap-2 text-sm">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" /> +234 912 593 7437
            </span>
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" /> realitybeeltd@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <Globe2 className="h-4 w-4 text-accent" /> www.realitybeeltd.com.ng
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function PriceCard({ title, rows }: { title: string; rows: (string[] | readonly string[])[] }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6">
      <h3 className="font-display text-xl text-foreground">{title}</h3>
      <ul className="mt-4 divide-y divide-border/60">
        {rows.map(([label, price]) => (
          <li key={label} className="flex items-center justify-between py-3 text-sm">
            <span className="text-foreground">{label}</span>
            <span className="font-semibold text-primary">{price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
