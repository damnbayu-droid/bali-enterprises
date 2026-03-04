import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { VisaCriticalPath } from "@/components/charts/visa-critical-path";
import { ChartPlaceholder } from "@/components/ui/chart-placeholder";

export const metadata: Metadata = {
    title: "Investor KITAS Sequencing | Strategic Blueprint",
    description: "Aligning company establishment timelines with founder visa acquisitions for seamless entry.",
};

export default function InvestorKitasPage() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-0">
            <div className="mb-12 print-hidden">
                <Link href="/strategic-entry-blueprint-bali" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Strategic Blueprint Hub
                </Link>
            </div>

            <header className="mb-16 border-b border-border pb-8">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Chapter 5</div>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                    Investor KITAS Sequencing
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Your ability to reside and execute is fundamentally tied to the corporate structure. Desynchronization leads to visa resets, offshore flights, and operational delays.
                </p>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Immigration Framework Overview</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    The Investor KITAS (Index 313/314) serves as the primary residency mechanism for foreign founders. Unlike arbitrary digital nomad visas, it is a structural visa anchored completely to the equity the foreign individual holds within an active PT PMA.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Visa Timing Considerations</h2>
                <VisaCriticalPath />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Relationship Between Company Structure and KITAS</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    The company must exist (SK Kemenkumham issued and NIB active) before a KITAS application can commence. Therefore, founders often require a transitionary visa (e.g., B211A) to remain in-country during the 3–4 week incorporation phase.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Equity Participation Logic</h2>
                <RiskNote variant="warning" title="The 1.125 Billion IDR Rule">
                    To act as a Director/Commissioner and qualify for an Investor KITAS, the individual's name must specifically appear on the Deed of Establishment holding no less than IDR 1,125,000,000 in shares.
                </RiskNote>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Standing Period Explanation</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Index 313 grants a 1-year KITAS. Index 314 grants a 2-year KITAS. Strategic founders utilize the 2-year option to reduce administrative friction during the critical early growth phases of the company.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Sequencing Models for Founders</h2>
                <AdvisoryInsight title="The Onshore vs Offshore Dilemma">
                    Recent immigration shifts allow onshore transitions from visitor visas directly to Investor KITAS without requiring the founder to fly to Singapore/Kuala Lumpur. This requires precise document alignment within the OSS portal.
                </AdvisoryInsight>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Company Establishment Requirements</h2>
                <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6 marker:text-primary">
                    <li>Valid passport with minimum 18 months validity (for 1-year KITAS) or 30 months validity (for 2-year KITAS).</li>
                    <li>Registered company address matching the designated Zoning category.</li>
                    <li>Active BPJS (Health and Manpower insurance) registration within the first operational months.</li>
                </ul>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Strategic Immigration Planning</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Do not treat immigration as an afterthought to business planning. The Investor KITAS is the linchpin that gives you the legal authority to sign banking documents, execute land leases, and hire local staff. It must be Step 1 on the execution roadmap.
                </p>
            </section>
        </article>
    );
}
