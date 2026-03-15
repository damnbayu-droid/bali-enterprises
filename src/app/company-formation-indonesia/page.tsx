import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Building2, 
    Globe, 
    ShieldCheck,
    CheckCircle2,
    TrendingUp,
    Scale
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Company Formation in Indonesia: Complete PT PMA Advisory | Bali Enterprises",
    description: "The definitive guide to company formation in Indonesia. Learn about PT PMA structures, ownership rules, capital requirements, and market entry for international founders.",
    alternates: {
        canonical: "https://bali.enterprises/company-formation-indonesia",
    },
    openGraph: {
        title: "Company Formation in Indonesia: Complete PT PMA Advisory",
        description: "The definitive guide to company formation in Indonesia. Learn about PT PMA structures and market entry.",
        url: "https://bali.enterprises/company-formation-indonesia",
        siteName: "Bali Enterprises",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Company Formation in Indonesia: Complete PT PMA Advisory",
        description: "The definitive guide to company formation in Indonesia.",
    }
};

export default function CompanyFormationIndonesiaPage() {
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
                        <Globe className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">National Advisory</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Company Formation in <span className="text-muted-foreground italic">Indonesia</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        A comprehensive framework for establishing a foreign-owned enterprise across the Indonesian archipelago.
                    </p>
                </header>

                <div className="space-y-16">
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Macro Foundation</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Indonesia is the largest economy in Southeast Asia. For foreign investors, the <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline">PT PMA</Link> is the primary vehicle for investment. Understanding the national regulatory environment is key to multi-regional success.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><Scale className="h-4 w-4 text-primary" /> Investment Law</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Adherence to the Omnibus Law and presidential regulations on foreign ownership.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> National Growth</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Access to a market of 270+ million consumers across 17,000 islands.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Strategic Entry</h2>
                        <div className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Whether you choose <Link href="/company-formation-bali" className="text-primary hover:underline">Bali</Link> for tech or <Link href="/company-formation-jakarta" className="text-primary hover:underline">Jakarta</Link> for finance, your corporate formation must be technically robust. Access our <Link href="/starting-business-bali-guide" className="text-primary hover:underline font-bold">Ultimate Business Guide</Link> for the full technical roadmap.
                            </p>
                            <AdvisoryInsight title="Regional Strategy">
                                Many founders start in Bali for the operational efficiency and lifestyle draw, before expanding their physical presence to Jakarta as the business matures.
                            </AdvisoryInsight>
                        </div>
                    </section>

                    <Separator />

                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Launch Your Indonesian Venture</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Navigate the technical complexity of the Indonesian regulatory system with our expert advisory team.
                        </p>
                        <Button size="lg" className="bg-primary text-primary-foreground px-8" asChild>
                            <Link href="/contact">
                                Start Your Journey
                            </Link>
                        </Button>
                    </section>
                </div>
            </main>
        </div>
    );
}
