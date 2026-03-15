import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Globe, 
    TrendingUp, 
    CheckCircle2, 
    Zap, 
    Users, 
    Building2, 
    Briefcase,
    ShieldCheck,
    Navigation
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Expanding Business in Indonesia: Scaling from Bali | Bali Enterprises",
    description: "A strategic roadmap for scaling your business across Indonesia. Learn how to leverage your Bali base to expand into Jakarta, Surabaya, and other key Indonesian markets.",
};

export default function ExpandingBusinessIndonesiaPage() {
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
                        <Navigation className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Scaling Strategy</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Expanding Business <span className="text-muted-foreground italic">in Indonesia</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Scaling from a Bali-based startup to a national Indonesian powerhouse requires a sophisticated understanding of regional dynamics and centralized technical control.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Expansion Thesis */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Scaling Beyond the Island</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Bali is the perfect hub for creative development and <Link href="/startup-ecosystem-bali" className="text-primary hover:underline">market testing</Link>. However, true national alpha is found by expanding into the <Link href="/business-regions-indonesia" className="text-primary hover:underline font-medium">high-density regions of Indonesia</Link>. For a technical overview of the legal foundation required, consult our <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">Bali business setup roadmap</Link>.
                        </p>
                        <AdvisoryInsight title="Consultant Perspective">
                            Most successful international founders use Bali as their "Lifestyle HQ" while maintaining operational satellites in Jakarta for capital market access.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* expansion pillars */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Strategic Expansion Pillars</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Centralized Compliance", icon: <ShieldCheck className="h-5 w-5 text-primary" />, desc: "Managing multiple regional licenses via a single <Link href='/starting-business-bali-guide#pma-structure' class='text-primary hover:underline'>PT PMA entity</Link>. Ensuring compliance across diverse <Link href='/sectors-open-foreign-investors' class='text-primary hover:underline'>sectors</Link>." },
                                { title: "Regional Synergy", icon: <Globe className="h-5 w-5 text-primary" />, desc: "Leveraging the <Link href='/bali-business-environment' class='text-primary hover:underline'>Bali business environment</Link> to hire talent that can deploy across Java, Sulawesi, and beyond." },
                                { title: "Operational Arbitrage", icon: <TrendingUp className="h-5 w-5 text-primary" />, desc: "Optimizing the <Link href='/cost-of-doing-business-bali' class='text-primary hover:underline font-medium'>cost of operations</Link> by balancing Bali's lifestyle benefits with Jakarta's industrial infrastructure." },
                                { title: "Ecosystem Access", icon: <Zap className="h-5 w-5 text-primary" />, desc: "Utilizing the <Link href='/bali-enterprises-ecosystem' class='text-primary hover:underline'>Bali Enterprises ecosystem</Link> to find local partners in new territories." }
                            ].map((pillar, i) => (
                                <div key={i} className="p-6 rounded-xl border border-border shadow-sm space-y-3 bg-card/50">
                                    <div className="flex items-center gap-2">
                                        {pillar.icon}
                                        <h4 className="font-bold">{pillar.title}</h4>
                                    </div>
                                    <div className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: pillar.desc }} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Growth Outlook */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">A Multi-Region Growth Play</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Expansion is driven by the <Link href="/indonesia-business-growth" className="text-primary hover:underline">Indonesian macro-growth trajectory</Link>. Founders who <Link href="/building-a-business-in-bali" className="text-primary hover:underline font-medium">build a business in Bali</Link> with an expansion mindset can capture market share in <Link href="/industries-growing-bali" className="text-primary hover:underline">growing sectors</Link> like digital finance and sustainable logistics.
                        </p>
                        <div className="p-6 border rounded-xl flex items-center gap-6 bg-muted/20">
                            <Building2 className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm">Corporate Benchmarks</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Our <Link href="/bali-vs-singapore-startup" className="text-primary hover:underline">Bali vs Singapore</Link> and <Link href="/indonesia-vs-malaysia-business" className="text-primary hover:underline">Indonesia vs Malaysia</Link> situational reports provide the data required for cross-border scaling.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Professional Advisory */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">A Unified Advisory Approach</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Scaling requires high-authority consultancy. Our <Link href="/bali-corporate-services" className="text-primary hover:underline">technical service stack</Link> and <Link href="/bali-investment-consultancy" className="text-primary hover:underline">bespoke advisory model</Link> ensure that your expansion remains risk-mitigated and legally sovereign.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Explore <Link href="/boutique-investment-bali" className="text-primary hover:underline font-medium">Boutique Investment Bali</Link> strategies for capital-efficient scaling.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Scale Your Indonesian Vision</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            From a Bali base to a national presence. Access our central intelligence report for deep advisory on multi-region scaling and corporate expansion.
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
