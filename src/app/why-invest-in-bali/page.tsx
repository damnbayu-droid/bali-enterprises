import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    TrendingUp, 
    Globe, 
    Zap, 
    Heart, 
    BarChart3,
    CheckCircle2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Why Invest in Bali: Strategic Market Entry Guide | Bali Enterprises",
    description: "Discover why Bali is becoming a global business hub for international entrepreneurs, investors, and startups. Strategic location, market access, and lifestyle appeal.",
};

export default function WhyInvestBaliPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12 pb-24">
            {/* Header */}
            <div className="w-full max-w-5xl px-6 mb-8">
                <Link href="/starting-business-bali-guide" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Main Guide
                </Link>
            </div>

            {/* Hero Section */}
            <header className="w-full max-w-5xl px-6 mb-16">
                <div className="space-y-6 max-w-3xl">
                    <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px] font-bold">
                        Market Intelligence
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-foreground leading-[1.1]">
                        Why Bali Is Becoming a <span className="text-muted-foreground italic">Global Business Hub</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Over the past decade, Bali has transformed into one of the most dynamic locations in Southeast Asia for international entrepreneurs, investors, and global startups.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="w-full max-w-5xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-16">
                        
                        {/* 1. Strategic Location */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <Globe className="h-6 w-6" />
                                <h2 className="text-2xl md:text-3xl font-serif">Strategic Gateway to Southeast Asia</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Bali's geographic location positions it as a perfect bridge between Australia, Asia-Pacific, and the Middle East. It serves as a secondary corporate gateway to Indonesia, the world's fourth most populous nation.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    { title: "Regional Proximity", desc: "Short flight times to Singapore (2.5h), Perth (3.5h), and Hong Kong (5h)." },
                                    { title: "Digital Economy Hub", desc: "Direct access to Indonesia's $80B+ digital economy ecosystem." },
                                    { title: "G20 Visibility", desc: "Strong international infrastructure development following recent global summits." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="h-3 w-3 text-primary" />
                                        </div>
                                        <div>
                                            <span className="font-bold text-foreground block">{item.title}</span>
                                            <span className="text-sm text-muted-foreground">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <Separator className="opacity-40" />

                        {/* 2. Market Access */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <TrendingUp className="h-6 w-6" />
                                <h2 className="text-2xl md:text-3xl font-serif">Access to 270+ Million Population</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Starting in Bali provides immediate local validation for products designed for the Indonesian market. With a rapidly growing middle class and high digital penetration, the scale of opportunity is significant.
                            </p>
                            <AdvisoryInsight title="Demographic Dividend">
                                Indonesia's population is young and tech-savvy. Over 70% of the population is of working age, providing a massive consumer base and a deep talent pool for digital-first companies.
                            </AdvisoryInsight>
                        </section>

                        <Separator className="opacity-40" />

                        {/* 3. Cost Efficiency */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <BarChart3 className="h-6 w-6" />
                                <h2 className="text-2xl md:text-3xl font-serif">Global Arbitrage: Lower Operating Costs</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Compared to established hubs like Singapore, London, or Hong Kong, Bali offers high-tier infrastructure at a fraction of the cost.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                <div className="p-6 rounded-xl border bg-muted/20">
                                    <h4 className="font-bold mb-2">Talent & Labor</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">Highly skilled creative and technical talent available at competitive rates compared to Western markets.</p>
                                </div>
                                <div className="p-6 rounded-xl border bg-muted/20">
                                    <h4 className="font-bold mb-2">Office & Creative Spaces</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">Premium coworking and private office options in Canggu and Ubud that rival Silicon Valley standards.</p>
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* 4. Lifestyle & Talent */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <Heart className="h-6 w-6" />
                                <h2 className="text-2xl md:text-3xl font-serif">The "Bali Effect": Talent Attraction</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                The island's lifestyle appeal makes recruitment for global remote teams significantly easier. Founders find that top-tier international talent is willing to move to Bali for the improved quality of life.
                            </p>
                            <div className="p-6 rounded-xl border-l-[6px] border-primary bg-primary/5">
                                <p className="italic text-lg text-foreground/80 font-serif">
                                    "We didn't move to Bali just for the costs. We moved because our engineering team produces better work when they are inspired by their surroundings."
                                </p>
                                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">— Founder, Web3 FinTech Startup</p>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Conclusion CTA */}
                        <section className="pt-8">
                            <div className="p-10 rounded-2xl bg-slate-950 text-white space-y-6">
                                <h3 className="text-2xl font-serif">Ready to explore your market entry?</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    Our strategic advisors can help you map out a 24-month roadmap for your investment in Bali.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Link href="/starting-business-bali-guide#pt-pma-explained">
                                        <div className="px-6 py-3 bg-white text-slate-950 font-bold rounded-lg text-center hover:bg-slate-200 transition-colors">
                                            Start with Legal Setup
                                        </div>
                                    </Link>
                                    <Link href="/contact">
                                        <div className="px-6 py-3 border border-white/20 text-white font-bold rounded-lg text-center hover:bg-white/10 transition-colors">
                                            Schedule Briefing
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            <div className="p-8 rounded-2xl border bg-card space-y-6">
                                <Zap className="h-8 w-8 text-primary" />
                                <h4 className="font-serif text-xl">Key Facts</h4>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Population</span>
                                        <div className="text-2xl font-serif">270M+</div>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Digital Economy</span>
                                        <div className="text-2xl font-serif">$80B (2025 proj)</div>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Startup Density</span>
                                        <div className="text-2xl font-serif">High (Canggu Hub)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
