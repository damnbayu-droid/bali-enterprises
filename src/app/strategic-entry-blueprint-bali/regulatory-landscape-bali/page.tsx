import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Map } from "lucide-react";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { ComplianceLayerCake } from "@/components/charts/compliance-layer-cake";
import { ChartPlaceholder } from "@/components/ui/chart-placeholder";

export const metadata: Metadata = {
    title: "Regulatory Landscape in Bali | Strategic Blueprint",
    description: "Understanding Bali's unique regulatory environment, zoning enforcement, and licensing operations for foreign founders.",
};

export default function RegulatoryLandscapePage() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-0">
            <div className="mb-12 print-hidden">
                <Link href="/strategic-entry-blueprint-bali" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Strategic Blueprint Hub
                </Link>
            </div>

            <header className="mb-16 border-b border-border pb-8">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Chapter 1</div>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                    Regulatory Landscape in Bali
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    A definitive overview of the multi-layered regulatory environment dictating foreign business operations, land-use classifications, and continuous compliance requirements in Bali.
                </p>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Regulatory Environment Overview</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Indonesia operates under a civil law system characterized by rigorous code-based compliance and highly segmented administrative authority. For foreign founders, entering Bali requires navigating a complex intersection of central government mandates (Jakarta) and highly localized, culturally intertwined regional regulations (Provincial and Regency/Kabupaten levels).
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Failure to synchronize national OSS (Online Single Submission) licensing with local spatial planning (Tata Ruang) frequently leads to irreversible compliance failures. A robust structural plan mitigates these risks proactively.
                </p>

                <AdvisoryInsight title="Structural Priority">
                    A business license issued at the national level does not guarantee operational legality at the local level. Physical presence and operational activities must always defer to local Regency spatial planning laws.
                </AdvisoryInsight>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Tourism Zoning Enforcement</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Bali's economic topography is strictly governed by RTRW (Rencana Tata Ruang Wilayah) zoning regulations. Real estate investment or accommodation businesses established in agricultural (Green) or strictly residential (Yellow) zones face immense risk of forced closure. Pink or Orange zones dedicated for tourism and mixed-use commercial activities are mandatory for operational viability.
                </p>

                <ComplianceLayerCake />

                <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6 marker:text-primary">
                    <li><strong>Pink Zone (Pariwisata):</strong> Ideal for Villas, Hotels, and F&B.</li>
                    <li><strong>Yellow Zone (Pemukiman):</strong> Residential use primarily; restricted commercial activity.</li>
                    <li><strong>Green Zone (Pertanian/Jalur Hijau):</strong> Strictly protected; immediate cessation of business risk.</li>
                </ul>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Accommodation Licensing Regulations</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Not all accommodation is classified equally. Distinctions between a Pondok Wisata (Homestay/Guesthouse) and a Hotel Berbintang (Starred Hotel) dictate drastically different capital prerequisites, building permit (PBG) standards, and environmental impact assessments (SPPL/UKL-UPL).
                </p>
                <RiskNote variant="destructive" title="Pondok Wisata Risk Warning">
                    Foreign-owned entities (PT PMA) are entirely restricted from operating under standard Pondok Wisata (Homestay) licenses. They must target higher classification KBLI codes requiring elevated standards and capital structures.
                </RiskNote>
            </section>

            {/* Further Sections to fill out the 8-10 count */}
            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">OSS Business Licensing System</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    The Risk-Based Approach (RBA) OSS system assigns risk levels determining authorization speed. High-risk activities require extensive manual verification from ministries prior to operational activation.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Immigration Alignment for Foreign Founders</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Founder presence is dictated by the Investor KITAS. A structural disconnection between the corporate entity standing and visa application timing exposes founders to immigration audits and deportation sequences.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Regional Governance Structure in Bali</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Interaction mapping between the Banjar (village council), the Desa (village administration), and the Kabupaten (Regency). The Banjar holds significant socio-cultural power affecting day-to-day operations and neighborly approvals.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Common Compliance Misunderstandings</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    The usage of Local Nominees creates a shadow ownership structure that is legally void in Indonesian courts. Nominee structures provide zero asset security and present severe fiduciary and reputational risks for serious founders.
                </p>
            </section>

            <section className="mb-16 border-t border-border pt-12">
                <h2 className="text-2xl font-serif mb-6">Strategic Implications for Foreign Entrepreneurs</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-muted/20 border border-border rounded-lg">
                        <h4 className="font-semibold mb-2">1. Front-Loaded Diligence</h4>
                        <p className="text-sm text-muted-foreground">Spatial mapping and legal clearing of land assets before forming corporate entities saves millions.</p>
                    </div>
                    <div className="p-6 bg-muted/20 border border-border rounded-lg">
                        <h4 className="font-semibold mb-2">2. Synchronized Strategy</h4>
                        <p className="text-sm text-muted-foreground">Visas, Bank Accounts, and Corporate structures must be modeled as inter-dependent timelines.</p>
                    </div>
                </div>
            </section>
        </article>
    );
}
