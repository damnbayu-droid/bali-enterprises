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
    ChevronRight,
    MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "How to Build a Company in Jakarta: Corporate Strategy | Bali Enterprises",
    description: "Strategic guidance for building companies in Jakarta, the financial heart of Indonesia. Access market entry intelligence for the capital city.",
    alternates: {
        canonical: "https://bali.enterprises/build-company-in-jakarta",
    },
    openGraph: {
        title: "How to Build a Company in Jakarta: Corporate Strategy",
        description: "Strategic guidance for building companies in Jakarta, the financial heart of Indonesia.",
        url: "https://bali.enterprises/build-company-in-jakarta",
        siteName: "Bali Enterprises",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "How to Build a Company in Jakarta: Corporate Strategy",
        description: "Strategic guidance for building companies in Jakarta.",
    }
};

export default function BuildCompanyInJakartaPage() {
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
                        <span className="text-sm font-bold uppercase tracking-widest">Capital Strategy</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        How to Build a <span className="text-muted-foreground italic">Company in Jakarta</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Jakarta is the financial powerhouse of Indonesia. Building an enterprise in the capital requires a focus on high-speed industrial scaling and national regulatory integration.
                    </p>
                </header>

                <div className="space-y-16">
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The Jakarta Advantage</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            While Bali is the hub for lifestyle and tech nomads, Jakarta remains the center for heavy industry, finance, and large-scale corporate operations. Building a PT PMA in Jakarta provides direct access to governmental bodies and national logistics.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> Market Access</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Direct integration with the core Indonesian consumer market and distribution networks.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> Financial Hub</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Proximity to major banking institutions and capital markets.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Structural Excellence</h2>
                        <div className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                In Jakarta, corporate governance is under stricter scrutiny. Ensuring your <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline">PT PMA structure</Link> is robust from Day 1 is non-negotiable for large-scale ops.
                            </p>
                            <AdvisoryInsight title="Jakarta Perspective">
                                Building in the capital often involves higher operational costs but significantly higher volume potential compared to Bali's niche markets.
                            </AdvisoryInsight>
                        </div>
                    </section>

                    <Separator />

                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">National Expansion Plan</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Looking to scale across Indonesia? Our Strategic Entry Blueprint covers both Bali and Jakarta market dynamics.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-primary text-primary-foreground px-8" asChild>
                                <Link href="/strategic-entry-blueprint-bali">
                                    Access Blueprint
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary text-primary" asChild>
                                <Link href="/contact">
                                    Contact Jakarta Advisor
                                </Link>
                            </Button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
