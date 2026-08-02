const testimonials = [
  {
    quote:
      "Booking was simple and the car was delivered right on time, spotless and full of fuel.",
    name: "Rahul Verma",
  },
  {
    quote:
      "Reliable and affordable. The vehicle was well maintained and drove smoothly the whole trip.",
    name: "Anjali Sharma",
  },
  {
    quote:
      "Quick paperwork, helpful staff, and a clean, comfortable car. Would book again in a heartbeat.",
    name: "Mohit Singh",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-sand-dark/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs uppercase tracking-widest text-maroon">
          Our happy clients
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">
          Trusted by travelers across {"Jaipur"}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm"
            >
              <div className="text-gold" aria-hidden="true">
                ★★★★★
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-ink/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 font-display text-base text-ink">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
