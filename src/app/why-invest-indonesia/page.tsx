import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Globe, 
    TrendingUp, 
    CheckCircle2, 
    Zap, 
    Users, 
    ShieldCheck,
    BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Why Invest in Indonesia? 2024–2025 Strategic Report | Bali Enterprises",
    description: "Discover the top reasons why global investors are choosing Indonesia. Analyzing demographic dividends, digital acceleration, and the $1.3T consumer market.",
};

export default function WhyInvestIndonesiaPage() {
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
                        <span className="text-sm font-bold uppercase tracking-widest">Investment Rationale</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Why Invest in <span className="text-muted-foreground italic">Indonesia?</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Indonesia is no longer just an "emerging market"; it is a global economic powerhouse driven by a massive demographic dividend and radical digital acceleration.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The G20 Economy */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The Largest Economy in SE Asia</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            With a GDP exceeding $1.3 Trillion, Indonesia is the 16th largest economy in the world and the dominant player in ASEAN. This massive scale is what drives <Link href="/foreign-investment-indonesia" className="text-primary hover:underline font-medium">foreign investment in Indonesia</Link>. For a technical overview of how to tap into this market, see our <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">Bali business setup guide</Link>.
                        </p>
                        <AdvisoryInsight title="Consultant Perspective">
                            Indonesia's debt-to-GDP ratio remains among the lowest in the G20, providing a fiscal stability that is increasingly rare in global markets.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Investment Pillars */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">The 4 Pillars of Investment</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Demographic Dividend", icon: <Users className="h-5 w-5 text-primary" />, desc: "Over 50% of the 278M population is under 30. This creates a massive, tech-savvy consumer engine and a highly adaptable workforce." },
                                { title: "Digital Acceleration", icon: <Zap className="h-5 w-5 text-primary" />, desc: "One of the world's fastest-growing digital economies. E-commerce and Fintech are projected to reach $130B+ by 2025." },
                                { title: "Resource Downstreaming", icon: <Globe className="h-5 w-5 text-primary" />, desc: "The government's shift to domestic processing of nickel and other critical minerals is creating a massive industrial boom." },
                                { title: "Regulatory Reform", icon: <ShieldCheck className="h-5 w-5 text-primary" />, desc: "The Job Creation Law has simplified <Link href='/starting-business-bali-guide#registration-steps' class='text-primary hover:underline'>company registration</Link> and opened <Link href='/sectors-open-foreign-investors' class='text-primary hover:underline font-medium'>new sectors</Link> to 100% foreign ownership." }
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

                    {/* Regional Synergy */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Bali: The Gateway Hub</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For many international investors, Bali acts as the "Lifestyle Gateway" to Indonesia. By <Link href="/doing-business-in-bali" className="text-primary hover:underline">doing business in Bali</Link>, founders can enjoy a world-class living standard while managing ventures that scale across the entire archipelago. See our <Link href="/bali-investment-guide" className="text-primary hover:underline">Bali investment report</Link> for localized data.
                        </p>
                        <div className="p-6 border rounded-xl flex items-center gap-6 bg-muted/20">
                            <BarChart3 className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm">Indonesia Business Growth (2024)</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Foreign direct investment (FDI) has hit record highs, with a 21% increase in "New Tech" venture capital inflow. Read more in our <Link href="/indonesia-business-growth" className="text-primary hover:underline">growth analysis</Link>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Competitive Comparison */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Global Positioning</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            How does Indonesia compare with other hubs? For jurisdictional arbitrage, read our <Link href="/indonesia-vs-malaysia-business" className="text-primary hover:underline font-medium">Indonesia vs Malaysia</Link> and <Link href="/bali-vs-thailand-business" className="text-primary hover:underline font-medium">Bali vs Thailand</Link> reports.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Investors seeking a "Dual Hub" model often find that combining Bali with Singapore provides the perfect balance of operational efficiency and financial security. See <Link href="/bali-vs-singapore-startup" className="text-primary hover:underline">Bali vs Singapore</Link>.
                        </p>
                    </section>

                    {/* Investment Opportunities */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Targeting Alpha</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The highest returns are currently found in infrastructure, green energy, and the digital consumer stack. Explore specific <Link href="/investment-opportunities-indonesia" className="text-primary hover:underline">investment opportunities in Indonesia</Link> and <Link href="/business-opportunities-bali" className="text-primary hover:underline font-medium">niche markets in Bali</Link>.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Secure Your Market Share</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Don't miss the Indonesian growth decade. Access our central intelligence report for deep advisory on company formation and investment analysis.
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
