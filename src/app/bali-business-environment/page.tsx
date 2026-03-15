import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    BarChart, 
    Shield, 
    Globe, 
    Zap,
    Users,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Bali Business Environment: Economic & Regulatory Analysis | Bali Enterprises",
    description: "An in-depth analysis of the Bali business environment. Explore economic stability, regulatory trends, infrastructure development, and the competitive landscape for investors.",
};

export default function BaliBusinessEnvironmentPage() {
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
                        <BarChart className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Economic Intelligence</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Bali Business <span className="text-muted-foreground italic">Environment</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        The business landscape in Bali is undergoing a rapid evolution, shifting from a tourism-dependent economy to a diversified digital and international investment hub.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Macro View */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Macroeconomic Stability</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Bali benefits from Indonesia's strong macroeconomic performance. As the largest economy in Southeast Asia, Indonesia provides a stable foundation for <Link href="/doing-business-in-bali" className="text-primary hover:underline font-medium">doing business in Bali</Link>. The national growth rate consistently hovers around 5%, providing confidence for long-term capital allocation.
                        </p>
                        <AdvisoryInsight title="Consultant Perspective">
                            The "Bali Tax Office" (Pratama) has become increasingly digitalized, improving transparency and reducing administrative friction for compliant international entities.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Infrastructure & Connectivity */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Infrastructure & Connectivity</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 border rounded-xl space-y-3">
                                <Zap className="h-5 w-5 text-primary" />
                                <h4 className="font-bold">Digital Infrastructure</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    High-speed fiber optics are now standard in business districts like Canggu, Seminyak, and Sanur. This supports the growing <Link href="/startup-ecosystem-bali" className="text-primary hover:underline">startup ecosystem in Bali</Link>.
                                </p>
                            </div>
                            <div className="p-6 border rounded-xl space-y-3">
                                <Globe className="h-5 w-5 text-primary" />
                                <h4 className="font-bold">Global Access</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Ngurah Rai International Airport connects Bali directly to major financial hubs: Singapore, Hong Kong, Dubai, Sydney, and Tokyo.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Regulatory Trends */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Regulatory Positive Shifts</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The Indonesian government continues to simplify the <Link href="/starting-business-bali-guide#registration-steps" className="text-primary hover:underline">company registration process</Link> through the OSS RBA system. This regulatory ease is a primary reason <Link href="/why-invest-in-bali" className="text-primary hover:underline">why foreigners invest in Bali</Link> today.
                        </p>
                        <div className="space-y-3 pt-2">
                            {[
                                "Liberalization of 100% foreign ownership in most sectors",
                                "Introduction of the Golden Visa for high-net-worth investors",
                                "Streamlined digital compliance and reporting (LKPM)",
                                "Strategic Special Economic Zones (SEZ) in Sanur"
                            ].map((trend, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                    {trend}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Competitive Landscape */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Competitive Landscape</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Compared to other regional markets, Bali offers a unique "Lifestyle Retention" advantage. Top-tier global talent is more likely to remain committed to a project when based in a high-quality living environment. This competitive edge is explored further in our <Link href="/why-bali-for-startups" className="text-primary hover:underline">Why Bali for Startups</Link> report.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/bali-vs-thailand-business" className="flex-1 p-4 border rounded-xl text-center text-xs font-bold hover:bg-muted/30 transition-all">Compare vs Thailand</Link>
                            <Link href="/bali-vs-singapore-startup" className="flex-1 p-4 border rounded-xl text-center text-xs font-bold hover:bg-muted/30 transition-all">Compare vs Singapore</Link>
                        </div>
                    </section>

                    {/* Risk Management */}
                    <section className="space-y-6">
                        <div className="p-8 rounded-2xl border bg-card/50 flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1 space-y-4">
                                <h3 className="text-2xl font-serif">Environmental Governance</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    The "Green Economy" is becoming a priority. New regulations focus on sustainable development, waste management, and social impact. Understanding these <Link href="/starting-business-bali-guide#visa-options" className="text-primary hover:underline">legal requirements</Link> is essential for long-term viability.
                                </p>
                            </div>
                            <Shield className="h-16 w-16 text-primary/40" />
                        </div>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Navigate the Bali Environment</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            For a comprehensive overview of tactical setup and legal strategy, consult our central intelligence report.
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
