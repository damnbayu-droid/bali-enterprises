import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Anchor, Ship, Palmtree, ShieldCheck, Scale, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "PT PMA Setup in Labuan Bajo Indonesia | Foreign Company Registration",
    description: "Professional PT PMA setup services in Labuan Bajo. Navigate luxury tourism investment and company registration in the Komodo region.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-labuan-bajo",
    },
};

export default function PTPMASetupLabuanBajoPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12">
            <div className="w-full max-w-5xl px-6 mb-8">
                <Link href="/starting-business-bali-guide" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Knowledge Hub
                </Link>
            </div>

            <main className="w-full max-w-5xl px-6 pb-24 space-y-16">
                <header className="space-y-6 py-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        PT PMA Setup in <span className="text-muted-foreground italic">Labuan Bajo</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Labuan Bajo is Indonesia's rising star in luxury marine tourism. Establishing a PT PMA here provides a gateway to world-class hospitality, eco-resort development, and specialized dive charter operations in the Komodo National Park.
                    </p>
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="/contact">Start Consultation</Link>
                    </Button>
                </header>

                <div className="bg-primary/5 p-12 rounded-[3rem] border border-primary/20 text-center space-y-6">
                    <h3 className="text-3xl font-serif">Luxury Marine Frontier</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">"Investment in Labuan Bajo is more than just property; it's a stake in Indonesia's most exclusive eco-tourism destination."</p>
                </div>
            </main>
        </div>
    );
}
