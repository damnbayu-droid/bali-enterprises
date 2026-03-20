import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, HardHat, Ship, Trees, ShieldCheck, Scale, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "PT PMA Setup in Balikpapan Indonesia | Foreign Company Registration",
    description: "Professional PT PMA setup services in Balikpapan. Navigate foreign investment and company registration near the new capital Nusantara (IKN).",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-balikpapan",
    },
};

export default function PTPMASetupBalikpapanPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12">
            <div className="w-full max-w-5xl px-6 mb-8">
                <Link href="/starting-business-bali-guide" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Knowledge Hub
                </Link>
            </div>

            <main className="w-full max-w-5xl px-6 pb-24 space-y-16">
                <header className="space-y-6 py-10">
                    <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        PT PMA Setup in <span className="text-muted-foreground italic">Balikpapan</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        As the gateway to East Kalimantan and the new national capital Nusantara (IKN), Balikpapan is witnessing an unprecedented surge in foreign investment. It is the premier hub for energy, mining logistics, and construction services.
                    </p>
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="/contact">Start Consultation</Link>
                    </Button>
                </header>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 border rounded-2xl space-y-4">
                        <HardHat className="h-8 w-8 text-primary" />
                        <h4 className="font-bold">IKN (Nusantara) Proximity</h4>
                        <p className="text-sm text-muted-foreground">Strategic administrative and logistics hub for projects within the new Indonesian capital.</p>
                    </div>
                    <div className="p-8 border rounded-2xl space-y-4">
                        <Ship className="h-8 w-8 text-primary" />
                        <h4 className="font-bold">Oil & Mining Services</h4>
                        <p className="text-sm text-muted-foreground">Established infrastructure for the region's massive energy and commodity export sector.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
