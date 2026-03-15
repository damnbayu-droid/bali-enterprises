import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Rocket, 
    Zap,
    Users,
    CheckCircle2,
    Globe,
    Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Why Bali for Startups: A Strategic Ecosystem Analysis | Bali Enterprises",
    description: "Discover why Bali is becoming the preferred hub for global startups. Analyzing cost efficiency, talent access, lifestyle retention, and the growing tech ecosystem.",
};

export default function WhyBaliForStartupsPage() {
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
                        <Rocket className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Startup Strategy</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Why Bali for Startups: <span className="text-muted-foreground italic">The New Tech Frontier</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Bali is no longer just a digital nomad destination; it has matured into a legitimate operational base for early-stage and growth-stage startups seeking a competitive edge in Southeast Asia.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Value Proposition */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The Startup Value Proposition</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Founders are increasingly choosing to <Link href="/starting-business-bali-guide" className="text-primary hover:underline">start a company in Bali</Link> due to the unique combination of high-tier lifestyle and low-tier operational costs. This "Boutique Hub" model allows startups to extend their runway by 3x–4x compared to San Francisco, London, or even Singapore.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                            {[
                                { title: "Cost Arbitrage", desc: "Premium engineering and creative talent at ASEAN rates.", icon: <Zap className="h-5 w-5 text-primary" /> },
                                { title: "Talent Retention", desc: "Lifestyle appeal significantly reduces employee churn.", icon: <Users className="h-5 w-5 text-primary" /> },
                                { title: "Market Access", icon: <Globe className="h-5 w-5 text-primary" />, desc: "Direct bridge to the $1.3T Indonesian economy." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-xl border border-border shadow-sm space-y-3">
                                    {item.icon}
                                    <h4 className="font-bold text-sm">{item.title}</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    {/* Integrated Ecosystem */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">A Mature Startup Ecosystem</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The <Link href="/startup-ecosystem-bali" className="text-primary hover:underline">startup ecosystem in Bali</Link> has evolved from coworking spaces into a structured network of incubators, venture capitalist outposts, and specialized agencies. This maturity allows for rapid <Link href="/building-a-business-in-bali" className="text-primary hover:underline">building a business in Bali</Link> with existing infrastructure.
                        </p>
                        
                        <AdvisoryInsight title="Founder Briefing">
                            The most successful startups in Bali use a dual-hub strategy: financial operations in Singapore and creative/operational headquarters in Bali. See our <Link href="/bali-vs-singapore-startup" className="text-primary hover:underline">Bali vs Singapore comparison</Link> for details.
                        </AdvisoryInsight>
                    </section>

                    {/* Digital Nomad to Founder Pipeline */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The Founder Pipeline</h2>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1 space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    The journey often begins with <Link href="/digital-nomads-startups-bali" className="text-primary hover:underline">digital nomads starting businesses in Bali</Link>. What starts as a remote agency frequently scales into a venture-backed tech entity as founders realize the depth of the local market.
                                </p>
                                <div className="space-y-2">
                                    <h4 className="font-bold text-sm">Strategic Advantages:</h4>
                                    {[
                                        "Seamless transition from remote work to PT PMA",
                                        "High concentration of Web3 and Fintech founders",
                                        "Direct access to Jakarta's venture capital network",
                                        "Premium networking events in Canggu and Uluwatu"
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                            <CheckCircle2 className="h-3 w-3 text-primary mt-0.5" />
                                            {benefit}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-72 p-6 rounded-xl bg-muted/30 border border-primary/10 space-y-4 text-center">
                                <Compass className="h-10 w-10 text-primary mx-auto" />
                                <h4 className="font-serif font-bold">Market Intelligence</h4>
                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Search Ranking Keywords</p>
                                <div className="flex flex-wrap justify-center gap-1">
                                    {["Bali Startups", "Tech Hub", "Founder Visa", "PMA Setup"].map((tag, i) => (
                                        <span key={i} className="text-[9px] bg-background border px-2 py-0.5 rounded">{tag}</span>
                                    ))}
                                </div>
                                <Button size="sm" className="w-full text-[11px]" asChild>
                                    <Link href="/why-invest-in-bali">Investment Outlook</Link>
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* Regional Context */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Regional Positioning</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            How does Bali stack up against other regional tech hubs? If you are evaluating Thailand, read our <Link href="/bali-vs-thailand-business" className="text-primary hover:underline">Bali vs Thailand startup analysis</Link>. For those considering the Middle East, our <Link href="/bali-vs-dubai-business" className="text-primary hover:underline">Bali vs Dubai business comparison</Link> highlights the tax and lifestyle trade-offs.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Scale Your Startup in Bali</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Move beyond the nomad phase. Establish a high-authority corporate presence with our central intelligence report.
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
