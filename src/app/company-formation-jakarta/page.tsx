import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Building2, 
    Briefcase,
    ShieldCheck,
    Scale,
    Globe,
    MapPin,
    LineChart,
    FileCheck,
    CheckCircle2,
    ChevronRight,
    HelpCircle,
    Zap,
    Building
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
    title: "Company Formation Jakarta Indonesia | PT PMA Setup & Financial Hub",
    description: "Professional company formation and PT PMA setup in Jakarta. Navigate Indonesia's financial capital with expert advisory on BKPM compliance and corporate structure.",
    alternates: {
        canonical: "https://bali.enterprises/company-formation-jakarta",
    },
    openGraph: {
        title: "Company Formation Jakarta Indonesia | PT PMA Setup",
        description: "Establish your corporate presence in Jakarta. Comprehensive PT PMA registration and regulatory support in Indonesia's economic engine.",
        url: "https://bali.enterprises/company-formation-jakarta",
        siteName: "Bali Enterprises",
        type: "article",
    },
};

export default function CompanyFormationJakartaPage() {
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
                        <Building2 className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest italic">The National Economic Engine</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-tight text-balance">
                        Company Formation in <span className="text-muted-foreground italic text-nowrap">Jakarta</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary pl-8">
                        As the financial capital and administrative heart of Indonesia, Jakarta is the premier destination for regional headquarters, fintech startups, and large-scale industrial enterprises. Establishing a PT PMA here demands elite-level regulatory precision and direct alignment with central ministries.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8" asChild>
                            <Link href="/contact">Start Consultation</Link>
                        </Button>
                    </div>
                </header>

                <Separator />

                {/* 2. INTRODUCTION TO DOING BUSINESS IN JAKARTA */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif">The Jakarta Corporate Landscape</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Jakarta contributes nearly 18% of Indonesia's national GDP. It is home to the Indonesia Stock Exchange (IDX), the central bank (Bank Indonesia), and the headquarters of every major domestic and international corporation operating in the archipelago.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <LineChart className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Financial & Tech Hub</span>
                                    <span className="text-sm text-muted-foreground">The epicenter of Indonesia's $40B+ digital economy and financial service sector.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Building className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Centralized Administration</span>
                                    <span className="text-sm text-muted-foreground">Immediate access to the Investment Coordinating Board (BKPM) and Ministry of Law and Human Rights.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-muted/30 p-8 rounded-3xl border border-border">
                        <h3 className="text-xl font-bold mb-4 italic underline decoration-primary underline-offset-4">The Jakarta Premium</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                            Unlike regional hubs, Jakarta requires a deeper commitment to corporate governance and institutional scaling.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> SCBD & Mega Kuningan Access
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> OJK/Bank Indonesia Regulatory Synergy
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> Elite Tier-1 Logistics Infrastructure
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT IS A PT PMA */}
                <section className="max-w-3xl mx-auto space-y-6 text-center">
                    <h2 className="text-3xl font-serif italic text-primary">The Foreign Investment (PT PMA) Vehicle</h2>
                    <p className="text-muted-foreground leading-relaxed italic">
                        The **PT PMA (Perseroan Terbatas Penanaman Modal Asing)** is the essential legal structure for any foreign entity or individual wishing to conduct business in Jakarta. It offers the most robust legal protection for your global capital and intellectual property.
                    </p>
                    <AdvisoryInsight title="National Strategy">
                        In Jakarta, your PT PMA is not just a business; it is a signal of intent to the regional market. Correct structural setup from day one is non-negotiable for future funding rounds or government tenders.
                    </AdvisoryInsight>
                </section>

                {/* 4. WHY SET UP IN JAKARTA */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-serif text-center">Unparalleled Strategic Positioning</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4 bg-muted/5">
                            <Zap className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold italic">Unmatched Velocity</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Jakarta-based companies benefit from the fastest decision-making loops with national regulators and financial institutions.
                            </p>
                        </div>
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4 bg-muted/5">
                            <Briefcase className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold italic">Human Capital Density</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Access the highest concentration of bilingual, globally-trained professionals and specialized tech talent in Southeast Asia.
                            </p>
                        </div>
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4 bg-muted/5">
                            <Globe className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold italic">Capital Market Ready</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                The proximity to major VC firms, private equity, and the IDX makes Jakarta the natural choice for high-growth ventures.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. LEGAL REQUIREMENTS */}
                <section className="space-y-8 bg-black text-white p-12 rounded-[3rem]">
                    <h2 className="text-3xl font-serif italic">Jakarta Compliance Framework</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-primary italic underline decoration-white underline-offset-8">Statutory Governance</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span>**Ownership:** Minimum 2 shareholders. Can be 100% foreign in most sectors.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span>**Executive Board:** Minimum 1 Director and 1 Commissioner.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-6 border-l border-white/20 pl-12 bg-white/5 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold text-primary italic">DKI Jakarta Domicile</h3>
                            <p className="text-sm text-gray-400 leading-relaxed italic">
                                Virtual offices are permitted in Jakarta for many service-based KBLIs, but certain financial and manpower-heavy sectors require physical space in "Business Zones" like Sudirman or Thamrin.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. CAPITAL REQUIREMENTS */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-serif">Minimum Capital & Investment Commitment</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The minimum investment plan for a PT PMA in Jakarta is **IDR 10 billion** (excluding land and buildings). This is a mandatory requirement by BKPM to ensure only "serious" international players enter the market.
                    </p>
                    <RiskNote title="Capital Phasing in the Capital" variant="warning">
                        For specific sectors like Fintech or Insurance, the minimum paid-up capital may be significantly higher than the standard 25%. We advise a deep audit of your specific KBLI codes before formalizing your deed.
                        <p className="mt-2 text-xs font-bold uppercase tracking-widest italic text-primary">Vigorous compliance is expected in Jakarta.</p>
                    </RiskNote>
                </section>

                {/* 7. STEP-BY-STEP PROCESS */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-serif">The Jakarta Setup Roadmap</h2>
                    <div className="relative space-y-10 pl-10 border-l-2 border-primary/30">
                        {[
                            { step: "Alpha", title: "Strategic Structuring", desc: "Selecting the correct KBLI codes for Jakarta's specific zoning." },
                            { step: "Beta", title: "Institutional Setup", desc: "Corporate name reservation and Notarial Deed signing." },
                            { step: "Gamma", title: "Central Legalization", desc: "MoLHR approval and NPWP (Tax ID) issuance from Central Tax Office." },
                            { step: "Delta", title: "Operational Licensing", desc: "NIB and sector-specific licenses via OSS-RBA." }
                        ].map((item, i) => (
                            <div key={i} className="relative group">
                                <span className="absolute -left-[54px] top-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-black uppercase tracking-widest border-4 border-background transition-transform group-hover:scale-110">{item.step}</span>
                                <div className="space-y-1">
                                    <h4 className="text-xl font-bold italic tracking-tight">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm max-w-xl">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 8. TIMELINE */}
                <section className="space-y-6 bg-muted/20 p-10 rounded-3xl border border-dashed border-primary/20">
                    <h2 className="text-3xl font-serif italic text-primary">Indicative Launch Timeline</h2>
                    <p className="text-muted-foreground leading-relaxed italic">
                        A clean PT PMA setup in Jakarta typically spans **3 to 5 weeks**. This assumes no delays in national BKPM review or secondary ministry licensing requirements.
                    </p>
                </section>

                {/* 9. COST STRUCTURE */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-serif">Professional Advisory Components</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-6 border rounded-xl flex items-center justify-between group hover:bg-primary/5 transition-colors">
                            <span className="font-bold text-sm tracking-tight uppercase italic opacity-70 group-hover:opacity-100">National Registration Bureau</span>
                            <span className="text-xs font-black text-primary">COMPONENT 01</span>
                        </div>
                        <div className="p-6 border rounded-xl flex items-center justify-between group hover:bg-primary/5 transition-colors">
                            <span className="font-bold text-sm tracking-tight uppercase italic opacity-70 group-hover:opacity-100">Regulatory Tax Coordination</span>
                            <span className="text-xs font-black text-primary">COMPONENT 02</span>
                        </div>
                    </div>
                </section>

                {/* 10. TAX & COMPLIANCE */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-serif">Corporate Compliance in the Capital</h2>
                    <p className="text-muted-foreground">
                        Jakarta companies are subject to rigorous monthly tax reporting and quarterly **LKPM** (Investment Activity Report) submissions. Failure to maintain these filings can result in the immediate suspension of your business license.
                    </p>
                </section>

                {/* 11. INVESTOR KITAS */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-serif italic underline decoration-primary decoration-4 underline-offset-8">Executive Mobility: Investor KITAS</h2>
                    <p className="text-muted-foreground leading-relaxed italic border-l-4 border-muted pl-6">
                        Establish your residency in the capital. The PT PMA framework allows for the sponsorship of a 2-Year Investor KITAS, providing full working rights and multi-entry privileges into Indonesia.
                    </p>
                </section>

                {/* 12. COMMON MISTAKES */}
                <section className="space-y-8 p-12 bg-primary text-primary-foreground rounded-[2rem] shadow-2xl">
                    <h2 className="text-3xl font-serif font-black italic tracking-tighter">Strategic Pitfalls to Avoid</h2>
                    <div className="grid md:grid-cols-2 gap-12 text-primary-foreground/90 italic">
                        <div className="space-y-2">
                            <h4 className="font-black text-xl tracking-tight italic">01. Virtual Office Misalignment</h4>
                            <p className="text-sm opacity-80 leading-relaxed">Selecting a virtual office in a residential zone (Zonasi Pemukiman) which is strictly forbidden for business licensing in Jakarta.</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-black text-xl tracking-tight italic">02. KBLI Overlap</h4>
                            <p className="text-sm opacity-80 leading-relaxed">Combining conflicting business activities (e.g., trading and manufacturing) in one entity without specialized advisory.</p>
                        </div>
                    </div>
                </section>

                {/* 13. WHY PROF CONSULTANT */}
                <section className="space-y-6 text-center">
                    <h2 className="text-3xl font-serif">Why Jakarta Demands Experts</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto italic border-y py-8 border-muted/30">
                        In a city where regulations are updated monthly, having an advisory partner with direct lines to the ministries ensures you stay ahead of compliance shifts and avoid costly operational downtime.
                    </p>
                </section>

                {/* 14. HOW WE SUPPORT */}
                <section className="space-y-10">
                    <h2 className="text-3xl font-serif text-center">Comprehensive Corporate Support</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Metropolitan Setup", desc: "End-to-end entity formation." },
                            { title: "OJK/Bank Liaison", desc: "Specialized fintech licensing." },
                            { title: "Residency Mgmt", desc: "Investor & Work KITAS." },
                            { title: "Tax Governance", desc: "Institutional tax filing." }
                        ].map((s, i) => (
                            <div key={i} className="p-8 border border-muted/50 rounded-[2rem] hover:bg-muted/5 transition-all text-center space-y-3">
                                <Scale className="h-6 w-6 text-primary mx-auto" />
                                <h5 className="font-bold italic tracking-tight">{s.title}</h5>
                                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 15. CASE EXAMPLE */}
                <section className="bg-muted p-12 rounded-[3rem] border-2 border-primary/10">
                    <h2 className="text-3xl font-serif mb-8 flex items-center gap-4 italic font-bold">
                        <Zap className="h-8 w-8 text-primary fill-primary" /> Case Study: Fintech Expansion
                    </h2>
                    <div className="space-y-6 text-muted-foreground leading-relaxed italic text-lg border-l-4 border-primary pl-10">
                        <p>A regional payment gateway from Singapore successfully established their National HQ in Jakarta's Mega Kuningan. By professionally navigating the dual requirements of BKPM and the Financial Services Authority (OJK), they secured their operational license and sponsored high-level executive KITAS for their global leadership team in under 8 weeks.</p>
                    </div>
                </section>

                {/* 16. FAQ */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-serif text-center italic font-bold">Jakarta Advisory FAQ</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto divide-y">
                        <AccordionItem value="1" className="border-none">
                            <AccordionTrigger className="text-lg font-bold italic">Can we use a virtual office for a PT PMA in Jakarta?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground italic leading-relaxed">Yes, for service-based industries in specific zonings. Manufacturing and construction usually require physical premises.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="2" className="border-none">
                            <AccordionTrigger className="text-lg font-bold italic">How does the IKN move affect Jakarta business?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground italic leading-relaxed">Jakarta remains the financial and commercial capital. Most corporate HQs will retain a significant presence here for the foreseeable future.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* 17. CTA */}
                <section className="bg-black text-white p-20 rounded-[4rem] text-center space-y-10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-[100px] transition-all group-hover:scale-110"></div>
                    <h2 className="text-4xl md:text-6xl font-serif italic font-bold tracking-tighter z-10 relative">Ready to Expand in the Capital?</h2>
                    <p className="text-xl opacity-70 max-w-2xl mx-auto z-10 relative italic">Secure your corporate future with Indonesia's leading regulatory advisors.</p>
                    <div className="z-10 relative">
                        <Button size="lg" className="rounded-full px-16 bg-white text-black hover:bg-primary hover:text-white transition-all text-xl font-bold font-serif italic py-8" asChild>
                            <Link href="/contact">Establish Your Presence</Link>
                        </Button>
                    </div>
                </section>

                {/* 18. INTERNAL LINKING */}
                <footer className="pt-20 border-t text-sm text-muted-foreground flex flex-wrap gap-12 justify-center italic font-bold tracking-tighter border-muted/30">
                    <Link href="/pt-pma-setup-surabaya" className="hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-4">PT PMA SURABAYA</Link>
                    <Link href="/pt-pma-setup-lombok" className="hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-4">PT PMA LOMBOK</Link>
                    <Link href="/pt-pma-setup-bandung" className="hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-4">PT PMA BANDUNG</Link>
                    <Link href="/starting-business-bali-guide" className="hover:text-primary transition-colors underline decoration-primary decoration-2 underline-offset-4 text-primary">BUSINESS KNOWLEDGE HUB</Link>
                </footer>

                <div className="text-[10px] text-muted-foreground/60 text-center max-w-3xl mx-auto uppercase tracking-[0.2em] font-black leading-tight pb-12 italic opacity-50">
                    Informational purposes only. Jakarta provincial regulations and ministry policies are subject to rapid legislative change.
                </div>

            </main>
        </div>
    );
}
