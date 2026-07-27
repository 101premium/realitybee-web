import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sizing-framing")({
  head: () => ({
    meta: [
      { title: "Sizing & Framing — SolunaSoul" },
      { name: "description", content: "Available print sizes, aspect ratios, and framing guidance for SolunaSoul art prints." },
      { property: "og:title", content: "Sizing & Framing — SolunaSoul" },
      { property: "og:description", content: "Choose the right size and frame for your space." },
    ],
  }),
  component: SizingFramingPage,
});

function SizingFramingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Help</p>
      <h1 className="mt-3 font-display text-4xl">Sizing &amp; framing</h1>
      <p className="mt-4 text-muted-foreground">
        Every design is offered in a range of standard sizes so you can
        choose the perfect fit for your wall — from an intimate desk print
        to a bold statement piece.
      </p>

      <h2 className="mt-10 font-display text-2xl">Available sizes</h2>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        <li><span className="font-semibold text-foreground">A5</span> — 148 × 210 mm · gallery walls &amp; small nooks</li>
        <li><span className="font-semibold text-foreground">A4</span> — 210 × 297 mm · desks, shelves &amp; hallways</li>
        <li><span className="font-semibold text-foreground">A3</span> — 297 × 420 mm · a confident feature print</li>
        <li><span className="font-semibold text-foreground">A2</span> — 420 × 594 mm · statement wall art</li>
        <li><span className="font-semibold text-foreground">A1</span> — 594 × 841 mm · large focal centrepiece</li>
      </ul>

      <h2 className="mt-10 font-display text-2xl">Framing your print</h2>
      <p className="mt-3 text-muted-foreground">
        Prints are sold unframed so you can style them to match your space.
        Standard A-sizes fit a wide range of ready-made frames, so no custom
        framing is required.
      </p>
      <p className="mt-3 text-muted-foreground">
        For a modern look try a slim black or natural oak frame. For a
        gallery finish, choose a frame with a mount (mat board) one size
        larger than your print — for example, mount an A3 print inside an
        A2 frame.
      </p>

      <h2 className="mt-10 font-display text-2xl">Paper &amp; finish</h2>
      <p className="mt-3 text-muted-foreground">
        Printed on premium 259gsm matte fine-art paper with archival inks
        for rich, long-lasting colour and a smooth, glare-free finish.
      </p>
    </div>
  );
}