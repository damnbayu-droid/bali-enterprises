import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Globe, 
    TrendingUp, 
    ShieldCheck, 
    BarChart3, 
    CheckCircle2, 
    Building2,
    Landmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Foreign Investment in Indonesia: Regulatory Guide & Analysis | Bali Enterprises",
    description: "A comprehensive guide to foreign investment in Indonesia. Explore the Job Creation Law, PT PMA structures, ownership rules, and strategic entry points for global investors.",
};

export default function ForeignInvestmentIndonesiaPage() {
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
                        <Landmark className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Foreign Investment</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Foreign Investment in <span className="text-muted-foreground italic">Indonesia</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Indonesia is rapidly liberalizing its investment landscape, positioning itself as the primary destination for international capital in Southeast Asia.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* Regulatory Evolution */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">A Liberalized Regulatory Framework</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Following the enactment of the Job Creation Law (Omnibus Law), Indonesia has shifted from a "Negative Investment List" to a "Positive Investment List." This change has drastically expanded the <Link href="/sectors-open-foreign-investors" className="text-primary hover:underline">sectors open to foreign investors</Link>. For a technical overview of how this affects <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">starting a business in Bali</Link>, consult our central roadmap.
                        </p>
                        <AdvisoryInsight title="Consultant Briefing">
                            The introduction of 100% foreign ownership in most telecommunications, logistics, and digital services has unlocked significant <Link href="/investment-opportunities-indonesia" className="text-primary hover:underline">investment opportunities in Indonesia</Link>.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Investment Structures */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Strategic Entry Structures</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline">PT PMA (Perseroan Terbatas Penanaman Modal Asing)</Link> remains the gold standard for foreign investment. It provides full legal sovereignty and a direct path to <Link href="/starting-business-bali-guide#visa-options" className="text-primary hover:underline">Investor Residency (KITAS)</Link>.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            <div className="p-6 border rounded-xl space-y-3 bg-card/50">
                                <Building2 className="h-5 w-5 text-primary" />
                                <h4 className="font-bold">Operational Control</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Directly manage your Indonesian entity. Avoid the <Link href="/mistakes-foreign-entrepreneurs-make" className="text-primary hover:underline">risks of nominee structures</Link> and maintain full control over your intellectual property and land assets.
                                </p>
                            </div>
                            <div className="p-6 border rounded-xl space-y-3 bg-card/50">
                                <ShieldCheck className="h-5 w-5 text-primary" />
                                <h4 className="font-bold">Legal Sovereignty</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Operating under Indonesian corporate law provides institutional protections that are essential for <Link href="/doing-business-in-bali" className="text-primary hover:underline">doing business in Bali</Link> at scale.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Regional Investment Dynamics */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Regional Investment Dynamics</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            While Jakarta attracts the majority of industrial and financial capital, Bali is the premier hub for creative, tech, and lifestyle investment. Our <Link href="/bali-investment-guide" className="text-primary hover:underline">Bali investment guide</Link> provides a localized analysis of the island's unique market drivers.
                        </p>
                        <div className="p-6 border rounded-xl flex items-center gap-6 bg-muted/20">
                            <Globe className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm">Indonesia vs The Region</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    For investors evaluating regional alternatives, read our <Link href="/indonesia-vs-malaysia-business" className="text-primary hover:underline">Indonesia vs Malaysia</Link> and <Link href="/bali-vs-thailand-business" className="text-primary hover:underline">Bali vs Thailand</Link> jurisdictional comparisons.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Growth Indicators */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Future Growth Outlook</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            With over 278 million consumers and a rapidly growing middle class, the ROI on Indonesian investment is among the highest in Emerging Markets. Explore current data in our <Link href="/indonesia-business-growth" className="text-primary hover:underline font-medium">Indonesia business growth report</Link> and find out <Link href="/why-invest-indonesia" className="text-primary hover:underline">why foreigners invest in Indonesia</Link> today.
                        </p>
                        <div className="pt-4">
                            <Button size="lg" variant="outline" className="w-full md:w-auto" asChild>
                                <Link href="/cost-of-doing-business-bali">Analyze Operational Costs</Link>
                            </Button>
                        </div>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Deploy Capital Strategy</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Establish a high-authority investment position in Indonesia. Access our central intelligence report for deep technical advisory on PT PMA setup and sector analysis.
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
