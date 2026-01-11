import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bali Enterprises | Global Holding & Investment Gateway to Indonesia",
  description: "Bali Enterprises: Your trusted gateway for international investment and strategic partnerships in Indonesia. Global holding company enabling cross-border business development with proven operational infrastructure.",
  keywords: ["Bali Enterprises", "Indonesia investment", "international business", "PT PMA", "business formation Indonesia", "ASEAN partnerships", "Indonesian market entry", "holding company"],
  authors: [{ name: "Bali Enterprises" }],
  icons: {
    icon: "https://iili.io/fYu9NHB.png",
  },
  openGraph: {
    title: "Bali Enterprises | Global Holding & Investment Gateway",
    description: "Your trusted gateway for international investment and strategic partnerships in Indonesia",
    url: "https://bali.enterprises",
    siteName: "Bali Enterprises",
    type: "website",
    images: [
      {
        url: "https://iili.io/fYu9NHB.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
