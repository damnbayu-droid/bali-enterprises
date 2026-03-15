import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    ArrowRightLeft,
    CheckCircle2,
    Briefcase,
    Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Bali vs Singapore: Startup Hub Comparison | Bali Enterprises",
    description: "Compare Bali and Singapore as startup hubs. Learn how to combine Singapore's financial infrastructure with Bali's operational efficiency and lifestyle.",
};

export default function BaliVsSingaporePage() {
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
                        Regional Analysis
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-foreground leading-[1.1]">
                        Bali vs <span className="text-muted-foreground italic">Singapore</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        For many founders, the choice isn't "either/or" but "both". Singapore is the world's leading financial gateway, while Bali is rapidly becoming the world's leading operational base for creative and digital teams.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="w-full max-w-5xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-16">
                        
                        {/* 1. Comparison Matrix */}
                        <section className="space-y-8">
                            <h2 className="text-2xl md:text-3xl font-serif flex items-center gap-3">
                                <ArrowRightLeft className="h-6 w-6 text-primary" />
                                Hub Profiles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border rounded-2xl overflow-hidden shadow-sm">
                                <div className="p-8 bg-slate-50 space-y-4">
                                    <h4 className="font-bold text-center border-b pb-4">Singapore Office</h4>
                                    <ul className="space-y-3 text-xs text-muted-foreground">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-3 w-3 mt-1 text-primary shrink-0" /> VC & Capital Access</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-3 w-3 mt-1 text-primary shrink-0" /> IP Protection & English Law</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-3 w-3 mt-1 text-primary shrink-0" /> Low Corporate Tax (17%)</li>
                                        <li className="flex items-start gap-2 font-bold text-foreground">Usage: Holding Company / Banking</li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-white space-y-4 border-l">
                                    <h4 className="font-bold text-center border-b pb-4">Bali (Indonesia) Office</h4>
                                    <ul className="space-y-3 text-xs text-muted-foreground">
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-3 w-3 mt-1 text-primary shrink-0" /> High Operational Efficiency</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-3 w-3 mt-1 text-primary shrink-0" /> High Quality of Life for Founders</li>
                                        <li className="flex items-start gap-2"><CheckCircle2 className="h-3 w-3 mt-1 text-primary shrink-0" /> Growing Local Tech Talent</li>
                                        <li className="flex items-start gap-2 font-bold text-foreground">Usage: Operations / Creative Hub</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* 2. The Synergy Model */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <Briefcase className="h-6 w-6" />
                                <h2 className="text-2xl md:text-3xl font-serif">The "SG-Holding / ID-Ops" Model</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Most mature startups in Southeast Asia utilize a dual-hub model. They incorporate a Singapore entity for investor relations, IP protection, and banking, while using a **PT PMA in Bali** to manage their core development, creative, and customer service teams.
                            </p>
                            <AdvisoryInsight title="Strategic Structure">
                                Bali Enterprises specializes in managing the Indonesian arm of regional holding structures. We ensure your PT PMA in Bali is fully compliant with local reporting requirements while feeding into your broader regional tax strategy.
                            </AdvisoryInsight>
                        </section>

                        <Separator className="opacity-40" />

                        {/* 3. Cost Analysis */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <Zap className="h-6 w-6" />
                                <h2 className="text-2xl md:text-3xl font-serif">Cost Differential Analysis</h2>
                            </div>
                            <div className="p-8 rounded-2xl bg-muted/20 border">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm">
                                        <span>Mid-level Developer (Per Month)</span>
                                        <span className="font-bold">SG: $5k - $8k+ vs Bali: $1k - $2k</span>
                                    </div>
                                    <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[30%]" />
                                    </div>
                                    <p className="text-[10px] text-muted-foreground italic uppercase">Operational costs in Bali are typically 4x-5x lower for equivalent digital talent.</p>
                                </div>
                            </div>
                        </section>

                        {/* CTA */}
                        <section className="pt-8">
                            <div className="p-10 rounded-2xl bg-slate-950 text-white space-y-6 text-center">
                                <h3 className="text-2xl font-serif">Bridging the Singapore-Bali Gap</h3>
                                <p className="text-slate-400 leading-relaxed max-w-xl mx-auto">
                                    Need help setting up the Indonesian operational arm for your Singapore-based startup? Our corporate structuring team can guide the way.
                                </p>
                                <Link href="/starting-business-bali-guide#registration-steps">
                                    <div className="inline-block mt-4 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-all">
                                        View Setup Roadmap
                                    </div>
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            <div className="p-8 rounded-2xl border bg-card space-y-6">
                                <h4 className="font-serif text-xl">Comparison Guides</h4>
                                <div className="flex flex-col gap-4">
                                    <Link href="/bali-vs-thailand-business" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center justify-between">
                                        Bali vs Thailand <ArrowRightLeft className="h-3 w-3" />
                                    </Link>
                                    <Link href="/bali-vs-dubai-business" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center justify-between">
                                        Bali vs Dubai <ArrowRightLeft className="h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
