import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Banknote, 
    CheckCircle2, 
    TrendingUp, 
    Building2, 
    Users, 
    Zap,
    Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Cost of Doing Business in Bali: 2024–2025 Financial Analysis | Bali Enterprises",
    description: "A comprehensive breakdown of the cost of doing business in Bali. Analyze rental rates, labor costs, professional services, and operational expenses for foreign companies.",
};

export default function CostOfDoingBusinessPage() {
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
                        <Banknote className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Financial Strategy</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Cost of Doing <span className="text-muted-foreground italic">Business in Bali</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Bali offers a high-yield operational environment with significant cost advantages compared to Western markets, provided that investors understand the regulatory capital requirements.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* Setup Costs */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Initial Setup Capital</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The primary entry cost is the <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline">PT PMA setup</Link>. While professional fees vary, the legal commitment of IDR 10 Billion in investment capital remains the standard benchmark for foreign entities.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                            {[
                                { title: "Company Formation", cost: "$4,500 – $8,500", desc: "Includes Notarial deed, NIB, and tax registration." },
                                { title: "Investor Visa (KITAS)", cost: "$1,200 – $1,800", desc: "Per director/shareholder for 1–2 years." },
                                { title: "Corporate Banking", cost: "Min. Balance", desc: "Mandatory deposit depends on bank selection." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-xl border border-border shadow-sm space-y-2 bg-card/50">
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-primary">{item.title}</h4>
                                    <p className="text-xl font-serif">{item.cost}</p>
                                    <p className="text-[11px] text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    {/* Operational Overhead */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Operational Overhead</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Once established, the <Link href="/bali-business-environment" className="text-primary hover:underline">Bali business environment</Link> becomes highly cost-efficient. Labor and office rental rates are significantly lower than in Singapore or Bangkok.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="space-y-4">
                                <h4 className="font-bold flex items-center gap-2 font-serif text-lg"><Building2 className="h-5 w-5 text-primary" /> Office & Workspace</h4>
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center text-sm border-b pb-2">
                                        <span className="text-muted-foreground">Premium Coworking (Monthly)</span>
                                        <span className="font-bold">$180 – $250</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm border-b pb-2">
                                        <span className="text-muted-foreground">Private Office (Canggu/Seminyak)</span>
                                        <span className="font-bold">$500 – $1,200</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm border-b pb-2">
                                        <span className="text-muted-foreground">Virtual Office (Annual)</span>
                                        <span className="font-bold">$400 – $700</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold flex items-center gap-2 font-serif text-lg"><Users className="h-5 w-5 text-primary" /> Human Resources</h4>
                                <ul className="space-y-3">
                                    <li className="flex justify-between items-center text-sm border-b pb-2">
                                        <span className="text-muted-foreground">Executive Assistant (Local)</span>
                                        <span className="font-bold">$400 – $800</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm border-b pb-2">
                                        <span className="text-muted-foreground">Senior Tech/Creative (Local)</span>
                                        <span className="font-bold">$1,200 – $2,500</span>
                                    </li>
                                    <li className="flex justify-between items-center text-sm border-b pb-2">
                                        <span className="text-muted-foreground">Standard Staff (UMR Bali)</span>
                                        <span className="font-bold">$210 – $350</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <AdvisoryInsight title="Internal Briefing">
                        For businesses in high-growth niches like those in our <Link href="/business-opportunities-bali" className="text-primary hover:underline">opportunities report</Link>, we recommend budgeting at least $25,000 for the first 12 months of operational "runway" to cover legal, visa, and local community integration.
                    </AdvisoryInsight>

                    {/* Regional Price Arbitrage */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Regional Cost Comparison</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            How does Bali stack up against neighboring hubs? For founders weighing lifestyle and tax benefits, the arbitrage is clear. Compare detailed metrics in our <Link href="/bali-vs-thailand-business" className="text-primary hover:underline">Bali vs Thailand</Link> and <Link href="/bali-vs-singapore-startup" className="text-primary hover:underline">Bali vs Singapore</Link> reports.
                        </p>
                        <div className="bg-muted/30 p-8 rounded-2xl border flex flex-col items-center text-center space-y-4">
                            <Zap className="h-10 w-10 text-primary" />
                            <h4 className="text-xl font-serif font-bold">40%–60% Cost Reduction</h4>
                            <p className="text-sm text-muted-foreground max-w-lg">
                                Companies moving from Singapore to Bali for operational headquarters often see a 60% reduction in burn rate while maintaining the same "global standard" of output.
                            </p>
                        </div>
                    </section>

                    {/* Hidden Costs & Compliance */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Hidden Costs of Non-Compliance</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The "cheapest" setup is often the most expensive in the long run. <Link href="/starting-business-bali-guide#nominee-risks" className="text-primary hover:underline">Nominee structures</Link> and incorrect <Link href="/starting-business-bali-guide#business-zoning" className="text-primary hover:underline">zoning selections</Link> can result in immediate closure, fines, and deportation.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 border rounded-xl flex items-start gap-3">
                                <Scale className="h-5 w-5 text-primary mt-1" />
                                <div>
                                    <h4 className="font-bold text-sm">Monthly Tax Filing</h4>
                                    <p className="text-xs text-muted-foreground">A mandatory operational expense of $100–$300/mo for professional accounting.</p>
                                </div>
                            </div>
                            <div className="p-4 border rounded-xl flex items-start gap-3">
                                <TrendingUp className="h-5 w-5 text-primary mt-1" />
                                <div>
                                    <h4 className="font-bold text-sm">Business ID (NIB)</h4>
                                    <p className="text-xs text-muted-foreground">The foundation for all operational permits. Essential for <Link href="/doing-business-in-bali" className="text-primary hover:underline">import/export licenses</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Optimize Your Investment</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            For a comprehensive technical overview of legal setup, zoning, and residency requirements, see our central intelligence report.
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
