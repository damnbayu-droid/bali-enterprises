import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Zap, 
    Handshake, 
    ShieldCheck, 
    Users, 
    CheckCircle2, 
    BarChart3, 
    Globe,
    UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Investor Referral Bali: Elite Lead Flow & Strategic Partnerships | Bali Enterprises",
    description: "Learn about the Bali Enterprises investor referral program. Connect global capital to verified Indonesian business opportunities through a high-authority boutique network.",
};

export default function InvestorReferralBaliPage() {
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
                        <Handshake className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Referral Alpha</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Investor Referral <span className="text-muted-foreground italic">Bali</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        A curated bridge connecting global capital allocators to verified, high-alpha <Link href="/business-opportunities-bali" className="text-primary hover:underline">business opportunities in Bali</Link> and Indonesia.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Referral Model */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">A Controlled Referral Ecosystem</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Referrals in the Bali market often suffer from information asymmetry. Our program provides a high-authority framework for <Link href="/bali-enterprises-ecosystem" className="text-primary hover:underline">ecosystem partners</Link> to refer leads seeking <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">company registration</Link> and <Link href="/bali-investment-consultancy" className="text-primary hover:underline">investment advisory</Link>.
                        </p>
                        <AdvisoryInsight title="Consultant Perspective">
                            Our referral flow is designed for institutional-grade reliability. Every lead is processed through our <Link href="/bali-corporate-services" className="text-primary hover:underline font-medium">bespoke corporate service stack</Link>.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Partner Benefits */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Referral Partner Pillars</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Verified Pipeline", icon: <UserCheck className="h-5 w-5 text-primary" />, desc: "Access a pre-vetted pipeline of high-net-worth individuals and corporate entities looking for <Link href='/foreign-investment-indonesia' class='text-primary hover:underline'>foreign investment</Link> entry points." },
                                { title: "Technical Support", icon: <Globe className="h-5 w-5 text-primary" />, desc: "Partners receive backend technical support on <Link href='/starting-business-bali-guide#pma-structure' class='text-primary hover:underline'>PT PMA legalities</Link> and Indonesian <Link href='/sectors-open-foreign-investors' class='text-primary hover:underline'>sectoral regulations</Link>." },
                                { title: "Strategic Synergy", icon: <Zap className="h-5 w-5 text-primary" />, desc: "Leads are integrated into the wider <Link href='/startup-ecosystem-bali' class='text-primary hover:underline font-medium'>startup ecosystem in Bali</Link>, increasing long-term client retention and LTV." },
                                { title: "Transparency", icon: <ShieldCheck className="h-5 w-5 text-primary" />, desc: "High-transparency reporting on setup progress, from <Link href='/starting-business-bali-guide#visa-options' class='text-primary hover:underline'>visa issuance</Link> to final corporate licensing." }
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

                    {/* Value Proposition */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Reducing Entry Friction</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Referral partners help clients avoid <Link href="/mistakes-foreign-entrepreneurs-make" className="text-primary hover:underline font-medium">common market entry mistakes</Link>. By directing capital towards a <Link href="/boutique-investment-bali" className="text-primary hover:underline">boutique investment model</Link>, partners ensure their clients' assets are protected under Indonesian law.
                        </p>
                        <div className="p-6 border rounded-xl flex items-center gap-6 bg-muted/20">
                            <BarChart3 className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm">Market Liquidity</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Increased referral flow drives liquidity into <Link href="/industries-growing-bali" className="text-primary hover:underline">growing Bali industries</Link> and supports the <Link href="/indonesia-business-growth" className="text-primary hover:underline font-medium">macro growth trajectory</Link> of the region.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Regional Context */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Cross-Border Referrals</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our program facilitates expansion from other regional hubs. Investors evaluate us against our <Link href="/bali-vs-singapore-startup" className="text-primary hover:underline font-medium">Bali vs Singapore</Link> and <Link href="/indonesia-vs-malaysia-business" className="text-primary hover:underline font-medium">Indonesia vs Malaysia</Link> jurisdictional benchmarks.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Become a Referral Catalyst</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Connect your network to high-authority Indonesia business setup. Access our central intelligence report for deep advisory on referral structures and partnership levels.
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
