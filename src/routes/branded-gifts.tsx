import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/branded-gifts")({
  head: () => ({
    meta: [
      { title: "Branded Gifts & Items — Reality Bee Limited" },
      {
        name: "description",
        content:
          "Custom branded gifts and promotional items in Lagos, Nigeria. Polo shirts, t-shirts, hoodies, mugs, pens, caps, umbrellas, plaques, gift boxes and more.",
      },
      { property: "og:title", content: "Branded Gifts & Items — Reality Bee Limited" },
      {
        property: "og:description",
        content:
          "Custom-branded merchandise and corporate gifts — apparel, drinkware, stationery, awards and promotional items.",
      },
    ],
  }),
  component: BrandedGiftsPage,
});

type Item = { name: string; image: string; blurb: string; moq: string; specs?: string[] };

const MOQ = "100 pcs";

const items: Item[] = [
  { name: "Branded Polo T-Shirt", blurb: "Premium pique polos with embroidered or printed logos.", image: "/assets/products/custom-polo-tshirt-print-and-design-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Size: S, M, L, XL, XXL (custom on request).", "Material: 100% cotton Polo Collar Neck", "Finishing: Full-color borderless / Flock printing or monogram embroidery print (optional)", "Price: Customized t-shirt price starting ₦8,000 per one (Best Quality)", "Delivery: 2-3 working days at your doorstep in Lagos • 3-4 working days Nationwide"] },
  { name: "Custom Round-Neck T-Shirt", blurb: "Soft cotton tees printed in full colour for events and teams.", image: "/assets/products/quality-tshirt-print-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Size: S, M, L, XL, XXL (custom on request).", "Material: 100% cotton material with Polo Option", "Finishing: Full DTF Borderless Printing", "Price: Customized t-shirt price starting ₦6,500 per one (Best Quality)", "Delivery: 2-3 working days at your doorstep in Lagos • 3-4 working days Nationwide"] },
  { name: "Branded Hoodie", blurb: "Cosy fleece hoodies with embroidery or DTF printing.", image: "/assets/products/customized-hoodie-design-and-print-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Best For: Corporate and Personal Branding", "Size: Small to XXLarge", "Material: 100% cotton or Polyester", "Finishing: Full-color borderless / Flock printing or monogram embroidery print (optional).", "Price: Quality Branded Hoodie Printing starting from ₦28,500 per one (Best Quality)", "Delivery: 3-4 working days at your doorstep in Lagos • 4-5 working days Nationwide"] },
  { name: "Branded Apron", blurb: "Premium aprons for cafés, restaurants and brand activations.", image: "/assets/products/custom-branded-premuim-apron-printing-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Size: Small to XXLarge", "Material: 100% Canvas & cotton material", "Finishing: Full-color DTF Borderless Logo branding & well packaged for delivery", "Price: Customized Apron price starting ₦13,000 per one (Best Quality)", "Delivery: 3-4 working days at your doorstep in Lagos • 4-5 working days Nationwide"] },
  { name: "Custom Pen", blurb: "Metal and plastic pens laser-etched with your logo.", image: "/assets/products/top-quality-custom-pen-print-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: Quality Plastic Pen", "Size: 5.25 inches long", "Finishing: Full colour UV printing", "Price: Customized Plastic Pen Printing starting from ₦600 per copy (Best Quality).", "Delivery: 2-3 working days within Lagos • 3-4 working days Nationwide"] },
  { name: "Coated Mug", blurb: "Full-wrap colour-coated ceramic mugs — great gifts and giveaways.", image: "/assets/products/customized-coated-mug-printing-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: Premium AAA-grade coated ceramic mug", "Size: 11oz standard capacity", "Colours: White, black, red, blue, pink, green (inside/handle coated)", "Finishing: Full-wrap sublimation printing in vibrant full colour, dishwasher and microwave safe", "Price: Coated mug printing starting from ₦3,500 per unit (Best Quality)", "Delivery: 3-4 working days at your doorstep in Lagos • 4-5 working days Nationwide"] },
  { name: "Cork-Bottom Mug", blurb: "Premium ceramic mugs with a protective cork base.", image: "/assets/products/branded-cork-bottom-mug-printing-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: Premium ceramic body with natural cork base", "Size: 11oz standard capacity", "Finishing: Full-wrap sublimation printing with protective cork bottom to prevent scratches on surfaces", "Price: Cork-bottom mug printing starting from ₦4,500 per unit (Best Quality)", "Delivery: 3-4 working days at your doorstep in Lagos • 4-5 working days Nationwide"] },
  { name: "Branded Insulated Tumbler", blurb: "Stanley-style tumblers engraved or printed with your brand.", image: "/assets/products/branded-uncle-stanley-mug-printing-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: Double-walled stainless steel with vacuum insulation", "Size: 30oz / 40oz capacity with reusable straw and handle", "Finishing: Laser engraving or UV full-colour print, keeps drinks cold up to 24 hours and hot up to 12 hours", "Price: Insulated tumbler branding starting from ₦18,500 per unit (Best Quality)", "Delivery: 3-5 working days at your doorstep in Lagos • 5-7 working days Nationwide"] },
  { name: "3D Logo Embroidered Caps", blurb: "Structured caps with raised 3D puff embroidery.", image: "/assets/products/3d-logo-embroideried-caps-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: Full-colour thread 3D monogram embroidery printing", "Finishing: Perfectly trimmed and packaged for delivery", "Price: Custom 3D Logo puff price starting ₦4,000 per one (Best Quality)", "Delivery: 3-4 working days at your doorstep in Lagos • 4-5 working days Nationwide"] },
  { name: "Branded Face Caps", blurb: "Everyday caps printed or embroidered for teams and events.", image: "/assets/products/customized-face-cap-design-and-print-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Best For: Corporate and Personal Branding", "Material: Structured 6-panel cotton twill with adjustable strap", "Size: Free size, adjustable (custom sizing on request)", "Finishing: Full-colour DTF printing or flat embroidery on front, back and side panels", "Price: Customized face cap printing starting from ₦3,500 per unit (Best Quality)", "Delivery: 3-4 working days at your doorstep in Lagos • 4-5 working days Nationwide"] },
  { name: "Custom Safety Jacket", blurb: "High-visibility branded jackets for site and field teams.", image: "/assets/products/personalized-safety-jacket-printing-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Size: S, M, L, XL, XXL (custom on request).", "Material: Reflective Safety Jackets and Vests available in other colours (lemon and orange)", "Finishing: Full-color borderless / Flock printing or monogram embroidery print (optional)", "Price: Customized Reflective Jacket price starting ₦7,500 per one (Best Quality)", "Delivery: 2-3 working days at your doorstep in Lagos • 3-4 working days Nationwide"] },
  { name: "Custom Face Towel", blurb: "Soft embroidered face towels — perfect gift items.", image: "/assets/products/embroidered-face-towel-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: 100% soft, absorbent cotton (400 gsm)", "Size: 30cm x 30cm (custom sizes on request)", "Colours: White, cream, navy, grey and custom shades", "Finishing: Flat or 3D thread embroidery of your logo, individually folded and packaged", "Price: Custom face towel printing starting from ₦2,500 per unit (Best Quality)", "Delivery: 3-4 working days at your doorstep in Lagos • 4-5 working days Nationwide"] },
  { name: "Custom Bath Towel", blurb: "Plush embroidered towels for hotels, spas and gifting.", image: "/assets/products/quality-embroideried-towel-print-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: 100% premium combed cotton (500 gsm)", "Size: 70cm x 140cm (custom sizes on request)", "Colours: White, cream, navy, black and custom shades", "Finishing: Flat or 3D thread embroidery of your logo, individually folded and packaged", "Price: Custom bath towel printing starting from ₦8,500 per unit (Best Quality)", "Delivery: 3-5 working days at your doorstep in Lagos • 5-7 working days Nationwide"] },
  { name: "A5 Branded Jotter", blurb: "Executive jotters with your logo — great conference giveaways.", image: "/assets/products/top-quality-A5-jotter-print-and-design.jpg", moq: MOQ, specs: ["Size: A5 (148mm x 210mm)", "Material: Executive PU leather cover with 80 lined inner pages (70 gsm cream paper)", "Finishing: Gold or silver foil logo, silk-screen or debossed branding with elastic closure and ribbon marker", "Price: A5 executive jotter printing starting from ₦4,500 per unit (Best Quality)", "Delivery: 3-4 working days at your doorstep in Lagos • 4-5 working days Nationwide"] },
  { name: "Branded Paper Bag", blurb: "Luxury paper bags for retail, gifting and packaging.", image: "/assets/products/top-quality-paper-bag-print-and-design-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: 250-300 gsm art card, kraft or matte laminated paper", "Size: Small, medium, large and custom dimensions", "Finishing: Full-colour print with matte or gloss lamination and rope/twisted paper handles", "Price: Custom paper bag printing starting from ₦850 per unit (Best Quality)", "Delivery: 3-5 working days at your doorstep in Lagos • 5-7 working days Nationwide"] },
  { name: "Royal Throw Pillow", blurb: "Full-colour printed throw pillows in premium fabrics.", image: "/assets/products/custom-royal-pillow-print-and-design-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Size: 18\" x 18\" (custom sizes on request)", "Material: Premium velvet, linen or satin cover with hollow-fibre inner filling", "Finishing: Vibrant full sublimation print on front, back and sides with concealed zip", "Price: Royal throw pillow printing starting from ₦5,500 per unit (Best Quality)", "Delivery: 3-5 working days at your doorstep in Lagos • 5-7 working days Nationwide"] },
  { name: "Award Plaque", blurb: "Personalised crystal, wood and acrylic award plaques.", image: "/assets/products/custom-award-plaque-printing-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: Premium crystal, wood or acrylic on a solid wooden base", "Size: Small (6\"), medium (8\") and large (10\") — custom sizes on request", "Finishing: UV full-colour printing or laser engraving with velvet-lined gift box", "Price: Custom award plaque starting from ₦12,500 per unit (Best Quality)", "Delivery: 4-5 working days at your doorstep in Lagos • 5-7 working days Nationwide"] },
  { name: "Luxury Gift Box", blurb: "Bespoke branded gift boxes for corporate hampers.", image: "/assets/products/customized-luxury-box-printing-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: Rigid 1200-1500gsm greyboard wrapped in premium art paper or PU leather", "Size: Custom dimensions with EVA foam or satin inserts to fit your items", "Finishing: Full-colour print with foil stamping, embossing or spot UV; magnetic or ribbon-tie closure", "Price: Luxury branded gift box starting from ₦4,500 per unit (Best Quality)", "Delivery: 5-7 working days at your doorstep in Lagos • 7-10 working days Nationwide"] },
  { name: "Branded Mini Hand Fan", blurb: "Lightweight branded fans — a hit at outdoor events.", image: "/assets/products/quality-branded-mini-hand-fan-printing-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: Durable ABS plastic body with 3-speed rechargeable USB motor", "Size: Handheld 18cm x 8cm mini fan with lanyard", "Finishing: Full-colour UV logo print on the handle and blades cover", "Price: Branded mini hand fan starting from ₦3,800 per unit (Best Quality)", "Delivery: 3-4 working days at your doorstep in Lagos • 4-5 working days Nationwide"] },
  { name: "Custom Umbrella", blurb: "Full-colour umbrellas for staff, clients and promotions.", image: "/assets/products/custom-umbrella-printing-in-lagos-nigeria.jpg", moq: MOQ, specs: ["Material: Waterproof 190T polyester canopy with fibreglass ribs and wooden or metal handle", "Size: 23\" x 8k straight umbrella (golf and foldable options available)", "Finishing: Full-colour sublimation or silk-screen printing across one or all panels", "Price: Custom branded umbrella starting from ₦6,500 per unit (Best Quality)", "Delivery: 3-5 working days at your doorstep in Lagos • 5-7 working days Nationwide"] },
];

function BrandedGiftsPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-accent/15 via-background to-primary/10">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Reality Bee Limited</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
            Branded Gifts & Items
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Corporate gifts, promotional items and team merch — apparel, drinkware,
            stationery and awards, all beautifully branded with your logo.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#catalog" className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Browse gifts
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary">
              Request a quote
            </a>
          </div>
        </div>
      </section>

      <section id="catalog" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">Popular branded items</h2>
          <p className="mt-2 text-sm text-muted-foreground">{items.length} items — MOQ and pricing on request.</p>
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
                <p className="mt-2 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  MOQ: {item.moq}
                </p>
                {item.specs && (
                  <details className="mt-3 group/spec">
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

      <section id="contact" className="border-t border-border/60 bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-display text-2xl">Need branded gifts for your team?</p>
            <p className="mt-1 text-sm text-white/70">Bulk pricing available — talk to us today.</p>
          </div>
          <div className="grid gap-2 text-sm">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +234 912 593 7437</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> realitybeeltd@gmail.com</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> 5 Ikosi Road, Oregun, Ikeja, Lagos</span>
          </div>
        </div>
      </section>
    </div>
  );
}