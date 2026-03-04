import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Why Choose Bali Enterprises
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Connecting international vision with Indonesian opportunity through professional governance and strategic execution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3">International Standards, Local Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                We combine global business practices with deep understanding of Indonesian markets, regulations, and business culture. Our team brings international experience while maintaining strong local partnerships and government relationships.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3">Proven Operational Infrastructure</h3>
              <p className="text-muted-foreground leading-relaxed">
                With established subsidiaries across Indonesia, we provide more than consulting—we deliver execution. From PT PMA formation to daily operations, our ecosystem supports every stage of your Indonesian business journey.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3">Long-Term Partnership Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're not transaction-focused—we build lasting relationships. Our holding structure ensures stability and continuity, while our commitment to transparency and compliance protects your investment at every step.
              </p>
            </div>
          </div>

          {/* New Section: Indonesia Investment Hub */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Indonesia: The Strategic Investment Hub
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a population over 275 million and a projected GDP of $6 trillion by 2045, Indonesia is poised to become the world's 4th largest economy. As the leader of ASEAN, it sits at the crossroads of global trade, offering stability, abundant resources, and a young, dynamic workforce.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-3xl font-bold text-primary">5%+</p>
                    <p className="text-sm text-muted-foreground">Annual GDP Growth</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <p className="text-3xl font-bold text-primary">#1</p>
                    <p className="text-sm text-muted-foreground">Economy in Southeast Asia</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative h-[300px] w-full rounded-2xl overflow-hidden shadow-2xl border border-border">
                <Image
                  src="/image/g20-map.png"
                  alt="Indonesia Strategic Investment Hub"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>


          {/* New Section: Digital & Tech */}
          <div className="mb-24">
            <div className="bg-muted/30 rounded-3xl p-8 md:p-16 border border-border">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                  Accelerating the Digital Economy
                </h2>
                <p className="text-lg text-muted-foreground">
                  Bali Enterprises is at the forefront of Indonesia's digital transformation. From data centers to fintech solutions, we are building the infrastructure for the future.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background p-6 rounded-xl shadow-xs border border-border/50">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Tech Ecosystems</h3>
                  <p className="text-muted-foreground text-sm">Fostering innovation through dedicated tech parks and startup incubators in Bali and Jakarta.</p>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-xs border border-border/50">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sustainable Energy</h3>
                  <p className="text-muted-foreground text-sm">Investing in renewable energy infrastructure to power the next generation of industries.</p>
                </div>
                <div className="bg-background p-6 rounded-xl shadow-xs border border-border/50">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Global Connectivity</h3>
                  <p className="text-muted-foreground text-sm">Bridging international capital with local opportunities through our extensive network.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-lg border border-border bg-muted/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Your Gateway to the Archipelago
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-base md:text-lg">
                Indonesia represents one of world's fastest-growing economies, with a population exceeding 270 million and a rapidly expanding middle class. As the largest economy in Southeast Asia, Indonesia offers unprecedented opportunities for international investors and businesses.
              </p>
              <p className="text-base md:text-lg">
                However, successfully entering Indonesian market requires more than capital—it demands local knowledge, established relationships, regulatory expertise, and operational infrastructure. This is where Bali Enterprises becomes your strategic advantage.
              </p>
              <p className="text-base md:text-lg">
                Through our ecosystem of operating companies, strategic partnerships, and digital infrastructure initiatives, we provide the complete framework for international businesses to establish, operate, and grow in Indonesia with confidence and compliance.
              </p>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}
