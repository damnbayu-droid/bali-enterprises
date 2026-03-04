import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { ZoningMatrix } from "@/components/charts/zoning-matrix";
import { ChartPlaceholder } from "@/components/ui/chart-placeholder";

export const metadata: Metadata = {
    title: "Zoning & Operational Risk Matrix | Strategic Blueprint",
    description: "Evaluating land use, building permits, and localized operational hazards in Bali.",
};

export default function ZoningOperationalRiskPage() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-0">
            <div className="mb-12 print-hidden">
                <Link href="/strategic-entry-blueprint-bali" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Strategic Blueprint Hub
                </Link>
            </div>

            <header className="mb-16 border-b border-border pb-8">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Chapter 6</div>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                    Zoning & Operational Risk Matrix
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    The physical realization of your enterprise. Mitigating critical risks associated with building compliance, land classifications, and local governance.
                </p>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Bali Land Use Classification</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    The RTRW (Rencana Tata Ruang Wilayah) categorizes land into highly specific operational zones. A corporate license provides authorization to conduct a business, but zoning dictates <em>where</em> you are legally permitted to build the physical manifestation of it.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Tourism Zone Identification</h2>
                <AdvisoryInsight title="The Complexity of ITR (Informasi Tata Ruang)">
                    Before transacting any leasehold or freehold land title, an official ITR document from the spatial planning office must be secured. Land marketed as "villa ready" often sits in highly restrictive residential-only (Yellow) zones prohibiting daily rental monetization.
                </AdvisoryInsight>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Building Permit Requirements</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    The legacy IMB (Izin Mendirikan Bangunan) has been replaced by the PBG (Persetujuan Bangunan Gedung). The PBG is far more technical, requiring mechanical, electrical, and structural engineered drawings approved by a certified local architect before ground can be broken.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">PBG and SLF Alignment</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Upon construction completion, obtaining an SLF (Sertifikat Laik Fungsi) certifies the structure is functionally safe for operations. High-risk KBLIs (such as a multi-story hotel) cannot activate their licenses in the OSS system without a verified SLF.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Lease Contract Compliance</h2>
                <RiskNote variant="destructive" title="Contractual Void Risks">
                    Many standard notary lease agreements lack essential clauses protecting foreign investors from underlying zoning changes, inheritance disputes during the lease term, or explicit authorization for commercial subletting via a PT PMA.
                </RiskNote>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Local Governance Influence</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Operations in Bali intersect uniquely with Banjar (village) and Desa Adat (customary village) rules. Formal government compliance must be paired with local operational harmony, including respecting ceremonial zoning boundaries and noise restrictions.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Operational Risk Matrix</h2>
                <ZoningMatrix />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Strategic Risk Mitigation</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Always anchor the PT PMA to a virtual office address for immediate compliance and KITAS processing while spending 3–6 months conducting rigorous on-the-ground due diligence before locking capital into a multi-decade land lease.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Due Diligence Checklist</h2>
                <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6 marker:text-primary">
                    <li>Verify native land certificate (SHM) authenticity at BPN.</li>
                    <li>Source an official ITR map directly from the PUPR office, avoiding agent claims.</li>
                    <li>Draft lease agreements enforcing structural sub-lease capabilities natively.</li>
                </ul>
            </section>
        </article>
    );
}
