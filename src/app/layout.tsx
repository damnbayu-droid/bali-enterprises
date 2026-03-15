// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bali.enterprises"),
  title: "Bali Enterprises | Global Holding & Investment Gateway to Indonesia",
  description:
    "Bali Enterprises: Your trusted gateway for international investment and strategic partnerships in Indonesia.",
  keywords: [
    "Bali Enterprises",
    "Indonesia investment",
    "international business",
    "PT PMA",
    "ASEAN partnerships",
  ],
  icons: {
    icon: "/image/Logobalienterprises.webp",
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
        alt: "Bali Enterprises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bali Enterprises | Global Holding & Investment Gateway",
    description: "Your trusted gateway for international investment and strategic partnerships in Indonesia.",
    images: ["/image/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
