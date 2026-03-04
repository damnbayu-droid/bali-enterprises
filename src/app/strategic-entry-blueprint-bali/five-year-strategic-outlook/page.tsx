import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { EquityValueChart } from "@/components/charts/equity-value-chart";
import { ChartPlaceholder } from "@/components/ui/chart-placeholder";

export const metadata: Metadata = {
    title: "Five-Year Strategic Outlook | Strategic Blueprint",
    description: "Modeling long-term growth, capital discipline, and sustainable compliance in Indonesia.",
};

export default function FiveYearStrategicOutlookPage() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-0">
            <div className="mb-12 print-hidden">
                <Link href="/strategic-entry-blueprint-bali" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Strategic Blueprint Hub
                </Link>
            </div>

            <header className="mb-16 border-b border-border pb-8">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Chapter 8</div>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                    Five-Year Strategic Outlook
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Transitioning from initial market entry compliance to long-term wealth stabilization and portfolio scaling within Indonesia's booming economy.
                </p>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Conservative Growth Philosophy</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Indonesia's regulatory environment rewards methodical corporate governance over highly leveraged, aggressive operational scaling. A conservative foundation, unburdened by compliance stress, outlives speculative structures mathematically and experientially.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Capital Discipline Strategy</h2>
                <AdvisoryInsight title="Profits vs Investment Value">
                    Ensuring cash flow modeling respects the ongoing injection demands of a PT PMA (meeting the 10B IDR marker) while still optimizing for taxation logic and eventual capital repatriation via dividends.
                </AdvisoryInsight>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Operational Stabilization Period</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Years 1 and 2 define the corporate culture within the bureaucratic system. This period normalizes BPJS payments, quarterly LKPM submissions, and predictable corporate tax cycles, establishing a pristine track record with regional authorities.
                </p>
                <EquityValueChart />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Financial Sustainability Model</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Isolating overhead exposure. Foreign founders should map their personal living costs (in IDR) as completely separate structures from their PT PMA’s declared operational treasury, preventing commingling flags during annual audits.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Progressive Asset Expansion</h2>
                <RiskNote variant="warning" title="Scaling into Real Estate">
                    If a technology or consulting PMA decides to transition capital reserves into acquiring Right-to-Build (HGB) land assets by Year 3, a rigorous structural review covering the amendment of KBLI codes (Adding Real Estate) must precede the capital transfer.
                </RiskNote>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Ecosystem Development Strategy</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Foreign founders benefit immensely by building local horizontal networks—integrating Indonesian vendors into their supply chains explicitly to demonstrate local economic empowerment, a crucial metric evaluated during high-level visa renewals.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Risk Buffer Strategy</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Regulatory mechanics in Indonesia evolve. Maintaining a dedicated corporate reserve (recommended minimum 15% of OPEX) insulates operations from rapid shifts in minimum wage laws, environmental standards, or unexpected licensing recalculations.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Long-Term Strategic Positioning</h2>
                <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6 marker:text-primary">
                    <li>Position the entity as an acquisition target via pristine financial audits.</li>
                    <li>Explore transitioning founders from Investor KITAS to KITAP (Permanent Residency).</li>
                    <li>Solidify Banjar relationships into multi-generational operational security.</li>
                </ul>
            </section>
        </article>
    );
}
