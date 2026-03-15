import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    ArrowRightLeft,
    CheckCircle2,
    Sun,
    Landmark
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Bali vs Dubai: Business Hub Comparison | Bali Enterprises",
    description: "Compare the pros and cons of setting up a business in Bali vs Dubai. Analyzing tax structures, lifestyle, and operational costs for international investors.",
};

export default function BaliVsDubaiPage() {
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
                        Bali vs <span className="text-muted-foreground italic">Dubai</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Comparing two global magnets for high-net-worth individuals and digital entrepreneurs. While Dubai offers unprecedented tax advantages, Bali provides an unmatched operational environment for creative and tech teams.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="w-full max-w-5xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-16">
                        
                        {/* 1. Comparison Matrix */}
                        <section className="space-y-8">
                            <h2 className="text-2xl md:text-3xl font-serif flex items-center gap-3">
                                <ArrowRightLeft className="h-6 w-6 text-primary" />
                                Key Differentiators
                            </h2>
                            <div className="border rounded-2xl overflow-hidden shadow-sm">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-muted/50 border-b">
                                        <tr>
                                            <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Metric</th>
                                            <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Bali (Indonesia)</th>
                                            <th className="px-6 py-4 font-bold uppercase tracking-widest text-[10px]">Dubai (UAE)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y text-[13px]">
                                        <tr>
                                            <td className="px-6 py-4 font-bold">Tax Structure</td>
                                            <td className="px-6 py-4">Standard Corporate Tax (22%)</td>
                                            <td className="px-6 py-4 text-green-700 font-bold">0% - 9% (Depending on Free Zone)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold">Cost of Living</td>
                                            <td className="px-6 py-4 text-primary font-bold">Moderate / Low</td>
                                            <td className="px-6 py-4">High (Luxury Focused)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold">Operational Speed</td>
                                            <td className="px-6 py-4 italic">Moderate (Digital OSS)</td>
                                            <td className="px-6 py-4 italic text-primary font-bold">Fast-track (e-Governance)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 font-bold">Talent Access</td>
                                            <td className="px-6 py-4">Deep Creative & Tech Community</td>
                                            <td className="px-6 py-4">High-level Global Professional Services</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* 2. Analysis */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif font-bold flex items-center gap-2">
                                    <Sun className="h-5 w-5 text-amber-500" />
                                    The Bali Appeal
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Bali is chosen by founders who prioritize a high quality of life, proximity to high-growth Southeast Asian markets, and lower operational overhead. It is the hub for "Digital First" teams who want to build in a vibrant, community-oriented environment.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-serif font-bold flex items-center gap-2">
                                    <Landmark className="h-5 w-5 text-slate-500" />
                                    The Dubai Factor
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Dubai is the global standard for tax optimization and luxury commerce. It is ideal for capital-intensive businesses, commodity trading, and companies requiring absolute tax neutrality while maintaining premium global connectivity.
                                </p>
                            </div>
                        </div>

                        <AdvisoryInsight title="Consultant's Verdict">
                            If your business depends on **aggressive tax optimization and global trade logistics**, Dubai is often the superior choice. However, if you are building a **content, creative, or tech platform** that requires a motivated, lower-cost operational team in an inspiring environment, Bali offers significantly better "value for growth."
                        </AdvisoryInsight>

                        {/* CTA */}
                        <section className="pt-8 text-center space-y-6">
                            <h3 className="text-2xl font-serif">Mapping Your Global Footprint?</h3>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Choosing the right jurisdiction is a foundational decision. Our strategic advisors assist in analyzing the trade-offs between Bali and other emerging business hubs.
                            </p>
                            <div className="pt-4">
                                <Link href="https://wa.me/6285727041992">
                                    <div className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-all shadow-md">
                                        Get Strategic Advice
                                    </div>
                                </Link>
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
                                    <Link href="/bali-vs-thailand-business" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center justify-between">
                                        Bali vs Thailand <ArrowRightLeft className="h-3 w-3" />
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
