import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Leaf, 
    Ship, 
    Truck, 
    ShieldCheck, 
    Scale, 
    CheckCircle2,
    Briefcase,
    ChevronRight,
    Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";

export const metadata: Metadata = {
    title: "PT PMA Setup in Medan Indonesia | Foreign Company Registration",
    description: "Professional PT PMA setup services in Medan. Navigate foreign investment, company registration, and compliance in North Sumatra's primary agricultural and trade hub.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-medan",
    },
};

export default function PTPMASetupMedanPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12">
            <div className="w-full max-w-5xl px-6 mb-8">
                <Link href="/starting-business-bali-guide" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Knowledge Hub
                </Link>
            </div>

            <main className="w-full max-w-5xl px-6 pb-24 space-y-24">
                <header className="space-y-8 py-10">
                    <div className="flex items-center gap-3 text-primary mb-2">
                        <Leaf className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest italic">Agriculture & Regional Trade</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-tight">
                        PT PMA Setup in <span className="text-muted-foreground italic">Medan</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary pl-8">
                        Medan is the undisputed capital of Sumatra. Establishing a PT PMA in Medan grants unparalleled access to Indonesia's vast agricultural exports, plantation processing, and the strategic Malacca Strait trade route.
                    </p>
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="/contact">Start Consultation</Link>
                    </Button>
                </header>

                <section className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif">Economic Engine of Sumatra</h2>
                        <p className="text-muted-foreground">
                            Focusing on palm oil, rubber, and coffee processing, Medan and its nearby port (Belawan) are essential for global commodity traders.
                        </p>
                    </div>
                    <div className="p-8 border rounded-2xl space-y-4 bg-muted/20">
                        <Ship className="h-8 w-8 text-primary" />
                        <h4 className="font-bold">Port of Belawan Gateway</h4>
                        <p className="text-sm text-muted-foreground">Strategic proximity to Singapore and Malaysia for international export-import operations.</p>
                    </div>
                </section>

                <footer className="pt-12 border-t text-sm text-muted-foreground flex flex-wrap gap-8 justify-center">
                    <Link href="/pt-pma-setup-surabaya" className="hover:text-primary transition-colors underline">PT PMA Surabaya</Link>
                    <Link href="/pt-pma-setup-bandung" className="hover:text-primary transition-colors underline">PT PMA Bandung</Link>
                </footer>
            </main>
        </div>
    );
}
