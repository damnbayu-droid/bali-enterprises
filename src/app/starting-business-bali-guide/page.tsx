import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    ChevronRight, 
    TrendingUp, 
    Users, 
    Globe, 
    FileText, 
    ShieldCheck, 
    Banknote, 
    Building2, 
    MapPin, 
    Scale, 
    ClipboardCheck,
    Download,
    Twitter,
    Linkedin,
    MessageCircle,
    Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DownloadGuideButton } from "@/components/ui/download-guide-button";

// Charts
import { ZoningMatrix } from "@/components/charts/zoning-matrix";
import { CapitalPhasingCurve } from "@/components/charts/capital-phasing-curve";
import { VisaCriticalPath } from "@/components/charts/visa-critical-path";
import { ProgressionModelFlow } from "@/components/charts/progression-model-flow";
import { ComplianceCalendar } from "@/components/charts/compliance-calendar";

export const metadata: Metadata = {
    title: "The Complete Guide to Starting a Business in Bali & Indonesia | Bali Enterprises",
    description: "A comprehensive overview of legal, regulatory, financial, and strategic aspects of starting and operating a business in Bali and Indonesia for foreign founders.",
    alternates: {
        canonical: "https://bali.enterprises/starting-business-bali-guide",
    },
    openGraph: {
        title: "The Ultimate Guide to Starting a Business in Bali & Indonesia",
        description: "Everything foreign founders need to know about PT PMA setup, investment rules, and operational compliance in Bali.",
        url: "https://bali.enterprises/starting-business-bali-guide",
        siteName: "Bali Enterprises",
        type: "article",
        images: ["/image/og-image.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Starting a Business in Bali: The Complete Guide",
        description: "The technical and strategic roadmap for foreign investment in Indonesia.",
        images: ["/image/og-image.webp"],
    }
};

const navItems = [
    { title: "Why Bali Is Becoming a Global Business Hub", id: "investment-overview" },
    { title: "Startup Ecosystem in Bali", id: "startup-ecosystem" },
    { title: "Can Foreigners Start a Business in Bali", id: "can-foreigners-start" },
    { title: "PT PMA Explained", id: "pma-structure" },
    { title: "Foreign Ownership Rules", id: "ownership-rules" },
    { title: "Step-by-Step Company Registration", id: "company-registration" },
    { title: "Investment Capital Requirements", id: "capital-requirements" },
    { title: "PT PMA Cost Comparison", id: "cost-comparison" },
    { title: "Business Zoning in Bali", id: "business-zoning" },
    { title: "Corporate Banking", id: "corporate-banking" },
    { title: "Investor Visa and KITAS", id: "visa-options" },
    { title: "Taxation System", id: "taxation" },
    { title: "Villa Rental Business Legality", id: "villa-legality" },
    { title: "Nominee Structures and Legal Risks", id: "nominee-risks" },
    { title: "Business Costs in Bali", id: "business-costs" },
    { title: "Compliance and Reporting", id: "compliance-reporting" },
    { title: "Southeast Asia Business Comparison", id: "sea-comparison" },
    { title: "Market Entry Strategy", id: "entry-strategy" }
];

export default function StartupGuidePage() {
    // SEO Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "The Complete Guide to Starting a Business in Bali & Indonesia",
        "description": "A comprehensive overview of legal, regulatory, financial, and strategic aspects of starting and operating a business in Bali and Indonesia for foreign founders.",
        "author": {
            "@type": "Organization",
            "name": "Bali Enterprises"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Bali Enterprises",
            "logo": {
                "@type": "ImageObject",
                "url": "https://bali.enterprises/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://bali.enterprises/starting-business-bali-guide"
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can foreigners own a business in Bali?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, foreigners can own a business in Bali through a PT PMA (Foreign Investment Company), which allows up to 100% ownership in many sectors."
                }
            },
            {
                "@type": "Question",
                "name": "What is the minimum capital for a PT PMA in Indonesia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The minimum investment capital requirement for a PT PMA is IDR 10 Billion per business classification, with a paid-up capital of at least IDR 2.5 Billion."
                }
            }
        ]
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            {/* Header / Back Link */}
            <div className="w-full max-w-5xl px-6 mb-8">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Corporate Portal
                </Link>
            </div>

            {/* Hero Section */}
            <header className="w-full max-w-5xl px-6 mb-16">
                <div className="space-y-6 max-w-4xl">
                    <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px] font-bold">
                        Master Advisory Series
                    </Badge>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-[1.05]">
                        The Complete Guide to Starting a Business in <span className="text-muted-foreground italic">Bali & Indonesia</span>
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8 pt-6">
                        <div className="flex-1 space-y-4">
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                                Bali has evolved into one of the most dynamic locations in Southeast Asia for international entrepreneurs, investors, and global startups.
                            </p>
                            <p className="text-lg text-muted-foreground/80 leading-relaxed">
                                This guide provides a comprehensive overview of the legal, regulatory, financial, and strategic aspects of starting and operating a business in Bali and Indonesia.
                            </p>
                        </div>
                        <div className="md:w-1/3 p-6 rounded-xl bg-muted/30 border border-border/50">
                            <h4 className="font-serif text-lg mb-4 text-foreground/80">Key Coverage</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Company structures</li>
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Investor Visas (KITAS)</li>
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Zoning & Property Laws</li>
                                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> Taxation & Compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/* Quick Navigation Sticky Bar */}
            <div className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-y border-border print:hidden">
                <div className="max-w-5xl mx-auto px-6 h-14 flex items-center overflow-x-auto no-scrollbar gap-8">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary shrink-0">Quick Navigation</span>
                    <nav className="flex gap-6 whitespace-nowrap">
                        <a href="#investment-overview" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Overview</a>
                        <a href="#pma-structure" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">PMA Structure</a>
                        <a href="#company-registration" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Registration</a>
                        <a href="#taxation" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Taxation</a>
                        <a href="#business-zoning" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Zoning</a>
                        <a href="#visa-options" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">Visas</a>
                        <a href="#full-nav" className="text-xs font-bold text-primary">All Sections...</a>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className="w-full max-w-5xl px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-24">
                        
                        {/* Section 1: Why Bali */}
                        <section id="investment-overview" className="scroll-mt-24">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-primary mb-2">
                                    <TrendingUp className="h-6 w-6" />
                                    <span className="text-sm font-bold uppercase tracking-widest">01. Market Context</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif">Why Bali Is Becoming a Global Business Hub</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Over the past decade, Bali has transformed into a global hub attracting entrepreneurs, investors, and digital founders. Several factors drive this transformation:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { title: "Strategic Location", desc: "Gateway to Southeast Asia's digital economy." },
                                        { title: "Massive Market", desc: "Access to Indonesia's 270+ million population." },
                                        { title: "Operational Efficiency", desc: "Lower operating costs compared with Singapore or HK." },
                                        { title: "Lifestyle Draw", desc: "Unmatched international lifestyle appeal for talent." }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 rounded-lg bg-muted/30 border border-border/40">
                                            <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <AdvisoryInsight title="Internal Briefing">
                                    Bali today hosts founders from Australia, Europe, United States, Singapore, and the Middle East. Many companies operate global remote businesses from Bali.
                                </AdvisoryInsight>
                                <div className="pt-4">
                                    <Button variant="link" className="px-0 text-primary" asChild>
                                        <Link href="/why-invest-in-bali">Explore our Investment Outlook →</Link>
                                    </Button>
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Section 2: Startup Ecosystem */}
                        <section id="startup-ecosystem" className="scroll-mt-24">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-primary mb-2">
                                    <Users className="h-6 w-6" />
                                    <span className="text-sm font-bold uppercase tracking-widest">02. Local Network</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif">The Startup Ecosystem in Bali</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Bali's startup ecosystem has expanded significantly since 2018. The island now hosts a large network of founders, incubators, coworking spaces, and global tech entrepreneurs.
                                </p>
                                
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                                    <div className="space-y-3">
                                        <h4 className="font-serif text-lg font-bold border-b border-primary/20 pb-2">Canggu</h4>
                                        <p className="text-sm text-muted-foreground font-medium italic">"Silicon Valley of Bali"</p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">Hub for SaaS, Web3, and digital agencies. Home to BWork and Dojo Bali.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-serif text-lg font-bold border-b border-primary/20 pb-2">Ubud</h4>
                                        <p className="text-sm text-muted-foreground font-medium italic">Cultural & Wellness Hub</p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">Popular with wellness entrepreneurs, creative founders, and educators.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-serif text-lg font-bold border-b border-primary/20 pb-2">Seminyak</h4>
                                        <p className="text-sm text-muted-foreground font-medium italic">Lifestyle & Luxury</p>
                                        <p className="text-xs text-muted-foreground leading-relaxed">Focus on hospitality startups, lifestyle brands, and luxury services.</p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button variant="link" className="px-0 text-primary" asChild>
                                        <Link href="/startup-ecosystem-bali">Deep Dive into Bali Ecosystem →</Link>
                                    </Button>
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Section 3 & 4: Legal & Ownership */}
                        <section id="can-foreigners-start" className="scroll-mt-24">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <Globe className="h-6 w-6" />
                                        <span className="text-sm font-bold uppercase tracking-widest">03 & 04. Legal Framework</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif">Can Foreigners Start a Business in Bali?</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Yes. Foreigners can legally operate businesses in Indonesia through a <span className="text-foreground font-semibold">PT PMA (Foreign Investment Company)</span>.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <h4 className="font-bold flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> PT PMA Capabilities</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li>• 100% Foreign ownership in most sectors</li>
                                                <li>• Ability to sponsor Investor KITAS</li>
                                                <li>• Direct employment of local/foreign staff</li>
                                                <li>• Corporate banking privileges</li>
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="font-bold flex items-center gap-2"><Scale className="h-4 w-4 text-primary" /> Ownership Limits</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Ownership is regulated under Presidential Regulation No.49/2021 (Positive Investment List).
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <Card id="ownership-rules" className="border-primary/10 bg-card/50">
                                    <CardHeader>
                                        <CardTitle className="font-serif text-xl">Foreign Ownership Allowances (KBLI Data)</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="relative overflow-x-auto rounded-lg border">
                                            <table className="w-full text-sm text-left">
                                                <thead className="bg-muted text-muted-foreground uppercase text-[10px] tracking-widest font-bold">
                                                    <tr>
                                                        <th className="px-6 py-4">Industry Sector</th>
                                                        <th className="px-6 py-4">Ownership Limit</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y">
                                                    <tr><td className="px-6 py-3 font-medium">IT & Software Services</td><td className="px-6 py-3 text-primary font-bold">100%</td></tr>
                                                    <tr><td className="px-6 py-3 font-medium">Digital Marketing & Creative</td><td className="px-6 py-3 text-primary font-bold">100%</td></tr>
                                                    <tr><td className="px-6 py-3 font-medium">Management Consulting</td><td className="px-6 py-3 text-primary font-bold">100%</td></tr>
                                                    <tr><td className="px-6 py-3 font-medium">Hotel & Hospitality</td><td className="px-6 py-3 text-primary font-bold">100%</td></tr>
                                                    <tr><td className="px-6 py-3 font-medium">Construction Services</td><td className="px-6 py-3">Up to 67%</td></tr>
                                                    <tr><td className="px-6 py-3 font-medium">Retail (General)</td><td className="px-6 py-3 text-amber-600">Restricted</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Section 5, 6 & 7: Structure & Capital */}
                        <section id="pma-structure" className="scroll-mt-24">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <Building2 className="h-6 w-6" />
                                        <span className="text-sm font-bold uppercase tracking-widest">05 - 07. Corporate Architecture</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif">Understanding PT PMA & Investment Logic</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        A PT PMA is a limited liability entity registered under Indonesian law. It requires a specific corporate structure and a minimum investment capital commitment.
                                    </p>
                                    
                                    <div className="bg-muted/30 border p-6 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="text-center md:text-left">
                                            <div className="text-xs font-bold text-primary uppercase mb-2">Min. Shareholders</div>
                                            <div className="text-3xl font-serif">02</div>
                                            <div className="text-xs text-muted-foreground mt-1">Individuals or Entities</div>
                                        </div>
                                        <div className="text-center md:text-left">
                                            <div className="text-xs font-bold text-primary uppercase mb-2">Min. Directors</div>
                                            <div className="text-3xl font-serif">01</div>
                                            <div className="text-xs text-muted-foreground mt-1">Responsible for ops</div>
                                        </div>
                                        <div className="text-center md:text-left">
                                            <div className="text-xs font-bold text-primary uppercase mb-2">Min. Commissioners</div>
                                            <div className="text-3xl font-serif">01</div>
                                            <div className="text-xs text-muted-foreground mt-1">Oversight role</div>
                                        </div>
                                    </div>
                                </div>

                                <div id="capital-requirements" className="space-y-6 pt-8">
                                    <h3 className="text-2xl font-serif">Minimum Investment Capital (10 Billion IDR)</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Indonesian law requires a minimum investment plan of <span className="text-foreground font-bold">IDR 10 Billion</span> per business classification. This is an investment commitment rather than an immediate upfront requirement for all sectors, but the paid-up capital typically sits at IDR 2.5 Billion.
                                    </p>
                                    
                                    <div className="w-full">
                                        <CapitalPhasingCurve />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Section 8 & 10: Costs & Banking */}
                        <section id="cost-comparison" className="scroll-mt-24">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <Banknote className="h-6 w-6" />
                                        <span className="text-sm font-bold uppercase tracking-widest">08 - 10. Financial Setup</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif">Setup Costs & Corporate Banking</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Professional services for company formation vary significantly. Investing in premium legal counsel ensures long-term compliance and risk mitigation.
                                    </p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {[
                                            { type: "Local Consultants", cost: "$4k – $6k", tag: "Budget" },
                                            { type: "Mid-tier Firms", cost: "$6k – $10k", tag: "Market Average" },
                                            { type: "International Legal", cost: "$10k – $20k", tag: "Global Standard" }
                                        ].map((item, i) => (
                                            <div key={i} className={`p-6 rounded-xl border ${i === 1 ? 'border-primary/40 bg-primary/5 shadow-md' : 'border-border bg-card'}`}>
                                                <Badge variant="outline" className="text-[9px] mb-3">{item.tag}</Badge>
                                                <h4 className="font-serif font-bold text-lg mb-1">{item.type}</h4>
                                                <p className="text-2xl font-serif text-primary">{item.cost}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div id="corporate-banking" className="space-y-6 pt-4">
                                    <h3 className="text-2xl font-serif">Corporate Bank Account Setup</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Directors must typically be present in Indonesia for the final signature. Required documents include the Company Deed, NIB (Business ID), and NPWP (Tax Number).
                                    </p>
                                    <AdvisoryInsight title="Banking Note">
                                        We recommend Permata, Mandiri, or BCA for corporate operations in Bali due to their robust online banking for foreign directors.
                                    </AdvisoryInsight>
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Section 9: Step-by-Step Registration */}
                        <section id="company-registration" className="scroll-mt-24">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-primary mb-2">
                                    <ClipboardCheck className="h-6 w-6" />
                                    <span className="text-sm font-bold uppercase tracking-widest">09. Execution Path</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif">Step-by-Step Company Registration</h2>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    The typical PT PMA setup takes 2–6 weeks, following a strict regulatory sequence.
                                </p>
                                
                                <div className="w-full">
                                    <ProgressionModelFlow />
                                </div>
                                
                                <AdvisoryInsight title="OSS RBA Warning">
                                    Indonesia now uses the Risk-Based Approach (OSS RBA). Ensure your KBLI codes are strictly verified before notarial deed submission.
                                </AdvisoryInsight>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Section 11: Visas */}
                        <section id="visa-options" className="scroll-mt-24">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <Users className="h-6 w-6" />
                                        <span className="text-sm font-bold uppercase tracking-widest">11. Immigration & Residency</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif">Investor Visa and KITAS</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Foreign shareholders often obtain residency through the <span className="text-foreground font-bold">Investor KITAS (Index E23/E28)</span>. This provides multiple entry privileges and residency for 1 or 2 years.
                                    </p>
                                </div>
                                <div className="w-full border rounded-xl p-8 bg-muted/10">
                                    <VisaCriticalPath />
                                </div>
                                <div className="pt-4 flex justify-center">
                                    <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
                                        <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer">Consult Visa Specialists</a>
                                    </Button>
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Section 12 & 16: Taxation & Risks */}
                        <section id="taxation" className="scroll-mt-24">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <Scale className="h-6 w-6" />
                                        <span className="text-sm font-bold uppercase tracking-widest">12. Fiscal Responsibility</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif">Taxation & Legal Risks</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Corporate tax compliance is non-negotiable in Indonesia.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="p-6 rounded-xl border bg-card">
                                            <div className="text-3xl font-serif text-primary mb-1">0.5%</div>
                                            <div className="text-sm font-bold uppercase tracking-widest text-foreground">SME/Startup Tax</div>
                                            <div className="text-[10px] text-muted-foreground mt-2 font-medium">For the First 3 Years (Revenue &lt; 4.8B IDR)</div>
                                        </div>
                                        <div className="p-6 rounded-xl border bg-card">
                                            <div className="text-3xl font-serif text-primary mb-1">22%</div>
                                            <div className="text-sm font-bold uppercase tracking-widest">Standard Corporate</div>
                                        </div>
                                        <div className="p-6 rounded-xl border bg-card">
                                            <div className="text-3xl font-serif text-primary mb-1">11%</div>
                                            <div className="text-sm font-bold uppercase tracking-widest">Standard VAT</div>
                                        </div>
                                    </div>
                                </div>

                                <div id="nominee-risks" className="space-y-6">
                                    <h3 className="text-2xl font-serif">The Risk of Nominee Structures</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Some investors attempt to bypass foreign ownership rules through nominee arrangements. This involves placing shares under an Indonesian individual.
                                    </p>
                                    <RiskNote variant="destructive" title="Legal Invalidity">
                                        Nominee structures are technically invalid under the Investment Law. Risks include loss of legal control, contract unenforceability, and severe regulatory penalties.
                                    </RiskNote>
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Section 13, 14 & 15: Zoning & Villas */}
                        <section id="business-zoning" className="scroll-mt-24">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <MapPin className="h-6 w-6" />
                                        <span className="text-sm font-bold uppercase tracking-widest">13 - 15. Operational Zoning</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif">Business Zoning & Villa Operations</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Operational legality is tied directly to land zoning. Bali uses color-coded zones (Green, Pink, Red) to determine permissible activity.
                                    </p>
                                </div>
                                
                                <div className="border rounded-xl overflow-hidden bg-card">
                                    <div className="p-6 border-b bg-muted/30">
                                        <h4 className="font-serif text-lg">Interactive Zoning Matrix</h4>
                                    </div>
                                    <div className="p-4">
                                        <ZoningMatrix />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-muted/20 border-t border-border/50">
                                        <a href="https://app.batara.badungkab.go.id/rtrw-map" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-lg bg-card border border-border/50 hover:border-primary/40 transition-all group">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-primary flex items-center gap-2">
                                                    RTRW Maps (Regional Spatial Plan)
                                                    <Globe className="h-3 w-3" />
                                                </span>
                                                <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Regional Spatial Plan for the Region</span>
                                            </div>
                                            <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                        </a>
                                        <a href="https://app.batara.badungkab.go.id/rdtr-map" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-lg bg-card border border-border/50 hover:border-primary/40 transition-all group">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-primary flex items-center gap-2">
                                                    RDTR Maps (Detailed Spatial Plan)
                                                    <Globe className="h-3 w-3" />
                                                </span>
                                                <span className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Detailed Spatial Plan for the Zone</span>
                                            </div>
                                            <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>

                                <div id="villa-legality" className="space-y-6 pt-4">
                                    <h3 className="text-2xl font-serif text-foreground/80">Villa Rental Business Legality</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        Short-term accommodation (AirBnB style) requires a Pondok Wisata or Tourism license. Operating outside permitted zones or without correct licensing can result in immediate closure and deportation of directors.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Section 17 & 18: Compliance & Strategy */}
                        <section id="compliance-reporting" className="scroll-mt-24">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <FileText className="h-6 w-6" />
                                        <span className="text-sm font-bold uppercase tracking-widest">17. Ongoing Governance</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif">Compliance and Market Entry</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        A PT PMA requires ongoing monthly and quarterly reporting (LKPM, Tax, Payroll).
                                    </p>
                                </div>
                                <div className="w-full">
                                    <ComplianceCalendar />
                                </div>
                                <div id="entry-strategy" className="space-y-6 pt-8">
                                    <h3 className="text-2xl font-serif">Successful Market Entry Strategy</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        {["Market Research", "Company Setup", "Initial Operations", "Strategic Expansion"].map((step, i) => (
                                            <div key={i} className="flex flex-col items-center text-center">
                                                <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">{i+1}</div>
                                                <span className="text-xs font-bold">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Section 19: Comparisons */}
                        <section id="sea-comparison" className="scroll-mt-24 pb-20">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-primary mb-2">
                                    <Globe className="h-6 w-6" />
                                    <span className="text-sm font-bold uppercase tracking-widest">19. Regional Analysis</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif">Bali vs SE Asia Hubs</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Compare Bali's investment environment with other regional contenders.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                                    {[
                                        { title: "Bali vs Thailand", href: "/bali-vs-thailand-business" },
                                        { title: "Bali vs Singapore", href: "/bali-vs-singapore-startup" },
                                        { title: "Bali vs Dubai", href: "/bali-vs-dubai-business" }
                                    ].map((hub, i) => (
                                        <Link key={i} href={hub.href} className="group p-6 rounded-xl border bg-card hover:border-primary/50 transition-all">
                                            <h4 className="font-serif group-hover:text-primary transition-colors">{hub.title}</h4>
                                            <ChevronRight className="h-4 w-4 text-primary mt-2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Section 20: Practical Investor Checklist */}
                        <section id="investor-checklist" className="scroll-mt-24">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-primary mb-2">
                                    <ClipboardCheck className="h-6 w-6" />
                                    <span className="text-sm font-bold uppercase tracking-widest">20. Readiness Assessment</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-serif">Practical Investor Checklist</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Before launching a business in Bali, ensure you have addressed these core pillars:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                                    {[
                                        "Confirm sector eligibility",
                                        "Prepare investment capital",
                                        "Establish PT PMA",
                                        "Obtain visas",
                                        "Secure office location",
                                        "Set up accounting"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-muted/20 border border-border/50">
                                            <div className="h-5 w-5 rounded-full border border-primary/40 flex items-center justify-center text-[10px] font-bold text-primary">
                                                {i + 1}
                                            </div>
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Share and Download */}
                        <section className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif">Share and Download</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    If you found this guide helpful, feel free to share it with other entrepreneurs and investors considering Bali as their next business destination.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Share this guide:</p>
                                        <div className="flex gap-4">
                                            <Button variant="ghost" size="sm" className="hover:text-[#1DA1F2] gap-2 px-0 h-auto">
                                                <Twitter className="h-4 w-4" /> <span className="text-xs">Twitter</span>
                                            </Button>
                                            <Button variant="ghost" size="sm" className="hover:text-[#0077b5] gap-2 px-0 h-auto">
                                                <Linkedin className="h-4 w-4" /> <span className="text-xs">LinkedIn</span>
                                            </Button>
                                            <Button variant="ghost" size="sm" className="hover:text-[#25D366] gap-2 px-0 h-auto">
                                                <MessageCircle className="h-4 w-4" /> <span className="text-xs">WhatsApp</span>
                                            </Button>
                                            <Button variant="ghost" size="sm" className="hover:text-primary gap-2 px-0 h-auto">
                                                <Mail className="h-4 w-4" /> <span className="text-xs">Email</span>
                                            </Button>
                                        </div>
                                    </div>
                                    <Separator orientation="vertical" className="hidden sm:block h-16" />
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Offline Access:</p>
                                        <DownloadGuideButton />
                                    </div>
                                </div>
                            </div>

                            {/* Related Resources */}
                            <div className="bg-muted/30 border rounded-2xl p-8 space-y-6">
                                <h4 className="font-serif text-xl border-b pb-4 border-border/50">Related Resources</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { title: "Business environment in Bali", href: "/why-invest-in-bali" },
                                        { title: "Investment opportunities in Indonesia", href: "/opportunities" },
                                        { title: "Startup ecosystem Bali", href: "/startup-ecosystem-bali" },
                                        { title: "Cost of doing business in Bali", href: "/services" }
                                    ].map((res, i) => (
                                        <Link key={i} href={res.href} className="group flex items-center justify-between p-3 rounded-lg hover:bg-background transition-colors">
                                            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{res.title}</span>
                                            <ChevronRight className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center space-y-8">
                            <h2 className="text-3xl font-serif">Deep Advisory Support</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                If you are researching business opportunities in Bali, this guide is designed to help you understand the regulatory and investment landscape. 
                                Additional detailed resources on company formation and visas in Indonesia are available through our specialized platform:
                            </p>
                            <div className="flex flex-col items-center gap-6">
                                <Button size="lg" className="bg-primary text-primary-foreground px-10 h-14 text-lg" asChild>
                                    <a href="https://indonesianvisas.com" target="_blank" rel="noopener noreferrer">
                                        Visit IndonesianVisas.com
                                    </a>
                                </Button>
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
                                    Strategic Alliance with Bali Enterprises
                                </div>
                            </div>
                        </section>

                        {/* Strategic Blueprint Link */}
                        <section className="border-t border-border pt-20 pb-12">
                            <div className="bg-card border border-primary/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="space-y-4 text-center md:text-left flex-1">
                                    <h3 className="text-2xl font-serif">Complete Foreign Founder Blueprint</h3>
                                    <p className="text-muted-foreground leading-relaxed max-w-xl">
                                        Ready for a more structured deep dive? Our Strategic Entry Blueprint provides a 10-chapter technical framework for scaling operations.
                                    </p>
                                </div>
                                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 shrink-0" asChild>
                                    <Link href="/strategic-entry-blueprint-bali">
                                        View Strategic Blueprint
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Desktop */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            <Card id="full-nav" className="border-primary/10">
                                <CardHeader>
                                    <CardTitle className="font-serif text-lg">Full Navigation</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <nav className="flex flex-col gap-4">
                                        {navItems.concat([{ title: "Practical Investor Checklist", id: "investor-checklist" }]).map((item, i) => (
                                            <a 
                                                key={item.id} 
                                                href={`#${item.id}`} 
                                                className="text-[11px] font-medium text-muted-foreground hover:text-primary border-l-2 border-transparent hover:border-primary pl-4 transition-all"
                                            >
                                                {String(i + 1).padStart(2, '0')}. {item.title}
                                            </a>
                                        ))}
                                    </nav>
                                </CardContent>
                            </Card>

                            <div className="p-8 rounded-2xl bg-muted/40 border space-y-6">
                                <h4 className="font-serif text-xl">Ready to Launch?</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Don't navigate the Indonesian regulatory system alone. Let our experts handle the complexity.
                                </p>
                                <Button className="w-full bg-primary text-primary-foreground" asChild>
                                    <a href="https://bali.enterprises/partner-with-us">Partner With Us</a>
                                </Button>
                                <div className="pt-4 border-t border-border/50 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                    Office Locations
                                </div>
                                <div className="text-[11px] text-muted-foreground">
                                    • Denpasar, Bali<br />
                                    • Jakarta (Holding)<br />
                                    • Singapore (Regional Office)
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
