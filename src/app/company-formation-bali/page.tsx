import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Building2, 
    Briefcase,
    ShieldCheck,
    Scale,
    Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Company Formation Bali: Professional PT PMA Setup | Bali Enterprises",
    description: "Specialized company formation services in Bali. We handle the technical complexity of PT PMA registration, licensing, and compliance for foreign founders.",
    alternates: {
        canonical: "https://bali.enterprises/company-formation-bali",
    },
    openGraph: {
        title: "Company Formation Bali: Professional PT PMA Setup",
        description: "Specialized company formation services in Bali. We handle PT PMA registration and compliance.",
        url: "https://bali.enterprises/company-formation-bali",
        siteName: "Bali Enterprises",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Company Formation Bali: Professional PT PMA Setup",
        description: "Specialized company formation services in Bali.",
    }
};

export default function CompanyFormationBaliPage() {
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
                        <span className="text-sm font-bold uppercase tracking-widest">Formation Services</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Company Formation in <span className="text-muted-foreground italic">Bali</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Expert-led company formation in Bali, designed for international founders who require precision, speed, and absolute compliance.
                    </p>
                </header>

                <div className="space-y-16">
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Formation Mechanics</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Registering a PT PMA in Bali requires a sequential approach: from obtaining the Notarial Deed to securing the NIB (Business Identification Number) through the OSS RBA system. For a technical walkthrough, see our <Link href="/starting-business-bali-guide#company-registration" className="text-primary hover:underline">registration roadmap</Link>.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><Building2 className="h-4 w-4 text-primary" /> PMA Setup</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Full advisory on shareholding structures and KBLI classification.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> Investor KITAS</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Integrated residency sponsorship for foreign directors and shareholders.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Local Compliance</h2>
                        <div className="space-y-4">
                            <p className="text-muted-foreground leading-relaxed">
                                Company formation is only the beginning. Bali's unique <Link href="/starting-business-bali-guide#business-zoning" className="text-primary hover:underline">zoning laws</Link> dictate where you can legally operate. We ensure your office or operational site is fully compliant.
                            </p>
                            <AdvisoryInsight title="Compliance first">
                                Mistakes in the formation phase can lead to years of regulatory delay. We prioritize "Clean and Clear" legal status for all our clients.
                            </AdvisoryInsight>
                        </div>
                    </section>

                    <Separator />

                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Professional Formation Advisory</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Don't leave your Indonesian investment to chance. Partner with specialists who understand the Bali regulatory landscape.
                        </p>
                        <Button size="lg" className="bg-primary text-primary-foreground px-8" asChild>
                            <Link href="/contact">
                                Start Your Formation
                            </Link>
                        </Button>
                    </section>
                </div>
            </main>
        </div>
    );
}
