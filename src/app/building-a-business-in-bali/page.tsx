import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Building2, 
    CheckCircle2, 
    TrendingUp, 
    ShieldCheck, 
    Users, 
    Zap,
    Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Building a Business in Bali: Scaling & Operations | Bali Enterprises",
    description: "A strategic guide to building and scaling a business in Bali. Focus on operational excellence, team building, and long-term sustainability in the Indonesian market.",
};

export default function BuildingABusinessInBaliPage() {
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
                        <Building2 className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Operational Scaling</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Building a <span className="text-muted-foreground italic">Business in Bali</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Scaling a venture in Bali requires a shift from "Scrappy MVP" to "High-Authority Operations." This guide focuses on the specific operational pillars for long-term Indonesian success.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* Operational Foundations */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Operational Pillars</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Every high-growth venture must be built on a compliant legal foundation. See our <Link href="/starting-business-bali-guide#registration-steps" className="text-primary hover:underline font-medium">company registration roadmap</Link> for the initial setup. Once established, the focus moves to building a high-authority <Link href="/bali-business-environment" className="text-primary hover:underline">business environment</Link>.
                        </p>
                    </section>

                    <Separator />

                    {/* Team Building */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Human Capital & Team Scaling</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The core strength of <Link href="/doing-business-in-bali" className="text-primary hover:underline">doing business in Bali</Link> is the ability to recruit top-tier local and international talent. 
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="p-6 border rounded-xl space-y-3 bg-card/50">
                                <Users className="h-5 w-5 text-primary" />
                                <h4 className="font-bold">Local Talent Integration</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Bali's creative and tech workers are world-class. Building a multi-cultural team that respects Indonesian <Link href="/entrepreneurship-in-bali" className="text-primary hover:underline">entrepreneurial culture</Link> is essential.
                                </p>
                            </div>
                            <div className="p-6 border rounded-xl space-y-3 bg-card/50">
                                <Zap className="h-5 w-5 text-primary" />
                                <h4 className="font-bold">Global Retention</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Leverage Bali's lifestyle to retain international executives. Learn more in our <Link href="/why-bali-for-startups" className="text-primary hover:underline">Why Bali for Startups</Link> report.
                                </p>
                            </div>
                        </div>
                    </section>

                    <AdvisoryInsight title="Consultant Perspective">
                        Building a business in Bali is not just about the island; it's about the <Link href="/business-regions-indonesia" className="text-primary hover:underline">geography of Indonesia</Link>. Success means positioning your Bali office as the creative "brain" while maintaining strategic links to Jakarta's capital markets.
                    </AdvisoryInsight>

                    {/* Cost of Operations */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Operational Efficiency</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Maintain a competitive edge by optimizing your burn rate. Our <Link href="/cost-of-doing-business-bali" className="text-primary hover:underline">cost of doing business analysis</Link> provides a detailed breakdown of rental, labor, and compliance expenses.
                        </p>
                        <div className="space-y-3 pt-2">
                            {[
                                "Digitalized tax reporting (OSS/RBA)",
                                "Strategic business zoning selection",
                                "BPJS & Insurance compliance",
                                "Community (Banjar) integration"
                            ].map((pillar, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                    {pillar}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Growth Opportunities */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Strategic Expansion</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            As you scale, identify high-growth niches. Read our <Link href="/business-opportunities-bali" className="text-primary hover:underline">Bali business opportunities report</Link> and the <Link href="/industries-growing-bali" className="text-primary hover:underline">growing industries in Bali</Link> analysis.
                        </p>
                        <div className="p-6 border rounded-xl flex items-center gap-6 bg-muted/20">
                            <TrendingUp className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm">Long-term Viability</h4>
                                <p className="text-xs text-muted-foreground">Moving from a MVP to a 10-year horizon requires robust <Link href="/starting-business-bali-guide#visa-options" className="text-primary hover:underline">residency planning</Link> and tax positioning.</p>
                            </div>
                        </div>
                    </section>

                    {/* Mistakes to Avoid */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Protecting Your Scale</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Operational failure often stems from predictable errors. See our guide on the <Link href="/mistakes-foreign-entrepreneurs-make" className="text-primary hover:underline">common mistakes foreign entrepreneurs make</Link> to ensure your scaling remains uninterrupted.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Scale Your Business in Bali</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            From setup to high-authority operations, access our central intelligence report for deep advisory on Bali business growth.
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
