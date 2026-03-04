import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Target } from "lucide-react";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { ProgressionModelFlow } from "@/components/charts/progression-model-flow";
import { ChartPlaceholder } from "@/components/ui/chart-placeholder";

export const metadata: Metadata = {
    title: "Foreign Founder Entry Framework | Strategic Blueprint",
    description: "Philosophical alignment on responsible market entry and long-term integration.",
};

export default function ForeignFounderEntryPage() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-0">
            <div className="mb-12 print-hidden">
                <Link href="/strategic-entry-blueprint-bali" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Strategic Blueprint Hub
                </Link>
            </div>

            <header className="mb-16 border-b border-border pb-8">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Chapter 10</div>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                    Foreign Founder Entry Framework
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    The psychological and strategic posture required to succeed as an international developer or operational founder in Indonesia.
                </p>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Founder Mindset Alignment</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Indonesia does not adapt to the foreign founder; the foreign founder must adapt to Indonesia. Success here is not determined purely by capital deployment, but by the founder's capacity for cultural synthesis, patience, and rigorous adherence to complex protocol.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Strategic Entry Philosophy</h2>
                <AdvisoryInsight title="The Premium on Predictability">
                    In an emerging market, predictability is your most valuable asset. Do not optimize for the absolute cheapest legal formation; optimize for structural certainty. A structure that saves $5,000 upfront but introduces a 10% risk of asset forfeiture is a catastrophic failure of strategy.
                </AdvisoryInsight>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Structural vs Operational Thinking</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Founders frequently fixate on the branding, the villa design, or the menu before they have secured the structural right to execute those visions. The blueprint demands prioritizing structural mastery—visas, zoning, KBLI, banking—before moving to operational realities.
                </p>
                <ProgressionModelFlow />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Avoiding Early-Stage Structural Mistakes</h2>
                <RiskNote variant="destructive" title="The Shadow Economy Trap">
                    Entering Bali intending to operate "under the radar" via tourist visas and crypto transactions is an obsolete and highly dangerous strategy. Immigration Task Forces and the Directorate General of Taxes utilize sophisticated data-sharing to identify and deport non-compliant actors.
                </RiskNote>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Regulatory Awareness Model</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Recognize that Indonesian law is intentionally protective of its domestic economy. Foreign investment is welcomed, but strictly channeled into high-capital, high-value sectors. Understanding this macro-economic intent clarifies why certain compliance hurdles exist.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Long-Term Integration Philosophy</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    To build a multi-decade legacy in Bali, an enterprise must become woven into the fabric of the local ecosystem. This means paying localized taxes correctly, ensuring the Banjar benefits from your presence, and employing rigorous environmental standards even when not strictly enforced.
                </p>
            </section>

            <section className="mb-16 border-t border-border pt-12">
                <h2 className="text-2xl font-serif mb-6">Blueprint Summary</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    The <strong>Strategic Entry Blueprint</strong> provides the architectural schematic. Your role as the founder is to provide the vision and the capital. Bali Enterprises' role is to ensure those two elements are executed legally, sustainably, and securely.
                </p>
                <div className="bg-primary/5 p-8 border border-primary/20 rounded-xl text-center print-hidden">
                    <h3 className="text-2xl font-semibold mb-4">Ready to Architect Your Entry?</h3>
                    <p className="text-muted-foreground mb-6">Transition from the blueprint stage to active execution.</p>
                    <Link
                        href="https://wa.me/6285727041992?text=I%20have%20read%20the%20Blueprint.%20I%20am%20ready%20to%20discuss%20my%20structural%20plan%20for%20Bali."
                        target="_blank"
                        className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                        Initiate Consultation
                    </Link>
                </div>
            </section>
        </article>
    );
}
