import Image from "next/image";
import Link from "next/link";
import type { Car } from "@/data/cars";
import { whatsappLink } from "@/data/siteConfig";

const specs = (car: Car) => [
  car.transmission,
  `${car.seats} Seat`,
  `${car.luggage} Luggage`,
  car.fuel,
  car.tankOrRange,
];

export default function CarCard({ car }: { car: Car }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white/60 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/cars/${car.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <Image
          src={car.image}
          alt={`${car.name} self-drive rental car`}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 font-mono text-xs uppercase tracking-wide text-sand">
          {car.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link href={`/cars/${car.slug}`}>
              <h3 className="font-display text-xl text-ink hover:text-maroon">
                {car.name}
              </h3>
            </Link>
            <p className="mt-0.5 text-xs text-ink/60">
              ★ {car.rating} · {car.reviewCount} reviews · Min {car.minBookingDays} day
              booking
            </p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-ink/70">
          {specs(car).map((s) => (
            <li key={s} className="rounded bg-sand-dark px-2 py-1">
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-ink/50">Starting from</p>
            <p className="font-display text-2xl text-maroon">
              ₹{car.pricePerDay.toLocaleString("en-IN")}
              <span className="text-sm font-body font-normal text-ink/60">/day</span>
            </p>
          </div>
          <a
            href={whatsappLink(`Hi, I want to book the ${car.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold-dark"
          >
            Book
          </a>
        </div>
      </div>
    </article>
  );
}
