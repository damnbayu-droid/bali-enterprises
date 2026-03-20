import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Building2, 
    Anchor, 
    Factory, 
    LineChart, 
    ShieldCheck, 
    Scale, 
    FileCheck,
    Truck,
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
import { 
    Accordion, 
    AccordionContent, 
    AccordionItem, 
    AccordionTrigger 
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "PT PMA Setup in Surabaya Indonesia | Foreign Company Registration",
    description: "Professional PT PMA setup services in Surabaya. Navigate foreign investment, company registration, and compliance in East Java's industrial and maritime hub.",
    alternates: {
        canonical: "https://bali.enterprises/pt-pma-setup-surabaya",
    },
    openGraph: {
        title: "PT PMA Setup in Surabaya Indonesia | Foreign Company Registration",
        description: "Professional PT PMA setup services in Surabaya. Navigate foreign investment and company registration in East Java.",
        url: "https://bali.enterprises/pt-pma-setup-surabaya",
        siteName: "Bali Enterprises",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "PT PMA Setup in Surabaya | Bali Enterprises Advisory",
        description: "Foreign company registration in East Java's industrial capital.",
    }
};

export default function PTPMASetupSurabayaPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12">
            {/* Navigation Back */}
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
                        <Anchor className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest italic">Maritime & Industrial Gate</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-tight">
                        PT PMA Setup in <span className="text-muted-foreground italic">Surabaya</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl border-l-4 border-primary pl-8">
                        Surabaya serves as the commercial heartbeat of East Java. Establishing a PT PMA here provides direct access to Indonesia's second-largest economy, robust infrastructure, and the most advanced maritime logistics network in the archipelago.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button size="lg" className="rounded-full px-8" asChild>
                            <Link href="#process">Start Consultation</Link>
                        </Button>
                    </div>
                </header>

                <Separator />

                {/* 2. INTRODUCTION TO DOING BUSINESS IN SURABAYA */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif">The Economic Profile of Surabaya</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Known as the "City of Heroes," Surabaya has evolved into a sophisticated industrial powerhouse. Unlike the tourism-centric economy of Bali, Surabaya's GDP is driven by manufacturing, heavy industry, and inter-island trade. It is the primary jumping-off point for commerce heading to Eastern Indonesia.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <Factory className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Manufacturing Corridor</span>
                                    <span className="text-sm text-muted-foreground">The Gresik-Surabaya-Sidoarjo industrial belt is the largest in the region.</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <Truck className="h-5 w-5 text-primary shrink-0" />
                                <div>
                                    <span className="font-bold block">Maritime Logistics</span>
                                    <span className="text-sm text-muted-foreground">Tanjung Perak Port handles over 50% of East Java's non-oil and gas exports.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-muted/30 p-8 rounded-3xl border border-border">
                        <h3 className="text-xl font-bold mb-4">Why Foreigners Choose Surabaya</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            Investors seeking a stable industrial environment with established supply chains choose Surabaya to leverage its lower operational costs compared to Jakarta, while maintaining high-tier infrastructure connectivity.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> Advanced Power & Water Utilities
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> Skilled Engineering Labor Pool
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-2 bg-background rounded-lg border">
                                <CheckCircle2 className="h-4 w-4 text-green-600" /> Strategic Proximity to Australia & ASEAN
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. WHAT IS A PT PMA */}
                <section className="max-w-3xl mx-auto space-y-6 text-center">
                    <h2 className="text-3xl font-serif">Defining the PT PMA Framework</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        A **Perseroan Terbatas Penanaman Modal Asing (PT PMA)** is the legal vehicle required for foreign individuals or entities to operate a business in Indonesia. It allows for 100% foreign ownership in most sectors under the current Liberalized Investment List, providing full legal control and protection.
                    </p>
                    <AdvisoryInsight title="Regulatory Nature">
                        The PT PMA is governed by the Investment Law and the Company Law. Its structure must align with the specific requirements of the OSS-RBA (Risk-Based Approach) system, which categorizes businesses based on their operational risk profile.
                    </AdvisoryInsight>
                </section>

                {/* 4. WHY SET UP IN SURABAYA */}
                <section className="space-y-12">
                    <h2 className="text-3xl font-serif text-center">The Surabaya Advantage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4">
                            <Globe className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold">Market Accessibility</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Access a regional market of over 40 million people in East Java alone, with the infrastructure to ship throughout the entire Indonesian archipelago.
                            </p>
                        </div>
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4">
                            <LineChart className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold">Industrial Synergy</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Establish your operations near key Special Economic Zones (SEZs) like Gresik JIIPE, offering fiscal incentives and simplified licensing.
                            </p>
                        </div>
                        <div className="p-8 border rounded-2xl hover:shadow-lg transition-all space-y-4">
                            <Building2 className="h-8 w-8 text-primary" />
                            <h3 className="text-xl font-bold">Efficient Logistics</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                World-class port facilities and an extensive toll road network connecting Surabaya to Jakarta and Central Java in record time.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. LEGAL REQUIREMENTS */}
                <section className="space-y-8 bg-muted/20 p-10 rounded-3xl border">
                    <h2 className="text-3xl font-serif">Legal Requirements for Registration</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">Structural Minimums</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span>**Shareholders:** Minimum of two (can be individuals or corporate entities).</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span>**Board of Directors:** At least one Director (can be a foreigner).</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    <span>**Board of Commissioners:** At least one Commissioner (oversees management).</span>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold">KBLI Classification</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Your business activities must be mapped to the **Klasifikasi Baku Lapangan Usaha Indonesia (KBLI)**. This code determines your foreign ownership limits and the specific licenses required for East Java provincial compliance.
                            </p>
                            <p className="text-xs text-muted-foreground italic bg-background p-3 rounded border">
                                Note: Selecting the wrong KBLI can lead to rejection at the OSS registration stage or unexpected restrictions on business operations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. CAPITAL REQUIREMENTS */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-serif">Capital Requirements & Compliance</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        In accordance with BKPM (Investment Coordinating Board) standards, the current minimum investment plan for a PT PMA is **IDR 10 billion** (excluding land and buildings). This is a standard framework intended to ensure that foreign investments contribute meaningfully to the national economy.
                    </p>
                    <RiskNote title="Capital Phasing" variant="warning">
                        The IDR 10 billion is an investment commitment. The requirement for **Paid-up Capital** is typically 25% of the total investment (approx IDR 2.5 billion), which must be documented via a capital statement or bank transfer once the corporate account is active.
                        <p className="mt-2 text-xs font-bold uppercase tracking-tight">Disclaimer: These figures are subject to current Indonesian regulations and may vary based on specific business sectors.</p>
                    </RiskNote>
                </section>

                {/* 7. STEP-BY-STEP PROCESS */}
                <section id="process" className="space-y-12">
                    <h2 className="text-3xl font-serif">Technical Workflow: From Notary to NIB</h2>
                    <div className="relative space-y-8 pl-8 border-l-2 border-primary/20">
                        {[
                            { step: "01", title: "Name Reservation", desc: "Selection and reservation of a unique Indonesian company name (must consist of 3 words)." },
                            { step: "02", title: "Deed of Establishment", desc: "Preparation of the Articles of Association signed before a licensed Notary in Indonesia." },
                            { step: "03", title: "Ministry Approval", desc: "The Deed is submitted to the Ministry of Law and Human Rights (MoLHR) for formal legalization." },
                            { step: "04", title: "Tax ID (NPWP)", desc: "Obtaining the Corporate Tax Identification Number from the Surabaya tax office." },
                            { step: "05", title: "OSS-RBA Registration", desc: "Registration on the Online Single Submission system to obtain the NIB (Business ID Number)." },
                            { step: "06", title: "Operational Licensing", desc: "Fulfillment of sector-specific requirements based on Southeast Java regional regulations." }
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <span className="absolute -left-[45px] top-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                                    {item.step}
                                </span>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 8. TIMELINE (NON-GUARANTEED) */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-serif">Estimated Timeline</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        The standard setup for a PT PMA in Surabaya typically ranges from **4 to 8 weeks**. However, please note that these timelines are strictly indicative. The actual duration is subject to government processing times, the complexity of your KBLI codes, and the speed of document verification.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 border rounded-xl bg-muted/10">
                            <span className="block text-xl font-bold">1-2 Weeks</span>
                            <span className="text-xs uppercase text-muted-foreground tracking-widest">Legalization</span>
                        </div>
                        <div className="p-4 border rounded-xl bg-muted/10">
                            <span className="block text-xl font-bold">1 Week</span>
                            <span className="text-xs uppercase text-muted-foreground tracking-widest">Tax ID</span>
                        </div>
                        <div className="p-4 border rounded-xl bg-muted/10">
                            <span className="block text-xl font-bold">2-4 Weeks</span>
                            <span className="text-xs uppercase text-muted-foreground tracking-widest">OSS Licensing</span>
                        </div>
                        <div className="p-4 border rounded-xl bg-muted/10">
                            <span className="block text-xl font-bold">Variable</span>
                            <span className="text-xs uppercase text-muted-foreground tracking-widest">Sector Permits</span>
                        </div>
                    </div>
                </section>

                {/* 9. COST STRUCTURE (GENERAL) */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-serif">Corporate Formation Cost Components</h2>
                    <p className="text-muted-foreground">
                        Total investment for setup depends on the tier of service and the specific licensing required. Direct government fees are standardized, but advisory and legal drafting costs may vary.
                    </p>
                    <div className="max-w-2xl border rounded-2xl divide-y">
                        <div className="p-4 flex justify-between items-center bg-muted/20">
                            <span className="font-medium">Notary & Legal Deed Drafting</span>
                            <span className="text-sm text-primary font-bold">Component 01</span>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <span className="font-medium">Ministry Of Law Filing Fees</span>
                            <span className="text-sm text-primary font-bold">Component 02</span>
                        </div>
                        <div className="p-4 flex justify-between items-center bg-muted/20">
                            <span className="font-medium">Strategic Advisory & KBLI Mapping</span>
                            <span className="text-sm text-primary font-bold">Component 03</span>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <span className="font-medium">Virtual or Physical Office Setup (Surabaya)</span>
                            <span className="text-sm text-primary font-bold">Component 04</span>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground italic">Consult with our advisors for a detailed, itemized quote based on your specific business structure in East Java.</p>
                </section>

                {/* 10. TAX & COMPLIANCE OVERVIEW */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-serif">Post-Formation Compliance & Taxation</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Operating a PT PMA in East Java requires strict adherence to Indonesian tax laws. Compliance failure can lead to significant penalties, visa revocation, or company operational suspension.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 border rounded-2xl space-y-3">
                            <h4 className="font-bold border-l-4 border-primary pl-4">Reporting Obligations</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Companies must submit **LKPM (Investment Activity Reports)** quarterly via the OSS system. This is a primary requirement for maintaining your business license.
                            </p>
                        </div>
                        <div className="p-6 border rounded-2xl space-y-3">
                            <h4 className="font-bold border-l-4 border-primary pl-4">Corporate Taxation</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                The standard corporate income tax rate is 22%, though small and medium enterprises may qualify for discounted rates depending on annual turnover.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 11. INVESTOR KITAS CONNECTION */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-serif">The Path to Residency: Investor KITAS</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        A core benefit of establishing a PT PMA is the ability to sponsor an **Investor KITAS (index E23 or E28)**. This residency permit allows foreign directors and shareholders to live and manage their business in Surabaya legally.
                    </p>
                    <AdvisoryInsight title="Residency Caveat">
                        Ownership of the PT PMA does not guarantee KITAS approval. The applicant must meet specific shareholding thresholds (typically min. IDR 1 billion in shares) and the company must be in good regulatory standing.
                    </AdvisoryInsight>
                </section>

                {/* 12. COMMON MISTAKES TO AVOID */}
                <section className="space-y-8 bg-black text-white p-12 rounded-[2rem]">
                    <h2 className="text-3xl font-serif tracking-tight">Critical Errors in Surabaya Market Entry</h2>
                    <div className="grid md:grid-cols-3 gap-8 pt-4">
                        <div className="space-y-3">
                            <span className="text-primary font-bold">01</span>
                            <h4 className="font-bold text-lg">Inaccurate KBLI Selection</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Selecting a code that doesn't perfectly match your day-to-day operations can block essential operational permits later.</p>
                        </div>
                        <div className="space-y-3">
                            <span className="text-primary font-bold">02</span>
                            <h4 className="font-bold text-lg">Zoning Non-Compliance</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Unlike Bali residential zones, Surabaya's industrial zoning is strictly enforced. Confirming your specific office location is vital.</p>
                        </div>
                        <div className="space-y-3">
                            <span className="text-primary font-bold">03</span>
                            <h4 className="font-bold text-lg">Weak Nominee Structures</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">Using informal "Nominee" arrangements to bypass capital hurdles is high-risk and legally unenforceable in Indonesian courts.</p>
                        </div>
                    </div>
                </section>

                {/* 13. WHY WORK WITH A PROFESSIONAL CONSULTANT */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-serif">The Value of Professional Advisory</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Surabaya's business environment is deeply bureaucratic. A professional consultant acts as your navigator through the "Red Tape," ensuring every document is drafted to current national and provincial standards. This reduces the risk of rejection, prevents asset freeze-ups, and guarantees that your entry strategy is built on a foundation of absolute compliance.
                    </p>
                </section>

                {/* 14. HOW WE SUPPORT YOUR SETUP */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-serif">End-to-End Formation Support</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex gap-4 p-4 items-start">
                            <Scale className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold">Structural Advisory</h4>
                                <p className="text-sm text-muted-foreground">Defining shareholding, KBLI, and governance models.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 items-start">
                            <FileCheck className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold">Notarial Coordination</h4>
                                <p className="text-sm text-muted-foreground">Managing all notarized deeds and Ministry filings.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 items-start">
                            <Briefcase className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold">Licensing & OSS</h4>
                                <p className="text-sm text-muted-foreground">Navigating the OSS portal for NIB and operational permits.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 items-start">
                            <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold">Ongoing Compliance</h4>
                                <p className="text-sm text-muted-foreground">Monthly tax reporting and quarterly LKPM submissions.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 15. CASE EXAMPLE (FICTIONAL) */}
                <section className="bg-muted p-10 rounded-2xl border">
                    <h2 className="text-2xl font-serif mb-6 flex items-center gap-3">
                        <ChevronRight className="h-6 w-6 text-primary" /> Case Study: Maritime Logistics Setup
                    </h2>
                    <div className="space-y-4">
                        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest leading-none">Scenario:</p>
                        <p className="text-muted-foreground leading-relaxed italic">
                            A Singaporean logistics firm sought to establish a warehousing and distribution hub near Tanjung Perak Port. Their objective was to use Surabaya as a transshipment point for automotive parts heading to Kalimantan.
                        </p>
                        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest leading-none">Outcome:</p>
                        <p className="text-muted-foreground leading-relaxed italic">
                            Through precise KBLI mapping (Warehouse & Logistics categories), the firm secured 100% foreign ownership. By establishing the PT PMA, they obtained a 2-year Investor KITAS for their operations director and successfully navigated the regional logistics permits required for East Java trucking operations.
                        </p>
                    </div>
                </section>

                {/* 16. FAQ SECTION */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-serif text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-left">Can foreigners fully own a PT PMA in Surabaya?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                Yes, under the current "Positive Investment List" (DNI), most business sectors in Surabaya are open to 100% foreign ownership. Some specific sectors like retail or small-scale transport may still have restrictions.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-left">Do I need a physical office address in Surabaya?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                Yes. To obtain your NIB and operational permits, the PT PMA must have a valid domicile. While virtual offices are sometimes permitted for administrative services, manufacturing and trading companies often require a physical facility within a designated industrial zone.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-left">Is the IDR 10 billion capital requirement a cash deposit?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                No. The IDR 10 billion is an Investment Plan (assets, equipment, machinery, and working capital). You are required to manifest a "Paid-up Capital" of roughly IDR 2.5 billion, which can be evidenced through a capital statement.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="text-left">Can I live in Surabaya with a PT PMA?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                Establishing a PT PMA allows for the sponsorship of an Investor KITAS. If you hold a Director or Commissioner role and meet shareholding requirements, you can obtain residency to live and manage your assets in Surabaya.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="text-left">How do I start the process?</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                The process starts with a structural consultation to define your KBLI codes and shareholding. Once these are set, name reservation and deed drafting can begin immediately.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* 17. CALL TO ACTION */}
                <section className="bg-primary text-primary-foreground p-16 rounded-[3rem] text-center space-y-8 overflow-hidden relative">
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-serif">Secure Your Surabaya Asset Today</h2>
                        <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                            Navigate the nuances of East Java's business landscape with an advisory team that prioritizes compliance-first execution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="rounded-full px-12" asChild>
                                <Link href="/contact">Request Detailed Quote</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 18. INTERNAL LINKING */}
                <footer className="pt-12 border-t text-sm text-muted-foreground flex flex-wrap gap-x-8 gap-y-4 justify-center">
                    <Link href="/starting-business-bali-guide" className="hover:text-primary transition-colors underline decoration-primary/30">PT PMA Indonesia Main Page</Link>
                    <Link href="/company-formation-bali" className="hover:text-primary transition-colors underline decoration-primary/30">Company Formation Bali</Link>
                    <Link href="/company-formation-jakarta" className="hover:text-primary transition-colors underline decoration-primary/30">Company Formation Jakarta</Link>
                    <Link href="/bali-business-environment" className="hover:text-primary transition-colors underline decoration-primary/30">Business Environment Guide</Link>
                </footer>

                {/* COMPLIANCE DISCLAIMER */}
                <div className="text-[10px] text-muted-foreground/60 text-center max-w-3xl mx-auto uppercase tracking-tighter leading-tight pb-12">
                    Informational purposes only. Regulations in Indonesia are subject to frequent changes. This landing page does not constitute absolute legal advice. Structure finalization depends on specific official requirements and current BKPM/OSS guidelines.
                </div>

            </main>
        </div>
    );
}
