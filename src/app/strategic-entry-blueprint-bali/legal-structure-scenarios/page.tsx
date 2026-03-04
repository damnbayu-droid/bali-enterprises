import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Network } from "lucide-react";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { ChartPlaceholder } from "@/components/ui/chart-placeholder";
import { RiskNote } from "@/components/ui/risk-note";
import { CorporateScaleMatrix } from "@/components/charts/corporate-scale-matrix";

export const metadata: Metadata = {
    title: "Legal Structure Scenarios | Strategic Blueprint",
    description: "An analysis of PT PMA frameworks, phased incorporation, and ownership architectures in Indonesia.",
};

export default function LegalStructurePage() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-0">
            <div className="mb-12 print-hidden">
                <Link href="/strategic-entry-blueprint-bali" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Strategic Blueprint Hub
                </Link>
            </div>

            <header className="mb-16 border-b border-border pb-8">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Chapter 2</div>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                    Legal Structure Scenarios
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    The architectural foundation of your enterprise. Designing scalable, compliant ownership frameworks customized for long-term viability.
                </p>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Legal Structure Overview</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Choosing the correct legal mechanism is the most critical decision a foreign founder makes. Structural errors compounded over time are expensive, legally perilous, and occasionally irreversibly detrimental to capital extraction.
                </p>
                <RiskNote title="Nominee Liability Risk">
                    Indonesia explicitly forbids 'indirect' nominee arrangements under the Investment Law. Agreements binding an Indonesian citizen to act purely on behalf of a foreign beneficiary lack judicial enforceability and invite immediate asset forfeiture.
                </RiskNote>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">PT PMA Framework</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    The Perseroan Terbatas Penanaman Modal Asing (PT PMA) is the definitive vehicle for direct foreign investment. It allows up to 100% foreign ownership depending on the business sector (KBLI) as dictated by the Positive Investment List.
                </p>
                <AdvisoryInsight title="Structural Minimums">
                    A PT PMA legally requires a minimum of two shareholders (individuals or foreign corporate entities), one Director, and one Commissioner.
                </AdvisoryInsight>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Phased Incorporation Strategy</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Aggressive capital pacing can stress a new venture. We advise a phased approach, securing holding structures mapping towards long-term objectives without prematurely activating high-tier capital obligations until required by operational timelines.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Comparative Structure Matrix</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Analyzing the varying approaches to corporate modeling.
                </p>

                <div className="overflow-x-auto border border-border rounded-lg shadow-sm">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/40 font-semibold border-b border-border">
                            <tr>
                                <th className="p-4">Structure</th>
                                <th className="p-4">Risk Profile</th>
                                <th className="p-4">Foreign Ownership</th>
                                <th className="p-4">Capital Requirement</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-muted-foreground">
                            <tr>
                                <td className="p-4 font-medium text-foreground">100% PT PMA</td>
                                <td className="p-4 text-green-600">Extremely Low</td>
                                <td className="p-4">100% allowed in open sectors</td>
                                <td className="p-4">10 Billion IDR per KBLI</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-foreground">Joint Venture PMA</td>
                                <td className="p-4 text-amber-600">Moderate (Partner dependent)</td>
                                <td className="p-4">Capped by Negative List (e.g. 49%)</td>
                                <td className="p-4">10 Billion IDR per KBLI</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium text-foreground">Local Nominee (PT PMDN)</td>
                                <td className="p-4 text-red-600">Critical (Illegal)</td>
                                <td className="p-4">0% (Beneficial only)</td>
                                <td className="p-4">Variable</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Hybrid Business Structure Models</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Utilizing strategic alliances with local entities to leverage local distribution channels while maintaining IP and holding leverage in offshore or direct PMA structures.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Shareholding Architecture</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Structuring equity to allow for later-stage institutional funding rounds without requiring total corporate restructuring or burdensome capital injection recalculations.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Foreign Ownership Considerations</h2>
                <CorporateScaleMatrix />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Strategic Structure Recommendation Logic</h2>
                <div className="bg-primary/5 border-l-4 border-primary p-6 mt-4">
                    <p className="text-lg text-muted-foreground font-medium">
                        "Design for the exit, build for the operation." Structural purity simplifies M&A, institutional capital injections, and tax-efficient repatriation of funds over the next decade.
                    </p>
                </div>
            </section>
        </article>
    );
}
