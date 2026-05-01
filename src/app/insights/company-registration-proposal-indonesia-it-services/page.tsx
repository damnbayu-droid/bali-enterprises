import React from "react";
import ProposalContent from "./ProposalContent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
    title: "Company Registration Proposal Indonesia (IT Services) | Bali Enterprises",
    description: "Consulting-grade proposal covering PT PMA setup, capital criteria, licensing, and compliance for IT/Web development operations in Indonesia.",
    openGraph: {
        title: "Company Registration Proposal Indonesia (IT Services)",
        description: "Consulting-grade proposal covering PT PMA setup, licensing, and compliance for IT/Web development in Indonesia.",
        url: "https://bali.enterprises/insights/company-registration-proposal-indonesia-it-services",
        siteName: "Bali Enterprises",
        type: "article",
        images: [{ url: "/image/og-image.webp" }],
    }
};

export default function ProposalPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Company Registration Proposal in Indonesia (IT Services)",
        "description": "Consulting-grade proposal covering PT PMA setup, licensing, and compliance for IT/Web development.",
        "author": {
            "@type": "Organization",
            "name": "Bali Enterprises"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Bali Enterprises",
            "logo": {
                "@type": "ImageObject",
                "url": "https://bali.enterprises/image/logo.webp"
            }
        }
    };

    return (
        <div className="pt-24 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-6 pt-8">
                <Breadcrumbs 
                    items={[
                        { label: "Insights", href: "/insights" },
                        { label: "Company Registration Proposal", href: "/insights/company-registration-proposal-indonesia-it-services" }
                    ]} 
                />
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProposalContent />
        </div>
    );
}
