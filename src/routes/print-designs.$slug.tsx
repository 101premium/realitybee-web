import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, Check, Mail } from "lucide-react";
import { toast } from "sonner";
import { printDesigns } from "@/data/print-designs";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/print-designs/$slug")({
  loader: ({ params }) => {
    const design = printDesigns.find((d) => d.slug === params.slug);
    if (!design) throw notFound();
    return { design };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Design not found — Reality Bee" }, { name: "robots", content: "noindex" }],
      };
    }
    const { design } = loaderData;
    return {
      meta: [
        { title: `${design.name} — African Print Design | Reality Bee` },
        {
          name: "description",
          content: `${design.name} — digital African fabric print design. $25.00 per design. Colour variation available on request.`,
        },
        { property: "og:title", content: `${design.name} — African Print Design` },
        { property: "og:image", content: design.url },
      ],
    };
  },
  errorComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-muted-foreground">Something went wrong loading this design.</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl">Design not found</h1>
      <Link to="/print-designs" className="mt-4 inline-block text-primary underline">
        Back to print designs
      </Link>
    </div>
  ),
  component: DesignPage,
});

// money() no longer converts currency, so this is the figure shown and charged.
const PRICE = 25.00;

function DesignPage() {
  const { design } = Route.useLoaderData();
  const add = useCart((s) => s.add);

  const handleAdd = () => {
    add(
      {
        id: `design-${design.id}`,
        slug: design.slug,
        title: `${design.name} — Digital Fabric Print Design`,
        image: design.url,
        salePrice: PRICE,
        originalPrice: PRICE,
        discount: 0,
        category: design.category,
        description: "Digital fabric print design",
        images: [design.url],
        options: [],
        reviews: [],
      } as unknown as Parameters<typeof add>[0],
      1,
    );
    toast.success(`${design.name} added — digital fabric print design`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
        <Link to="/print-designs" className="hover:text-primary">
          Print Designs
        </Link>
        <span className="mx-2">/</span>
        <span>{design.category}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-md bg-muted">
          <img src={design.url} alt={design.name} className="w-full object-cover" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {design.category} Collection
          </p>
          <h1 className="mt-2 font-display text-4xl">{design.name}</h1>
          <p className="mt-3 text-3xl font-semibold text-primary">$25.00</p>
          <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
            Digital fabric print design · For fabric printing use
          </p>

          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Colour variation available on request",
              "Delivered by email once your scale is confirmed",
              "Rescaled to your requested fabric width",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handleAdd}
            className="mt-8 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary/90"
          >
            Add fabric print design — $25.00
          </button>

          <Link
            to="/fabric-printing"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary"
          >
            <Mail className="h-4 w-4" /> Print this on fabric — get a quote
          </Link>

          <Disclaimer />
        </div>
      </div>
    </div>
  );
}

function Disclaimer() {
  return (
    <div className="mt-10 rounded-2xl border-2 border-primary/40 bg-primary/5 p-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-6 w-6 shrink-0 text-primary" />
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground">
            Important Disclaimer
          </h2>
          <p className="mt-2 text-sm text-foreground">
            This purchase is <strong>NOT a physical fabric</strong>. You are buying a{" "}
            <strong>digital fabric print design</strong> intended for fabric printing. To have this
            design printed on fabric, please contact us directly.
          </p>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <p>
              The digital file grants you the right to use the design for your fabric printing or
              related projects.
            </p>
            <p>Files are delivered via email after we have agreed on your scale / size.</p>
            <p>
              Colour variation is available on request. Once your preferred scale is confirmed,
              we'll rescale the design accordingly and deliver it to your email.
            </p>
            <p>
              Interested in bringing this design to life on fabric? We offer printing on a variety
              of fabric types —{" "}
              <Link to="/fabric-printing" className="font-semibold text-primary underline">
                see our fabric printing services
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
