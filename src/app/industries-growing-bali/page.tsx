import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    TrendingUp, 
    CheckCircle2, 
    BarChart3, 
    Smartphone, 
    Leaf, 
    Anchor,
    Hotel
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Industries Growing in Bali: 2024–2025 Sector Analysis | Bali Enterprises",
    description: "Analyze the fastest-growing industries in Bali. Explore trends in Web3, AgriTech, sustainable hospitality, and digital export for international investors.",
};

export default function IndustriesGrowingBaliPage() {
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
                        <TrendingUp className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Industry Analysis</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Industries Growing <span className="text-muted-foreground italic">in Bali</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Bali's economic base is shifting. Beyond the traditional tourism sector, new high-growth industries are emerging as pillars of the island's future economic development.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* Growth Drivers */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Key Growth Drivers</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The intersection of global remote work, Indonesia's digital acceleration, and a renewed focus on sustainability has created a unique "Growth Triangle." This environment is ideal for <Link href="/doing-business-in-bali" className="text-primary hover:underline font-medium">starting an international company in Bali</Link>.
                        </p>
                        <AdvisoryInsight title="Consultant Perspective">
                            The expansion of these industries is supported by the <Link href="/bali-business-environment" className="text-primary hover:underline">Bali business environment's</Link> recent regulatory upgrades, making it easier for foreign entities to scale.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Sector Deep Dive */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Fastest Growing Sectors</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Web3 & Fintech", icon: <Smartphone className="h-5 w-5 text-primary" />, desc: "Bali is home to one of the largest Web3 founder communities in SE Asia. Opportunities in blockchain dev, digital asset management, and payment gateways." },
                                { title: "Sustainable AgriTech", icon: <Leaf className="h-5 w-5 text-primary" />, desc: "Modernizing the agricultural supply chain. Focus on organic export, vertical farming, and supply chain transparency for global distribution." },
                                { title: "Boutique Hospitality 2.0", icon: <Hotel className="h-5 w-5 text-primary" />, desc: "Shifting from volume to value. High-end, eco-centric resorts and long-term residency products like co-living for retirees." },
                                { title: "Global Creative Export", icon: <Anchor className="h-5 w-5 text-primary" />, desc: "Digital design, international architectural services, and boutique fashion production for the global e-commerce market." }
                            ].map((sector, i) => (
                                <div key={i} className="p-6 rounded-xl border border-border shadow-sm space-y-3 bg-card/50 hover:border-primary/40 transition-colors">
                                    <div className="flex items-center gap-2">
                                        {sector.icon}
                                        <h4 className="font-bold">{sector.title}</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{sector.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Industrial Hub Synergy */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Inter-Region Synergy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Many companies operating in Bali leverage the <Link href="/business-regions-indonesia" className="text-primary hover:underline">industrial hubs of Surabaya</Link> for manufacturing and the financial depth of Jakarta for capital. This multi-regional approach is common among the <Link href="/business-opportunities-bali" className="text-primary hover:underline">top investment opportunities in Bali</Link> today.
                        </p>
                        <div className="p-6 border rounded-xl flex items-center gap-6 bg-muted/20">
                            <BarChart3 className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm">Sectoral Data Update (Q3 2024)</h4>
                                <p className="text-xs text-muted-foreground">Tech and creative services have seen a 22% YoY increase in new PT PMA registrations in the Bali province.</p>
                            </div>
                        </div>
                    </section>

                    {/* Regional Context */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Comparison with Regional Hubs</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            How does the growth in Bali compare with Thailand or Singapore? Our <Link href="/bali-vs-thailand-business" className="text-primary hover:underline">Bali vs Thailand</Link> and <Link href="/why-bali-for-startups" className="text-primary hover:underline">Why Bali for Startups</Link> reports provide detailed industry-by-industry comparisons.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            For a complete breakdown of operational costs associated with these high-growth sectors, see our <Link href="/cost-of-doing-business-bali" className="text-primary hover:underline">Bali business cost analysis</Link>.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Capture the Growth Wave</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            For a comprehensive technical overview of legal setup, zoning, and residency requirements, see our central intelligence report.
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
