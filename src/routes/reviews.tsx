import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { serviceReviews, type ServiceReview } from "@/data/service-reviews";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer reviews — Reality Bee Limited" },
      {
        name: "description",
        content:
          "Verified customer reviews for Reality Bee Limited — corporate branding, fabric printing, branded gifts and art prints from our Lagos studio.",
      },
      { property: "og:title", content: "Customer reviews — Reality Bee Limited" },
      { property: "og:description", content: "What clients say about our printing, branding and fabric work." },
    ],
  }),
  component: ReviewsPage,
});

const featuredArtReviews = [
  {
    author: "Nikki",
    stars: 5,
    text: "Looks better in person. I was blown away! Such an economical way to add a rich piece of art to my space.",
    date: "08 Jun, 2026",
  },
  {
    author: "Devine",
    stars: 5,
    text: "I can't even... Just look at this print! It's amazing. I'm obsessed with the texture that looks like I could reach out and touch it.",
    date: "27 Jan, 2026",
  },
  {
    author: "Rachel",
    stars: 5,
    text: "I love the vibrant colors. I can't wait to put it up on the wall!",
    date: "27 Feb, 2026",
  },
  {
    author: "Paula",
    stars: 5,
    text: "Vibrant art! I love it. Great quality and shipped quickly.",
    date: "14 Feb, 2026",
  },
];

function ReviewsPage() {
  const totalCount = featuredArtReviews.length + serviceReviews.length;
  const avg = (
    (featuredArtReviews.reduce((s, r) => s + r.stars, 0) +
      serviceReviews.reduce((s, r) => s + r.stars, 0)) /
    Math.max(totalCount, 1)
  ).toFixed(1);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <div className="flex justify-center text-accent">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
        </div>
        <p className="mt-3 font-display text-5xl">{avg} out of 5</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Based on {totalCount} verified reviews across printing, fabric, branded gifts and art prints
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {serviceReviews.map((r, i) => (
          <ServiceReviewCard key={i} r={r} />
        ))}
        {featuredArtReviews.map((r, i) => (
          <div key={i} className="rounded-md border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                Art Prints
              </span>
              <div className="flex text-accent">
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>
            <Quote className="mt-3 h-5 w-5 text-primary/40" />
            <p className="mt-1 text-sm leading-relaxed">“{r.text}”</p>
            <div className="mt-4 border-t border-border/60 pt-3 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{r.author}</span>
              <span className="float-right">{r.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceReviewCard({ r }: { r: ServiceReview }) {
  return (
    <div className="rounded-md border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
          {r.category}
        </span>
        <div className="flex text-accent">
          {Array.from({ length: r.stars }).map((_, j) => (
            <Star key={j} className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
      <Quote className="mt-3 h-5 w-5 text-primary/40" />
      <p className="mt-1 text-sm leading-relaxed">{r.text}</p>
      <div className="mt-4 border-t border-border/60 pt-3 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">{r.author}</span>
        {r.company && <> · {r.company}</>}
        <span className="float-right">{r.date}</span>
      </div>
    </div>
  );
}
