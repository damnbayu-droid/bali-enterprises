import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Building2, 
    ShoppingBag, 
    MapPin, 
    ShieldCheck, 
    Scale, 
    Globe,
    Truck,
    Building,
    CheckCircle2,
    Briefcase,
    ChevronRight,
    HelpCircle,
    Store,
    LayoutDashboard,
    Zap
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
    title: "PT PMA Setup in Denpasar Bali | Urban Commerce & Administrative Hub",
    description: "Professional PT PMA setup services in Denpasar. Navigate business investment, company registration, and compliance in Bali's capital city and administrative heart.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-denpasar",
    },
    openGraph: {
        title: "PT PMA Setup in Denpasar Bali | Urban Commerce Hub",
        description: "Establish your urban business in Denpasar. Comprehensive PT PMA registration and government liaison support in Bali's capital.",
        url: "https://bali.enterprises/pt-pma-setup-denpasar",
        siteName: "Bali Enterprises",
        type: "article",
    },
};

export default function PTPMASetupDenpasarPage() {
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
                        <MapPin className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest italic">The Heart of Bali's Administration</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-tight">
                        PT PMA Setup in <span className="text-muted-foreground italic">Denpasar</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary pl-8">
                        As the capital city of Bali, Denpasar is far more than an administrative hub. It is the center of urban commerce, logistics, and retail distribution for the entire island. Establishing a PT PMA in Denpasar provides direct access to Bali's government bureaus and the island's largest domestic consumer market.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8" asChild>
                            <Link href="/contact">Start Consultation</Link>
                        </Button>
                    </div>
                </header>

                <Separator />

                {/* 2. INTRODUCTION TO DOING BUSINESS IN DENPASAR */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif">The Economic Powerhouse of Bali</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            While southern Bali thrives on tourism, Denpasar is the engine of "real economy" activities. It hosts the headquarters of Bali's major retail chains, medical centers, and educational institutions, making it the ideal base for service-oriented foreign enterprises.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <Store className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Urban Commerce</span>
                                    <span className="text-sm text-muted-foreground">High-traffic retail, fashion showrooms, and consumer good distribution hubs.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Building className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Government Liaison</span>
                                    <span className="text-sm text-muted-foreground">Proximity to the Governor's office and provincial licensing (DPMPTSP) boards.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-muted/30 p-8 rounded-3xl border border-border">
                        <h3 className="text-xl font-bold mb-4 italic underline decoration-primary underline-offset-4">Why Invest in Denpasar?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                            Denpasar offers more stable rental yields and professional infrastructure than the seasonal tourism zones.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border text-primary">
                                <CheckCircle2 className="h-4 w-4" /> Strategic Renon Government District
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border text-primary">
                                <CheckCircle2 className="h-4 w-4" /> Integrated Logistics to Sanur & Kuta
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border text-primary">
                                <CheckCircle2 className="h-4 w-4" /> Year-Round Domestic Consumer Demand
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT IS A PT PMA */}
                <section className="max-w-3xl mx-auto space-y-6 text-center italic">
                    <h2 className="text-3xl font-serif underline decoration-primary decoration-2 underline-offset-8">The PT PMA Advantage in the Capital</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Setting up a **PT PMA (Foreign Owned Company)** in Denpasar allows you to legally operate across Bali while holding your main assets in the city's robust commercial zones. This structure provides the ultimate legal framework for 100% foreign ownership in most modern retail and technology sectors.
                    </p>
                    <AdvisoryInsight title="Structural Stability">
                        A Denpasar domicile is often viewed favorably by local banks and tax authorities as it signals a long-term commitment to Bali's formal economy rather than temporary seasonal tourism ventures.
                    </AdvisoryInsight>
                </section>

                {/* 4. WHY SET UP IN DENPASAR */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-serif text-center italic font-bold">The Strategic Gateway</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4 bg-muted/5">
                            <LayoutDashboard className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold italic underline">Administrative Hub</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Resolve licensing, tax, and manpower issues faster by being in the city where those offices are located.
                            </p>
                        </div>
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4 bg-muted/5">
                            <Truck className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold italic underline">Logistics Epicenter</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Denpasar facilitates easy distribution to North, East, and South Bali, making it the island's supply-chain anchor.
                            </p>
                        </div>
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4 bg-muted/5">
                            <Globe className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold italic underline">Talent Resilience</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Tap into the large pool of skilled long-term residents and university graduates living within the city core.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. LEGAL REQUIREMENTS */}
                <section className="space-y-8 bg-black text-white p-12 rounded-[3.5rem] border-4 border-primary/20 shadow-2xl">
                    <h2 className="text-3xl font-serif italic text-primary">Compliance & Legal Foundations</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold italic tracking-tight">Entity Requirements</h3>
                            <ul className="space-y-4 text-gray-400 font-bold">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 transition-transform hover:scale-125" />
                                    <span>2 Shareholders (Corporate or Individual)</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 transition-transform hover:scale-125" />
                                    <span>1 Director & 1 Commissioner (Multi-nationality allowed)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-6 border-l border-primary/30 pl-12 bg-primary/5 p-8 rounded-3xl italic">
                            <h3 className="text-xl font-bold italic text-primary">Regional Domicile Rule</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Your office address must be in an area zoned for commercial use (NIB code alignment). In Denpasar, the **Renon** and **Teuku Umar** districts are the gold standards for business domiciles.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. CAPITAL REQUIREMENTS */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-serif italic font-bold">Investment Capital in Bali's Capital</h2>
                    <p className="text-muted-foreground leading-relaxed italic">
                        All PT PMA entities in Indonesia, including Denpasar, require an investment plan of **IDR 10 billion** (approx. USD 650k). This is per KBLI category and ensures that foreign investment adds significant value to the local economy.
                    </p>
                    <RiskNote title="Capital Planning in a Competitive City" variant="warning">
                        Effective 2024, the paid-up capital requirement of 25% (IDR 2.5 billion) must be committed at the legalization stage. We advise caution when structuring multiple KBLI codes as the capital requirement may aggregate.
                        <p className="mt-2 text-xs font-bold uppercase tracking-widest italic text-primary underline underline-offset-4 decoration-primary/50">Consult our advisors for multi-sector strategy.</p>
                    </RiskNote>
                </section>

                {/* 7. STEP-BY-STEP PROCESS */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-serif italic font-bold">The Denpasar Launch Sequence</h2>
                    <div className="relative space-y-10 pl-10 border-l-2 border-primary/30">
                        {[
                            { step: "SET", title: "Strategic Zoning Audit", desc: "Confirming your business location aligns with Denpasar City Council zoning (RDTR)." },
                            { step: "PMA", title: "Corporate Legalization", desc: "Articles of Association drafting and MoLHR approval." },
                            { step: "NPW", title: "Tax Integration", desc: "Securing NPWP from Denpasar Barat or Denpasar Timur tax offices." },
                            { step: "OPS", title: "Sector Licensing", desc: "Activating NIB and sector-specific operational permits through OSS-RBA." }
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <span className="absolute -left-[54px] top-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[8px] font-black uppercase tracking-tighter border-4 border-background transition-transform group-hover:rotate-12 group-hover:scale-110">{item.step}</span>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold italic tracking-tight underline decoration-primary/20 underline-offset-4">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm max-w-xl italic leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 8. TIMELINE */}
                <section className="space-y-6 bg-muted/20 p-12 rounded-[3rem] border-2 border-dashed border-primary/10 text-center">
                    <h2 className="text-3xl font-serif italic font-bold text-primary">Indicative Processing Timeline</h2>
                    <p className="text-muted-foreground leading-relaxed italic max-w-2xl mx-auto">
                        A typical PT PMA registration in Denpasar takes **4 to 6 weeks**. This timeline varies based on your KBLI risk level and the speed of provincial-level environmental or spatial checks.
                    </p>
                </section>

                {/* 9. COST STRUCTURE */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-serif italic font-bold">Investment Advisory Components</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-8 border rounded-[2rem] space-y-2 text-center hover:bg-muted/5 transition-all">
                            <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Tier 01</span>
                            <h5 className="font-bold italic">Legal Formation</h5>
                        </div>
                        <div className="p-8 border rounded-[2rem] space-y-2 text-center hover:bg-muted/5 transition-all">
                            <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Tier 02</span>
                            <h5 className="font-bold italic">Zoning Compliance</h5>
                        </div>
                        <div className="p-8 border rounded-[2rem] space-y-2 text-center hover:bg-muted/5 transition-all">
                            <span className="text-xs font-black text-primary uppercase tracking-[0.2em]">Tier 03</span>
                            <h5 className="font-bold italic">Operational NIB</h5>
                        </div>
                    </div>
                </section>

                {/* 10. TAX & COMPLIANCE */}
                <section className="space-y-6 italic">
                    <h2 className="text-3xl font-serif font-bold">Ongoing Corporate Compliance</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Denpasar-based PMAs must adhere to strict quarterly Investment Activity Reporting (LKPM). Furthermore, local employment regulations and regional business taxes are managed closely by city officials, requiring consistent professional oversight.
                    </p>
                </section>

                {/* 11. INVESTOR KITAS */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-serif italic font-bold underline decoration-primary decoration-4 underline-offset-8">Residency: Investor KITAS Sponsorship</h2>
                    <p className="text-muted-foreground italic border-l-4 border-muted pl-8 leading-relaxed text-lg">
                        The Denpasar PT PMA structure establishes immediate eligibility for the 2-year Investor KITAS. This permits you to live in Bali legally and manage your city-based or island-wide portfolio with multi-entry freedom.
                    </p>
                </section>

                {/* 12. COMMON MISTAKES */}
                <section className="space-y-10 p-16 bg-muted border-4 border-black rounded-[4rem] relative overflow-hidden italic shadow-inner">
                    <h2 className="text-3xl font-serif font-black tracking-tighter uppercase italic">Regional Risks & Mitigation</h2>
                    <div className="grid md:grid-cols-2 gap-12 font-bold opacity-80">
                        <div className="p-8 bg-white/50 rounded-3xl border border-black/5">
                            <h4 className="text-xl mb-3 tracking-tight underline">Zoning Mismatch</h4>
                            <p className="text-sm">Attempting to register a logistics business in a purely residential area like Panjer without a commercial NIB trigger.</p>
                        </div>
                        <div className="p-8 bg-white/50 rounded-3xl border border-black/5">
                            <h4 className="text-xl mb-3 tracking-tight underline">Manpower Compliance</h4>
                            <p className="text-sm">Failing to register for BPJS (National Insurance) for local staff, which is mandatory for PT PMAs in Denpasar.</p>
                        </div>
                    </div>
                </section>

                {/* 13. WHY PROF CONSULTANT */}
                <section className="space-y-6 text-center max-w-3xl mx-auto italic">
                    <h2 className="text-3xl font-serif font-bold italic">Why Denpasar Demands Local Specialists</h2>
                    <p className="text-muted-foreground leading-relaxed italic border-y py-10 border-muted">
                        Operating in Bali's capital means dealing with the core of provincial bureaucracy. Our specialists have the localized network and legal standing to navigate Denpasar's unique administrative landscape without operational or licensing delays.
                    </p>
                </section>

                {/* 14. HOW WE SUPPORT */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-serif text-center italic font-bold">Elite Corporate Advisory</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Capital Structuring", desc: "Optimizing investment plans." },
                            { title: "Bilateral Liaison", desc: "Gov & Tax Office coordination." },
                            { title: "Visa Mastery", desc: "Investor & E-Visa sponsorship." },
                            { title: "Structural Audit", desc: "Compliance & Reporting (LKPM)." }
                        ].map((s, i) => (
                            <div key={i} className="p-10 border-2 rounded-[2.5rem] hover:border-primary transition-all text-center space-y-4 shadow-sm italic hover:shadow-xl hover:-translate-y-2">
                                <ShieldCheck className="h-8 w-8 text-primary mx-auto" />
                                <h5 className="font-bold italic tracking-tight">{s.title}</h5>
                                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.23em] leading-tight">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 15. CASE EXAMPLE */}
                <section className="bg-primary text-primary-foreground p-16 rounded-[4rem] relative shadow-2xl overflow-hidden italic">
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full -mb-40 -mr-40 blur-[80px]"></div>
                    <h2 className="text-3xl font-serif mb-8 flex items-center gap-4 font-black italic tracking-tighter uppercase">
                         Operational Spotlight: Urban Retail
                    </h2>
                    <div className="space-y-6 text-primary-foreground/90 leading-relaxed text-xl border-l-[6px] border-white/30 pl-12 italic font-bold">
                        <p>A Japanese high-end furniture brand successfully established their Bali headquarters in a 500sqm showroom in Denpasar's Teuku Umar district. By leveraging a PT PMA structure for retail trade (KBLI 4759), they secured 100% ownership and obtained all regional zoning permits to operate both a showroom and an island-wide e-commerce distribution hub.</p>
                    </div>
                </section>

                {/* 16. FAQ */}
                <section className="space-y-8 italic">
                    <h2 className="text-3xl font-serif text-center font-bold">Denpasar Investment FAQ</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto divide-y-2 divide-muted">
                        <AccordionItem value="1" className="border-none py-4">
                            <AccordionTrigger className="text-xl font-bold tracking-tight italic text-left">Is Denpasar better than Seminyak for a business base?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-lg pt-4 pl-4 border-l-2 border-primary/20">For administrative, logistics, or 100% retail operations, Denpasar offers superior infrastructure and more professional business zonings compared to the crowded tourism strips.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="2" className="border-none py-4">
                            <AccordionTrigger className="text-xl font-bold tracking-tight italic text-left">What are the main zoning blocks in Denpasar?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-lg pt-4 pl-4 border-l-2 border-primary/20">Renon is the premier administrative hub. Sanur Kauh and South Denpasar are strategic for logistics and retail-to-tourism distribution.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* 17. CTA */}
                <section className="bg-muted border-4 border-primary p-20 rounded-[5rem] text-center space-y-10 shadow-2xl italic group">
                    <h2 className="text-4xl md:text-6xl font-serif font-black italic tracking-tighter transition-all group-hover:tracking-normal group-hover:text-primary">Master the Bali Capital</h2>
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto italic font-bold leading-relaxed">Join the ranks of Bali's established urban enterprises with our elite-tier formation services.</p>
                    <div className="pt-4">
                        <Button size="lg" className="rounded-full px-16 bg-black text-white hover:bg-primary transition-all text-xl font-bold font-serif py-8 italic shadow-2xl" asChild>
                            <Link href="/contact">Consult Our Denpasar Team</Link>
                        </Button>
                    </div>
                </section>

                {/* 18. INTERNAL LINKING */}
                <footer className="pt-20 border-t-2 text-[11px] text-muted-foreground flex flex-wrap gap-12 justify-center italic font-black uppercase tracking-[0.25em] border-muted">
                    <Link href="/company-formation-jakarta" className="hover:text-primary transition-colors hover:underline">PT PMA JAKARTA</Link>
                    <Link href="/pt-pma-setup-surabaya" className="hover:text-primary transition-colors hover:underline">PT PMA SURABAYA</Link>
                    <Link href="/pt-pma-setup-lombok" className="hover:text-primary transition-colors hover:underline">PT PMA LOMBOK</Link>
                    <Link href="/starting-business-bali-guide" className="hover:text-primary transition-colors underline text-primary decoration-primary decoration-2 underline-offset-8">KNOWLEDGE HUB</Link>
                </footer>

                <div className="text-[9px] text-muted-foreground/50 text-center max-w-3xl mx-auto uppercase tracking-[0.3em] font-black leading-tight pb-16 italic text-balance">
                    Strict Adherence to Bali Provincial Regulation (Perda) and National Investment Policy is required. Information subject to regulatory volatility.
                </div>

            </main>
        </div>
    );
}
