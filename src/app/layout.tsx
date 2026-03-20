// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bali.enterprises"),
  title: {
    default: "Bali Enterprises | Global Holding & Investment Gateway to Indonesia",
    template: "%s | Bali Enterprises"
  },
  description:
    "Bali Enterprises: Your trusted gateway for international investment and strategic partnerships in Indonesia. Expert advisors for PT PMA, Corporate Governance, and ASEAN entry.",
  keywords: [
    "Bali Enterprises",
    "Indonesia investment",
    "international business",
    "PT PMA",
    "ASEAN partnerships",
    "Bali business consulting",
    "Foreign direct investment Indonesia",
  ],
  alternates: {
    canonical: "https://bali.enterprises",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/image/Logobalienterprises.webp",
    apple: "/image/Logobalienterprises.webp",
  },
  openGraph: {
    title: "Bali Enterprises | Global Holding & Investment Gateway",
    description:
      "Your trusted gateway for international investment and strategic partnerships in Indonesia",
    url: "https://bali.enterprises",
    siteName: "Bali Enterprises",
    type: "website",
    images: [
      {
        url: "/image/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Bali Enterprises Corporate Gateway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Enterprises | Global Holding & Investment Gateway",
    description: "Your trusted gateway for international investment and strategic partnerships in Indonesia.",
    images: ["/image/og-image.webp"],
    creator: "@balienterprises",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bali Enterprises",
    "url": "https://bali.enterprises",
    "logo": "https://bali.enterprises/image/Logobalienterprises.webp",
    "description": "Global Holding & Investment Gateway to Indonesia, providing corporate advisory and strategic entry frameworks.",
    "sameAs": [
      "https://twitter.com/balienterprises",
      "https://www.linkedin.com/company/bali-enterprises"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bali",
      "addressCountry": "ID"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bali Enterprises",
    "url": "https://bali.enterprises",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://bali.enterprises/sitemap?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
