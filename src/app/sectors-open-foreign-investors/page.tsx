import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    CheckCircle2, 
    ShieldCheck, 
    Scale, 
    Globe, 
    Zap, 
    Briefcase,
    Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Sectors Open to Foreign Investors in Indonesia | Bali Enterprises",
    description: "A detailed analysis of Indonesia's Positive Investment List. Explore which sectors allow 100% foreign ownership and the regulatory requirements for international companies.",
};

export default function SectorsOpenForeignInvestorsPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12">
            <div className="w-full max-w-4xl px-6 mb-8">
                <Link href="/starting-business-bali-guide" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Knowledge Hub
                </Link>
            </div>

            <main className="w-full max-w-4xl px-6 pb-24">
                <header className="space-y-6 mb-16">
                    <div className="flex items-center gap-3 text-primary mb-2">
                        <Scale className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Regulatory Compliance</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Sectors Open <span className="text-muted-foreground italic">to Foreign Investors</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        The 2021 Presidential Regulation (Positive Investment List) has radically liberalized the Indonesian market, opening nearly all sectors to <Link href="/foreign-investment-indonesia" className="text-primary hover:underline font-medium">100% foreign ownership</Link>.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Positive List Shift */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The Shift to the Positive List</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Historically, foreign entities were restricted by the "Negative Investment List." Today, unless a sector is specifically restricted or reserved for the central government, it is <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline font-medium">fully open to PT PMA investment</Link>. This change is a primary driver for <Link href="/why-invest-indonesia" className="text-primary hover:underline">why foreigners invest in Indonesia</Link> today.
                        </p>
                        <AdvisoryInsight title="Consultant Note">
                            Every sector is classified by a 5-digit KBLI code. Selecting the correct code is an essential task in our <Link href="/how-to-start-a-business-in-bali" className="text-primary hover:underline">business setup roadmap</Link>.
                        </AdvisoryInsight>
                    </section>

                    <Separator />

                    {/* Key Open Sectors */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Key Sectors with 100% Ownership</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Technology & Digital Services", icon: <Zap className="h-5 w-5 text-primary" />, desc: "Software dev, data centers, and digital agencies. Perfect for the growing <Link href='/startup-ecosystem-bali' class='text-primary hover:underline font-medium'>startup ecosystem in Bali</Link>." },
                                { title: "International Logistics", icon: <Globe className="h-5 w-5 text-primary" />, desc: "Storage, warehousing, and distribution. Essential for entrepreneurs <Link href='/doing-business-in-bali' class='text-primary hover:underline'>expanding across Indonesia</Link>." },
                                { title: "Tourism & Hospitality", icon: <Briefcase className="h-5 w-5 text-primary" />, desc: "Hotels, restaurants, and tourism consultancy. Drive high-alpha returns in the <Link href='/bali-investment-guide' class='text-primary hover:underline'>Bali real estate market</Link>." },
                                { title: "Corporate Consultancy", icon: <Building2 className="h-5 w-5 text-primary" />, desc: "Management consulting and professional services. High-authority positioning for global service firms." }
                            ].map((sector, i) => (
                                <div key={i} className="p-6 rounded-xl border border-border bg-card/50 flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        {sector.icon}
                                        <h4 className="font-bold">{sector.title}</h4>
                                    </div>
                                    <div className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: sector.desc }} />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Restricted Sectors */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Sectors with Restrictions</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            While most sectors are open, some remain restricted to protect national interests or small domestic enterprises (MSMEs). Avoid the <Link href="/mistakes-foreign-entrepreneurs-make" className="text-primary hover:underline">common mistake</Link> of trying to bypass these rules through unofficial structures.
                        </p>
                        <div className="space-y-3">
                            {[
                                "Small-scale retail (convenience stores)",
                                "Traditional crafts and indigenous art production",
                                "Defense and hazardous waste management",
                                "Low-capital services reserved for MSMEs"
                            ].map((restriction, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <ShieldCheck className="h-4 w-4 text-primary" />
                                    {restriction}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Operational Compliance */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Strategic Sector Selection</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Selection must align with the <Link href="/starting-business-bali-guide#business-zoning" className="text-primary hover:underline font-medium">business zoning of your Bali location</Link>. For instance, a tech company can operate in more zones than a heavy manufacturing plant. Review the <Link href="/business-regions-indonesia" className="text-primary hover:underline">geographical dynamics of Indonesia</Link> to optimize your deployment.
                        </p>
                        <div className="p-6 border rounded-xl bg-muted/20 flex flex-col md:flex-row gap-6 items-center">
                            <Briefcase className="h-10 w-10 text-primary shrink-0" />
                            <div className="space-y-1 text-center md:text-left">
                                <h4 className="font-bold text-sm">Industrial Synergy</h4>
                                <p className="text-xs text-muted-foreground px-4 md:px-0">
                                    Explore high-alpha sectors in our <Link href="/investment-opportunities-indonesia" className="text-primary hover:underline">opportunities report</Link> and the <Link href="/industries-growing-bali" className="text-primary hover:underline">growing industries in Bali</Link> analysis.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Verify Your Sector Eligibility</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Don't guess on compliance. Access our central intelligence report for a professional mapping of KBLI codes and foreign ownership allowances.
                        </p>
                        <Button size="lg" className="bg-primary text-primary-foreground px-8" asChild>
                            <Link href="/starting-business-bali-guide">
                                Access Ultimate Guide
                            </Link>
                        </Button>
                    </section>
                </div>
            </main>
        </div>
    );
}
