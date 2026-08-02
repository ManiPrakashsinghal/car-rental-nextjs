import type { Metadata } from "next";
import { siteConfig, telLink, whatsappLink, mailtoLink } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.businessName} — call, WhatsApp or email us to book your self-drive car in ${siteConfig.city}.`,
  alternates: { canonical: `${siteConfig.siteUrl}/contact` },
};

const cards = [
  {
    label: "Call us",
    value: siteConfig.phoneDisplay,
    href: telLink(),
    hint: "Fastest way to check availability right now.",
    accent: "bg-ink text-sand hover:bg-maroon",
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: whatsappLink(),
    hint: "Send your dates and we'll confirm within minutes.",
    accent: "bg-[#25D366] text-white hover:opacity-90",
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: mailtoLink("Booking enquiry"),
    hint: "Good for detailed or long-term rental requests.",
    accent: "bg-gold text-ink hover:bg-gold-dark",
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-maroon">
        Get in touch
      </p>
      <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">
        Let's get you on the road
      </h1>
      <p className="mt-4 max-w-xl text-ink/70">
        Reach us however is easiest — call for the fastest response, WhatsApp to send
        your travel dates, or email for anything detailed.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {cards.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.label === "WhatsApp" ? "_blank" : undefined}
            rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
            className={`flex flex-col rounded-2xl p-6 transition ${c.accent}`}
          >
            <span className="font-mono text-xs uppercase tracking-widest opacity-70">
              {c.label}
            </span>
            <span className="mt-2 font-display text-2xl">{c.value}</span>
            <span className="mt-3 text-sm opacity-80">{c.hint}</span>
          </a>
        ))}
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-ink">Visit us</h2>
          <p className="mt-3 text-ink/70">{siteConfig.address}</p>

          <h3 className="mt-8 font-display text-lg text-ink">Rental requirements</h3>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink/70">
            <li>Valid driving license (photocopy required at pickup)</li>
            <li>One original government-issued photo ID</li>
            <li>Minimum driver age: 18 years</li>
            <li>Minimum booking duration: {siteConfig.businessName ? "1 day" : ""}</li>
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink/10">
          <iframe
            src={siteConfig.mapsEmbedSrc}
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${siteConfig.businessName} location map`}
          />
        </div>
      </div>
    </section>
  );
}
