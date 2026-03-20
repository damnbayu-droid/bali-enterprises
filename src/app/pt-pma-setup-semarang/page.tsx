import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Building, Factory, ShieldCheck, Scale, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "PT PMA Setup in Semarang Indonesia | Foreign Company Registration",
    description: "Professional PT PMA setup services in Semarang. Navigate foreign investment and company registration in Central Java's industrial center.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-semarang",
    },
};

export default function PTPMASetupSemarangPage() {
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
                        PT PMA Setup in <span className="text-muted-foreground italic">Semarang</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                        Semarang is Central Java's industrial heart. With advanced ports and highly competitive labor, it is an ideal location for heavy manufacturing, furniture exports, and jewelry production.
                    </p>
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="/contact">Start Consultation</Link>
                    </Button>
                </header>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 border rounded-2xl bg-muted/10 space-y-4">
                        <Factory className="h-8 w-8 text-primary" />
                        <h4 className="font-bold">Industrial Synergy</h4>
                        <p className="text-sm text-muted-foreground">Kendal Industrial Park and other SEZs offer specialized incentives for foreign manufacturers.</p>
                    </div>
                    <div className="p-8 border rounded-2xl bg-muted/10 space-y-4">
                        <Globe className="h-8 w-8 text-primary" />
                        <h4 className="font-bold">Logistics Efficiency</h4>
                        <p className="text-sm text-muted-foreground">Direct toll road access to Jakarta and Surabaya, centered on Tanjung Emas Port.</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
