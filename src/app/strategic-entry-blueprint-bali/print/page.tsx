import RegulatoryLandscapePage from "../regulatory-landscape-bali/page";
import LegalStructureScenariosPage from "../legal-structure-scenarios/page";
import CapitalAlignmentFrameworkPage from "../capital-alignment-framework/page";
import BusinessScopeArchitecturePage from "../business-scope-architecture/page";
import InvestorKitasSequencingPage from "../investor-kitas-sequencing/page";
import ZoningOperationalRiskPage from "../zoning-operational-risk/page";
import ImplementationRoadmapPage from "../implementation-roadmap/page";
import FiveYearStrategicOutlookPage from "../five-year-strategic-outlook/page";
import PartnershipRegulatorySafeguardPage from "../partnership-regulatory-safeguard/page";
import ForeignFounderEntryFrameworkPage from "../foreign-founder-entry-framework/page";

import { PrintTrigger } from "./print-trigger";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Strategic Entry Blueprint - Complete Document | Bali Enterprises",
    description: "Printable Master Document compiling all 10 strategic advisory reports.",
};

export default function ComprehensivePrintPage() {
    return (
        <div className="bg-white min-h-screen text-black">
            {/* Auto-print trigger client component */}
            <PrintTrigger />

            {/* Screen-only navigation */}
            <div className="fixed top-6 left-6 z-50 print-hidden">
                <Link
                    href="/strategic-entry-blueprint-bali"
                    className="inline-flex items-center px-4 py-2 bg-white border border-border rounded-md shadow-sm text-sm font-medium hover:bg-muted transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Hub
                </Link>
            </div>

            {/* Master Title Page */}
            <div className="max-w-4xl mx-auto px-6 py-24 min-h-[80vh] flex flex-col items-center justify-center text-center">
                <div className="mb-12">
                    <img
                        src="/image/logobalienterprises.webp"
                        alt="Bali Enterprises Logo"
                        className="h-24 w-auto mx-auto mb-8 opacity-90 grayscale contrast-125"
                    />
                </div>
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-6 border-b border-border pb-4 w-24 mx-auto">
                    Master Document
                </div>
                <h1 className="text-5xl md:text-6xl font-serif text-foreground leading-tight mb-8">
                    Strategic Entry Blueprint
                </h1>
                <p className="text-2xl text-muted-foreground font-light mb-16">
                    For Foreign Founders in Bali
                </p>

                <div className="mt-20 text-left w-full max-w-2xl border-t border-border pt-12">
                    <h3 className="font-serif text-2xl mb-6 text-center">Table of Contents</h3>
                    <ul className="space-y-3 text-lg text-muted-foreground w-full list-decimal list-inside pl-4">
                        <li>Regulatory Landscape in Bali</li>
                        <li>Legal Structure Scenarios</li>
                        <li>Capital Alignment Framework</li>
                        <li>Business Scope Architecture</li>
                        <li>Investor KITAS Sequencing</li>
                        <li>Zoning & Operational Risk Matrix</li>
                        <li>Implementation Roadmap</li>
                        <li>Five-Year Strategic Outlook</li>
                        <li>Partnership & Regulatory Safeguard</li>
                        <li>Foreign Founder Entry Framework</li>
                    </ul>
                </div>
            </div>

            {/* Page break before chapters start */}
            <div className="print:break-before-page"></div>

            {/* Chapters rendered sequentially */}
            <div className="print-chapter-container space-y-32 print:space-y-0">
                <div className="print:break-after-page"><RegulatoryLandscapePage /></div>
                <div className="print:break-after-page"><LegalStructureScenariosPage /></div>
                <div className="print:break-after-page"><CapitalAlignmentFrameworkPage /></div>
                <div className="print:break-after-page"><BusinessScopeArchitecturePage /></div>
                <div className="print:break-after-page"><InvestorKitasSequencingPage /></div>
                <div className="print:break-after-page"><ZoningOperationalRiskPage /></div>
                <div className="print:break-after-page"><ImplementationRoadmapPage /></div>
                <div className="print:break-after-page"><FiveYearStrategicOutlookPage /></div>
                <div className="print:break-after-page"><PartnershipRegulatorySafeguardPage /></div>
                <div className="print:break-after-page"><ForeignFounderEntryFrameworkPage /></div>
            </div>
        </div>
    );
}
