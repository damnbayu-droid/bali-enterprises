import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Coins } from "lucide-react";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { CapitalPhasingCurve } from "@/components/charts/capital-phasing-curve";
import { ChartPlaceholder } from "@/components/ui/chart-placeholder";

export const metadata: Metadata = {
    title: "Capital Alignment Framework | Strategic Blueprint",
    description: "Navigating Indonesia's 10 Billion IDR capital requirements and optimizing phased deployment.",
};

export default function CapitalAlignmentPage() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-0">
            <div className="mb-12 print-hidden">
                <Link href="/strategic-entry-blueprint-bali" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Strategic Blueprint Hub
                </Link>
            </div>

            <header className="mb-16 border-b border-border pb-8">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Chapter 3</div>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                    Capital Alignment Framework
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    The art and science of satisfying the BKPM Investment requirements without choking working capital, utilizing intelligent phased injection strategies.
                </p>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Investment Capital Philosophy</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Indonesia utilizes a high capital threshold to filter out under-capitalized entities and protect local SMEs. A PT PMA requires an authorized capital of IDR 10,000,000,000 (roughly $650,000 USD at current exchange rates) to establish legitimacy.
                </p>
                <AdvisoryInsight title="The Real Truth of 'Paid-Up' Capital">
                    While 10 Billion IDR is required on paper immediately, operational realities and auditing requirements dictate a timeline where this capital must actually enter the company’s treasury, usually synchronized with operational deployment.
                </AdvisoryInsight>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Indonesian Investment Classification System</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Larger business scales unlock strategic benefits, including superior visa capacities, increased leverage in regional licensing negotiations, and insulation against shifting SME protection policies.
                </p>
                <CapitalPhasingCurve />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Declared Capital vs Operational Capital</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Understanding the divergence between the legal declaration of intent for your PT PMA and the immediate liquidity needed to operate the venture during year one. Assets, including land leases, building equipment, and operational software, can be capitalized to satisfy BKPM requirements.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Capital Planning for Investor KITAS Eligibility</h2>
                <RiskNote title="Equity Minimums for Visas">
                    To qualify for the highly coveted Investor KITAS, a founder must hold a minimum of IDR 1,125,000,000 in personal equity within the PT PMA. Failure to structure shareholdings tightly around this requirement triggers immediate immigration rejection.
                </RiskNote>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Phased Capital Deployment Strategy</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                    <p><strong>Phase 1: Minimum Viable Injection.</strong> Sufficient liquid capital to trigger company incorporation and banking thresholds.</p>
                    <p><strong>Phase 2: Asset Capitalization.</strong> The conversion of physical purchases (property, technology) into the audited capital requirement.</p>
                    <p><strong>Phase 3: Operational Cash Flow.</strong> Utilizing revenue and subsequent institutional investments to finalize the 10 Billion IDR threshold before the first major LKPM reporting cycle.</p>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Strategic Capital Planning Recommendations</h2>
                <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6 marker:text-primary">
                    <li>Leverage audited asset valuations to offset raw cash injection needs.</li>
                    <li>Never dilute key founders below the KITAS equity threshold during early investment rounds.</li>
                    <li>Synchronize LKPM (Investment Activity Report) filings with actual financial deployments.</li>
                </ul>
            </section>
        </article>
    );
}
