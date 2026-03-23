import React from "react";
import ProposalContent from "./ProposalContent";

export const metadata = {
    title: "Company Registration Proposal Indonesia (IT Services) | Bali Enterprises",
    description: "Consulting-grade proposal covering PT PMA setup, capital criteria, licensing, and compliance for IT/Web development operations in Indonesia.",
};

export default function ProposalPage() {
    return (
        <div className="pt-24 bg-slate-50 min-h-screen">
            <ProposalContent />
        </div>
    );
}
