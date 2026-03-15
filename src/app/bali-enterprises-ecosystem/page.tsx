import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Network, 
    ShieldCheck, 
    Zap, 
    Users, 
    CheckCircle2, 
    Globe,
    Building2,
    Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Bali Enterprises Ecosystem: High-Authority Investor Network | Bali Enterprises",
    description: "Explore the Bali Enterprises ecosystem. A bespoke collection of premium corporate services, investment consultancy, and global referral networks designed for elite founders.",
};

export default function BaliEnterprisesEcosystemPage() {
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
                        <Network className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Boutique Ecosystem</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        The Bali Enterprises <span className="text-muted-foreground italic">Ecosystem</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        We have architected a high-authority corporate ecosystem where global capital meets local technical expertise in Indonesia.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Ecosystem Model */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">A Unified Professional Network</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Bali Enterprises serves as the central node for international investors navigating <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">starting a business in Bali</Link>. Our ecosystem integrates <Link href="/bali-corporate-services" className="text-primary hover:underline">bespoke corporate services</Link> with <Link href="/bali-investment-consultancy" className="text-primary hover:underline font-medium">targeted investment advisory</Link>.
                        </p>
                        <AdvisoryInsight title="Executive Summary">
                            Our model is built for "The High-Authority Founder"—those who prioritize legal sovereignty, operational speed, and access to local elite networking.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Ecosystem Pillars */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Core Ecosystem Pillars</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Strategic Advisory", icon: <Briefcase className="h-5 w-5 text-primary" />, desc: "High-level <Link href='/boutique-investment-bali' class='text-primary hover:underline'>boutique investment</Link> positioning for market entry and scaling across the <Link href='/business-regions-indonesia' class='text-primary hover:underline font-medium'>regions of Indonesia</Link>." },
                                { title: "Compliance Hub", icon: <ShieldCheck className="h-5 w-5 text-primary" />, desc: "Direct access to <Link href='/starting-business-bali-guide#registration-steps' class='text-primary hover:underline'>PT PMA registration</Link> and <Link href='/starting-business-bali-guide#visa-options' class='text-primary hover:underline font-medium'>Investor KITAS</Link> sponsorship under one high-authority banner." },
                                { title: "Investor Referral", icon: <Zap className="h-5 w-5 text-primary" />, desc: "A curated <Link href='/investor-referral-bali' class='text-primary hover:underline'>referral flow</Link> connecting global capital to verified <Link href='/business-opportunities-bali' class='text-primary hover:underline font-medium'>opportunities in Bali</Link>." },
                                { title: "Startup Integration", icon: <Users className="h-5 w-5 text-primary" />, desc: "Deep links into the <Link href='/startup-ecosystem-bali' class='text-primary hover:underline'>Bali startup ecosystem</Link>, providing founders with immediate local networking power." }
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

                    {/* Collaborative Power */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Driving Global Value</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The ecosystem thrives by reducing the "friction of entry" for international investors. Whether evaluating <Link href="/why-invest-indonesia" className="text-primary hover:underline">capital allocation</Link> or executing a <Link href="/how-to-start-a-business-in-bali" className="text-primary hover:underline font-medium">market entry roadmap</Link>, we provide the technical intelligence required for success.
                        </p>
                        <div className="p-6 border rounded-xl flex items-center gap-6 bg-muted/20">
                            <Building2 className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm">Professional Synergy</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Our ecosystem insights cover <Link href="/bali-business-environment" className="text-primary hover:underline">macro trends</Link> and <Link href="/industries-growing-bali" className="text-primary hover:underline">sector growth</Link>, ensuring unified decision-making.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Global Benchmarks */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Elite Positioning</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We benchmark our services against global standards. See how the Indonesian landscape compares in our <Link href="/bali-vs-singapore-startup" className="text-primary hover:underline font-medium">Bali vs Singapore</Link> and <Link href="/bali-vs-dubai-business" className="text-primary hover:underline font-medium">Bali vs Dubai</Link> situational reports.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Enter the Ecosystem</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Access our central intelligence report. Establish your high-authority presence within the Bali Enterprises professional network.
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
