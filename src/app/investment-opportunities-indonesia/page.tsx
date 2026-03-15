import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Lightbulb, 
    CheckCircle2, 
    TrendingUp, 
    Cpu, 
    Car, 
    Leaf, 
    Globe,
    ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Investment Opportunities in Indonesia: 2024–2025 High-Alpha Sectors | Bali Enterprises",
    description: "Identify high-growth investment opportunities in Indonesia. Analyze nickel downstreaming, EV infrastructure, digital finance, and sustainable tourism for global capital.",
};

export default function InvestmentOpportunitiesIndonesiaPage() {
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
                        <span className="text-sm font-bold uppercase tracking-widest">Market Intelligence</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Investment <span className="text-muted-foreground italic">Opportunities in Indonesia</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Indonesia's shift towards value-added exports and digital dominance is creating unique "Alpha" opportunities for sophisticated international investors.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* Strategic Sectors */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">High-Alpha Target Sectors</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For investors seeking to <Link href="/foreign-investment-indonesia" className="text-primary hover:underline">deploy capital in Indonesia</Link>, identifying large-scale sectoral shifts is mandatory. These opportunities align with the government's long-term economic roadmap.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Nickel & EV Supply Chain", icon: <Car className="h-5 w-5 text-primary" />, desc: "Indonesia holds the world's largest nickel reserves. Significant opportunities exist in refinery infrastructure, cathode production, and EV battery assembly." },
                                { title: "Digital Infrastructure & SaaS", icon: <Cpu className="h-5 w-5 text-primary" />, desc: "Massive demand for cloud services, localized SaaS products, and fintech solutions for the unbanked and underbanked population." },
                                { title: "Green Energy & Carbon Credits", icon: <Leaf className="h-5 w-5 text-primary" />, desc: "Focus on geothermal, solar, and blue carbon projects. Indonesia is positioning itself as a global hub for the voluntary carbon market." },
                                { title: "Modern Logistics & Warehousing", icon: <Globe className="h-5 w-5 text-primary" />, desc: "Solving the archipelagic logistics challenge. Opportunities in cold chain, last-mile delivery, and automated warehousing in regional hubs." }
                            ].map((sector, i) => (
                                <div key={i} className="p-6 rounded-xl border border-border shadow-sm space-y-3 bg-card/50 hover:border-primary/30 transition-colors">
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

                    {/* Regional Focus: Bali */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Localized Alpha: Bali</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            While the industrial play is national, the creative and lifestyle play is centered in Bali. Our <Link href="/bali-investment-guide" className="text-primary hover:underline font-medium">Bali investment analysis</Link> details the surge in high-end real estate and digital services.
                        </p>
                        <AdvisoryInsight title="Consultant Briefing">
                            Founders are increasingly using <Link href="/starting-business-bali-guide" className="text-primary hover:underline">PT PMA structures in Bali</Link> to manage regional Indonesian operations, benefiting from the island's talent retention and global connectivity.
                        </AdvisoryInsight>
                    </section>

                    {/* The Regulatory Advantage */}
                    <section className="space-y-6">
                        <div className="p-8 border rounded-2xl bg-primary/5 flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-serif">A Protected Gateway</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Investing through a formal PT PMA provides <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline">foreign ownership protections</Link> and tax incentives that are not available to individual nomads or freelancers. See <Link href="/why-invest-indonesia" className="text-primary hover:underline font-medium">Why Invest in Indonesia</Link> for the full rationale.
                                </p>
                                <div className="flex items-center gap-2 text-xs font-bold text-primary">
                                    <ShieldCheck className="h-4 w-4" /> BPKM PROTECTED INVESTMENT
                                </div>
                            </div>
                            <TrendingUp className="h-20 w-20 text-primary/30" />
                        </div>
                    </section>

                    {/* Cost of Entry */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Entry Considerations</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Sophisticated investors must evaluate the <Link href="/cost-of-doing-business-bali" className="text-primary hover:underline">operational costs in Bali</Link> and the <Link href="/bali-business-environment" className="text-primary hover:underline">regulatory environment</Link> before committing capital. Understanding <Link href="/sectors-open-foreign-investors" className="text-primary hover:underline">sectoral openness</Link> is a critical task in the due diligence process.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <Link href="/indonesia-business-growth" className="p-4 border rounded-xl text-center text-xs font-bold hover:bg-muted/30 transition-all">Indonesia Growth Report</Link>
                            <Link href="/business-opportunities-bali" className="p-4 border rounded-xl text-center text-xs font-bold hover:bg-muted/30 transition-all">Niche Bali Opportunities</Link>
                        </div>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Identify Your Market Edge</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Secure your position in the world's fastest-growing emerging economy. Access our central intelligence report for deep advisory on PT PMA setup and sector analysis.
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
