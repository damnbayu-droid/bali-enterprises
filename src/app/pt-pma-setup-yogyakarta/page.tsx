import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Palette, 
    BookOpen, 
    Home, 
    ShieldCheck, 
    Scale, 
    FileCheck,
    CheckCircle2,
    Briefcase,
    ChevronRight,
    HelpCircle,
    Globe,
    Stamp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { Separator } from "@/components/ui/separator";
import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "PT PMA Setup in Yogyakarta Indonesia | Foreign Company Registration",
    description: "Professional PT PMA setup services in Yogyakarta (Jogja). Navigate foreign investment, company registration, and compliance in Indonesia's cultural and education capital.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-yogyakarta",
    },
    openGraph: {
        title: "PT PMA Setup in Yogyakarta Indonesia | Foreign Company Registration",
        description: "Professional PT PMA setup in Jogja. Navigate foreign investment and company registration in the cultural heart of Java.",
        url: "https://bali.enterprises/pt-pma-setup-yogyakarta",
        siteName: "Bali Enterprises",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "PT PMA Setup in Yogyakarta | Bali Enterprises Advisory",
        description: "Foreign company registration in Jogja's education and creative sectors.",
    }
};

export default function PTPMASetupYogyakartaPage() {
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
                        <Palette className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest italic">Culture, Education & Innovation</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-tight">
                        PT PMA Setup in <span className="text-muted-foreground italic">Yogyakarta</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary pl-8">
                        Yogyakarta (Jogja) represents the intellectual and artistic heart of Indonesia. Establishing a PT PMA in this special region offers unique opportunities in the creative economy, digital nomads, and high-quality craft manufacturing.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8" asChild>
                            <Link href="/contact">Start Consultation</Link>
                        </Button>
                    </div>
                </header>

                <Separator />

                {/* 2. INTRODUCTION TO DOING BUSINESS IN YOGYAKARTA */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif">The Economic Profile of Yogyakarta</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Historically known as the "City of Students," Jogja has transformed into a tech-savvy province. It combines traditional royal heritage with a massive university-educated labor pool, making it ideal for software development and design-led export businesses.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <BookOpen className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Creative Economy</span>
                                    <span className="text-sm text-muted-foreground">Thriving ecosystem for animation, gaming, and digital design.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Stamp className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Artisanal Manufacturing</span>
                                    <span className="text-sm text-muted-foreground">High-end furniture, batik, and jewelry exports.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-muted/30 p-8 rounded-3xl border border-border">
                        <h3 className="text-xl font-bold mb-4">Why Foreigners Choose Jogja</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            Investors often cite the "low-stress" business environment and the highly competitive operational costs compared to Jakarta or Bali.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> Abundant Skilled Graduate Talent
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> Lower Minimum Wage (UMU) Efficiency
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> Rich Cultural Integration Potential
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT IS A PT PMA */}
                <section className="max-w-3xl mx-auto space-y-6 text-center">
                    <h2 className="text-3xl font-serif">The Foreign Investment (PT PMA) Vehicle</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        A **PT PMA** in Yogyakarta provides the same legal protections as anywhere in Indonesia, allowing for foreign ownership and sponsorship. However, investors must be aware of the "Daerah Istimewa" (Special Region) property laws which differ from standard provinces.
                    </p>
                    <AdvisoryInsight title="Regional Specialty">
                        Yogyakarta has unique land ownership regulations governed by the Sultanate. While PT PMAs can still operate and lease space, the "HGB" registration process requires specific regional oversight.
                    </AdvisoryInsight>
                </section>

                {/* 18. INTERNAL LINKING */}
                <footer className="pt-12 border-t text-sm text-muted-foreground flex flex-wrap gap-8 justify-center">
                    <Link href="/pt-pma-setup-surabaya" className="hover:text-primary transition-colors underline">PT PMA Surabaya</Link>
                    <Link href="/pt-pma-setup-lombok" className="hover:text-primary transition-colors underline">PT PMA Lombok</Link>
                    <Link href="/starting-business-bali-guide" className="hover:text-primary transition-colors underline">Knowledge Hub</Link>
                </footer>

                <div className="text-[10px] text-muted-foreground/60 text-center max-w-3xl mx-auto uppercase tracking-tighter leading-tight pb-12">
                    Informational purposes only. Final structures depend on specific DIY (Yogyakarta) provincial requirements.
                </div>

            </main>
        </div>
    );
}
