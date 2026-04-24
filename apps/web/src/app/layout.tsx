import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BookingProvider } from "@/components/booking-modal";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { RouteScrollTop } from "@/components/route-scroll-top";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { siteConfig } from "@/lib/utils";

const displayFont = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const bodyFont = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
// Playful variant is same as display in this direction
const playfulFont = Fredoka({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playful",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "10to10 Adventures",
    "Khammam play area",
    "kids play school Khammam",
    "birthday party venue Khammam",
    "family entertainment Telangana",
    "soft play Khammam",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ff5a8a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mamatha College Road, Above Just Bake",
    addressLocality: "Khammam",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  priceRange: "₹₹",
  sameAs: [siteConfig.instagram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${displayFont.variable} ${bodyFont.variable} ${playfulFont.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">Skip to main content</a>
        <SmoothScroll>
          <BookingProvider>
            <ScrollProgress />
            <RouteScrollTop />
            <Navbar />
            <main id="main" className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
            <StickyMobileCta />
          </BookingProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
