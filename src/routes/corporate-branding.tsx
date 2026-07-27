import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/corporate-branding")({
  head: () => ({
    meta: [
      { title: "Corporate Branding & Print — Reality Bee Limited" },
      {
        name: "description",
        content:
          "Corporate branding, stationery, signage and large-format print in Lagos, Nigeria. Business cards, letterheads, brochures, banners, ID cards, signage, vehicle branding and more.",
      },
      { property: "og:title", content: "Corporate Branding & Print — Reality Bee Limited" },
      {
        property: "og:description",
        content:
          "Business cards, letterheads, brochures, banners, signage, ID cards and vehicle branding — printed and delivered nationwide.",
      },
    ],
  }),
  component: CorporateBrandingPage,
});

type Item = { name: string; image: string; blurb: string; specs?: string[] };

const items: Item[] = [
  { name: "Premium Business Card", blurb: "Thick, luxury stock with spot UV, foil or embossing.", image: "/assets/products/Premuim-business-card-print-and-design.jpg", specs: ["Card Size: 3.5 x 2.2 inches", "Material: Ultra-premium 600gsm matte card", "Finishing: Full-color print with Foil stamping available in Gold, Silver, Rose Gold, or Custom colors. Rounded corners available on request", "Price: Starting from ₦75,500 – 100 copies (600gsm)", "Delivery: 2-3 working days within Lagos • Nationwide delivery within 3–4 working days"] },
  { name: "Transparent Business Card", blurb: "Modern frosted PVC cards that stand out on first impression.", image: "/assets/products/top-quality-transparent-business-card-design-and-print-in-lagos-nigeria.jpg", specs: ["Card Size: 3.5 x 2.2 inches", "Material: High-quality transparent plastic PVC material", "Finishing: Premium foil printing or direct UV printing on clear acrylic plastic, carefully finished and securely wrapped for safe shipping", "Price: Starting from ₦85,500 – 50 copies", "Delivery: 2-3 working days within Lagos • Nationwide delivery within 3–4 working days"] },
  { name: "Classic Business Card", blurb: "Matte or gloss 350gsm cards for everyday networking.", image: "/assets/products/business-card-design-and-print-in-lagos-nigeria.jpg", specs: ["Card Size: 3.5 x 2.2 inches", "Material: Durable 300gsm matte card or ultra-premium 600gsm thickness", "Finishing: Full-color print with matte or gloss lamination. Rounded corners available on request", "Price: Starting from ₦8,500 – 50 copies (300gsm); ₦10,000 – 50 copies (600gsm)", "Delivery: Same-day delivery within Lagos (for orders placed before 12 noon) • Nationwide delivery within 2-3 working days"] },
  { name: "Corporate Letterhead", blurb: "Branded A4 letterheads on premium 100gsm paper.", image: "/assets/products/quality-official-letterhead-design-and-print-in-lagos-nigeria.jpg", specs: ["Material: A4 size 150 gsm Art / Matte Paper / Conqueror Paper.", "Finishing: Full-colour print and trimmed to size.", "Price: A4 150 gsm Art/Matte Letterhead Paper Printing starting from ₦12,000 for 50 copies.", "Price: A4 Letterhead Conqueror Printing starting from ₦16,000 for 50 copies.", "Delivery: 1-2 working days within Lagos • 2-3 working days Nationwide"] },
  { name: "Handbill / Flyer", blurb: "Full-colour A5/A4 flyers for events, promos and outreach.", image: "/assets/products/handbill-flier-design-and-print-in-lagos-nigeria.jpg", specs: ["Size: A4 size (Width 8.268 inches, Height 11.693 inches)", "Material: 150 gsm Matte paper, single-sided or double-sided printing (optional).", "Finishing: Full-colour print and perfectly trimmed to size.", "Price: Single-sided A4 Flyers Printing starting from ₦40,000 for 100 copies.", "Price: Double-sided A4 Flyers Printing starting from ₦48,000 for 100 copies.", "Delivery: 1-2 working days within Lagos • 2-3 working days Nationwide"] },
  { name: "Tri-Fold Brochure", blurb: "Six-panel brochures for services, products and portfolios.", image: "/assets/products/trifold-brochure-printing-and-design-in-lagos-nigeria.jpg", specs: ["Size: A4 size (Width 8.3 inches, Height 11.7 inches)", "Material: 150 gsm Matte paper, 300gsm card (optional), Gloss and Spot UV.", "Finishing: Full-colour printing, perfectly creased, cut to size and neatly delivered", "Price: A4 Tri Fold Brochure Printing starting from ₦47,500 for 50 copies", "Delivery: 1-2 working days within Lagos • 3-5 working days Nationwide"] },
  { name: "Bi-Fold Brochure", blurb: "Elegant four-panel brochures with sharp imagery.", image: "/assets/products/bifold-brochure-design-and-print-in-lagos-nigeria.jpg", specs: ["Size: A4 size (Width 8.3 inches, Height 11.7 inches)", "Material: 150 gsm Matte paper, art paper (optional), Gloss and Spot UV.", "Finishing: Full-colour printing, perfectly trimmed to size and neatly delivered", "Price: A4 Bi Fold Brochure Printing starting from ₦90,000 for 100 copies.", "Delivery: 1-2 working days within Lagos • 3-5 working days Nationwide"] },
  { name: "Custom Lanyard", blurb: "Woven or sublimated lanyards with brand-safe colour matching.", image: "/assets/products/customized-larnyard-design-and-print-in-lagos-nigeria.jpg", specs: ["Best For: Corporate and Personal Branding", "Material: 100% Cotton material available in blue, red, green, black, yellow and red colours.", "Branding: Full-color printing available on both sides of the lanyards.", "Price: Custom Lanyard Printing starting from ₦2,500 per copy (Best Quality).", "Delivery: 1-2 working days within Lagos • 3-5 working days Nationwide"] },
  { name: "Custom ID Card", blurb: "Durable PVC ID cards with photo, QR and role details.", image: "/assets/products/custom-ID-Card-design-and-quality-print-in-lagos-nigeria.jpg", specs: ["Best For: Corporate and Personal Branding", "Material: PVC plastic card, ribbon print, film lamination on both sides.", "Branding: Full-color printing available on single-sided cards, or one-color printing on both sides", "Price: Custom ID Card Printing starting from ₦5,000 per copy (Best Quality).", "Delivery: 1-2 working days within Lagos • 3-5 working days Nationwide"] },
  { name: "Flex Banner", blurb: "Weather-proof indoor and outdoor flex banners in any size.", image: "/assets/products/quality-flex-banner-print-and-design-in-lagos-nigeria.jpg", specs: ["Best For: Outdoor Advertising & Event Branding", "Size: Any sizes up to 100ft.", "Material: Quality Flex Banner Material", "Finishing: Full vivid colour printing", "Price: Custom Flex Banner Printing starting from ₦25,050 per copy (Best Quality)", "Delivery: 1-2 working days at your doorstep in Lagos • 2-5 working days Nationwide"] },
  { name: "X Banner", blurb: "Lightweight X-stand banners perfect for events and expos.", image: "/assets/products/customized-X-banner-design-and-printing-in-lagos-nigeria.jpg", specs: ["Best For: Exhibition, Events, Supermarkets", "Size: 2 feet by 5.3 feet", "Material: X-banner stand with flex banner printing", "Finishing: Vibrant full-color printing on flex banner", "Price: Custom X-banner Printing starting from ₦36,500 per unit (Best Quality)", "Delivery: 3-5 working days at your doorstep in Lagos • 5-7 working days Nationwide"] },
  { name: "Roll-Up Banner", blurb: "Retractable roll-up banners with carrying case included.", image: "/assets/products/rectractable-rollup-banner-print-and-design-in-lagos-nigeria.jpg", specs: ["Best For: Outdoor Advertising & Event Branding", "Size: 33 inch by 81 inch", "Material: Quality Solite PVC material", "Finishing: Full-color printing on solite PVC material and perfectly mounted on roll-up stand", "Price: Custom Roll Up Banner Printing starting from ₦65,550 per unit (Best Quality)", "Delivery: 2-3 working days at your doorstep in Lagos • 3-5 working days Nationwide"] },
  { name: "Event Backdrop Banner", blurb: "Step-and-repeat backdrops for launches, weddings and conferences.", image: "/assets/products/event-backdrop-banner-print-and-design-in-lagos-nigeria.jpg", specs: ["Best For: Exhibition, Concert and Events", "Size: 4m by 3m", "Material: Foldable reusable aluminium stand with flex banner.", "Finishing: Vibrant full-color print on durable flex banner material, mounted on a sturdy aluminium pop-up stand.", "Price: Custom Pop-Up Display Backdrop Banner starting from ₦385,000 per unit (Best Quality)", "Delivery: 3-5 working days at your doorstep in Lagos • 5-7 working days Nationwide"] },
  { name: "Illuminated 3D Signage", blurb: "Backlit acrylic signage for storefronts and office receptions.", image: "/assets/products/top-quality-illuminated-3D-signage.jpg", specs: ["Size: 8ft by 2.5ft or your custom size", "Material: Branded logo and text illuminated LED sign featuring individually fabricated letters and logo for a sleek, custom look", "Finishing: Transportation plus installation", "Price: 3D Illuminated Backlit Company Signage price starting from ₦450,500 (price differs by size)", "Delivery: 7 working days within Lagos • 7-10 working days Nationwide"] },
  { name: "Indoor Acrylic Neon Sign", blurb: "Custom LED neon signs on clear acrylic backing.", image: "/assets/products/indoor-acrylic-neon-sign-in-lagos-nigeria.jpg", specs: ["Size: 2.5ft by 2.5ft or your custom size", "Material: Durable acrylic signage featuring glowing neon LED letters", "Finishing: Transportation plus installation", "Price: Illuminated Neon Circle Signage price starting from ₦140,000 (price differs by size)", "Delivery: 5-7 working days within Lagos • 7-10 working days Nationwide"] },
  { name: "Indoor Signage", blurb: "Directional and wayfinding signage tailored to your space.", image: "/assets/products/indoor-signage-printing-in-lagos-nigeria.jpg", specs: ["Size: 9ft by 2.5ft or your custom size", "Material: Full-color branded logos and text displayed on non-illuminated signage built with durable raw metal lightbox cabinets", "Finishing: Transportation plus installation", "Price: Outdoor Company Signage price starting from ₦370,500 (price differs by size)", "Delivery: 7 working days within Lagos • 7-10 working days Nationwide"] },
  { name: "SAV Label Sticker", blurb: "Die-cut vinyl stickers for products, walls and packaging.", image: "/assets/products/Quality-SAV-sticker-design-and-print-in-lagos-nigeria.jpg", specs: ["Best For: Corporate and Product Branding", "Size: Any sizes up to 100 inches.", "Material: Quality SAV Sticker", "Finishing: Full vivid colour printing", "Price: SAV Sticker Printing starting from ₦12,500 for 100 pcs (Best Quality)", "Delivery: 3-4 working days at your doorstep in Lagos • 4-5 working days Nationwide"] },
  { name: "Company Seal", blurb: "Embossing and rubber company seals for official documents.", image: "/assets/products/quality-embossing-company-seal-in-lagos-nigeria.jpg", specs: ["Material: Quality Company Embossing Seal", "Finishing: Imprint company data on circular metal surface.", "Price: Company embossing seal starting from ₦33,000 per one.", "Delivery: 2-3 working days within Lagos • 3-4 working days Nationwide."] },
  { name: "Invoices & Receipts", blurb: "Branded NCR invoice and receipt booklets in duplicate/triplicate.", image: "/assets/products/official-invoice-and-reciept-print-and-design-in-lagos-nigeria.jpg", specs: ["Material: Carbonised paper or carbonless colour paper with options of 2-3 colours printing.", "Size: Width 5.75 inches, Height 8.2 inches.", "Finishing: 50 original perforated pages per booklet, numbering print with binding and options of duplicate & triplicate", "Price: Official Invoice Printing starting from ₦3,400 per copy (Best Quality).", "Delivery: 3-5 working days within Lagos • 5-7 working days Nationwide"] },
  { name: "Vehicle / Car Branding", blurb: "Full or partial car wraps for fleets and promotional vehicles.", image: "/assets/products/custom-car-branding-in-lagos-nigeria.jpg", specs: ["Best For: Business promotions, product awareness", "Material: Vinyl poster paper (SAV material)", "Branding: Vibrant full-color printing, expertly wrapped and cleanly trimmed", "Price: Partial car branding starting at ₦75,000 per unit", "Price: Full car branding starting at ₦115,000 per unit", "Delivery: 3-5 working days at your doorstep in Lagos • 5-7 working days Nationwide"] },
  { name: "Point of Sale (POS) Stand", blurb: "Custom POS displays for retail promotions and activations.", image: "/assets/products/quality-promotional-point-of-sale-stand-printing-in-lagos-nigeria.jpg", specs: ["Size: 4.5ft by 11ft or your custom size", "Material: Full-color branded logos and text displayed on illuminated signage built with durable raw metal lightbox cabinets", "Finishing: Transportation plus installation", "Price: Outdoor Company Pylon Signage price starting from ₦960,500 (price differs by size)", "Delivery: 7 working days within Lagos • 7-10 working days Nationwide"] },
  { name: "Premium Table Top Stand", blurb: "Countertop displays for menus, price lists and promos.", image: "/assets/products/table-top-stand.jpg", specs: ["Best For: Reception desks, retail counters, restaurants and events", "Size: A4 or A5 display area (custom sizes on request)", "Material: 3-5mm clear acrylic with printed insert or direct UV print", "Finishing: Polished edges with slanted base for easy readability", "Price: Premium table-top stand starting from ₦12,500 per unit (Best Quality)", "Delivery: 3-5 working days at your doorstep in Lagos • 5-7 working days Nationwide"] },
  { name: "Clothing Tags", blurb: "Branded hang tags and swing tickets for fashion brands.", image: "/assets/products/clothe-tag-design-and-print-in-lagos-nigeria.jpg", specs: ["Size: Custom shapes and sizes (standard 5cm x 8cm)", "Material: 350-600gsm art card, kraft or PVC with hole-punch and string", "Finishing: Full-colour double-sided print with matte/gloss lamination, foil stamping or spot UV (optional)", "Price: Custom clothing tag printing starting from ₦18,000 for 100 pcs (Best Quality)", "Delivery: 2-3 working days within Lagos • 3-5 working days Nationwide"] },
  { name: "Gazebo Canopy Tent", blurb: "Fully branded canopy tents for events and activations.", image: "/assets/products/gazebo-canopy-tent-design-and-branding-in-lagos-nigeria.jpg", specs: ["Best For: Exhibition, Trade Shows, Markets, and Events", "Size: 2 meter and 3 meter", "Material: Quality aluminium steel gazebo canopy stand", "Branding: Full-color large-format print on flex or fabric material (optional)", "Price: 2-meter gazebo canopy tent starting at ₦470,000 per unit", "Price: 3-meter gazebo canopy tent starting at ₦560,500 per unit", "Delivery: 3-5 working days at your doorstep in Lagos • 5-7 working days Nationwide"] },
];

function CorporateBrandingPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-primary/10 via-background to-accent/15">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Reality Bee Limited</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
            Corporate Branding & Print
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            From your first business card to full vehicle branding — we design, print and deliver
            a consistent identity across every corporate touchpoint.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#catalog" className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Browse services
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary">
              Request a quote
            </a>
          </div>
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">Our corporate branding services</h2>
          <p className="mt-2 text-sm text-muted-foreground">{items.length} services — every job custom quoted based on quantity and finishing.</p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <article key={item.name} className="group overflow-hidden rounded-2xl border border-border/60 bg-card">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg text-foreground">{item.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.blurb}</p>
                {item.specs && (
                  <details className="mt-3">
                    <summary className="cursor-pointer text-xs font-semibold text-foreground hover:text-primary">
                      Specifications
                    </summary>
                    <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                      {item.specs.map((s) => {
                        const idx = s.indexOf(":");
                        const label = idx > -1 ? s.slice(0, idx) : "";
                        const value = idx > -1 ? s.slice(idx + 1).trim() : s;
                        return (
                          <li key={s}>
                            {label && <span className="font-semibold text-foreground">{label}:</span>} {value}
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}