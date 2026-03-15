import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Building2, 
    CheckCircle2, 
    TrendingUp, 
    Globe, 
    ShieldCheck,
    Scale,
    ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "How to Build a Company in Bali: Structural Advisory | Bali Enterprises",
    description: "Expert guidance on building a robust corporate structure in Bali. From PT PMA setup to operational compliance and scaling for international founders.",
    alternates: {
        canonical: "https://bali.enterprises/build-company-in-bali",
    },
    openGraph: {
        title: "How to Build a Company in Bali: Structural Advisory",
        description: "Expert guidance on building a robust corporate structure in Bali. From PT PMA setup to operational compliance.",
        url: "https://bali.enterprises/build-company-in-bali",
        siteName: "Bali Enterprises",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Build a Company in Bali: Structural Advisory",
        description: "Expert guidance on building a robust corporate structure in Bali.",
    }
};

export default function BuildCompanyInBaliPage() {
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
                        <Building2 className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Formation Intelligence</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        How to Build a <span className="text-muted-foreground italic">Company in Bali</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Building a company in Bali involves more than just registration. It requires a strategic architectural approach to ensure long-term stability and scalability in the Indonesian market.
                    </p>
                </header>

                <div className="space-y-16">
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Structural Design</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The foundation of any foreign-owned enterprise in Bali is the <span className="font-bold text-foreground">PT PMA</span>. This structure allows for 100% foreign ownership in most sectors and provides a formal legal framework for hiring, property leasing, and corporate banking.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Asset Protection</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Ensure your assets are protected through proper legal notarization and corporate governance.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><Scale className="h-4 w-4 text-primary" /> Regulatory Alignment</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Align your business activities with the correct KBLI codes to avoid operational friction.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Operational Scaling</h2>
                        <div className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Once the structure is build, scaling in Bali requires navigating the local ecosystem—from choosing the right <Link href="/starting-business-bali-guide#business-zoning" className="text-primary hover:underline">business zone</Link> to establishing local partnerships.
                            </p>
                            <AdvisoryInsight title="Formation Strategy">
                                For most tech and service startups, 100% ownership is the goal. We advise against 'nominee' structures which lack legal standing in Indonesia.
                            </AdvisoryInsight>
                        </div>
                    </section>

                    <Separator />

                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Deep Advisory Support</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Ready to build your corporate foundation? Access our strategic blueprint for a 10-chapter technical roadmap.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-primary text-primary-foreground px-8" asChild>
                                <Link href="/strategic-entry-blueprint-bali">
                                    View Strategic Blueprint
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary text-primary" asChild>
                                <Link href="/contact">
                                    Consult an Advisor
                                </Link>
                            </Button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
