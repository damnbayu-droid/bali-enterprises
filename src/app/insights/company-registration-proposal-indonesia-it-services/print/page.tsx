import React from "react";
import ProposalContent from "../ProposalContent";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Using existing print trigger if available or inline useEffect client wrapper fallback
import { PrintTrigger } from "../../../strategic-entry-blueprint-bali/print/print-trigger";

export const metadata = {
    title: "Company Registration Proposal (Print Version) | Bali Enterprises",
    description: "Printable Master Proposal suitable for PDF Export guidelines.",
};

export default function ProposalPrintPage() {
    return (
        <div className="bg-white min-h-screen text-black">
            <PrintTrigger />
            
            {/* Screen-only navigation back */}
            <div className="fixed top-6 left-6 z-50 print:hidden">
                <Link
                    href="/insights/company-registration-proposal-indonesia-it-services"
                    className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-md shadow-sm text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Proposal
                </Link>
            </div>

            <ProposalContent isPrint={true} />
        </div>
    );
}
