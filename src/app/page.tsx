import Link from "next/link";
import Hero from "@/components/Hero";
import CarCard from "@/components/CarCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import RouteDivider from "@/components/RouteDivider";
import { categories, cars } from "@/data/cars";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  const featured = cars.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Category strip */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="font-mono text-xs uppercase tracking-widest text-maroon">
          Find your drive
        </p>
        <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">
          A car for every kind of trip
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.label}
              href={`/cars?category=${c.label}`}
              className="group rounded-2xl border border-ink/10 bg-white/60 p-6 transition hover:border-gold hover:bg-white"
            >
              <h3 className="font-display text-xl text-ink group-hover:text-maroon">
                {c.label}
              </h3>
              <p className="mt-2 text-sm text-ink/60">{c.blurb}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-gold-dark">
                View {c.label.toLowerCase()}s →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <RouteDivider className="mx-auto max-w-6xl text-ink/10" />

      {/* Featured cars */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-maroon">
              Popular right now
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">
              Featured cars in {siteConfig.city}
            </h2>
          </div>
          <Link
            href="/cars"
            className="rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-sand"
          >
            View all cars
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="rounded-3xl bg-ink px-8 py-14 text-center text-sand md:px-16">
          <h2 className="font-display text-3xl md:text-4xl">
            Ready to hit the road?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sand/70">
            Call, WhatsApp, or email us — we'll get you behind the wheel today.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/cars"
              className="rounded-full bg-gold px-6 py-3 font-semibold text-ink transition hover:bg-gold-light"
            >
              Browse all cars
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-sand/30 px-6 py-3 font-semibold text-sand transition hover:bg-sand/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
