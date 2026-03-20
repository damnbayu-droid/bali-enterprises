import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Factory, Truck, Box, ShieldCheck, Scale, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "PT PMA Setup in Tangerang Indonesia | Foreign Company Registration",
    description: "Professional PT PMA setup services in Tangerang. Navigate foreign investment and company registration in Greater Jakarta's industrial hub.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-tangerang",
    },
};

export default function PTPMASetupTangerangPage() {
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
                        PT PMA Setup in <span className="text-muted-foreground italic">Tangerang</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Tangerang is the industrial and logistics backbone of Greater Jakarta (Jabodetabek). Its unparalleled proximity to Soekarno-Hatta International Airport makes it the premier choice for manufacturing and international distribution hubs.
                    </p>
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="/contact">Start Consultation</Link>
                    </Button>
                </header>

                <div className="bg-muted p-12 rounded-[3rem] border">
                    <h3 className="text-3xl font-serif mb-6 text-center">Indonesia's Logistics Gateway</h3>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <Truck className="h-10 w-10 text-primary mx-auto" />
                            <h4 className="text-xl font-bold italic underline decoration-primary text-center">Airport Proximity</h4>
                            <p className="text-sm text-muted-foreground text-center">Direct access to the nation's busiest air cargo terminal for lightning-fast international trade.</p>
                        </div>
                        <div className="space-y-4">
                            <Factory className="h-10 w-10 text-primary mx-auto" />
                            <h4 className="text-xl font-bold italic underline decoration-primary text-center">Industrial Powerhouse</h4>
                            <p className="text-sm text-muted-foreground text-center">Highly developed industrial parks with specialized infrastructure for large-scale production.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
