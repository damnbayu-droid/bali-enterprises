import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Lightbulb, 
    CheckCircle2, 
    TrendingUp, 
    Home, 
    Cpu, 
    Sparkles,
    ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Business Opportunities in Bali: 2024–2025 Market Report | Bali Enterprises",
    description: "Discover high-growth business opportunities in Bali. Analyzing emerging sectors, market gaps, and strategic niches for international entrepreneurs and investors.",
};

export default function BusinessOpportunitiesBaliPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12">
            <div className="w-full max-w-4xl px-6 mb-8">
                <Link href="/starting-business-bali-guide" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Knowledge Hub
                </Link>
            </div>

            <main className="w-full max-w-4xl px-6 pb-24">
                <header className="space-y-6 mb-16">
                    <div className="flex items-center gap-3 text-primary mb-2">
                        <Lightbulb className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Strategic Insight</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Business <span className="text-muted-foreground italic">Opportunities</span> in Bali
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        As the Bali economy matures, the opportunity is shifting from traditional low-margin services to high-value infrastructure, digital technology, and premium lifestyle brands.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* Emerging Sectors */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">High-Growth Emerging Sectors</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For international founders, identifying the right niche is critical. The following sectors demonstrate strong growth potential and align with the core <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline">PT PMA ownership allowances</Link>.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "PropTech & Real Estate", icon: <Home className="h-5 w-5 text-primary" />, desc: "Managing the surge in high-end villa rentals. Opportunities in PMS systems, fractional ownership, and sustainable building tech." },
                                { title: "Software as a Service (SaaS)", icon: <Cpu className="h-5 w-5 text-primary" />, desc: "Building from Bali for the global market. Benefiting from the island's high developer density and low burn rate." },
                                { title: "Premium FMCG & Retail", icon: <ShoppingCart className="h-5 w-5 text-primary" />, desc: "Creating luxury lifestyle brands for the international resident community and upwardly mobile domestic market." },
                                { title: "Wellness Infrastructure", icon: <Sparkles className="h-5 w-5 text-primary" />, desc: "Moving beyond spas into longevity clinics, biohacking centers, and high-tech wellness equipment distribution." }
                            ].map((sector, i) => (
                                <div key={i} className="p-6 rounded-xl border border-border shadow-sm space-y-3 bg-card/50">
                                    <div className="flex items-center gap-2">
                                        {sector.icon}
                                        <h4 className="font-bold">{sector.title}</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{sector.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    {/* Industrial Growth Analysis */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Market Gap Analysis</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Despite the rapid growth, several friction points remain unaddressed. These "gaps" represent the most lucrative <Link href="/doing-business-in-bali" className="text-primary hover:underline font-medium">business environment insights</Link> for sophisticated investors.
                        </p>
                        <AdvisoryInsight title="Market Briefing">
                            There is an acute shortage of professional management companies in the Bali villa industry. Many owners are seeking "Jakarta-standard" or "Singapore-standard" corporate governance for their Bali-based assets.
                        </AdvisoryInsight>
                        <div className="pt-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Explore further data in our <Link href="/industries-growing-bali" className="text-primary hover:underline">growing industries in Bali</Link> report, which details specific KBLI codes and year-on-year growth markers.
                            </p>
                        </div>
                    </section>

                    {/* Regional Strategy */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Strategic District Positioning</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Opportunities are geographically segmented within the island. Choosing the wrong location is a top mistake foreign entrepreneurs make. See <Link href="/business-regions-indonesia" className="text-primary hover:underline">business regions in Indonesia</Link> for a complete spatial analysis.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            <div className="p-4 border rounded-xl space-y-2">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Canggu/Uluwatu</h4>
                                <p className="text-sm text-muted-foreground">High-velocity startups, nightlife, and modern lifestyle brands.</p>
                            </div>
                            <div className="p-4 border rounded-xl space-y-2">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-primary">Sanur (SEZ)</h4>
                                <p className="text-sm text-muted-foreground">Specialized medical, health tech, and retiree-focused services.</p>
                            </div>
                        </div>
                    </section>

                    {/* Scalability & Capital */}
                    <section className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-muted/30 p-8 rounded-2xl border">
                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-serif">Scalability Metrics</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Before committing, investors should evaluate <Link href="/cost-of-doing-business-bali" className="text-primary hover:underline">operational costs in Bali</Link> against the scalability of the Indonesian market (270M+ consumers). The ROI potential is significantly higher for businesses that can bridge the gap between Bali's operations and Jakarta's capital.
                                </p>
                                <div className="flex items-center gap-4 pt-2">
                                    <div className="flex items-center gap-2 text-xs font-bold text-primary italic">
                                        <TrendingUp className="h-4 w-4" /> 15–20% Est. CAGR
                                    </div>
                                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">In Target Sectors</span>
                                </div>
                            </div>
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10" asChild>
                                <Link href="/why-invest-in-bali">View Full Outlook</Link>
                            </Button>
                        </div>
                    </section>

                    {/* Cross-Cluster Funnel */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Regional Competition</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            How do these opportunities compare with other hubs? If you are evaluating a regional deployment, read our comparisons:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Link href="/bali-vs-thailand-business" className="p-4 border rounded-xl text-center text-xs font-bold hover:text-primary transition-colors">Bali vs Thailand</Link>
                            <Link href="/bali-vs-singapore-startup" className="p-4 border rounded-xl text-center text-xs font-bold hover:text-primary transition-colors">Bali vs Singapore</Link>
                            <Link href="/indonesia-vs-malaysia-business" className="p-4 border rounded-xl text-center text-xs font-bold hover:text-primary transition-colors">Indonesia vs Malaysia</Link>
                        </div>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Capitalize on Bali's Growth</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            For a complete technical overview of legal setup, zoning, and residency requirements, see our central intelligence report.
                        </p>
                        <Button size="lg" className="bg-primary text-primary-foreground px-8" asChild>
                            <Link href="/starting-business-bali-guide">
                                Access Ultimate Guide
                            </Link>
                        </Button>
                    </section>
                </div>
            </main>
        </div>
    );
}
