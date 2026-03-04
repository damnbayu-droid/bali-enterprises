import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";
import { ComplianceCalendar } from "@/components/charts/compliance-calendar";
import { ChartPlaceholder } from "@/components/ui/chart-placeholder";

export const metadata: Metadata = {
    title: "Partnership & Regulatory Safeguard | Strategic Blueprint",
    description: "The Bali Enterprises oversight model ensuring continuous compliance and reporting.",
};

export default function PartnershipSafeguardPage() {
    return (
        <article className="max-w-4xl mx-auto px-6 py-12 print:px-0 print:py-0">
            <div className="mb-12 print-hidden">
                <Link href="/strategic-entry-blueprint-bali" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Strategic Blueprint Hub
                </Link>
            </div>

            <header className="mb-16 border-b border-border pb-8">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Chapter 9</div>
                <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                    Partnership & Regulatory Safeguard Model
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Establishing dynamic, continuous oversight to protect your corporate standing against a fluid regulatory environment.
                </p>
            </header>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Bali Enterprises Advisory Model</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Establishment is merely the starting line. True advisory extends into the operational lifespan of the entity. Our model positions us not as transactional agents, but as your structural co-pilots ensuring the architecture designed in Year 1 remains legally functional in Year 10.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Long-Term Compliance Monitoring</h2>
                <AdvisoryInsight title="Continuous OSS Monitoring">
                    The OSS system is dynamic. A license that is "Verified" today can regress to "Unverified" tomorrow if new ministerial decrees alter KBLI prerequisites. Quarterly systemic health checks are mandatory.
                </AdvisoryInsight>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Reporting Oversight Framework</h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    Synchronizing the trifecta of Indonesian corporate reporting: Annual Tax Returns (SPT), Quarterly Investment Reports (LKPM), and Manpower/Immigration RPTKA realizations.
                </p>
                <ComplianceCalendar />
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Regulatory Update Monitoring</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Indonesian law frequently pivots via Presidential Decrees (Perppu) or Ministerial Regulations (Permen). We provide proactive intelligence, interpreting Jakarta's macro policy shifts into actionable regional directives for our partners in Bali.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Strategic Advisory Role</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Acting as an independent board proxy. We offer objective structural reviews prior to major capital expenditure (CAPEX) decisions, ensuring your real estate or expansion choices align with your visa and corporate constraints.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Operational Support Integration</h2>
                <RiskNote title="The Gap Between Legal and Local">
                    Legal compliance on paper often fails to handle local Banjar disputes. Our ecosystem integrates legal architecture with cultural diplomacy, ensuring operations remain uninterrupted by localized friction.
                </RiskNote>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Risk Management Philosophy</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    We identify, quantify, and isolate risk. By maintaining strict compartmentalization between high-risk operational licenses and low-risk asset holding companies, we protect the founder’s core capital from operational litigation.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Founder Support Ecosystem</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                    Beyond legalities, Bali Enterprises connects founders to verified accounting firms, certified notaries (PPAT), structural engineers for PBG drafting, and top-tier banking relationships for streamlined capital inflows.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-2xl font-serif mb-6">Partnership Architecture</h2>
                <ul className="space-y-4 text-lg text-muted-foreground list-disc pl-6 marker:text-primary">
                    <li>Retained strategic advisory models over purely transactional processing.</li>
                    <li>Quarterly boardroom compliance reviews.</li>
                    <li>Direct access to senior structural architects within our ecosystem.</li>
                </ul>
            </section>
        </article>
    );
}
