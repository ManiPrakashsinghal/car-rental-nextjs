import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cars, getCarBySlug } from "@/data/cars";
import { siteConfig, telLink, whatsappLink, mailtoLink } from "@/data/siteConfig";
import CarCard from "@/components/CarCard";

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const car = getCarBySlug(params.slug);
  if (!car) return {};

  const title = `${car.name} Self Drive Rental in ${siteConfig.city} — ₹${car.pricePerDay}/day`;
  const description = `Rent the ${car.name} for self-drive in ${siteConfig.city}. ${car.transmission}, ${car.seats} seats, ${car.fuel}. Starting at ₹${car.pricePerDay}/day. Book by call or WhatsApp.`;

  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.siteUrl}/cars/${car.slug}` },
    openGraph: {
      title,
      description,
      images: [{ url: car.image }],
    },
  };
}

export default function CarDetailPage({ params }: { params: { slug: string } }) {
  const car = getCarBySlug(params.slug);
  if (!car) notFound();

  const related = cars
    .filter((c) => c.category === car.category && c.slug !== car.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: car.name,
    image: car.image,
    description: car.description,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: car.pricePerDay,
      availability: "https://schema.org/InStock",
      url: `${siteConfig.siteUrl}/cars/${car.slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: car.rating,
      reviewCount: car.reviewCount,
    },
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-ink/50">
        <Link href="/cars" className="hover:text-maroon">
          All cars
        </Link>{" "}
        / <span className="text-ink/70">{car.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src={car.image}
            alt={`${car.name} self-drive rental in ${siteConfig.city}`}
            fill
            priority
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-ink/85 px-3 py-1 font-mono text-xs uppercase tracking-wide text-sand">
            {car.category}
          </span>
        </div>

        <div>
          <h1 className="font-display text-4xl text-ink">{car.name}</h1>
          <p className="mt-1 text-sm text-ink/60">
            ★ {car.rating} · {car.reviewCount} reviews · Minimum {car.minBookingDays}{" "}
            day booking
          </p>

          <p className="mt-5 leading-relaxed text-ink/80">{car.description}</p>

          <ul className="mt-6 grid grid-cols-2 gap-3 font-mono text-xs text-ink/70 sm:grid-cols-3">
            <li className="rounded-lg bg-sand-dark px-3 py-2">{car.transmission}</li>
            <li className="rounded-lg bg-sand-dark px-3 py-2">{car.seats} Seats</li>
            <li className="rounded-lg bg-sand-dark px-3 py-2">{car.luggage} Luggage</li>
            <li className="rounded-lg bg-sand-dark px-3 py-2">{car.fuel}</li>
            <li className="rounded-lg bg-sand-dark px-3 py-2">{car.tankOrRange}</li>
          </ul>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-wide text-ink/50">
              Starting from
            </p>
            <p className="font-display text-4xl text-maroon">
              ₹{car.pricePerDay.toLocaleString("en-IN")}
              <span className="text-base font-body font-normal text-ink/60">
                {" "}
                / day
              </span>
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={whatsappLink(`Hi, I want to book the ${car.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Book on WhatsApp
            </a>
            <a
              href={telLink()}
              className="rounded-full bg-ink px-6 py-3 font-semibold text-sand transition hover:bg-maroon"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={mailtoLink(`Booking enquiry — ${car.name}`)}
              className="rounded-full border border-ink/20 px-6 py-3 font-semibold text-ink transition hover:border-ink"
            >
              Email us
            </a>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-lg text-ink">What's included</h2>
            <ul className="mt-3 space-y-1.5 text-sm text-ink/70">
              {car.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <h2 className="font-display text-2xl text-ink">
            More {car.category.toLowerCase()}s you might like
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <CarCard key={c.slug} car={c} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
