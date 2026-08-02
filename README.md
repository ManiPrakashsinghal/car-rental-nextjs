# Self Drive Car Rental — Next.js Website

A fast, SEO-friendly car rental website built with **Next.js 14 (App Router)**,
**TypeScript**, and **Tailwind CSS**. Visitors can browse cars by category and
contact you instantly via **WhatsApp, phone call, or email** — no backend or
database required.

Inspired by the layout/flow of self-drive rental sites like apcarrental.com,
but with original design, copy, and code.

---

## ✨ Features

- Home page with hero, category browser, featured cars, "why choose us", testimonials
- `/cars` — full fleet listing with category filter (Hatchback / Sedan / SUV / Luxury)
- `/cars/[slug]` — individual car detail page (auto-generated for every car)
- `/contact` — call / WhatsApp / email cards + Google Maps embed
- Floating WhatsApp + Call buttons on every page
- SEO: per-page metadata, Open Graph tags, JSON-LD structured data
  (`AutoRental` + `Product` schema), auto-generated `sitemap.xml` and `robots.txt`
- Fully responsive, keyboard-accessible, reduced-motion friendly
- One config file to rebrand the entire site

---

## 🗂 Project structure

```
src/
  app/
    layout.tsx          → global layout, fonts, metadata, JSON-LD
    page.tsx            → homepage
    cars/page.tsx        → all-cars listing + category filter
    cars/[slug]/page.tsx → single car detail page
    contact/page.tsx     → contact page
    sitemap.ts            → auto-generated sitemap.xml
    robots.ts             → auto-generated robots.txt
    not-found.tsx          → custom 404
  components/            → Header, Footer, Hero, CarCard, etc.
  data/
    siteConfig.ts         → 🔧 EDIT THIS: business name, phone, WhatsApp, email, address, maps
    cars.ts                → 🔧 EDIT THIS: your car inventory, prices, specs, images
public/
  images/                 → put your own photos, logo and og-image here
```

---

## 🚀 Getting started

Requires **Node.js 18.18+**.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Build for production:

```bash
npm run build
npm start
```

---

## 🔧 Customize your site (do this first)

### 1. Business details
Edit `src/data/siteConfig.ts`:
- `businessName`, `city`, `region`
- `phoneRaw` / `phoneDisplay` — used for the Call button (`tel:` link)
- `whatsappNumber` / `whatsappDefaultMessage` — used for the WhatsApp button
  (number must include country code, digits only, no `+` or spaces)
- `email` — used for the Email button (`mailto:` link)
- `address` and `mapsEmbedSrc` — get your embed URL from Google Maps →
  Share → Embed a map → copy the `src="..."` value
- `siteUrl` — your real domain, once you have one (used in SEO tags & sitemap)

### 2. Your cars
Edit `src/data/cars.ts` — add, remove, or edit cars. Each car needs:
`slug` (used in the URL), `name`, `category`, `pricePerDay`, `transmission`,
`seats`, `luggage`, `fuel`, `tankOrRange`, `rating`, `reviewCount`, `image`,
`description`, `features`.

The starter uses free Unsplash stock photos so the site looks complete out of
the box. Replace `image` with your own photo URLs (or files placed in
`public/images/` and referenced as `/images/your-car.jpg`) whenever you have
real photos.

### 3. Colors & fonts (optional)
Defined in `tailwind.config.js` (`ink`, `sand`, `gold`, `maroon`) and
`src/app/layout.tsx` (Fraunces / Manrope / IBM Plex Mono via `next/font/google`).

---

## 🌐 Deploying

**Vercel (recommended, zero config):**
1. Push this project to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Deploy — done.

**Fully static export (no server at all):**
If you want plain static HTML/CSS/JS you can host anywhere (Netlify, GitHub
Pages, S3, cPanel, etc.), open `next.config.js` and:
1. Uncomment `output: "export"`.
2. Set `images.unoptimized: true` under `images`.
3. Run `npm run build` — the static site is generated in the `out/` folder.

---

## ✅ SEO checklist before going live

- [ ] Set the real `siteUrl` in `siteConfig.ts`
- [ ] Add a Google Search Console verification code (`googleSiteVerification`)
- [ ] Add a real Open Graph image at `public/images/og-image.jpg`
- [ ] Replace stock photos with real car photos (with descriptive filenames)
- [ ] Submit `https://yourdomain.com/sitemap.xml` to Google Search Console
- [ ] Set up Google Business Profile with matching NAP (name, address, phone)

---

## 📄 License

This starter is yours to use and modify freely for your business.
