import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Flag } from "lucide-react";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { DeploymentGantt } from "@/components/charts/deployment-gantt";
import { ChartPlaceholder } from "@/components/ui/chart-placeholder";

export const metadata: Metadata = {
    title: "Implementation Roadmap | Strategic Blueprint",
    description: "A structured timeline covering the integration of corporate structure, compliance, and initial scaling.",
};

export default function ImplementationRoadmapPage() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-0">
            <div className="mb-12 print-hidden">
                <Link href="/strategic-entry-blueprint-bali" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Strategic Blueprint Hub
                </Link>
            </div>

            <header className="mb-16 border-b border-border pb-8">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Chapter 7</div>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                    Implementation Roadmap
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Translating complex legal frameworks into a chronological execution plan. Aligning capital deployment alongside regulatory timelines.
                </p>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Entry Planning Phase</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Months -2 to 0: Preliminary mapping of business goals to KBLI categories. Finalizing founder shareholding percentages (ensuring they meet the 1.125B IDR Investor KITAS minimum) and selecting initial directors.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Structural Planning Phase</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Defining the immediate PT PMA capital timeline versus long-term capitalization strategy. Engaging local tax consultants to forecast corporate tax obligations and capital extraction models.
                </p>

                <DeploymentGantt />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Incorporation Phase</h2>
                <AdvisoryInsight title="The SK Kemenkumham Milestone">
                    The Ministry of Law and Human Rights ratifies the corporate charter (Akta). Following this, tax ids (NPWP) and the fundamental business registration number (NIB) are issued, representing your official legal standing in Indonesia. (Duration: 3–4 weeks).
                </AdvisoryInsight>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Zoning Validation Phase</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Months 1-3 post-incorporation: Utilizing the active PT PMA to formalize due diligence on target properties or securing a mid-term commercial lease in a verified Pariwisata (tourism) or Perdagangan (commercial) zone.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Immigration Phase</h2>
                <RiskNote title="Bank Account Prioritization">
                    While KITAS applications are advancing, corporate bank accounts must be stabilized. The injection of the Phase 1 capital secures banking compliance and readies the entity for future payroll operations.
                </RiskNote>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Operational Activation Phase</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Months 4-8: Progressing standard OSS licenses (NIB) to verified, active status by submitting Environmental Documentation (SPPL), Building Approvals (PBG), and passing local inspection reviews.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Compliance Reporting Phase</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Establishing quarterly routines. Indonesia requires strict, periodic LKPM (Investment Activity) filings. Missing these flags the entity in the BKPM system, freezing OSS access, and stalling future visa renewals.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Stabilization Phase</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Months 9-18: Navigating the first fiscal year-end close. Ensuring all personnel (local + foreign) are correctly logged into BPJS Health and BPJS Manpower systems, neutralizing labor compliance vulnerabilities.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Expansion Review Phase</h2>
                <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6 marker:text-primary">
                    <li>Reviewing the 10 Billion IDR capital threshold realization status.</li>
                    <li>Analyzing current operational scope vs KBLI boundaries.</li>
                    <li>Beginning preparations for Investor KITAS renewals or transitioning to 5-year permanence pathways.</li>
                </ul>
            </section>
        </article>
    );
}
