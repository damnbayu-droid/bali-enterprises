import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Globe, 
    ArrowRightLeft,
    CheckCircle2,
    AlertCircle,
    BarChart3,
    Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Indonesia vs Malaysia: Business Setup Comparison | Bali Enterprises",
    description: "A strategic comparison of starting a business in Indonesia vs Malaysia. Analyzing legal structures, tax incentives, labor markets, and operational ease for foreign investors.",
};

export default function IndonesiaVsMalaysiaPage() {
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
                        <ArrowRightLeft className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Jurisdiction Comparison</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Indonesia vs Malaysia: <span className="text-muted-foreground italic">Strategic Business Comparison</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        For global investors evaluating Southeast Asia, the choice often narrows down to Indonesia (and specifically Bali) versus Malaysia. Both offer distinct regulatory advantages, tax structures, and market access strategies.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* Executive Summary */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Executive Overview</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            While Malaysia has traditionally been viewed as having a lower barrier to entry for Western companies, Indonesia's recent regulatory reforms (Job Creation Law) have drastically improved its competitiveness, particularly for <Link href="/starting-business-bali-guide" className="text-primary hover:underline">starting a company in Bali</Link> through the PT PMA structure.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="space-y-4 p-6 rounded-xl bg-muted/30 border border-border/50">
                                <h4 className="font-bold flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> Indonesia Strategy</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Massively scalable internal market (270M+)</li>
                                    <li>• Significant reforms in 100% foreign ownership</li>
                                    <li>• Highly attractive investor KITAS programs</li>
                                    <li>• Lower operational costs in regional hubs like Bali</li>
                                </ul>
                            </div>
                            <div className="space-y-4 p-6 rounded-xl bg-muted/30 border border-border/50">
                                <h4 className="font-bold flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> Malaysia Strategy</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Established Common Law system</li>
                                    <li>• High proficiency in English across workforce</li>
                                    <li>• Specialized tech visas (MDEC)</li>
                                    <li>• Proximity to Singapore financial markets</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Comparison Matrix */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Comparison Matrix: ID vs MY</h2>
                        <div className="relative overflow-x-auto rounded-xl border border-border shadow-sm">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-muted/50 text-muted-foreground uppercase text-[10px] tracking-widest font-bold">
                                    <tr>
                                        <th className="px-6 py-4">Metric</th>
                                        <th className="px-6 py-4">Indonesia (PT PMA / Bali)</th>
                                        <th className="px-6 py-4">Malaysia (Sdn Bhd)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr>
                                        <td className="px-6 py-4 font-semibold">Foreign Ownership</td>
                                        <td className="px-6 py-4">100% in most sectors (Positive List)</td>
                                        <td className="px-6 py-4">100% in many, but some restrictions</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-semibold">Min. Paid-up Capital</td>
                                        <td className="px-6 py-4">IDR 2.5 Billion (~$160k USD)</td>
                                        <td className="px-6 py-4">RM 1 (~$0.25 USD) for services*</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-semibold">Corporate Tax Rate</td>
                                        <td className="px-6 py-4">22% (Fixed)</td>
                                        <td className="px-6 py-4">17% - 24% (Tiered)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-semibold">Investor Residency</td>
                                        <td className="px-6 py-4">Investor KITAS (E23/E28) - Streamlined</td>
                                        <td className="px-6 py-4">Professional Visit Pass / MM2H</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-muted-foreground italic">
                            *Note: While Malaysian Sdn Bhd registration is cheap, foreign investors often face much higher actual capital requirements to secure working visas.
                        </p>
                    </section>

                    <AdvisoryInsight title="Market Intelligence">
                        Investors often find that while Malaysia is easier to "register," Indonesia is easier to "operate" at scale due to the sheer size of the consumer market and the lifestyle retention of top-tier international talent in Bali. For a complete overview of legal structures, see our <Link href="/starting-business-bali-guide" className="text-primary hover:underline">foreign investor guide to Bali business</Link>.
                    </AdvisoryInsight>

                    {/* Operational Complexity */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Operational Considerations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 border rounded-xl space-y-3">
                                <BarChart3 className="h-5 w-5 text-primary" />
                                <h4 className="font-bold">Indonesia Expansion</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Indonesia is a "scale-first" market. Investing here means positioning for the long term. If you are evaluating regional options, consider how Bali compares to other emerging hubs in our <Link href="/bali-vs-thailand-business" className="text-primary hover:underline">Bali vs Thailand comparison</Link>.
                                </p>
                            </div>
                            <div className="p-6 border rounded-xl space-y-3">
                                <Shield className="h-5 w-5 text-primary" />
                                <h4 className="font-bold">Risk Management</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Both nations require local expertise. In Indonesia, the use of <Link href="/starting-business-bali-guide#visa-options" className="text-primary hover:underline">Investor KITAS</Link> provides much stronger legal protections for foreign directors than typical ASEAN business visas.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Internal Navigation Clusters */}
                    <section className="bg-muted/30 rounded-2xl p-8 space-y-6 border border-border/50">
                        <h3 className="font-serif text-2xl">Explore More Jurisdictions</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Bali vs Singapore: The Dual Hub Model", href: "/bali-vs-singapore-startup" },
                                { title: "Bali vs Dubai: Tax & Cost Analysis", href: "/bali-vs-dubai-business" },
                                { title: "Why Bali for Startups", href: "/why-bali-for-startups" },
                                { title: "Business Regions in Indonesia", href: "/business-regions-indonesia" },
                                { title: "Strategic Market Intelligence", href: "/why-invest-in-bali" }
                            ].map((link, i) => (
                                <Link key={i} href={link.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                    <CheckCircle2 className="h-4 w-4 text-primary" />
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Ready to Evaluate Indonesia?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            For deep advisory on company formation, tax structuring, and investor residency, consult our central intelligence report.
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
