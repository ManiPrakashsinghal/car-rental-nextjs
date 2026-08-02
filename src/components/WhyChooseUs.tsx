const reasons = [
  {
    title: "24/7 roadside support",
    body: "If anything goes wrong on the road, our team is a call away, any hour of the day.",
  },
  {
    title: "Transparent pricing",
    body: "The price you see is the price you pay — no surprise charges at drop-off.",
  },
  {
    title: "Pickup & drop anywhere",
    body: "Airport, railway station, or your hotel doorstep — we bring the car to you.",
  },
  {
    title: "Well maintained fleet",
    body: "Every car is serviced, sanitized and inspected before it reaches you.",
  },
  {
    title: "Short or long term",
    body: "Rent for a day, a week, or a month — with better rates the longer you stay.",
  },
  {
    title: "4.8★ rated service",
    body: "Thousands of happy renters trust us for their self-drive trips.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-maroon">
        Why rent with us
      </p>
      <h2 className="mt-2 max-w-xl font-display text-3xl text-ink md:text-4xl">
        Everything you'd want from a rental, nothing you wouldn't.
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl border border-ink/10 bg-white/60 p-6 transition hover:border-gold/60"
          >
            <h3 className="font-display text-lg text-ink">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{r.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
