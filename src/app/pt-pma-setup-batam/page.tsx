import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Box, ShieldCheck, Scale, Globe, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "PT PMA Setup in Batam Indonesia | Foreign Company Registration",
    description: "Professional PT PMA setup services in Batam. Navigate foreign investment and company registration in the Free Trade Zone (FTZ).",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-batam",
    },
};

export default function PTPMASetupBatamPage() {
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
                    <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        PT PMA Setup in <span className="text-muted-foreground italic">Batam</span> (FTZ)
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary pl-8">
                        Batam is Indonesia's most unique investment environment. As a Free Trade Zone (FTZ) just 20km from Singapore, it offers unparalleled fiscal benefits for manufacturing, logistics, and digital services.
                    </p>
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="/contact">Start Consultation</Link>
                    </Button>
                </header>

                <section className="bg-black text-white p-12 rounded-[3rem] text-center">
                    <h2 className="text-3xl font-serif mb-8">The Batam Advantage</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <Box className="h-10 w-10 text-primary mx-auto" />
                            <h4 className="text-xl font-bold italic underline decoration-primary">Tax & Customs Exemptions</h4>
                            <p className="text-sm text-gray-400">Exemption from Import Duty, VAT, and Sales Tax on luxury goods for export-oriented production.</p>
                        </div>
                        <div className="space-y-4">
                            <Ship className="h-10 w-10 text-primary mx-auto" />
                            <h4 className="text-xl font-bold italic underline decoration-primary">Singapore Proximity</h4>
                            <p className="text-sm text-gray-400">Leverage Singapore's logistics infrastructure while benefiting from Indonesia's competitive costs.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
