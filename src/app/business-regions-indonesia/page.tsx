import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Map as MapIcon, 
    Building2,
    CheckCircle2,
    Navigation,
    Anchor,
    Mountain
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Business Regions in Indonesia: Where to Invest | Bali Enterprises",
    description: "An overview of major business regions in Indonesia. Compare Bali, Jakarta, Surabaya, and Batam for foreign investment, infrastructure, and ease of doing business.",
};

export default function BusinessRegionsIndonesiaPage() {
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
                        <MapIcon className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Regional Geography</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Business Regions in <span className="text-muted-foreground italic">Indonesia</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        Indonesia is a vast archipelago with diverse economic zones. For foreign investors, identifying the correct region is as critical as choosing the right business structure.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Primary Hubs */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Major Investment Hubs</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            While Jakarta remains the financial heart, Bali has emerged as the premier "Operational Hub" for global creative and tech founders. Understanding <Link href="/starting-business-bali-guide" className="text-primary hover:underline">starting a business in Bali</Link> requires a regional perspective on how it interacts with the rest of the archipelago.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { title: "Bali (The Creative Hub)", icon: <Navigation className="h-5 w-5 text-primary" />, desc: "Focus: Tourism, Tech, Creative, Real Estate, Wellness." },
                                { title: "Jakarta (The Capital Hub)", icon: <Building2 className="h-5 w-5 text-primary" />, desc: "Focus: Finance, Banking, Heavy Industry, Government Relations." },
                                { title: "Surabaya (The Industrial Hub)", icon: <Anchor className="h-5 w-5 text-primary" />, desc: "Focus: Logistics, Manufacturing, Maritime, Trading." },
                                { title: "Batam (The FTZ Hub)", icon: <Mountain className="h-5 w-5 text-primary" />, desc: "Focus: Special Economic Zones, Free Trade, Electronics." }
                            ].map((region, i) => (
                                <div key={i} className="p-6 rounded-xl border border-border shadow-sm space-y-3">
                                    <div className="flex items-center gap-2">
                                        {region.icon}
                                        <h4 className="font-bold">{region.title}</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{region.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <Separator />

                    {/* Deep Dive on Bali Districts */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Strategic Districts within Bali</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Once you decide on Bali, the next step is <Link href="/starting-business-bali-guide#business-zoning" className="text-primary hover:underline">understanding business zoning</Link>. Each district offers unique advantages for specific industries.
                        </p>
                        
                        <div className="space-y-4">
                            {[
                                { name: "Canggu/Berawa", focus: "Tech, SaaS, Digital Agencies, Hospitality." },
                                { name: "Uluwatu/Jimbaran", focus: "High-end Luxury Real Estate, Boutique Resorts." },
                                { name: "Ubud", focus: "Wellness, Creative Arts, Education, Retreat Centers." },
                                { name: "Sanur", focus: "Healthcare, Family-oriented Tourism, Digital Nomad Hub (SEZ)." }
                            ].map((district, i) => (
                                <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                                    <span className="font-bold text-sm">{district.name}</span>
                                    <span className="text-xs text-muted-foreground">{district.focus}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <AdvisoryInsight title="Regulatory Briefing">
                        A PT PMA is registered nationally but operates locally. Choosing a region like Bali often unlocks faster market entry for "lifestyle" and "creative" services compared to the high-compliance environment of Jakarta. See our <Link href="/why-invest-in-bali" className="text-primary hover:underline">Why Invest in Bali</Link> report for a deeper dive.
                    </AdvisoryInsight>

                    {/* Regional Comparisons */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Comparing with ASEAN Regions</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            How do Indonesia's regions compare with neighboring countries? If you are evaluating regional headquarters, consider our <Link href="/indonesia-vs-malaysia-business" className="text-primary hover:underline">Indonesia vs Malaysia analysis</Link> or our <Link href="/bali-vs-thailand-business" className="text-primary hover:underline">Bali vs Thailand comparison</Link>.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            For founders weighing large-scale emerging markets, the operational ease in Bali often outweighs the initial administrative hurdles of <Link href="/doing-business-in-bali" className="text-primary hover:underline">doing business in Bali</Link>.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Select Your Strategic Hub</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Navigate the complex geography of Indonesian investment with our central intelligence report.
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
