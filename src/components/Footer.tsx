import Link from "next/link";
import { siteConfig, telLink, mailtoLink, whatsappLink } from "@/data/siteConfig";
import RouteDivider from "./RouteDivider";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl">{siteConfig.businessName}</div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-sand/70">
              Convenient, affordable self-drive car rentals in {siteConfig.city}. Well
              maintained cars, flexible bookings, and 24/7 support.
            </p>
            <div className="mt-4 flex gap-3 text-sm">
              <a
                href={siteConfig.socials.instagram}
                className="text-sand/70 underline-offset-4 hover:text-gold hover:underline"
              >
                Instagram
              </a>
              <a
                href={siteConfig.socials.facebook}
                className="text-sand/70 underline-offset-4 hover:text-gold hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-gold">
              Contact
            </div>
            <ul className="mt-3 space-y-2 text-sm text-sand/80">
              <li>
                <a href={telLink()} className="hover:text-gold">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailtoLink()} className="hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="pt-1 text-sand/60">{siteConfig.address}</li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-gold">
              Explore
            </div>
            <ul className="mt-3 space-y-2 text-sm text-sand/80">
              <li>
                <Link href="/cars" className="hover:text-gold">
                  All cars
                </Link>
              </li>
              <li>
                <Link href="/cars?category=SUV" className="hover:text-gold">
                  SUVs
                </Link>
              </li>
              <li>
                <Link href="/cars?category=Luxury" className="hover:text-gold">
                  Luxury cars
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold">
                  Contact &amp; location
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <RouteDivider className="my-10 text-sand/20" />

        <div className="flex flex-col gap-2 text-xs text-sand/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>
          <p>Built for self-drive travelers in {siteConfig.city}.</p>
        </div>
      </div>
    </footer>
  );
}
