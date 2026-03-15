import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PrintButton } from "@/components/ui/print-button";

export const metadata: Metadata = {
    title: "Strategic Entry Blueprint for Foreign Founders in Bali | Bali Enterprises",
    description: "Comprehensive strategic framework for foreign founders planning to establish compliant and scalable business operations in Bali.",
    alternates: {
        canonical: "https://bali.enterprises/strategic-entry-blueprint-bali",
    },
    openGraph: {
        title: "Strategic Entry Blueprint for Foreign Founders",
        description: "The definitive technical roadmap for foreign-owned enterprises in Bali.",
        url: "https://bali.enterprises/strategic-entry-blueprint-bali",
        siteName: "Bali Enterprises",
        type: "website",
        images: ["/image/og-image.webp"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Bali Strategic Entry Blueprint",
        description: "A 10-chapter technical framework for Indonesian market entry.",
        images: ["/image/og-image.webp"],
    }
};

const advisoryReports = [
    {
        title: "Regulatory Landscape in Bali",
        href: "/strategic-entry-blueprint-bali/regulatory-landscape-bali",
        summary: "Overview of tourism zoning, OSS business licensing, and regional governance structures impacting operations."
    },
    {
        title: "Legal Structure Scenarios",
        href: "/strategic-entry-blueprint-bali/legal-structure-scenarios",
        summary: "Strategic analysis of PT PMA frameworks, phased incorporation, and ownership architectures."
    },
    {
        title: "Capital Alignment Framework",
        href: "/strategic-entry-blueprint-bali/capital-alignment-framework",
        summary: "Guidance on declared capital versus operational capital to satisfy Indonesian investment requirements."
    },
    {
        title: "Business Scope Architecture",
        href: "/strategic-entry-blueprint-bali/business-scope-architecture",
        summary: "Designing the KBLI classification scope for multi-disciplinary ventures like accommodation and F&B."
    },
    {
        title: "Investor KITAS Sequencing",
        href: "/strategic-entry-blueprint-bali/investor-kitas-sequencing",
        summary: "Immigration timelines and the crucial relationship between equity logic and valid standing periods."
    },
    {
        title: "Zoning & Operational Risk Matrix",
        href: "/strategic-entry-blueprint-bali/zoning-operational-risk",
        summary: "Critical evaluation of PBG/SLF alignment, land use classifications, and lease compliance."
    },
    {
        title: "Implementation Roadmap",
        href: "/strategic-entry-blueprint-bali/implementation-roadmap",
        summary: "A structured 24-month progression from initial entry planning to operational stabilization."
    },
    {
        title: "Five-Year Strategic Outlook",
        href: "/strategic-entry-blueprint-bali/five-year-strategic-outlook",
        summary: "Positioning for sustainable growth through capital discipline and ecosystem development."
    },
    {
        title: "Partnership & Regulatory Safeguard",
        href: "/strategic-entry-blueprint-bali/partnership-regulatory-safeguard",
        summary: "The Bali Enterprises oversight model ensuring continuous compliance and reporting."
    },
    {
        title: "Foreign Founder Entry Framework",
        href: "/strategic-entry-blueprint-bali/foreign-founder-entry-framework",
        summary: "Philosophical alignment on responsible market entry and long-term integration."
    }
];

export default function HubPage() {
    return (
        <div className="flex flex-col items-center max-w-[100vw] overflow-x-hidden">
            {/* Back to Home Navigation */}
            <div className="w-full max-w-5xl px-6 pt-8 print-hidden">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Bali Enterprises Home
                </Link>
            </div>

            {/* Hero Section */}
            <section className="w-full px-6 py-16 md:py-24 max-w-5xl">
                <div className="max-w-3xl space-y-6">
                    <div className="inline-block rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary font-medium tracking-wide">
                        Strategic Knowledge Architecture
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-[1.1]">
                        Strategic Entry Blueprint <br className="hidden md:block" />
                        <span className="text-muted-foreground">for Foreign Founders in Bali</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mt-4 max-w-2xl">
                        A comprehensive framework for building legally coherent, scalable and sustainable business presence in Bali.
                    </p>
                    <div className="pt-4 max-w-xl text-lg text-muted-foreground border-l-2 border-primary/30 pl-6 my-6">
                        Bali Enterprises is an advisory ecosystem supporting foreign founders in navigating the regulatory, structural and operational realities of building in Indonesia.
                    </div>
                    <div className="pt-8 flex flex-col sm:flex-row gap-4 print-hidden">
                        {/* Note: In a real implementation this would trigger the layout context or a local state.*/}
                        {/* Using standard link to the whatsapp anchor defined in layout for simplicity if state not wired */}
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[240px] text-md" asChild>
                            <Link href="/contact">
                                Schedule Strategic Consultation
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 min-w-[240px] text-md" asChild>
                            <Link href="/starting-business-bali-guide">
                                Access Ultimate Guide
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <PrintButton />
                    </div>
                </div>
            </section>

            {/* Visual Architecture Diagram Section */}
            <section className="w-full bg-muted/20 border-y border-border py-20 px-6 my-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-serif mb-12 text-center">Foreign Founder Entry Framework</h2>

                    {/* Custom CSS for the Flow Diagram */}
                    <div className="relative mx-auto max-w-3xl">
                        {/* The line connecting nodes */}
                        <div className="absolute left-1/2 top-4 bottom-4 w-px bg-primary/20 -translate-x-1/2 md:block hidden"></div>

                        <div className="flex flex-col gap-6 md:gap-10 relative z-10">
                            {[
                                "Founder Vision",
                                "Regulatory Landscape",
                                "Legal Structure",
                                "Capital Framework",
                                "Business Scope Design",
                                "Visa Sequencing",
                                "Zoning Validation",
                                "Implementation Roadmap",
                                "Long-Term Strategic Development"
                            ].map((step, idx) => (
                                <div key={idx} className="flex justify-center">
                                    <div className="bg-background border border-primary/20 shadow-sm px-6 py-4 rounded-lg w-full md:w-80 text-center font-medium shadow-sm transition-shadow hover:shadow-md">
                                        {step}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Grid (Child Reports) */}
            <section className="w-full px-6 py-20 max-w-6xl">
                <div className="mb-12">
                    <h2 className="text-3xl font-serif mb-4">Core Advisory Reports</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Explore the 10 foundational pillars of the strategic entry framework. Each report provides deep, consulting-grade analysis on structuring your operations in Bali.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {advisoryReports.map((report, index) => (
                        <Link key={index} href={report.href} className="group block h-full">
                            <div className="h-full flex flex-col p-8 rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-md">
                                <div className="mb-4 text-sm font-bold tracking-widest text-primary uppercase">
                                    Chapter {index + 1}
                                </div>
                                <h3 className="text-2xl font-serif mb-3 group-hover:text-primary transition-colors">
                                    {report.title}
                                </h3>
                                <p className="text-muted-foreground flex-grow mb-6 leading-relaxed">
                                    {report.summary}
                                </p>
                                <div className="flex items-center text-sm font-medium text-primary mt-auto">
                                    <FileText className="mr-2 h-4 w-4" />
                                    Explore Framework
                                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
