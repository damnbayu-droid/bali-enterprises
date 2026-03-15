import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    BarChart3, 
    ShieldCheck, 
    TrendingUp, 
    CheckCircle2, 
    Globe, 
    Compass,
    Landmark,
    Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Bali Investment Consultancy: High-Standard Advisory | Bali Enterprises",
    description: "Access world-class investment consultancy in Bali. Strategic market entry, jurisdictional analysis, and asset protection for international investors and corporate entities.",
};

export default function BaliInvestmentConsultancyPage() {
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
                        <span className="text-sm font-bold uppercase tracking-widest">Consultancy Alpha</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Bali Investment <span className="text-muted-foreground italic">Consultancy</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Providing high-authority technical advisory for international capital stakeholders entering the Indonesian market via the Bali ecosystem.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Advisory Model */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">A High-Standard Advisory Pillar</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our consultancy model is built on technical precision and market intelligence. We guide investors through the complexities of <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">starting a business in Bali</Link> by providing deep <Link href="/bali-business-environment" className="text-primary hover:underline">market analysis</Link> and <Link href="/bali-investment-guide" className="text-primary hover:underline font-medium">localized intelligence</Link>.
                        </p>
                        <AdvisoryInsight title="Executive Focus">
                            We don't just "process papers"; we architect <Link href="/foreign-investment-indonesia" className="text-primary hover:underline font-medium">investment sovereignty</Link> for global founders.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Consultancy Verticals */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Core Consultancy Verticals</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Jurisdictional Analysis", icon: <Globe className="h-5 w-5 text-primary" />, desc: "Benchmarking Indonesia against regional hubs via our <Link href='/bali-vs-singapore-startup' class='text-primary hover:underline'>Bali vs Singapore</Link> and <Link href='/bali-vs-thailand-business' class='text-primary hover:underline font-medium'>Bali vs Thailand</Link> reports." },
                                { title: "Asset Protection", icon: <ShieldCheck className="h-5 w-5 text-primary" />, desc: "Developing <Link href='/starting-business-bali-guide#pma-structure' class='text-primary hover:underline'>PT PMA legal structures</Link> that secure 100% foreign ownership and protect against <Link href='/mistakes-foreign-entrepreneurs-make' class='text-primary hover:underline font-medium'>nominee-related risks</Link>." },
                                { title: "Market Entry Roadmap", icon: <TrendingUp className="h-5 w-5 text-primary" />, desc: "Aligning <Link href='/how-to-start-a-business-in-bali' class='text-primary hover:underline'>setup roadmaps</Link> with <Link href='/indonesia-business-growth' class='text-primary hover:underline'>national growth trends</Link> and <Link href='/investment-opportunities-indonesia' class='text-primary hover:underline'>sectoral opportunities</Link>." },
                                { title: "Bespoke Corporate Setups", icon: <Landmark className="h-5 w-5 text-primary" />, desc: "Integration of <Link href='/bali-corporate-services' class='text-primary hover:underline'>technical services</Link> with <Link href='/boutique-investment-bali' class='text-primary hover:underline font-medium'>boutique investment</Link> strategies for high-net-worth founders." }
                            ].map((vertical, i) => (
                                <div key={i} className="p-6 rounded-xl border border-border shadow-sm space-y-3 bg-card/50">
                                    <div className="flex items-center gap-2">
                                        {vertical.icon}
                                        <h4 className="font-bold">{vertical.title}</h4>
                                    </div>
                                    <div className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: vertical.desc }} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Operational Value */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Technical Excellence</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our consultancy reduces operational uncertainty. We provide detailed <Link href="/cost-of-doing-business-bali" className="text-primary hover:underline font-medium">cost of operations analysis</Link> and guide founders through the nuances of <Link href="/starting-business-bali-guide#business-zoning" className="text-primary hover:underline">business zoning</Link> and <Link href="/sectors-open-foreign-investors" className="text-primary hover:underline">sectoral openness</Link>.
                        </p>
                        <div className="p-6 border rounded-xl flex items-center gap-6 bg-muted/20">
                            <Briefcase className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm">Professional Network</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Leverage the <Link href="/bali-enterprises-ecosystem" className="text-primary hover:underline">Bali Enterprises ecosystem</Link> and our <Link href="/investor-referral-bali" className="text-primary hover:underline font-medium">referral network</Link> to accelerate your market speed.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Engage High-Authority Advisory</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Don't leave your Indonesian entry to chance. Access our central intelligence report for a professional, technical advisory roadmap.
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
