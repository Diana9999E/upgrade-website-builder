import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import CookieConsent from "@/components/CookieConsent";
import JsonLd from "@/components/JsonLd";
import { site, primaryLocation, ordering } from "@/lib/data";
import { restaurantSchema, websiteSchema } from "@/lib/structured-data";

const loc = primaryLocation;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Egg Bistro | Brunch, Breakfast & Lunch in Hampton Roads, VA",
    template: "%s | The Egg Bistro",
  },
  description: site.shortDesc,
  applicationName: site.name,
  keywords: [
    "brunch Virginia Beach",
    "breakfast Chesapeake VA",
    "The Egg Bistro",
    "benedicts Hampton Roads",
    "best brunch Virginia Beach",
    "breakfast near me",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "The Egg Bistro | Brunch, Breakfast & Lunch in Hampton Roads, VA",
    description: site.shortDesc,
    url: site.url,
    locale: "en_US",
    images: [{ url: "/img/og-default.png", width: 1200, height: 630, alt: "The Egg Bistro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Egg Bistro",
    description: site.shortDesc,
    images: ["/img/og-default.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/img/logo.png", apple: "/img/logo.png" },
  appleWebApp: { capable: true, title: site.name, statusBarStyle: "default" },
  other: {
    "geo.region": `US-${loc.region}`,
    "geo.placename": loc.city,
    "geo.position": `${loc.lat};${loc.lng}`,
    ICBM: `${loc.lat}, ${loc.lng}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#fbf4e6" />
      </head>
      <body>
        <JsonLd data={[restaurantSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <PromoPopup />
        <CookieConsent />
        <Script src={ordering.loaderSrc} strategy="afterInteractive" />
      </body>
    </html>
  );
}
