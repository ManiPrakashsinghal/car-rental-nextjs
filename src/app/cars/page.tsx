import type { Metadata } from "next";
import Link from "next/link";
import CarCard from "@/components/CarCard";
import { cars, categories, type CarCategory } from "@/data/cars";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: `Self Drive Cars for Rent in ${siteConfig.city}`,
  description: `Browse our full fleet of hatchbacks, sedans, SUVs and luxury self-drive cars available for rent in ${siteConfig.city}. Transparent daily pricing, book by call or WhatsApp.`,
  alternates: { canonical: `${siteConfig.siteUrl}/cars` },
};

export default function CarsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const activeCategory = searchParams?.category as CarCategory | undefined;
  const isValidCategory = categories.some((c) => c.label === activeCategory);
  const filtered = isValidCategory
    ? cars.filter((c) => c.category === activeCategory)
    : cars;

  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-maroon">
        Our fleet
      </p>
      <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">
        Self drive cars in {siteConfig.city}
      </h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Every car is inspected, sanitized and fuelled before it reaches you. Pick a
        category below, or browse the full fleet.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/cars"
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            !isValidCategory
              ? "border-ink bg-ink text-sand"
              : "border-ink/20 text-ink hover:border-ink"
          }`}
        >
          All cars
        </Link>
        {categories.map((c) => (
          <Link
            key={c.label}
            href={`/cars?category=${c.label}`}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              activeCategory === c.label
                ? "border-ink bg-ink text-sand"
                : "border-ink/20 text-ink hover:border-ink"
            }`}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((car) => (
            <CarCard key={car.slug} car={car} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-ink/60">
          No cars in this category right now — check back soon or{" "}
          <Link href="/contact" className="underline">
            contact us
          </Link>{" "}
          and we all help you find one.
        </p>
      )}
    </section>
  );
}
