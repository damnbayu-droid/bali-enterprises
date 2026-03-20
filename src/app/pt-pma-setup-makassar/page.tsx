import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Anchor, 
    Ship, 
    Layers, 
    ShieldCheck, 
    Scale, 
    CheckCircle2,
    Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "PT PMA Setup in Makassar Indonesia | Foreign Company Registration",
    description: "Professional PT PMA setup services in Makassar. Navigate foreign investment and company registration in the gateway to Eastern Indonesia.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-makassar",
    },
};

export default function PTPMASetupMakassarPage() {
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
                        <Anchor className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest italic">Eastern Gateway Hub</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-tight">
                        PT PMA Setup in <span className="text-muted-foreground italic">Makassar</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary pl-8">
                        Makassar is the primary jumping-off point for commerce in Sulawesi, Maluku, and Papua. Establishing a PT PMA here provides a strategic foothold in Indonesia's fastest-growing regional market.
                    </p>
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="/contact">Start Consultation</Link>
                    </Button>
                </header>

                <section className="p-10 bg-muted/30 border rounded-3xl">
                    <h2 className="text-3xl font-serif mb-6 text-center">Maritime Dominance</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <h4 className="font-bold">Nickel & Mining Logistics</h4>
                            <p className="text-sm text-muted-foreground">Makassar serves as the administrative hub for the massive mining operations in nearby Morowali and Southeast Sulawesi.</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold">Inter-Island Trade</h4>
                            <p className="text-sm text-muted-foreground">The most efficient logistics route connecting Western and Eastern Indonesia.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
