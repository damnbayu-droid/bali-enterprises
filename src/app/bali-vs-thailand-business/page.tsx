import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Globe, 
    ArrowRightLeft,
    CheckCircle2,
    XCircle
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Bali vs Thailand: Business Entry Comparison | Bali Enterprises",
    description: "A strategic comparison between starting a business in Bali (Indonesia) and Thailand. Analyzing legal structures, visas, and operational costs for founders.",
};

export default function BaliVsThailandPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12 pb-24">
            {/* Header */}
            <div className="w-full max-w-5xl px-6 mb-8">
                <Link href="/starting-business-bali-guide" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Main Guide
                </Link>
            </div>

            {/* Hero Section */}
            <header className="w-full max-w-5xl px-6 mb-16">
                <div className="space-y-6 max-w-3xl">
                    <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px] font-bold">
                        Regional Analysis
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-foreground leading-[1.1]">
                        Bali vs <span className="text-muted-foreground italic">Thailand</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Comparing two of Southeast Asia's most popular destinations for international founders. While both offer lifestyle appeal, the regulatory and structural realities differ significantly.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="w-full max-w-5xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-16">
                        
                        {/* Comparison Matrix */}
                        <section className="space-y-8">
                            <h2 className="text-2xl md:text-3xl font-serif flex items-center gap-3">
                                <ArrowRightLeft className="h-6 w-6 text-primary" />
                                Structural Comparison
                            </h2>
                            <div className="border rounded-2xl overflow-hidden">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-muted/50 border-b">
                                        <tr>
                                            <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Feature</th>
                                            <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Bali (Indonesia)</th>
                                            <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Thailand</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr>
                                            <td className="px-6 py-4 font-bold">Company Type</td>
                                            <td className="px-6 py-4">PT PMA</td>
                                            <td className="px-6 py-4">Thai Limited Company</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold">Foreign Ownership</td>
                                            <td className="px-6 py-4 text-primary font-bold">Up to 100% (Most sectors)</td>
                                            <td className="px-6 py-4">Up to 49% (Limited sectors 100% via BOI)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold">Residency Visa</td>
                                            <td className="px-6 py-4">Investor KITAS (2 Years)</td>
                                            <td className="px-6 py-4">BOI Visa / LTR Visa</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold">Ease of Setup</td>
                                            <td className="px-6 py-4 italic">Moderate (Digital OSS)</td>
                                            <td className="px-6 py-4 italic">Moderate / Complex</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Analysis Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif font-bold">The Bali (PT PMA) Advantage</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Indonesia’s recent regulatory updates have made 100% foreign ownership much more accessible across a wide range of business codes (KBLI). The Investor KITAS remains one of the most stable and straightforward residency permits for active founders.
                                </p>
                                <ul className="space-y-2 pt-2">
                                    <li className="flex items-center gap-2 text-xs font-medium"><CheckCircle2 className="h-3 w-3 text-green-600" /> Full legal control of shares</li>
                                    <li className="flex items-center gap-2 text-xs font-medium"><CheckCircle2 className="h-3 w-3 text-green-600" /> Direct access to G20-scale market</li>
                                    <li className="flex items-center gap-2 text-xs font-medium"><CheckCircle2 className="h-3 w-3 text-green-600" /> Professionalized digital economy</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif font-bold">The Thailand Context</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Thailand is excellent for solo digital nomads via the LTR or Destination Thailand Visa (DTV). However, for commercial operations, the 51% Thai ownership requirement (unless BOI approved) adds significant structural complexity for many founders.
                                </p>
                                <ul className="space-y-2 pt-2">
                                    <li className="flex items-center gap-2 text-xs font-medium"><XCircle className="h-3 w-3 text-amber-600" /> Complex BOI application process</li>
                                    <li className="flex items-center gap-2 text-xs font-medium"><XCircle className="h-3 w-3 text-amber-600" /> Ownership restrictions in services</li>
                                    <li className="flex items-center gap-2 text-xs font-medium"><CheckCircle2 className="h-3 w-3 text-green-600" /> High-quality physical infrastructure</li>
                                </ul>
                            </div>
                        </div>

                        <AdvisoryInsight title="Executive Summary">
                            While Thailand often wins on physical logistics (airports, high-speed rail), Indonesia currently offers the more robust legal framework for **foreign-owned commercial entities** without the need for convoluted nominee or local partnership structures in the tech/SaaS/service sectors.
                        </AdvisoryInsight>

                        {/* CTA */}
                        <section className="pt-8">
                            <div className="p-8 rounded-2xl bg-muted/30 border space-y-4 text-center">
                                <h3 className="text-xl font-serif">Deciding between Bali and Thailand?</h3>
                                <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                                    We can provide a comparative legal risk assessment tailored to your specific business model.
                                </p>
                                <div className="pt-4">
                                    <Button className="bg-primary text-primary-foreground font-bold px-8">
                                        Request Comparative Analysis
                                    </Button>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            <div className="p-8 rounded-2xl border bg-card space-y-6">
                                <h4 className="font-serif text-xl">Other Hubs</h4>
                                <div className="flex flex-col gap-4">
                                    <Link href="/bali-vs-singapore-startup" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center justify-between">
                                        Bali vs Singapore <ArrowRightLeft className="h-3 w-3" />
                                    </Link>
                                    <Link href="/bali-vs-dubai-business" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center justify-between">
                                        Bali vs Dubai <ArrowRightLeft className="h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}

// Minimal Button component for this file if UI library not fully exported
function Button({ className, children }: { className?: string, children: React.ReactNode }) {
    return <button className={`h-11 rounded-lg transition-all active:scale-95 ${className}`}>{children}</button>
}
