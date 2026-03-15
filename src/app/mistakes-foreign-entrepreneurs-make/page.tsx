import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    ShieldAlert, 
    CheckCircle2, 
    AlertCircle, 
    XCircle,
    Scale,
    Users,
    Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "10 Common Mistakes Foreign Entrepreneurs Make in Bali | Bali Enterprises",
    description: "Learn how to avoid the most common mistakes when starting a business in Bali. Analyzing legal errors, nominee risks, zoning issues, and tax compliance.",
};

export default function MistakesForeignEntrepreneursMakePage() {
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
                    <div className="flex items-center gap-3 text-destructive mb-2">
                        <ShieldAlert className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Risk Mitigation</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Common Mistakes <span className="text-muted-foreground italic">Foreign Entrepreneurs Make</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        In the Bali market, "quick and cheap" often leads to "slow and expensive." Understanding the most frequent points of failure is the best way to protect your venture.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Legal Trap */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">1. The Nominee Trap</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Using a local "nominee" to hold shares is the single most common cause of complete business failure in Bali. For a safe and compliant alternative, you must use the <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline font-medium">PT PMA structure</Link>, which allows 100% foreign ownership in most sectors.
                        </p>
                        <AdvisoryInsight title="Consultant Warning">
                            Nominee agreements have no legal standing for land ownership or company control in Indonesia. Any "side agreement" is unenforceable in local courts.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Zoning Issues */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">2. Incorrect Business Zoning</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Many entrepreneurs sign long-term leases only to find that their <Link href="/starting-business-bali-guide#business-zoning" className="text-primary hover:underline">zoning selection</Link> does not allow for their specific business activity. Verification of the ITR (Zoning Plan) is a mandatory step in our <Link href="/how-to-start-a-business-in-bali" className="text-primary hover:underline">startup roadmap</Link>.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div className="p-4 border border-destructive/20 bg-destructive/5 rounded-xl flex items-start gap-3">
                                <XCircle className="h-5 w-5 text-destructive mt-1" />
                                <div>
                                    <h4 className="font-bold text-sm">Residential Zone</h4>
                                    <p className="text-xs text-muted-foreground">Often used for villas but illegal for corporate office operations.</p>
                                </div>
                            </div>
                            <div className="p-4 border border-primary/20 bg-primary/5 rounded-xl flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                                <div>
                                    <h4 className="font-bold text-sm">Commercial Zone</h4>
                                    <p className="text-xs text-muted-foreground">The only compliant zone for retail, tourism, and tech operations.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Visa Non-Compliance */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">3. Visa Mismanagement</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Operating a business or managing a team on a "Nomad Visa" or "Tourist Visa" is a violation of immigration law. Serious founders must transition to an <Link href="/starting-business-bali-guide#visa-options" className="text-primary hover:underline">Investor KITAS</Link>. See our <Link href="/digital-nomads-startups-bali" className="text-primary hover:underline">nomad-to-founder pivot guide</Link> for details.
                        </p>
                    </section>

                    {/* Operational Blindspots */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Tactical Errors</h2>
                        <div className="space-y-4">
                            {[
                                { title: "Ignoring Tax Residency", desc: "Founders often forget their personal tax liability when based in Bali for >183 days." },
                                { title: "Undertaxing Local Talent", desc: "Failure to pay BPJS and income tax for employees leads to labor court disputes." },
                                { title: "Poor KBLI Selection", desc: "Choosing the wrong business activity code can block your bank account opening." }
                            ].map((mistake, i) => (
                                <div key={i} className="flex gap-4 p-4 border rounded-xl hover:bg-muted/30 transition-colors">
                                    <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-sm tracking-tight">{mistake.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{mistake.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Market Intelligence */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">4. Underestimating Costs</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Many founders fail to account for the true <Link href="/cost-of-doing-business-bali" className="text-primary hover:underline">cost of doing business in Bali</Link>. From community (Banjar) fees to mandatory professional accounting, these "silent" costs can erode a startup's runway.
                        </p>
                    </section>

                    {/* Strategic Advice */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">How to Ensure Success</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            To build a successful venture, you must integrate into the <Link href="/entrepreneurship-in-bali" className="text-primary hover:underline">Bali entrepreneurial community</Link> and position yourself within high-growth <Link href="/industries-growing-bali" className="text-primary hover:underline font-medium">Bali industries</Link>.
                        </p>
                        <div className="p-8 border rounded-2xl bg-card/50 flex flex-col md:flex-row gap-8 items-center">
                            <Scale className="h-16 w-16 text-primary/40" />
                            <div className="flex-1 space-y-3">
                                <h3 className="text-2xl font-serif">Compliance is Profit</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    In the Indonesian market, being "Perfectly Compliant" is a competitive advantage. It allows you to bid for government contracts, secure large-scale <Link href="/business-opportunities-bali" className="text-primary hover:underline">opportunities</Link>, and scale into other <Link href="/business-regions-indonesia" className="text-primary hover:underline">regions of Indonesia</Link> without friction.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Avoid the Pitfalls</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Access our central intelligence report for a professional, risk-mitigated technical roadmap to Indonesia business success.
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
