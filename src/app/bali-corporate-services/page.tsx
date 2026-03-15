import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    ShieldCheck, 
    Building2, 
    Scale, 
    CheckCircle2, 
    Briefcase,
    Zap,
    Users,
    FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Bali Corporate Services: High-Authority Licensing & Compliance | Bali Enterprises",
    description: "Explore bespoke corporate services in Bali. From PT PMA registration and licensing to ongoing tax compliance and investor residency services for global founders.",
};

export default function BaliCorporateServicesPage() {
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
                        <Briefcase className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Service Stack</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Bali Corporate <span className="text-muted-foreground italic">Services</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        A centralized, high-authority platform for the technical execution of company setup and operational compliance in Indonesia.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Service Model */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Full-Spectrum Corporate Support</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our corporate services are designed for investors who prioritize legal sovereignty and operational speed. We bridge the gap between initial <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-medium">market entry roadmaps</Link> and full-scale <Link href="/building-a-business-in-bali" className="text-primary hover:underline">business operations</Link>.
                        </p>
                        <AdvisoryInsight title="Consultant Perspective">
                            Corporate services in Indonesia are not just about paperwork; they are about maintaining a high-authority position within the <Link href="/bali-business-environment" className="text-primary hover:underline font-medium">OSS/RBA regulatory framework</Link>.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Core Service Pillars */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Bespoke Solution Stack</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Company Formation", icon: <Building2 className="h-5 w-5 text-primary" />, desc: "Technical execution of <Link href='/starting-business-bali-guide#pma-structure' class='text-primary hover:underline'>PT PMA setup</Link>, including KBLI selection and AOI drafting." },
                                { title: "Licensing & Permit Hub", icon: <ShieldCheck className="h-5 w-5 text-primary" />, desc: "Managing operational licenses via OSS, addressing <Link href='/starting-business-bali-guide#business-zoning' class='text-primary hover:underline font-medium'>zoning compliance</Link> and environmental permits." },
                                { title: "Investor Residency", icon: <Users className="h-5 w-5 text-primary" />, desc: "End-to-end <Link href='/starting-business-bali-guide#visa-options' class='text-primary hover:underline'>Investor KITAS</Link> services, ensuring seamless legal residency for directors and shareholders." },
                                { title: "Compliance Auditing", icon: <Scale className="h-5 w-5 text-primary" />, desc: "Ensuring ongoing adherence to <Link href='/sectors-open-foreign-investors' class='text-primary hover:underline'>sectoral regulations</Link> and national investment reporting (LKPM)." }
                            ].map((service, i) => (
                                <div key={i} className="p-6 rounded-xl border border-border shadow-sm space-y-3 bg-card/50">
                                    <div className="flex items-center gap-2">
                                        {service.icon}
                                        <h4 className="font-bold">{service.title}</h4>
                                    </div>
                                    <div className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: service.desc }} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Strategic Operational Support */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Scaling Beyond Setup</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Once established, our ecosystem provides the tools required for <Link href="/doing-business-in-bali" className="text-primary hover:underline">operational scaling</Link>. From optimizing the <Link href="/cost-of-doing-business-bali" className="text-primary hover:underline font-medium">cost of operations</Link> to integrating into the <Link href="/startup-ecosystem-bali" className="text-primary hover:underline font-medium">local startup community</Link>.
                        </p>
                        <div className="p-6 border rounded-xl flex items-center gap-6 bg-muted/20">
                            <Zap className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1">
                                <h4 className="font-bold text-sm">Market Velocity</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Our services reduce "Time-to-Market" by up to 40% compared to traditional, non-bespoke agency models. Explore <Link href="/why-bali-for-startups" className="text-primary hover:underline">Why Bali for Startups</Link>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Collaborative Referral */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">A Federated Model</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We operate as a federated <Link href="/bali-enterprises-ecosystem" className="text-primary hover:underline">business ecosystem</Link>, facilitating high-trust <Link href="/investor-referral-bali" className="text-primary hover:underline font-medium">investor referrals</Link> and benchmarking against global hubs like <Link href="/bali-vs-singapore-startup" className="text-primary hover:underline">Singapore</Link> and <Link href="/bali-vs-dubai-business" className="text-primary hover:underline">Dubai</Link>.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Execute Your Market Entry</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Professionalize your presence in Indonesia. Access our central intelligence report for deep advisory on the technical service stack and operational compliance.
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
