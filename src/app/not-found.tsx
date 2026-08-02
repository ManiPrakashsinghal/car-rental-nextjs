import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-start px-5 py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-maroon">404</p>
      <h1 className="mt-2 font-display text-4xl text-ink">
        This road doesn't lead anywhere
      </h1>
      <p className="mt-4 text-ink/70">
        The page you're looking for has moved or doesn't exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-ink px-6 py-3 font-semibold text-sand transition hover:bg-maroon"
      >
        Back to home
      </Link>
    </section>
  );
}
