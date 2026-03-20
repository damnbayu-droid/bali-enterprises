import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Leaf, Apple, BookOpen, ShieldCheck, Scale, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "PT PMA Setup in Malang Indonesia | Foreign Company Registration",
    description: "Professional PT PMA setup services in Malang. Navigate foreign investment and company registration in the education and agribusiness hub.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-malang",
    },
};

export default function PTPMASetupMalangPage() {
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
                        PT PMA Setup in <span className="text-muted-foreground italic">Malang</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Malang combines a cool, highland climate with a massive university population. It is a strategic location for agribusiness processing, education-tech, and creative services in East Java.
                    </p>
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <Link href="/contact">Start Consultation</Link>
                    </Button>
                </header>

                <div className="p-10 bg-muted/20 border rounded-3xl">
                    <h3 className="text-2xl font-serif mb-4">The Education & Agribusiness Axis</h3>
                    <p className="text-sm text-muted-foreground">Abundant talent from local universities and proximity to the region's diverse agricultural production.</p>
                </div>
            </main>
        </div>
    );
}
