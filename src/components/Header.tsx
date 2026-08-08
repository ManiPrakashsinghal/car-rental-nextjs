import Link from "next/link";
import { siteConfig, telLink } from "@/data/siteConfig";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-sand/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sand font-display text-lg">
            B
          </span>
          <span className="font-display text-xl tracking-tight text-ink">
            {siteConfig.businessName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 font-body text-sm font-medium text-ink/80 md:flex">
          <Link href="/" className="transition hover:text-maroon">
            Home
          </Link>
          <Link href="/cars" className="transition hover:text-maroon">
            Cars
          </Link>
          <Link href="/contact" className="transition hover:text-maroon">
            Contact
          </Link>
        </nav>

        <a
          href={telLink()}
          className="hidden rounded-full bg-ink px-5 py-2.5 font-mono text-sm text-sand transition hover:bg-maroon md:inline-block"
        >
          {siteConfig.phoneDisplay}
        </a>

        <Link
          href="/cars"
          className="rounded-full bg-gold px-4 py-2 font-body text-sm font-semibold text-ink transition hover:bg-gold-dark md:hidden"
        >
          Cars
        </Link>
      </div>
    </header>
  );
}
