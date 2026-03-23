import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Globe, Building2, TrendingUp, ShieldCheck, Map } from 'lucide-react'
import Hero from '@/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Bali Enterprises | Global Holding & Investment Gateway to Indonesia",
  description: "Your trusted gateway for international investment and strategic partnerships in Indonesia. We enable cross-border business development through professional governance and local execution strength.",
  alternates: {
    canonical: "https://bali.enterprises",
  },
  openGraph: {
    title: "Bali Enterprises | Indonesia Investment Gateway",
    description: "Empowering international vision through professional governance and local execution in Indonesia.",
    url: "https://bali.enterprises",
    type: "website",
  },
}

export default function Home() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "PT PMA Setup & Investment Advisory",
    "provider": {
      "@type": "Organization",
      "name": "Bali Enterprises",
      "url": "https://bali.enterprises"
    },
    "areaServed": "Indonesia",
    "description": "Professional guidance for foreign direct investment, company formation (PT PMA), and strategic business expansion in Bali, Jakarta, and across the Indonesian archipelago."
  };

  return (
    <div className="flex flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Hero />

      {/* 2024 SECTOR FOCUS SECTION - MODIFIED FOR BETTER PERFORMANCE & SEO */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif italic font-bold tracking-tight mb-6">
              Why Choose Bali Enterprises
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto italic font-medium leading-relaxed">
              Connecting international vision with Indonesian opportunity through professional governance and strategic execution strength.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-24">
            <div className="group p-10 rounded-[2.5rem] border-2 border-primary/5 bg-card hover:bg-primary/5 hover:border-primary transition-all shadow-sm hover:shadow-xl italic">
              <Globe className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-4 italic tracking-tight uppercase">International Standards</h3>
              <p className="text-muted-foreground leading-relaxed font-bold opacity-80">
                We combine global business practices with deep understanding of Indonesian markets, regulations, and business culture. Our team brings international experience while maintaining strong local partnerships.
              </p>
            </div>

            <div className="group p-10 rounded-[2.5rem] border-2 border-primary/5 bg-card hover:bg-primary/5 hover:border-primary transition-all shadow-sm hover:shadow-xl italic">
              <Building2 className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-4 italic tracking-tight uppercase">Operational Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed font-bold opacity-80">
                With established subsidiaries across Indonesia, we provide more than consulting—we deliver execution. From PT PMA formation to daily operations, our ecosystem supports every stage of your journey.
              </p>
            </div>

            <div className="group p-10 rounded-[2.5rem] border-2 border-primary/5 bg-card hover:bg-primary/5 hover:border-primary transition-all shadow-sm hover:shadow-xl italic">
              <TrendingUp className="h-10 w-10 text-primary mb-6 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-4 italic tracking-tight uppercase">Long-Term Partnership</h3>
              <p className="text-muted-foreground leading-relaxed font-bold opacity-80">
                We're not transaction-focused—we build lasting relationships. Our holding structure ensures stability and continuity, while our commitment to transparency and compliance protects your investment.
              </p>
            </div>
          </div>

          {/* DYNAMIC REGIONAL CLUSTER NAVIGATION - NEW SEO ELEMENT */}
          <div className="mb-24 bg-black text-white p-12 md:p-20 rounded-[4rem] border-8 border-primary/10 shadow-2xl relative overflow-hidden italic">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-start">
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4 text-white/80 mb-2">
                  <Map className="h-8 w-8 text-primary" />
                  <span className="text-sm font-black uppercase tracking-[0.3em]">The Archipelago Network</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-black italic tracking-tighter uppercase leading-[0.9]">
                  Strategic Entry <br /> Points Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Indonesia</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed font-bold opacity-80">
                  Expand your vision beyond Bali. We provide end-to-end PT PMA setup and regional advisory in 17 major economic hubs, from the financial engine of Jakarta to the new Pacific gateway in Manado.
                </p>
                <div className="pt-6">
                  <Link 
                    href="/sitemap" 
                    className="inline-flex items-center justify-center rounded-full px-12 py-8 bg-primary text-slate-200 hover:bg-white hover:text-black transition-all text-xl font-bold font-serif italic shadow-xl"
                  >
                    Explore Regional Hubs
                  </Link>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                {[
                  { name: "Jakarta", path: "/company-formation-jakarta" },
                  { name: "Surabaya", path: "/pt-pma-setup-surabaya" },
                  { name: "Lombok", path: "/pt-pma-setup-lombok" },
                  { name: "Manado", path: "/pt-pma-setup-manado" },
                  { name: "Labuan Bajo", path: "/pt-pma-setup-labuan-bajo" },
                  { name: "Denpasar", path: "/pt-pma-setup-denpasar" }
                ].map((city) => (
                  <Link 
                    key={city.path} 
                    href={city.path}
                    className="p-6 border-2 border-white/10 rounded-3xl hover:border-primary hover:bg-white/5 transition-all text-center group"
                  >
                    <span className="text-lg font-black italic tracking-tighter uppercase block group-hover:text-primary transition-colors">{city.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-24">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8 italic">
                <h2 className="text-4xl md:text-5xl font-serif font-black italic tracking-tighter uppercase leading-tight">
                  Indonesia: The Strategic <br /> Investment Hub
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-bold opacity-80">
                  With a population over 275 million and a projected GDP of $6 trillion by 2045, Indonesia is poised to become the world's 4th largest economy. As the leader of ASEAN, it sits at the crossroads of global trade.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="border-l-8 border-primary pl-8">
                    <p className="text-4xl font-black text-primary italic tracking-tighter">5%+</p>
                    <p className="text-sm font-black text-muted-foreground uppercase tracking-widest">Annual GDP Growth</p>
                  </div>
                  <div className="border-l-8 border-primary pl-8">
                    <p className="text-4xl font-black text-primary italic tracking-tighter">#1</p>
                    <p className="text-sm font-black text-muted-foreground uppercase tracking-widest">Economy in SE Asia</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative h-[450px] w-full rounded-[4rem] overflow-hidden shadow-2xl border-8 border-primary/5 group">
                <Image
                  src="/image/g20-map.png"
                  alt="Indonesia Strategic Investment Hub: G20 Presence and Regional Connectivity"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto p-16 md:p-24 rounded-[5rem] border-4 border-primary bg-muted/30 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-full -ml-12 -mt-12 blur-2xl group-hover:blur-xl transition-all"></div>
            <h3 className="text-3xl md:text-5xl font-serif font-black italic tracking-tighter text-center uppercase mb-12">
              Your Gateway to the Archipelago
            </h3>
            <div className="space-y-8 text-muted-foreground leading-relaxed text-lg md:text-xl font-bold italic opacity-90 text-center">
              <p>
                Indonesia represents one of world's fastest-growing economies, with a population exceeding 270 million and a rapidly expanding middle class. As the largest economy in Southeast Asia, Indonesia offers unprecedented opportunities for international investors.
              </p>
              <p>
                However, successfully entering the Indonesian market requires more than capital—it demands local knowledge, established relationships, and operational infrastructure. This is where Bali Enterprises becomes your strategic advantage.
              </p>
              <p className="text-primary italic underline underline-offset-8 decoration-primary/30">
                Through our ecosystem of operating companies and digital infrastructure initiatives, we provide the complete framework for international businesses to establish, operate, and grow in Indonesia with high-fidelity compliance and confidence.
              </p>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

function Button({ children, size, className, asChild }: { children: React.ReactNode, size?: "lg", className?: string, asChild?: boolean }) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}
