import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Sun, 
    Waves, 
    Palmtree, 
    ShieldCheck, 
    Scale, 
    Globe,
    Ship,
    Anchor,
    CheckCircle2,
    Briefcase,
    ChevronRight,
    HelpCircle,
    Fish,
    Zap,
    Map
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
    title: "PT PMA Setup in Manado Indonesia | Dive Tourism & Pacific Trade Hub",
    description: "Professional PT PMA setup services in Manado. Navigate foreign investment in North Sulawesi's marine tourism, Likupang SEZ, and regional trade routes.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-manado",
    },
    openGraph: {
        title: "PT PMA Setup in Manado Indonesia | Pacific Trade Hub",
        description: "Establish your business in Manado. Comprehensive PT PMA registration and investment support in North Sulawesi's economic heart.",
        url: "https://bali.enterprises/pt-pma-setup-manado",
        siteName: "Bali Enterprises",
        type: "article",
    },
};

export default function PTPMASetupManadoPage() {
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
                        <Waves className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest italic tracking-widest">Gateway to the Coral Triangle</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-tight">
                        PT PMA Setup in <span className="text-muted-foreground italic">Manado</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary pl-8">
                        Manado is the economic engine of North Sulawesi and Indonesia's strategic bridge to the Pacific. Home to the world-renowned Bunaken National Park and the Likupang Super Priority Destination, Manado offers exceptional opportunities in high-end marine tourism, sustainable fisheries, and regional logistics.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8" asChild>
                            <Link href="/contact">Start Consultation</Link>
                        </Button>
                    </div>
                </header>

                <Separator />

                {/* 2. INTRODUCTION TO DOING BUSINESS IN MANADO */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif">The Pacific Growth Frontier</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            With its direct proximity to East Asia and the Philippines, Manado is evolving from a regional trade hub into a sophisticated "Blue Economy" epicenter. The city's stable political environment and growing infrastructure make it a highly desirable location for long-term foreign investment.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <Palmtree className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Likupang SEZ Advantage</span>
                                    <span className="text-sm text-muted-foreground">Access to one of Indonesia's 5 Super Priority Destinations with massive tax incentives.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Fish className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Marine Biotechnology</span>
                                    <span className="text-sm text-muted-foreground">Strategic base for sustainable aquaculture and high-value marine research.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-muted/30 p-8 rounded-3xl border border-border italic text-primary">
                        <h3 className="text-xl font-bold mb-4 italic underline decoration-primary underline-offset-4">Why Manado Now?</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            Manado currently offers lower operational entry costs than Bali or Jakarta, coupled with higher growth potential in specialized tourism sectors.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4" /> Bitung International Hub Port Proximity
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4" /> Direct Flight Connectivity to East Asia
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4" /> North Sulawesi Power Grid Stability
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT IS A PT PMA */}
                <section className="max-w-3xl mx-auto space-y-6 text-center italic">
                    <h2 className="text-3xl font-serif italic text-primary decoration-primary underline-offset-8 underline">The PT PMA Blueprint for North Sulawesi</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The **PT PMA (Perseroan Terbatas Penanaman Modal Asing)** is the gold standard for foreign investment in Manado. It provides a secure, transparent framework for owning 100% of your business in tourism, trade, and most industrial sectors, fully protecting your global assets under Indonesian law.
                    </p>
                    <AdvisoryInsight title="North Sulawesi Insight">
                        Investment in Manado often qualifies for regional priority incentives, especially when aligned with sustainable marine practices or technology transfer in the Likupang development zone.
                    </AdvisoryInsight>
                </section>

                {/* 4. WHY SET UP IN MANADO */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-serif text-center italic font-bold">Unmatched Regional Potential</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4 bg-muted/5">
                            <Ship className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold italic tracking-tight">Pacific Logistics</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Cut shipping times and costs to Japan, China, and the Philippines by leveraging Bitung's international port.
                            </p>
                        </div>
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4 bg-muted/5">
                            <Anchor className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold italic tracking-tight">Eco-Tourism Hub</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Establish premium dive resorts and conservation-led ventures in one of the world's most biodiverse marine environments.
                            </p>
                        </div>
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4 bg-muted/5">
                            <Globe className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold italic tracking-tight">Climate Resilience</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Benefit from North Sulawesi's favorable geothermal profile and commitment to renewable energy development.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. LEGAL REQUIREMENTS */}
                <section className="space-y-8 bg-black text-white p-12 rounded-[4rem] border-4 border-primary/30 shadow-2xl overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -mr-32 -mt-32 blur-[100px]"></div>
                    <h2 className="text-3xl font-serif italic text-primary">Regulatory Standards & Compliance</h2>
                    <div className="grid md:grid-cols-2 gap-12 font-bold opacity-90">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold italic tracking-tighter uppercase underline decoration-primary underline-offset-8">Entity Architecture</h3>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 transition-transform hover:scale-125" />
                                    <span>2 Shareholders (Corporate or Individual)</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 transition-transform hover:scale-125" />
                                    <span>1 Director & 1 Commissioner structure required.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-6 border-l border-primary/20 pl-12 bg-white/5 p-8 rounded-3xl italic">
                            <h3 className="text-xl font-bold italic text-primary tracking-tight">Regional Domicile</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Manado business licensing requires a verified commercial office or facility. In Likupang, specialized SEZ (Special Economic Zone) rules apply, offering streamlined land and construction permits.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. CAPITAL REQUIREMENTS */}
                <section className="space-y-6 font-bold italic text-primary">
                    <h2 className="text-3xl font-serif italic font-black uppercase tracking-tighter">Strategic Investment Capital</h2>
                    <p className="text-muted-foreground leading-relaxed font-normal">
                        A minimum investment of **IDR 10 billion** (approx. USD 650,000) is required for all PT PMA entities in Manado. This threshold ensures quality investment into North Sulawesi's regional development goals.
                    </p>
                    <RiskNote title="Capital Phasing for SEZ Projects" variant="warning">
                        For investments within the Likupang SEZ, specialized capital fulfillment schedules and asset-based capitalization rules may apply. We strongly advise a custom feasibility audit before formalizing your deed.
                        <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] underline">Consult our Pacific Trade Desk for details.</p>
                    </RiskNote>
                </section>

                {/* 7. STEP-BY-STEP PROCESS */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-serif italic font-bold">The Manado Launch Roadmap</h2>
                    <div className="relative space-y-10 pl-14 border-l-4 border-primary/20">
                        {[
                            { step: "A", title: "KBLI & Zoning Audit", desc: "Confirming land-use permits (ITR) align with Manado's Master Plan (RTRW)." },
                            { step: "B", title: "Corporate Legalization", desc: "Drafting the Deed of Establishment and securing MoLHR approval." },
                            { step: "C", title: "Tax & Customs Setup", desc: "Issuance of NPWP and specialized import permits for coastal equipment." },
                            { step: "D", title: "Operational NIB Activation", desc: "Finalizing sector licenses and environmental permits (UKL-UPL) through OSS." }
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <span className="absolute -left-[76px] top-0 h-12 w-12 rounded-full bg-black text-primary flex items-center justify-center text-xl font-black italic border-4 border-background transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-black">{item.step}</span>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold italic tracking-tight underline decoration-primary/10 underline-offset-4">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm max-w-xl italic leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 8. TIMELINE */}
                <section className="space-y-6 bg-muted/30 p-12 rounded-[3rem] border border-dashed border-primary/30 text-center shadow-inner italic">
                    <h2 className="text-3xl font-serif italic font-bold text-primary">Indicative Launch Timeline</h2>
                    <p className="text-muted-foreground leading-relaxed italic max-w-2xl mx-auto text-lg leading-relaxed">
                        A standard PT PMA setup in Manado typically spans **4 to 7 weeks**. Projects in the Likupang SEZ may involve additional environmental or zoning validations, which our team manages end-to-end.
                    </p>
                </section>

                {/* 9. COST STRUCTURE */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-serif italic font-bold">Strategic Cost Components</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-8 border-2 border-primary/5 rounded-[2.5rem] flex items-center justify-between group hover:border-primary transition-all shadow-sm italic hover:shadow-xl">
                            <span className="font-bold text-sm tracking-widest uppercase italic opacity-70 group-hover:opacity-100">National Regulatory Clearance</span>
                            <Zap className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="p-8 border-2 border-primary/5 rounded-[2.5rem] flex items-center justify-between group hover:border-primary transition-all shadow-sm italic hover:shadow-xl">
                            <span className="font-bold text-sm tracking-widest uppercase italic opacity-70 group-hover:opacity-100">Regional Marine Permitting</span>
                            <Zap className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                </section>

                {/* 10. TAX & COMPLIANCE */}
                <section className="space-y-6 italic text-muted-foreground">
                    <h2 className="text-3xl font-serif font-bold italic text-foreground">Ongoing Investment Compliance</h2>
                    <p className="leading-relaxed font-bold border-l-4 border-primary pl-8">
                        Manado companies must submit quarterly Investment Activity Reports (LKPM) to BKPM. For marine-based industries, rigorous adherence to regional environmental monitoring (AMDAL/UKL-UPL) is mandatory to maintain operational licensing.
                    </p>
                </section>

                {/* 11. INVESTOR KITAS */}
                <section className="space-y-6 relative overflow-hidden p-12 bg-muted/10 rounded-[4rem] border border-primary/5 italic">
                    <h2 className="text-3xl font-serif italic font-bold underline decoration-primary decoration-4 underline-offset-8">Residency: Investor KITAS (Manado)</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg pt-4 max-w-3xl font-bold opacity-80">
                        Stay and manage your Pacific ventures legally. The PT PMA framework allows for the sponsorship of a 2-Year Investor KITAS, providing full residency rights and multi-entry convenience for international directors and shareholders.
                    </p>
                </section>

                {/* 12. COMMON MISTAKES */}
                <section className="space-y-12 p-16 bg-black text-white rounded-[5rem] shadow-2xl skew-y-1">
                    <div className="-skew-y-1">
                        <h2 className="text-4xl font-serif font-black italic tracking-tighter uppercase mb-12">Pitfalls in North Sulawesi</h2>
                        <div className="grid md:grid-cols-2 gap-12 font-bold opacity-80 italic">
                            <div className="p-10 border-l-4 border-primary bg-white/5 rounded-3xl">
                                <h4 className="text-xl mb-4 tracking-tight underline">Coastal Zoning Confusion</h4>
                                <p className="text-sm">Attempting to build over-water structures without verified marine spatial permits (KKPRL).</p>
                            </div>
                            <div className="p-10 border-l-4 border-primary bg-white/5 rounded-3xl">
                                <h4 className="text-xl mb-4 tracking-tight underline">Fisheries Permitting Error</h4>
                                <p className="text-sm">Misclassifying processing vs export licenses, which involves different ministry oversight (KKP vs Trade).</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 13. WHY PROF CONSULTANT */}
                <section className="space-y-6 text-center max-w-3xl mx-auto italic font-bold">
                    <h2 className="text-3xl font-serif italic">Why Manado Demands Pacific Specialists</h2>
                    <p className="text-muted-foreground leading-relaxed italic border-y py-12 border-primary/10">
                        Manado's regulatory landscape is heavily influenced by national Super Priority Destination directives. Our experts bridge the gap between local North Sulawesi administration and central ministry mandates, ensuring your setup is technically flawless.
                    </p>
                </section>

                {/* 14. HOW WE SUPPORT */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-serif text-center italic font-bold">Comprehensive Investment Support</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Likupang Specialist", desc: "SEZ Incentive Management." },
                            { title: "Marine Licensing", desc: "Specialized Coastal Permits." },
                            { title: "Pacific Trade Desk", desc: "Export/Import Compliance." },
                            { title: "Residency Mgmt", desc: "Investor Visa & KITAS." }
                        ].map((s, i) => (
                            <div key={i} className="p-10 border-b-4 border-primary/20 bg-muted/5 rounded-3xl hover:bg-primary/5 transition-all text-center space-y-4 italic shadow-sm hover:shadow-xl hover:border-primary">
                                <ShieldCheck className="h-10 w-10 text-primary mx-auto" />
                                <h5 className="font-bold italic tracking-tight">{s.title}</h5>
                                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.25em] leading-tight">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 15. CASE EXAMPLE */}
                <section className="bg-primary text-primary-foreground p-20 rounded-[4rem] relative shadow-2xl overflow-hidden italic font-bold border-8 border-white/10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mt-48 blur-[120px]"></div>
                    <h2 className="text-4xl font-serif mb-10 flex items-center gap-6 font-black italic tracking-tighter uppercase">
                        Spotlight: Sustainable Blue Economy
                    </h2>
                    <div className="space-y-8 text-primary-foreground/90 leading-relaxed text-2xl border-l-[8px] border-white/20 pl-16 italic font-bold">
                        <p>A Swiss marine technology firm established their regional R&D and processing hub in Manado. By utilizing a PT PMA structure and securing strategic environmental clearances, they now manage sustainable tuna processing for the European market while conducting reef restoration research in collaboration with local universities.</p>
                    </div>
                </section>

                {/* 16. FAQ */}
                <section className="space-y-8 italic">
                    <h2 className="text-3xl font-serif text-center font-bold uppercase tracking-tighter">Manado Investment FAQ</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto divide-y-4 divide-primary/5">
                        <AccordionItem value="1" className="border-none py-6">
                            <AccordionTrigger className="text-2xl font-black tracking-tight italic text-left hover:text-primary transition-colors">Is Bitung the same as Manado for registration?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-xl pt-6 pl-8 border-l-4 border-primary/30 font-medium">No. Manado is the administrative capital, while Bitung is the industrial port city (approx 45 mins away). Most PT PMAs domicile in Manado while maintaining operational sites in Bitung or Likupang.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="2" className="border-none py-6">
                            <AccordionTrigger className="text-2xl font-black tracking-tight italic text-left hover:text-primary transition-colors">What are the benefits of the Likupang SEZ?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-xl pt-6 pl-8 border-l-4 border-primary/30 font-medium">Benefits include 100% foreign ownership, Corporate Income Tax holidays for up to 20 years, and streamlined immigration/customs procedures for tourism and creative economy projects.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* 17. CTA */}
                <section className="bg-muted p-24 rounded-[6rem] text-center space-y-12 shadow-3xl italic group border-2 border-black">
                    <h2 className="text-5xl md:text-7xl font-serif font-black italic tracking-tighter transition-all group-hover:tracking-normal group-hover:text-primary">Navigate the North</h2>
                    <p className="text-2xl text-muted-foreground max-w-2xl mx-auto italic font-bold leading-relaxed opacity-70">Unlock Indonesia's Pacific gateway with the most trusted regulatory advisors in the region.</p>
                    <div className="pt-6">
                        <Button size="lg" className="rounded-full px-20 bg-black text-white hover:bg-primary transition-all text-2xl font-black font-serif py-10 italic shadow-2xl" asChild>
                            <Link href="/contact">Launch Your Manado Venture</Link>
                        </Button>
                    </div>
                </section>

                {/* 18. INTERNAL LINKING */}
                <footer className="pt-24 border-t-4 text-[13px] text-muted-foreground flex flex-wrap gap-16 justify-center italic font-black uppercase tracking-[0.3em] border-primary/10">
                    <Link href="/pt-pma-setup-labuan-bajo" className="hover:text-primary transition-colors hover:underline decoration-primary decoration-4">LABUAN BAJO</Link>
                    <Link href="/pt-pma-setup-balikpapan" className="hover:text-primary transition-colors hover:underline decoration-primary decoration-4">BALIKPAPAN (IKN)</Link>
                    <Link href="/pt-pma-setup-lombok" className="hover:text-primary transition-colors hover:underline decoration-primary decoration-4">LOMBOK (SEZ)</Link>
                    <Link href="/starting-business-bali-guide" className="text-primary hover:underline decoration-black decoration-4 scale-110">KNOWLEDGE HUB</Link>
                </footer>

                <div className="text-[10px] text-muted-foreground/40 text-center max-w-4xl mx-auto uppercase tracking-[0.4em] font-black leading-[1.8] pb-24 italic opacity-40">
                    Proprietary Regional Advisory. Compliance standards for North Sulawesi and SEZ Likupang vary by industry risk profile. Verify all legal roadmaps before capital commitment.
                </div>

            </main>
        </div>
    );
}
