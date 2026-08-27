import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { siteConfig } from "@/data/siteConfig";
import Script from "next/script";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.businessName} | Self Drive Car Rental in ${siteConfig.city}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: `Book self-drive hatchbacks, sedans, SUVs and luxury cars in ${siteConfig.city}. Affordable daily rates, pickup & drop anywhere, and 24/7 support.`,
  keywords: [
    `car rental ${siteConfig.city}`,
    `self drive car rental ${siteConfig.city}`,
    "rent a car",
    "self drive cars",
    `SUV rental ${siteConfig.city}`,
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} | Self Drive Car Rental in ${siteConfig.city}`,
    description: `Book self-drive hatchbacks, sedans, SUVs and luxury cars in ${siteConfig.city}. Affordable daily rates, pickup & drop anywhere, and 24/7 support.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Self Drive Car Rental in ${siteConfig.city}`,
    description: `Book self-drive hatchbacks, sedans, SUVs and luxury cars in ${siteConfig.city}.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: siteConfig.businessName,
    image: `${siteConfig.siteUrl}/images/og-image.jpg`,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: "IN",
    },
    url: siteConfig.siteUrl,
    priceRange: "₹₹",
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18401411338"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18401411338');
        `}
      </Script>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
