import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Briefcase, 
    CheckCircle2, 
    TrendingUp, 
    Globe, 
    ShieldCheck,
    Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Doing Business in Bali: Practical Guide for Investors | Bali Enterprises",
    description: "A practical guide to doing business in Bali. Learn about cultural nuances, regulatory frameworks, operational setup, and market entry for international founders.",
};

export default function DoingBusinessInBaliPage() {
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
                        <Briefcase className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Market Guide</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Doing Business in <span className="text-muted-foreground italic">Bali</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Operating a successful enterprise in Bali requires more than just capital; it requires a deep understanding of local compliance, cultural intelligence, and strategic positioning.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Strategic Foundation */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The Strategic Foundation</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For a complete overview of legal structures, investment rules, and company setup procedures, see our <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">complete guide to starting a business in Bali</Link>. Understanding the core framework of the PT PMA is the first step for any international founder.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> Global Context</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Bali is a bridge between Western business standards and the massive emerging market of Indonesia. Learn more in our <Link href="/bali-business-environment" className="text-primary hover:underline">Bali business environment analysis</Link>.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><Scale className="h-4 w-4 text-primary" /> Compliance First</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Regulatory adherence is the most critical success factor. Every business district has specific requirements. See <Link href="/starting-business-bali-guide#business-zoning" className="text-primary hover:underline">business zoning insights</Link>.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Operational Reality */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Operational Reality</h2>
                        <div className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Successfully doing business in Bali involves navigating a unique local ecosystem. High-growth sectors such as tech and tourism are leading the way. Explore the <Link href="/industries-growing-bali" className="text-primary hover:underline">fastest growing industries in Bali</Link> for current data.
                            </p>
                            <AdvisoryInsight title="Internal Briefing">
                                Bali's workforce is increasingly skilled in digital services, creative arts, and hospitality management. However, finding top-tier executive talent often requires tapping into the Jakarta market.
                            </AdvisoryInsight>
                        </div>
                    </section>

                    {/* Business Opportunities */}
                    <section className="space-y-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1 space-y-4">
                                <h2 className="text-3xl font-serif">Growth Opportunities</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    The post-pandemic shift has created a surge in digital infrastructure and premium real estate needs. For a list of specific niches, read our <Link href="/business-opportunities-bali" className="text-primary hover:underline">Bali business opportunities report</Link>.
                                </p>
                                <div className="space-y-2">
                                    {[
                                        "Digital economy & SaaS",
                                        "Boutique hospitality & wellness",
                                        "Premium real estate development",
                                        "Sustainable export & logistics"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 className="h-4 w-4 text-primary" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full md:w-64 p-6 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col justify-between">
                                <div className="space-y-2">
                                    <TrendingUp className="h-8 w-8 text-primary" />
                                    <h4 className="font-serif font-bold">Cost Analysis</h4>
                                    <p className="text-xs text-muted-foreground">Compare Bali with other regions to optimize your burn rate.</p>
                                </div>
                                <Button size="sm" variant="outline" className="mt-4 border-primary text-primary text-xs" asChild>
                                    <Link href="/cost-of-doing-business-bali">View Cost Report</Link>
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* Cultural Intelligence */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Cultural Intelligence</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Doing business in Bali means respecting the "Tri Hita Karana" philosophy—harmony with people, nature, and the divine. This is not just spiritual; it has direct implications on community relations, zoning, and CSR (Corporate Social Responsibility).
                        </p>
                        <RiskNote variant="warning" title="Community Relations">
                            Ignoring local Banjar (community councils) can lead to operational delays or complete shutdowns. Professional business setup includes community integration.
                        </RiskNote>
                    </section>

                    {/* Cross-Cluster Funnel */}
                    <section className="bg-muted/30 rounded-2xl p-8 space-y-6 border border-border/50">
                        <h3 className="font-serif text-2xl">Regional Context</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            How does Bali compare to other Southeast Asian emerging markets? If you are evaluating a regional headquarters, compare perspectives:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Link href="/bali-vs-thailand-business" className="p-4 bg-background border rounded-xl text-center text-xs font-bold hover:text-primary transition-colors">VS Thailand</Link>
                            <Link href="/bali-vs-singapore-startup" className="p-4 bg-background border rounded-xl text-center text-xs font-bold hover:text-primary transition-colors">VS Singapore</Link>
                            <Link href="/bali-vs-dubai-business" className="p-4 bg-background border rounded-xl text-center text-xs font-bold hover:text-primary transition-colors">VS Dubai</Link>
                        </div>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Master the Bali Market</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Access our central intelligence report to navigate the full legal and operational landscape of Indonesian business.
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
