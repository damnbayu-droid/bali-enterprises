import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Zap, 
    Cpu, 
    Shirt, 
    Building2, 
    ShieldCheck, 
    Scale, 
    FileCheck,
    CheckCircle2,
    Briefcase,
    ChevronRight,
    HelpCircle,
    Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "PT PMA Setup in Bandung Indonesia | Foreign Company Registration",
    description: "Professional PT PMA setup services in Bandung. Navigate foreign investment, company registration, and compliance in Indonesia's tech and fashion capital.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-bandung",
    },
    openGraph: {
        title: "PT PMA Setup in Bandung Indonesia | Foreign Company Registration",
        description: "Professional PT PMA setup in Bandung. Navigate foreign investment and company registration in West Java's tech hub.",
        url: "https://bali.enterprises/pt-pma-setup-bandung",
        siteName: "Bali Enterprises",
        type: "article",
    },
};

export default function PTPMASetupBandungPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12">
            <div className="w-full max-w-5xl px-6 mb-8">
                <Link href="/starting-business-bali-guide" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Knowledge Hub
                </Link>
            </div>

            <main className="w-full max-w-5xl px-6 pb-24 space-y-24">
                
                {/* 1. HERO SECTION */}
                <header className="space-y-8 py-10">
                    <div className="flex items-center gap-3 text-primary mb-2">
                        <Zap className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest italic">Technology & Fashion Hub</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-tight">
                        PT PMA Setup in <span className="text-muted-foreground italic">Bandung</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary pl-8">
                        Bandung is the epicenter of Indonesia's textile industry and its fastest-growing tech ecosystem outside Jakarta. Establishing a PT PMA in Bandung provides a unique blend of industrial manufacturing strength and creative technological innovation.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8" asChild>
                            <Link href="/contact">Start Consultation</Link>
                        </Button>
                    </div>
                </header>

                <Separator />

                {/* 2. INTRODUCTION TO DOING BUSINESS IN BANDUNG */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif">The Economic Profile of Bandung</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Known as the "Paris of Java," Bandung's economy is dual-pronged. It hosts some of Asia's largest garment factories while serving as a satellite for Jakarta's tech scene, benefiting from cooler climates and a highly educated population.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <Shirt className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Textile & Fashion</span>
                                    <span className="text-sm text-muted-foreground">Direct access to the heart of Indonesia's apparel export industry.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Cpu className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Technology & Development</span>
                                    <span className="text-sm text-muted-foreground">Concentrated pool of software engineers from top-tier institutes like ITB.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-muted/30 p-8 rounded-3xl border border-border text-center">
                        <h3 className="text-xl font-bold mb-4">Why Bandung?</h3>
                        <div className="space-y-2">
                            <div className="p-2 bg-background rounded-lg text-xs font-bold">Proximity to Jakarta (High-Speed Rail)</div>
                            <div className="p-2 bg-background rounded-lg text-xs font-bold">Established Industrial Parks</div>
                            <div className="p-2 bg-background rounded-lg text-xs font-bold">Creative Talent Magnet</div>
                        </div>
                    </div>
                </section>

                <Separator />

                <footer className="pt-12 border-t text-sm text-muted-foreground flex flex-wrap gap-8 justify-center">
                    <Link href="/pt-pma-setup-surabaya" className="hover:text-primary transition-colors underline">PT PMA Surabaya</Link>
                    <Link href="/pt-pma-setup-yogyakarta" className="hover:text-primary transition-colors underline">PT PMA Jogja</Link>
                </footer>

            </main>
        </div>
    );
}
