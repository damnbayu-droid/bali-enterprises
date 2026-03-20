import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    TrendingUp, 
    CheckCircle2, 
    Home, 
    Users, 
    ShieldCheck, 
    Globe,
    Compass
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Bali Investment Guide: Asset Classes & Capital Drivers | Bali Enterprises",
    description: "A strategic guide to investing in Bali. Explore premium real estate, digital startups, hospitality ventures, and the regulatory framework for foreign capital.",
};

export default function BaliInvestmentGuidePage() {
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
                        <Compass className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Localized Intelligence</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Bali Investment <span className="text-muted-foreground italic">Guide</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Bali has evolved into a sophisticated investment destination, offering high-yield opportunities in real estate, technology, and premium services for global capital.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Bali Advantage */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The Bali Investment Thesis</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            While industrial capital flows to Java, "Intellectual and Lifestyle Capital" flows to Bali. The island's unique appeal as a global creative hub drives <Link href="/why-invest-indonesia" className="text-primary hover:underline font-medium">high-alpha returns</Link>. For a technical roadmap on how to deploy capital, see our <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">complete guide to starting a business in Bali</Link>.
                        </p>
                        <AdvisoryInsight title="Market Briefing">
                            Bali's real estate market in districts like Canggu and Uluwatu has consistently outperformed regional benchmarks, with rental yields reaching 12%–18% in the premium sector.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Asset Classes */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Core Asset Classes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Premium Real Estate", icon: <Home className="h-5 w-5 text-primary" />, desc: "Focus on legally compliant <Link href='/starting-business-bali-guide#business-zoning' class='text-primary hover:underline'>commercial-zoned</Link> villa developments and boutique hospitality assets." },
                                { title: "Digital & Tech Startups", icon: <TrendingUp className="h-5 w-5 text-primary" />, desc: "Investing in founders leveraging the <Link href='/startup-ecosystem-bali' class='text-primary hover:underline font-medium'>startup ecosystem in Bali</Link> to build global SaaS and Fintech products." },
                                { title: "Wellness & Longevity", icon: <Users className="h-5 w-5 text-primary" />, desc: "The Sanur Special Economic Zone (SEZ) is creating a massive cluster for medical and wellness technology investment." },
                                { title: "Operational Infrastructure", icon: <Globe className="h-5 w-5 text-primary" />, desc: "Supporting the <Link href='/business-opportunities-bali' class='text-primary hover:underline'>business opportunities in Bali</Link> through logistics, co-working, and premium workspace development." }
                            ].map((asset, i) => (
                                <div key={i} className="p-6 rounded-xl border border-border shadow-sm space-y-3 bg-card/50">
                                    <div className="flex items-center gap-2">
                                        {asset.icon}
                                        <h4 className="font-bold">{asset.title}</h4>
                                    </div>
                                    <div className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: asset.desc }} />
                                </div>
                            ))}
                        </div>
                    </section>

                    <RiskNote title="Capital Sovereignty Warning" variant="destructive">
                        Attempting to invest through "Nominees" (local individuals holding assets in their name) is the <Link href="/mistakes-foreign-entrepreneurs-make" className="text-primary hover:underline font-bold">most critical error</Link> foreign investors make in Indonesia. A formal <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline font-bold">PT PMA structure</Link> is the only legally recognized method to ensure 100% control over your investment portfolio.
                    </RiskNote>

                    {/* Strategic Analysis */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Comparative Regional Intelligence</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            How does Bali compare with other destinations? For a deeper dive into regional dynamics, read our <Link href="/indonesia-vs-malaysia-business" className="text-primary hover:underline">Indonesia vs Malaysia</Link>, <Link href="/bali-vs-thailand-business" className="text-primary hover:underline">Bali vs Thailand</Link>, and <Link href="/bali-vs-dubai-business" className="text-primary hover:underline">Bali vs Dubai</Link> reports.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Understanding the <Link href="/bali-business-environment" className="text-primary hover:underline font-medium">Bali business environment</Link> and the true <Link href="/cost-of-doing-business-bali" className="text-primary hover:underline font-medium">cost of operations</Link> is mission-critical for high-standard investors.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Deploy Your Bali Capital</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Access our central intelligence report for a professional, risk-mitigated roadmap to Bali investment and company setup.
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
