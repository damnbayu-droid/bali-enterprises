// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"], weight: ["700", "900"], variable: "--font-outfit" });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'business',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Bali Enterprises | Global Holding & Investment Gateway",
    description:
      "Your trusted gateway for international investment and strategic partnerships in Indonesia",
    url: "https://bali.enterprises",
    siteName: "Bali Enterprises",
    locale: 'en_US',
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
  const masterNodeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": "https://bali.enterprises/#organization",
    "name": "PT Bali Enterprises Group",
    "legalName": "PT Bali Enterprises Group",
    "url": "https://bali.enterprises",
    "logo": "https://bali.enterprises/image/Logobalienterprises.webp",
    "email": "info@bali.enterprises",
    "description": "A diversified holding company governing a multi-sectoral ecosystem of technology, media, immigration law, hospitality, and wellness in Indonesia.",
    "taxID": "0100000008117681",
    "identifier": [
      { "@type": "PropertyValue", "name": "NIB", "value": "0402260034806" },
      { "@type": "PropertyValue", "name": "AHU", "value": "AHU-00065.AH.02.01.TAHUN 2020" }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Tibungsari No.11C, Padangsambian Kaja",
      "addressLocality": "Denpasar Barat, Denpasar",
      "addressRegion": "Bali",
      "postalCode": "80117",
      "addressCountry": "ID"
    },
    "founder": {
      "@type": "Person",
      "name": "Bayu Damopolii-Manoppo",
      "jobTitle": "Founder & Strategic Director",
      "url": "https://www.linkedin.com/in/balihelp/",
      "sameAs": [
        "https://www.linkedin.com/in/bayu-damopolii-887ab883/",
        "https://www.linkedin.com/in/balihelp/"
      ]
    },
    "subOrganization": [
      {
        "@type": "Organization",
        "@id": "https://indonesianvisas.com/#organization",
        "name": "PT Indonesian Visas Agency (MYVISA)",
        "legalName": "PT Indonesian Visas Agency",
        "alternateName": "MYVISA",
        "url": "https://indonesianvisas.com",
        "description": "National flagship for Indonesian immigration and visa facilitation."
      }
    ],
    "sameAs": [
      "https://x.com/IndonesianVisas",
      "https://www.linkedin.com/in/bayu-damopolii-887ab883/",
      "https://maps.app.goo.gl/YNDR3nNDLX2JPm2S6"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bali Enterprises",
    "url": "https://bali.enterprises",
    "publisher": {
      "@id": "https://bali.enterprises/#organization"
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(masterNodeJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${outfit.variable}`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
