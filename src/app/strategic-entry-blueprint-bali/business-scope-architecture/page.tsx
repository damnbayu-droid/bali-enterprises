import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Layers } from "lucide-react";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { KbliSynergyMap } from "@/components/charts/kbli-synergy-map";
import { ChartPlaceholder } from "@/components/ui/chart-placeholder";

export const metadata: Metadata = {
    title: "Business Scope Architecture | Strategic Blueprint",
    description: "Understanding the KBLI system and designing multi-disciplinary operational scopes.",
};

export default function BusinessScopePage() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-0">
            <div className="mb-12 print-hidden">
                <Link href="/strategic-entry-blueprint-bali" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Strategic Blueprint Hub
                </Link>
            </div>

            <header className="mb-16 border-b border-border pb-8">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Chapter 4</div>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                    Business Scope Architecture
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    The KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) dictates entirely what your company is legally permitted to do. Errors here cause operational paralysis.
                </p>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Business Scope Design Philosophy</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    A PT PMA is not a blanket entity. Every revenue stream must map directly to a registered 5-digit KBLI code. Operating outside of your registered scope is categorized as administrative fraud and invites license revocation.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Understanding KBLI Classification</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    KBLI codes dictate not only what you can sell, but also the severity of the Environmental Impact Assessment (SPPL/UKL-UPL) required, the capital minimums, and whether the sector allows 100% foreign ownership.
                </p>
                <KbliSynergyMap />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Accommodation Operations Scope</h2>
                <AdvisoryInsight title="KBLI 55110 vs KBLI 55199">
                    Understanding the nuance between Starred Hotels (55110) and Other Short-Term Accommodation (55199). The latter provides flexibility for boutique villa developments without triggering the overwhelming regulatory burdens of a major hotel structure.
                </AdvisoryInsight>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Real Estate Related Activities</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    KBLI 68111 represents Real Estate Owned or Leased. This is fundamental for founders holding long-term leaseholds (Hak Sewa) or building rights (Hak Guna Bangunan) aiming to sub-lease or capitalize the assets officially.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Future Food & Beverage Extension Planning</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Adding a restaurant (KBLI 56101) to an existing accommodation PT PMA is usually efficient, provided the underlying land zoning allows for multi-purpose commercial utilization.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Avoiding Structural Amendments</h2>
                <RiskNote variant="warning" title="The Cost of Changing Your Mind">
                    Amending an Akta Pendirian (Deed of Establishment) to add a new KBLI later requires a Notary, an OSS system update, and triggers a re-audit of your overall capital compliance. It is highly advisable to register anticipated future scopes at inception.
                </RiskNote>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Operational Flexibility Model</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    By utilizing a Holding + Operating Company structure, founders can isolate high-risk operational liabilities (food, alcohol, transport) from high-value asset holding companies (land, IP).
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Strategic Scope Planning Guidelines</h2>
                <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6 marker:text-primary">
                    <li>Register 3–5 complimentary KBLIs at inception.</li>
                    <li>Ensure local Spatial Planning matches your most intensive KBLI.</li>
                    <li>Avoid adding completely disconnected KBLIs (e.g., Hospitality + Mining) in a single entity as it triggers complex inter-ministry audit flags.</li>
                </ul>
            </section>
        </article>
    );
}
