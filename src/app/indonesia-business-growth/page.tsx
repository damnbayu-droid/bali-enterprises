import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    TrendingUp, 
    BarChart3, 
    Globe, 
    CheckCircle2, 
    Zap, 
    ShieldCheck,
    LineChart,
    PieChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Indonesia Business Growth: 2024–2030 Macro Outlook | Bali Enterprises",
    description: "Analyze the macroeconomic trajectory of Indonesia. Explore GDP growth projections, middle-class expansion, and the impact of the Golden Indonesia 2045 roadmap on global investment.",
};

export default function IndonesiaBusinessGrowthPage() {
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
                        <span className="text-sm font-bold uppercase tracking-widest">Macro Trajectory</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Indonesia Business <span className="text-muted-foreground italic">Growth</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        With a consistent 5%+ GDP growth rate, Indonesia is on a clear path to becoming one of the world's top five economies by 2045.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Growth Engine */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The G20 Growth Engine</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Indonesia's stability is built on robust domestic consumption and strategic liberalization. This growth is the fundamental reason <Link href="/why-invest-indonesia" className="text-primary hover:underline">foreigners invest in Indonesia</Link>. For a technical analysis of how to enter this market, see our <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">Ultimate Guide to Business in Bali</Link>.
                        </p>
                        <AdvisoryInsight title="Consultant Insight">
                            The "Golden Indonesia 2045" roadmap aims to eliminate the middle-income trap through digital transformation and infrastructure development, creating long-term <Link href="/investment-opportunities-indonesia" className="text-primary hover:underline">investment alpha</Link>.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Growth Drivers */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Key Growth Catalysts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-4 border rounded-xl bg-card/50">
                                    <BarChart3 className="h-5 w-5 text-primary" />
                                    <h4 className="font-bold text-sm">Consumer Expansion</h4>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    The middle-class is projected to grow by 75 million people by 2030, driving unprecedented demand in tech, hospitality, and luxury retail niches within the <Link href="/bali-business-environment" className="text-primary hover:underline font-medium">Bali business ecosystem</Link>.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-4 border rounded-xl bg-card/50">
                                    <Zap className="h-5 w-5 text-primary" />
                                    <h4 className="font-bold text-sm">Digital Sovereignty</h4>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Indonesia is the fastest-growing digital economy in SE Asia. Strategic <Link href="/startup-ecosystem-bali" className="text-primary hover:underline">tech clusters in Bali</Link> are benefiting from national broadband and 5G rollouts.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Operational Benchmarks */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Scaling into Growth</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Successful ventures align their <Link href="/how-to-start-a-business-in-bali" className="text-primary hover:underline">setup roadmap</Link> with these macro trends. By leveraging <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline font-medium">PT PMA structures</Link>, investors can hire local talent and tap into <Link href="/sectors-open-foreign-investors" className="text-primary hover:underline">fully liberalized sectors</Link>.
                        </p>
                        <div className="p-6 border rounded-xl flex items-center gap-6 bg-muted/20">
                            <Globe className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm">Geographical Advantage</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Expansion from Bali into other <Link href="/business-regions-indonesia" className="text-primary hover:underline">regions of Indonesia</Link> provides access to diverse markets under a single regulatory framework.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ROI Protection */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Protecting Growth Returns</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Growth is only profitable if it is compliant. Understanding the <Link href="/cost-of-doing-business-bali" className="text-primary hover:underline font-medium">operational costs</Link> and avoiding <Link href="/mistakes-foreign-entrepreneurs-make" className="text-primary hover:underline">common regulatory mistakes</Link> ensures that your ROI is not eroded by legal friction.
                        </p>
                        <div className="p-8 border rounded-2xl bg-card/50 flex flex-col md:flex-row gap-8 items-center border-primary/20">
                            <ShieldCheck className="h-16 w-16 text-primary/40" />
                            <div className="flex-1 space-y-3">
                                <h3 className="text-2xl font-serif">Sustainability & Longevity</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Investing in <Link href="/industries-growing-bali" className="text-primary hover:underline">growing industries</Link> with a 10-year horizon requires a robust visa and tax positioning. Secure your presence through our <Link href="/starting-business-bali-guide#visa-options" className="text-primary hover:underline font-medium">residency advisory</Link>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Comparative Outlook */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Global Benchmarks</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Evaluate Indonesia's growth against international competitors in our <Link href="/bali-vs-thailand-business" className="text-primary hover:underline font-medium">Bali vs Thailand</Link>, <Link href="/bali-vs-singapore-startup" className="text-primary hover:underline font-medium">Bali vs Singapore</Link>, and <Link href="/indonesia-vs-malaysia-business" className="text-primary hover:underline font-medium">Indonesia vs Malaysia</Link> reports.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Capitalize on Indonesian Growth</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Align your investment with the G20's most dynamic growth trajectory. Access our central intelligence report for deep advisory on PT PMA setup and regional scaling.
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
