import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Diamond, 
    ShieldCheck, 
    CheckCircle2, 
    Zap, 
    Users, 
    Globe, 
    Building2,
    Briefcase,
    TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Boutique Investment Bali: Elite Capital Strategy | Bali Enterprises",
    description: "Discover the boutique investment model in Bali. Bespoke capital allocation, jurisdictional arbitrage, and high-authority business setup for international founders.",
};

export default function BoutiqueInvestmentBaliPage() {
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
                        <Diamond className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Boutique Portfolio</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Boutique Investment <span className="text-muted-foreground italic">Bali</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Our boutique model prioritizes capital sovereignty and technical precision over mass-market company formation.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Boutique Thesis */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">A Customized Capital Strategy</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Boutique investment in Bali is about jurisdictional arbitrage. We guide founders in leveraging Indonesia's <Link href="/indonesia-business-growth" className="text-primary hover:underline font-medium">macro growth</Link> while maintaining the operational flexibility of a <Link href="/startup-ecosystem-bali" className="text-primary hover:underline">global startup</Link>. For a technical overview of our setup model, see the <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">complete guide to starting a business in Bali</Link>.
                        </p>
                        <AdvisoryInsight title="Executive Insight">
                            The boutique approach is essential for investors seeking to avoid <Link href="/mistakes-foreign-entrepreneurs-make" className="text-primary hover:underline font-medium">common market entry pitfalls</Link> and ensure their assets are protected under the <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline">PT PMA legal framework</Link>.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Boutique Pillars */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Pillars of Elite Entry</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Technical Sovereignty", icon: <ShieldCheck className="h-5 w-5 text-primary" />, desc: "Developing <Link href='/bali-investment-consultancy' class='text-primary hover:underline'>bespoke advisory</Link> focused on 100% foreign ownership and intellectual property protection." },
                                { title: "Curated Referrals", icon: <Zap className="h-5 w-5 text-primary" />, desc: "Connecting clients to our <Link href='/investor-referral-bali' class='text-primary hover:underline'>exclusive referral flow</Link> and <Link href='/bali-enterprises-ecosystem' class='text-primary hover:underline font-medium'>boutique professional network</Link>." },
                                { title: "Regulatory Precision", icon: <Briefcase className="h-5 w-5 text-primary" />, desc: "Aligning company activities with restricted <Link href='/sectors-open-foreign-investors' class='text-primary hover:underline'>KBLI codes</Link> and localized <Link href='/starting-business-bali-guide#business-zoning' class='text-primary hover:underline font-medium'>zoning laws</Link>." },
                                { title: "High-Authority Services", icon: <Building2 className="h-5 w-5 text-primary" />, desc: "Technical execution of <Link href='/bali-corporate-services' class='text-primary hover:underline'>corporate services</Link> and <Link href='/starting-business-bali-guide#visa-options' class='text-primary hover:underline'>Investor Residency</Link> for global stakeholders." }
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

                    {/* Investment Dynamics */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Identifying High-Alpha Returns</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Boutique investors target niche <Link href="/investment-opportunities-indonesia" className="text-primary hover:underline font-medium">opportunities in Indonesia</Link> and <Link href="/business-opportunities-bali" className="text-primary hover:underline">high-growth sectors in Bali</Link>. From premium real estate to fintech, we provide the <Link href="/bali-investment-guide" className="text-primary hover:underline">localized intelligence</Link> required to deploy capital effectively.
                        </p>
                        <div className="p-6 border rounded-xl flex items-center gap-6 bg-muted/20">
                            <TrendingUp className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm">ROI Optimization</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Strategic jurisdictional comparisons—such as <Link href="/bali-vs-singapore-startup" className="text-primary hover:underline">Bali vs Singapore</Link> and <Link href="/indonesia-vs-malaysia-business" className="text-primary hover:underline font-medium">Indonesia vs Malaysia</Link>—are used to optimize global tax and operational positioning.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Operational Support */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Expanding Across Indonesia</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The boutique model facilitates seamless <Link href="/expanding-business-indonesia" className="text-primary hover:underline">expansion across Indonesia</Link>. By starting in the <Link href="/bali-business-environment" className="text-primary hover:underline">Bali business hub</Link>, founders can benchmark costs and scale into other <Link href="/business-regions-indonesia" className="text-primary hover:underline font-medium">key regions</Link> with confidence.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Secure Your Boutique Entry</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Access our central intelligence report. Engage with a high-authority capital strategy designed for the elite international founder.
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
