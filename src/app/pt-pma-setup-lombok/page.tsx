import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Palmtree, 
    Construction, 
    Ship, 
    Hotel, 
    ShieldCheck, 
    Scale, 
    FileCheck,
    Trees,
    CheckCircle2,
    Briefcase,
    ChevronRight,
    HelpCircle,
    Globe,
    Zap,
    MapPin,
    Trophy,
    Sunset
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
    title: "PT PMA Setup in Lombok Indonesia | Mandalika SEZ & Luxury Tourism",
    description: "Professional PT PMA setup services in Lombok. Navigate foreign investment, company registration, and compliance in West Nusa Tenggara's high-end tourism and SEZ hub.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-lombok",
    },
    openGraph: {
        title: "PT PMA Setup in Lombok | Mandalika SEZ Investment Hub",
        description: "Establish your high-growth business in Lombok. Comprehensive PT PMA registration and SEZ incentive support for international investors.",
        url: "https://bali.enterprises/pt-pma-setup-lombok",
        siteName: "Bali Enterprises",
        type: "article",
    },
};

export default function PTPMASetupLombokPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12 text-foreground/90 font-sans selection:bg-primary/20">
            <div className="w-full max-w-5xl px-6 mb-8">
                <Link href="/starting-business-bali-guide" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-all group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-2" />
                    Back to Knowledge Hub
                </Link>
            </div>

            <main className="w-full max-w-5xl px-6 pb-24 space-y-24">
                
                {/* 1. HERO SECTION */}
                <header className="space-y-10 py-12 relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
                    <div className="flex items-center gap-4 text-primary mb-2">
                        <Trophy className="h-7 w-7 animate-pulse" />
                        <span className="text-sm font-black uppercase tracking-[0.3em] font-serif italic text-primary/80">The Sunrise of Indonesia</span>
                    </div>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter text-foreground leading-[0.95] drop-shadow-sm italic">
                        PT PMA Setup in <span className="text-primary italic font-black">Lombok</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-4xl border-l-[10px] border-primary/20 pl-12 font-medium italic">
                        Lombok is not just "another Bali." It is the cornerstone of Indonesia's <span className="text-foreground">"10 New Balis"</span> initiative, anchored by the Mandalika Special Economic Zone. A PT PMA in Lombok offers unmatched fiscal incentives and early-mover advantages in the world's next luxury sports and eco-tourism epicenter.
                    </p>
                    <div className="flex gap-6 pt-6">
                        <Button size="lg" className="rounded-full px-12 py-8 bg-black text-white hover:bg-primary transition-all text-xl font-bold font-serif italic shadow-xl hover:shadow-primary/20" asChild>
                            <Link href="/contact">Inquire Now</Link>
                        </Button>
                    </div>
                </header>

                <Separator className="opacity-10" />

                {/* 2. INTRODUCTION TO DOING BUSINESS IN LOMBOK */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-10">
                        <h2 className="text-4xl font-serif italic font-black tracking-tight underline decoration-primary decoration-4 underline-offset-8">The Economic Shift</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed italic font-bold">
                            Driven by the MotoGP Mandalika Circuit and the transformation of praying international airport, Lombok is shifting from a quiet neighbor to a high-capacity global destination.
                        </p>
                        <ul className="space-y-8">
                            <li className="flex gap-6 group">
                                <Zap className="h-7 w-7 text-primary shrink-0 transition-transform group-hover:scale-125" />
                                <div className="space-y-1">
                                    <span className="font-black text-xl italic block tracking-tight">Sports Tourism Capital</span>
                                    <span className="text-sm text-muted-foreground leading-relaxed italic">Global events bringing 100k+ high-net-worth visitors annually.</span>
                                </div>
                            </li>
                            <li className="flex gap-6 group">
                                <Trees className="h-7 w-7 text-primary shrink-0 transition-transform group-hover:scale-125" />
                                <div className="space-y-1">
                                    <span className="font-black text-xl italic block tracking-tight">Eco-Resilience Hub</span>
                                    <span className="text-sm text-muted-foreground leading-relaxed italic">Priority zones for sustainable villas and renewable energy solutions.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-muted/40 p-12 rounded-[3.5rem] border-2 border-primary/10 shadow-inner relative overflow-hidden group">
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mb-16 -mr-16 blur-3xl transition-all group-hover:blur-xl"></div>
                        <h3 className="text-2xl font-black mb-8 italic text-primary tracking-tighter uppercase underline underline-offset-4 decoration-primary/30">The Mandalika Advantage</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8 italic font-medium">
                            Investing in Lombok right now is comparable to investing in the Bukit Peninsula 20 years ago, but with modern infrastructure and central government backing.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm font-black px-5 py-4 bg-background rounded-2xl border-2 border-primary/5 text-primary italic transition-all hover:border-primary shadow-sm">
                                <CheckCircle2 className="h-5 w-5" /> 100% Tax Holidays Available
                            </div>
                            <div className="flex items-center gap-3 text-sm font-black px-5 py-4 bg-background rounded-2xl border-2 border-primary/5 text-primary italic transition-all hover:border-primary shadow-sm">
                                <CheckCircle2 className="h-5 w-5" /> Expedited Investment Licensing
                            </div>
                            <div className="flex items-center gap-3 text-sm font-black px-5 py-4 bg-background rounded-2xl border-2 border-primary/5 text-primary italic transition-all hover:border-primary shadow-sm">
                                <CheckCircle2 className="h-5 w-5" /> Direct Land Use Authorization (HGB)
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT IS A PT PMA */}
                <section className="max-w-4xl mx-auto space-y-8 text-center italic">
                    <h2 className="text-4xl font-serif italic text-primary font-black tracking-tighter uppercase">The Corporate Vehicle for Prosperity</h2>
                    <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
                        A **PT PMA (Foreign Owned Limited Liability Company)** is the only legally secure way for foreign nationals to fully own and manage a high-value business in Lombok. It protects your capital, enables 100% foreign ownership in most modern sectors, and allows you to hold the **Right to Build (HGB)** land title for 80+ years.
                    </p>
                    <AdvisoryInsight title="Lombok Regulatory Standard">
                        A PT PMA registered in Mataram or Central Lombok is a national entity but benefits from specific regional investment incentives (Tax Allowance) designed to spur growth in West Nusa Tenggara.
                    </AdvisoryInsight>
                </section>

                {/* 4. WHY SET UP IN LOMBOK */}
                <section className="space-y-16">
                    <h2 className="text-4xl font-serif text-center italic font-black uppercase tracking-tight">The Multi-Tiered Entry Case</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-10 border-4 border-muted rounded-[3rem] hover:border-primary/20 transition-all space-y-6 bg-muted/5 group italic">
                            <Construction className="h-10 w-10 text-primary transition-transform group-hover:-rotate-12" />
                            <h3 className="text-2xl font-black italic tracking-tighter uppercase">SEZ Fiscal Perks</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                                Mandalika SEZ entities enjoy VAT exemptions on construction materials and zero import duties on production machines.
                            </p>
                        </div>
                        <div className="p-10 border-4 border-muted rounded-[3rem] hover:border-primary/20 transition-all space-y-6 bg-muted/5 group italic">
                            <Ship className="h-10 w-10 text-primary transition-transform group-hover:-rotate-12" />
                            <h3 className="text-2xl font-black italic tracking-tighter uppercase">Blue Carbon Focus</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                                Early incentives for companies focused on marine conservation, renewable pearl farming, and eco-marinas.
                            </p>
                        </div>
                        <div className="p-10 border-4 border-muted rounded-[3rem] hover:border-primary/20 transition-all space-y-6 bg-muted/5 group italic">
                            <Globe className="h-10 w-10 text-primary transition-transform group-hover:-rotate-12" />
                            <h3 className="text-2xl font-black italic tracking-tighter uppercase">Growth Arbitrage</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                                Acquire premium land titles in South Lombok (Kuta, Selong Belanak) while the price curve is still in its breakout phase.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. LEGAL REQUIREMENTS */}
                <section className="space-y-10 bg-black text-white p-16 rounded-[4.5rem] border-8 border-primary/10 shadow-3xl relative overflow-hidden italic">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[120px]"></div>
                    <h2 className="text-4xl font-serif italic text-primary font-black tracking-tighter uppercase mb-6">Structural Foundations</h2>
                    <div className="grid md:grid-cols-2 gap-16 font-bold">
                        <div className="space-y-8">
                            <h3 className="text-2xl italic tracking-tighter underline underline-offset-8 decoration-primary/40 uppercase">Board Composition</h3>
                            <ul className="space-y-6 opacity-80">
                                <li className="flex gap-4 items-center">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                    <span>2 Shareholders (Corporate or Individual)</span>
                                </li>
                                <li className="flex gap-4 items-center">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                                    <span>1 Resident Director or KITAS Holder</span>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-8 border-l-[3px] border-primary/20 pl-16 bg-white/5 p-10 rounded-[3rem]">
                            <h3 className="text-2xl italic tracking-tighter underline underline-offset-8 decoration-primary/40 uppercase">Zoning Precision</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-bold">
                                Your Lombok domicile must align with the **RDTR** (Regional Spatial Planning) of Mataram or Central Lombok. Tourism businesses must verify 'Green' or 'Tourism' zoning specifically to enable hotel or villa operation licenses.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. CAPITAL REQUIREMENTS */}
                <section className="space-y-8 italic">
                    <h2 className="text-4xl font-serif font-black italic text-primary uppercase tracking-tighter underline decoration-primary/10 underline-offset-[12px]">Investment Capital Logic</h2>
                    <p className="text-2xl text-muted-foreground leading-relaxed font-medium">
                        National regulation mandates a minimum investment plan of **IDR 10 billion** (approx. USD 650,000) for ALL PT PMA entities. In Lombok, this often includes the valuation of land leases, architectural designs, and development equipment.
                    </p>
                    <RiskNote title="Capital Planning for Property Developers" variant="warning">
                        Effective 2024, the paid-up capital of 25% (IDR 2.5 billion) must be evidenced by a bank statement or capital statement during the legalization of the Deed of Establishment.
                        <p className="mt-4 text-[10px] font-black tracking-[0.3em] uppercase underline text-primary italic">Expert Advisory for multi-sector KBLI required.</p>
                    </RiskNote>
                </section>

                {/* 7. STEP-BY-STEP PROCESS */}
                <section className="space-y-16">
                    <h2 className="text-4xl font-serif italic font-black tracking-tighter text-center uppercase">The Lombok Entry Architecture</h2>
                    <div className="relative space-y-14 pl-16 border-l-[6px] border-primary/10 transition-all hover:border-primary/30">
                        {[
                            { step: "L01", title: "Brand & Name Reservation", desc: "Securing a 3-word Indonesian business name (PT [Name] Indonesia)." },
                            { step: "L02", title: "Deed of Incorporation", desc: "Legal signing of Articles (Akkta Pendirian) with regional notary." },
                            { step: "L03", title: "MoLHR Legalization", desc: "Obtaining Department of Justice approval for official company status." },
                            { step: "L04", title: "Local Tax ID (NPWP)", desc: "Corporate tax registration with KPP Mataram or specialized SEZ tax desk." },
                            { step: "L05", title: "OSS-RBA Fulfillment", desc: "Activating the NIB and sector-specific environment permits (UKL-UPL)." }
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <span className="absolute -left-[86px] top-0 h-14 w-14 rounded-[1.5rem] bg-black text-primary flex items-center justify-center text-xl font-black italic border-4 border-background transition-all group-hover:rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-black shadow-lg">{item.step}</span>
                                <div className="space-y-3">
                                    <h4 className="text-2xl font-black italic tracking-tighter uppercase underline decoration-primary/5 underline-offset-[6px]">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm max-w-2xl italic leading-relaxed font-bold opacity-80">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 8. TIMELINE */}
                <section className="space-y-8 bg-muted/20 p-16 rounded-[4rem] border-2 border-dashed border-primary/20 text-center relative overflow-hidden italic">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 rounded-full -ml-12 -mt-12 blur-2xl"></div>
                    <h2 className="text-4xl font-serif italic font-black text-primary uppercase tracking-tighter">Timeline to Operations</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed italic max-w-3xl mx-auto font-bold opacity-80">
                        A typical PT PMA registration in Lombok is completed within **5 to 8 weeks**. Entities locating within the Mandalika SEZ benefit from a dedicated "One-Stop Shop" that can reduce administrative lag significantly.
                    </p>
                </section>

                {/* 9. COST STRUCTURE */}
                <section className="space-y-12 italic">
                    <h2 className="text-4xl font-serif italic font-black uppercase tracking-tighter">Budgetary Hierarchy</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {["Formation Deed", "MoLHR Filing", "Tax Setup", "NIB Activation"].map((label, i) => (
                            <div key={i} className="p-8 border-[3px] border-muted rounded-[2rem] hover:border-primary/30 transition-all text-center group bg-background">
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 block group-hover:tracking-widest transition-all">Phase 0{i+1}</span>
                                <h5 className="font-black italic text-lg tracking-tight uppercase">{label}</h5>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 10. TAX & COMPLIANCE */}
                <section className="space-y-8 italic font-bold">
                    <h2 className="text-4xl font-serif font-black italic text-foreground uppercase tracking-tight">Active Investment Compliance</h2>
                    <p className="text-xl text-muted-foreground leading-relaxed border-l-[8px] border-primary/20 pl-12 italic">
                        The Lombok region requires strict quarterly **Investment Activity Reporting (LKPM)** to be submitted via the BKPM portal. For resort developments, adherence to 'Blue Economy' environmental standards is becoming a key factor in permit renewals.
                    </p>
                </section>

                {/* 11. INVESTOR KITAS */}
                <section className="space-y-8 bg-primary text-primary-foreground p-16 rounded-[4rem] shadow-2xl skew-x-1 italic">
                    <div className="-skew-x-1">
                        <h2 className="text-4xl font-serif italic font-black uppercase tracking-tighter mb-8 underline decoration-white/20 underline-offset-8">Residency: Investor KITAS Sponsorship</h2>
                        <p className="text-2xl opacity-90 leading-relaxed font-bold max-w-3xl border-l-[6px] border-white/20 pl-12 font-medium">
                            Setting up a PT PMA in Lombok immediately provides the sponsorship legal standing for a 2-Year Investor KITAS. This allows you to reside in Lombok permanently, manage your assets locally, and travel internationally with zero restriction.
                        </p>
                    </div>
                </section>

                {/* 12. COMMON MISTAKES */}
                <section className="space-y-12 p-20 bg-muted/30 border-t-8 border-primary rounded-[5rem] italic shadow-inner">
                    <h2 className="text-4xl font-serif font-black italic tracking-tighter uppercase text-primary">Regional Pitfalls</h2>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-4">
                            <h4 className="text-2xl font-black italic tracking-tight underline">HGB Title Negligence</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed font-bold">Using Indonesian nominees to buy land instead of holding the HGB title under your PT PMA. This leads to ZERO legal protection for your millions in investment.</p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-2xl font-black italic tracking-tight underline">Zoning Mismatch</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed font-bold">Assuming all coastal land is 'Tourist Zone.' Many prime beaches are strictly reserved for local fisheries or 'Green Belt' where no commercial dev is allowed.</p>
                        </div>
                    </div>
                </section>

                {/* 13. WHY PROF CONSULTANT */}
                <section className="space-y-10 text-center max-w-4xl mx-auto italic">
                    <h2 className="text-4xl font-serif font-black italic text-primary uppercase tracking-tighter underline decoration-primary/10 underline-offset-[14px]">The Value of Localized Expertise</h2>
                    <p className="text-2xl text-muted-foreground leading-relaxed italic font-bold border-y-2 border-muted py-16 px-12 leading-relaxed">
                        Lombok's bureaucratic culture is distinct from Bali or Jakarta. Our team has built direct relationships with West Nusa Tenggara licensing departments over the last decade, ensuring your PT PMA isn't just a paper entity, but a fully operational and regionally respected enterprise.
                    </p>
                </section>

                {/* 14. HOW WE SUPPORT */}
                <section className="space-y-16">
                    <h2 className="text-4xl font-serif text-center italic font-black uppercase tracking-tight">Enterprise Success Suite</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { title: "Legal Logic", desc: "Entity Formation Architecture." },
                            { title: "SEZ Advisory", desc: "Fiscal Incentive Registration." },
                            { title: "Land Custody", desc: "HGB Title & Zoning Audits." },
                            { title: "Liaison Mastery", desc: "Gov & Tax Office Stewardship." }
                        ].map((s, i) => (
                            <div key={i} className="p-12 border-4 border-muted rounded-[3.5rem] hover:border-primary transition-all text-center space-y-6 italic group hover:-translate-y-4 hover:shadow-2xl">
                                <ShieldCheck className="h-12 w-12 text-primary mx-auto transition-transform group-hover:scale-125" />
                                <h5 className="font-black italic text-xl tracking-tight uppercase">{s.title}</h5>
                                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.3em] leading-tight opacity-70 group-hover:opacity-100">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 15. CASE EXAMPLE */}
                <section className="bg-black text-white p-24 rounded-[6rem] relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden italic font-bold border-t-8 border-primary">
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full -mb-40 -mr-40 blur-[100px]"></div>
                    <div className="flex items-center gap-6 mb-12">
                        <Sunset className="h-10 w-10 text-primary" />
                        <h2 className="text-4xl font-serif italic font-black tracking-tighter uppercase text-primary">Case Spotlight: Surf Resort Success</h2>
                    </div>
                    <div className="space-y-10 text-gray-400 leading-relaxed text-2xl border-l-[12px] border-primary/40 pl-16 italic font-bold">
                        <p>A group of Australian hospitality veterans successfully launched a 15-villa boutique surf resort in Gerupuk. By leveraging our specialized **HGB Title Audit** and securing the correct **High-Risk NIB** through the NTB provincial office, they bypassed 8 months of potential zoning delays and secured their operation license in record time.</p>
                    </div>
                </section>

                {/* 16. FAQ */}
                <section className="space-y-12 italic">
                    <h2 className="text-4xl font-serif text-center font-black uppercase tracking-tighter italic">Lombok Investment FAQ</h2>
                    <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto divide-y-4 divide-primary/10">
                        <AccordionItem value="1" className="border-none py-8">
                            <AccordionTrigger className="text-2xl font-black tracking-tighter italic text-left hover:text-primary transition-all uppercase">Can a PT PMA own land absolute?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-xl pt-10 pl-12 border-l-[6px] border-primary/20 font-bold italic opacity-80">Foreigners cannot own 'Hak Milik' (Freehold). However, your PT PMA can hold 'Hak Guna Bangunan' (HGB - Right to Build), which provides full legal control and commercial rights for up to 80 years, and is accepted by banks as collateral.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="2" className="border-none py-8">
                            <AccordionTrigger className="text-2xl font-black tracking-tighter italic text-left hover:text-primary transition-all uppercase">Is the Mandalika SEZ better than Kuta?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-xl pt-10 pl-12 border-l-[6px] border-primary/20 font-bold italic opacity-80">The SEZ offers significant tax holidays (up to 20 years zero tax) but requires larger investment scales. Kuta is better for boutique hospitality and niche retail. We advise based on your 5-year capital plan.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* 17. CTA */}
                <section className="bg-muted p-24 rounded-[7rem] text-center space-y-16 shadow-inner italic border-4 border-black group relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h2 className="text-6xl md:text-8xl font-serif font-black italic tracking-tighter transition-all group-hover:tracking-normal group-hover:text-primary leading-tight">Secure Lombok</h2>
                    <p className="text-2xl text-muted-foreground max-w-3xl mx-auto italic font-black leading-relaxed opacity-60 group-hover:opacity-100 transition-all">Command your investment in Indonesia's fastest-growing frontier with the region's elite regulatory partner.</p>
                    <div className="pt-8">
                        <Button size="lg" className="rounded-full px-24 py-12 bg-black text-white hover:bg-primary transition-all text-3xl font-black font-serif italic shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] group-hover:shadow-primary/40" asChild>
                            <Link href="/contact">Speak to an Advisor</Link>
                        </Button>
                    </div>
                </section>

                {/* 18. INTERNAL LINKING */}
                <footer className="pt-24 border-t-8 border-muted text-[13px] text-muted-foreground flex flex-wrap gap-20 justify-center italic font-black uppercase tracking-[0.4em] mb-20">
                    <Link href="/pt-pma-setup-baling-bajo" className="hover:text-primary transition-all hover:scale-110">LABUAN BAJO</Link>
                    <Link href="/pt-pma-setup-surabaya" className="hover:text-primary transition-all hover:scale-110">SURABAYA</Link>
                    <Link href="/company-formation-jakarta" className="hover:text-primary transition-all hover:scale-110">JAKARTA</Link>
                    <Link href="/starting-business-bali-guide" className="text-primary font-black underline decoration-primary decoration-4 underline-offset-8">THE KNOWLEDGE HUB</Link>
                </footer>

                <div className="text-[11px] text-muted-foreground/30 text-center max-w-5xl mx-auto uppercase tracking-[0.5em] font-black leading-[2] pb-24 italic opacity-40 selection:bg-black selection:text-white">
                    Corporate Disclaimer: Investment in West Nusa Tenggara involves regional regulatory dynamics. Information provided is an advisory overview and must be verified against current KBLI risk profiles and BKPM mandates.
                </div>

            </main>
        </div>
    );
}
