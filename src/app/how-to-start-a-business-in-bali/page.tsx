import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Rocket, 
    CheckCircle2, 
    TrendingUp, 
    ClipboardCheck, 
    ShieldCheck, 
    Users,
    ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "How to Start a Business in Bali: The Essential Roadmap | Bali Enterprises",
    description: "A step-by-step roadmap on how to start a business in Bali. From legal registration (PT PMA) to finding a location and scaling your entrepreneurial venture.",
};

export default function HowToStartABusinessInBaliPage() {
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
                        <Rocket className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Entrepreneur Roadmap</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        How to Start a <span className="text-muted-foreground italic">Business in Bali</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Starting a enterprise in a foreign jurisdiction requires a clear execution plan. This roadmap outlines the tactical steps required to transition from an idea to a fully compliant corporate entity in Bali.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Ultimate Guide Anchor */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The Tactical Foundation</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For a comprehensive overview of legal structures, investment rules, and company setup procedures, see our <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">complete guide to starting a business in Bali</Link>. Every founder must understand the <Link href="/starting-business-bali-guide#registration-steps" className="text-primary hover:underline font-medium">company registration steps</Link> before committing capital.
                        </p>
                    </section>

                    <Separator />

                    {/* Step-by-Step Roadmap */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Step-by-Step Execution</h2>
                        <div className="space-y-12">
                            {[
                                { title: "Phase 1: Legal Architecture", desc: "Select your KBLI codes and establish a PT PMA. This provides 100% foreign ownership and the right to sponsor visas.", link: "/starting-business-bali-guide#pma-structure" },
                                { title: "Phase 2: Residency & Visas", desc: "Secure your Investor KITAS (E23/E28) to legally reside and manage your business on the island.", link: "/starting-business-bali-guide#visa-options" },
                                { title: "Phase 3: Operational Setup", desc: "Find a compliant location based on business zoning and open a corporate bank account.", link: "/starting-business-bali-guide#business-zoning" },
                                { title: "Phase 4: Market Entry & Scale", desc: "Leverage the local startup ecosystem and begin local/global operations.", link: "/startup-ecosystem-bali" }
                            ].map((phase, i) => (
                                <div key={i} className="flex gap-6 items-start relative pb-12 last:pb-0">
                                    {i < 3 && <div className="absolute left-[19px] top-10 w-[2px] h-full bg-border" />}
                                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold relative z-10 shrink-0">
                                        {i + 1}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-serif font-bold">{phase.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
                                        <Link href={phase.link} className="inline-flex items-center text-xs font-bold text-primary hover:underline group">
                                            Deep Dive <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <AdvisoryInsight title="Market Intelligence">
                        Success in Bali is often about "Community Integration." Before launching, we recommend spending time in hubs like Canggu or Ubud to understand the <Link href="/entrepreneurship-in-bali" className="text-primary hover:underline">entrepreneurial culture in Bali</Link>.
                    </AdvisoryInsight>

                    <RiskNote title="The Nomad-to-Founder Pivot" variant="warning">
                        <p className="mb-4">
                            Many companies start as <Link href="/digital-nomads-startups-bali" className="text-primary hover:underline">digital nomads starting projects in Bali</Link>. The transition to a formal PT PMA is a strategic move that unlocks large-scale <Link href="/business-opportunities-bali" className="text-primary hover:underline font-bold">business opportunities</Link> and essential legal protection.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="space-y-2">
                                <h5 className="font-bold text-amber-900/90 dark:text-amber-200">Regulatory Risks</h5>
                                <ul className="space-y-1 text-sm opacity-80">
                                    <li>• No local hiring rights</li>
                                    <li>• Visa non-compliance risk</li>
                                    <li>• Restricted banking access</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h5 className="font-bold text-amber-900/90 dark:text-amber-200">Founder Advantage</h5>
                                <ul className="space-y-1 text-sm opacity-80">
                                    <li>• Multi-year residency (KITAS)</li>
                                    <li>• Formal tax residency</li>
                                    <li>• Full asset protection</li>
                                </ul>
                            </div>
                        </div>
                    </RiskNote>

                    {/* Mistakes to Avoid */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Protecting Your Investment</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Starting a business is also about avoiding critical errors. Read our report on the <Link href="/mistakes-foreign-entrepreneurs-make" className="text-primary hover:underline">common mistakes foreign entrepreneurs make in Bali</Link> to ensure your capital is safe.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            {[
                                "Confirm sector eligibility",
                                "Verify land zoning",
                                "Avoid nominee structures",
                                "Maintain tax compliance"
                            ].map((tip, i) => (
                                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border text-xs font-semibold text-muted-foreground">
                                    <CheckCircle2 className="h-3 w-3 text-primary" />
                                    {tip}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Begin Your Journey</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Access our central intelligence report to navigate the full legal and operational landscape of starting a company in Indonesia.
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
