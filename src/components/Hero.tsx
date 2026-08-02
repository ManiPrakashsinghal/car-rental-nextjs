import Link from "next/link";
import Image from "next/image";
import { siteConfig, telLink, whatsappLink } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-sand">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-24 md:pb-28 md:pt-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          Self drive rentals · {siteConfig.city}, {siteConfig.region}
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-6xl">
          Take the wheel of {siteConfig.city}, at your own pace.
        </h1>
        <p className="mt-5 max-w-lg text-sand/80 md:text-lg">
          Hatchbacks, sedans, SUVs and premium cars, ready whenever you are. No
          middlemen, no waiting rooms — just call, WhatsApp or book online.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/cars"
            className="rounded-full bg-gold px-6 py-3 font-semibold text-ink transition hover:bg-gold-light"
          >
            Browse cars
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-sand/30 px-6 py-3 font-semibold text-sand transition hover:bg-sand/10"
          >
            WhatsApp us
          </a>
          <a
            href={telLink()}
            className="rounded-full border border-sand/30 px-6 py-3 font-mono font-semibold text-sand transition hover:bg-sand/10"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
