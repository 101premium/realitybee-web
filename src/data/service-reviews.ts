export type ServiceReview = {
  author: string;
  company?: string;
  category: "Corporate Branding" | "Fabric Printing" | "Branded Gifts";
  stars: number;
  text: string;
  date: string;
};

export const serviceReviews: ServiceReview[] = [
  // ---------- Corporate Branding ----------
  {
    author: "Adaeze O.",
    company: "Zima Consulting",
    category: "Corporate Branding",
    stars: 5,
    text: "We rebranded the whole office through Reality Bee — new business cards, letterheads, ID cards and a backdrop banner for our anniversary. Everything landed within a week and the finishing on the 600gsm cards is beautiful.",
    date: "May 2026",
  },
  {
    author: "Tunde A.",
    company: "Bluewave Realty",
    category: "Corporate Branding",
    stars: 5,
    text: "Our 3D illuminated signage was installed exactly when they promised. The letters look premium up close and glow beautifully at night — clients keep asking us who made it.",
    date: "April 2026",
  },
  {
    author: "Grace M.",
    company: "HR at Sterling Foods",
    category: "Corporate Branding",
    stars: 5,
    text: "We needed 120 PVC ID cards on short notice for a new intake of staff. Reality Bee turned them around in three days and the quality is genuinely durable — no cracking or fading after months of use.",
    date: "January 2026",
  },
  {
    author: "Chinedu O.",
    company: "Owner, Ozone Bar & Lounge",
    category: "Corporate Branding",
    stars: 5,
    text: "The neon acrylic sign they made for our lounge changed the whole vibe of the entrance. Installation was tidy and the light output is perfect for photos.",
    date: "December 2025",
  },

  // ---------- Fabric Printing ----------
  {
    author: "Amaka U.",
    company: "Founder, House of Amaka",
    category: "Fabric Printing",
    stars: 5,
    text: "As a fashion designer, colour fidelity is everything. My custom Ankara-inspired print came out sharper and more vibrant than I expected — the sublimation on polyester is fantastic. Ordering another 80 metres next month.",
    date: "June 2026",
  },
  {
    author: "Ngozi B.",
    company: "Bespoke bridal",
    category: "Fabric Printing",
    stars: 5,
    text: "Ran 40 metres of satin printing for a bridal train. The drape and print quality were exactly what I needed. Team was patient with proof revisions until the pattern was right.",
    date: "May 2026",
  },
  {
    author: "Kunle A.",
    company: "Aso-ebi coordinator",
    category: "Fabric Printing",
    stars: 5,
    text: "We printed 250m of matching fabric for a wedding entourage — colour was consistent across every roll, which is rare in Lagos. Wholesale pricing at 50m+ made a real difference to our margin.",
    date: "April 2026",
  },

  // ---------- Branded Gifts ----------
  {
    author: "Halima Y.",
    company: "People Ops, Northlake Bank",
    category: "Branded Gifts",
    stars: 5,
    text: "Ordered 300 end-of-year gift sets — insulated tumblers, cork mugs and A5 jotters, all embroidered with the bank logo. Packaging looked like a proper retail unboxing. Staff loved them.",
    date: "December 2025",
  },
  {
    author: "Samuel E.",
    company: "Ops Manager, TechAxis",
    category: "Branded Gifts",
    stars: 5,
    text: "Ordered 150 branded hoodies for our engineering team. The DTF print is soft, doesn't crack, and the sizing chart they shared was accurate. Delivered ahead of the deadline.",
    date: "November 2025",
  },
  {
    author: "Rachel I.",
    company: "Event planner",
    category: "Branded Gifts",
    stars: 5,
    text: "Needed 100 custom face caps and 100 pens for a product launch — everything ready in six working days. Guests actually used the caps at the venue, which was the whole point.",
    date: "October 2025",
  },
];
