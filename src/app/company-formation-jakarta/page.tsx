import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Building2, 
    Briefcase,
    ShieldCheck,
    Scale,
    Globe,
    MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Company Formation Jakarta: Financial & Corporate Hub | Bali Enterprises",
    description: "Professional company formation in Jakarta. Specialized setup for PT PMA entities in Indonesia's financial capital. Expert regulatory and legal support.",
    alternates: {
        canonical: "https://bali.enterprises/company-formation-jakarta",
    },
    openGraph: {
        title: "Company Formation Jakarta: Financial & Corporate Hub",
        description: "Professional company formation in Jakarta. Specialized setup for PT PMA entities in Indonesia's financial capital.",
        url: "https://bali.enterprises/company-formation-jakarta",
        siteName: "Bali Enterprises",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Company Formation Jakarta: Financial & Corporate Hub",
        description: "Professional company formation in Jakarta.",
    }
};

export default function CompanyFormationJakartaPage() {
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
                        <MapPin className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Metropolitan Advisory</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Company Formation in <span className="text-muted-foreground italic">Jakarta</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Jakarta is the engine of the Indonesian economy. Corporate formation in the capital demands high-level regulatory alignment and elite-tier structural advisory.
                    </p>
                </header>

                <div className="space-y-16">
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Capital Logistics</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Formation in Jakarta provides strategic advantages for companies in finance, fintech, manufacturing, and national services. Understanding the <Link href="/starting-business-bali-guide#capital-requirements" className="text-primary hover:underline">capital requirements</Link> for a Jakarta-based PT PMA is essential for large-scale licensing.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><Scale className="h-4 w-4 text-primary" /> Regulatory Access</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Direct proximity to BKPM (Investment Board) and central ministries.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> National Reach</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Ideal base for companies targeting the entire Indonesian archipelago.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Structural Hardening</h2>
                        <div className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Jakarta-based businesses often face complex labor and environmental regulations. Our formation process includes a deep dive into the <Link href="/strategic-entry-blueprint-bali" className="text-primary hover:underline">Strategic Entry Blueprint</Link> to ensure your roadmap is technically sound.
                            </p>
                            <AdvisoryInsight title="Jakarta Insight">
                                For startups planning to raise institutional capital, a Jakarta-domiciled PT PMA is often preferred by regional VCs.
                            </AdvisoryInsight>
                        </div>
                    </section>

                    <Separator />

                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Establish Your Presence in Jakarta</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Access elite-level corporate formation services in Indonesia's primary financial hub.
                        </p>
                        <Button size="lg" className="bg-primary text-primary-foreground px-8" asChild>
                            <Link href="/contact">
                                Consult Jakarta Team
                            </Link>
                        </Button>
                    </section>
                </div>
            </main>
        </div>
    );
}
