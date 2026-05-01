import React from "react";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
    title: "Strategic Insights & Proposals | Bali Enterprises",
    description: "Corporate-grade structural advisory, legal frameworks, and investment models for expansion in Indonesia.",
};

export default function InsightsPage() {
    const list = [
        {
            title: "Company Registration Proposal (IT Services)",
            description: "Full-tier structural advisory for Foreign Investors deploying digital foundations inside 100% compliant thresholds setup.",
            slug: "company-registration-proposal-indonesia-it-services",
            type: "Proposal",
        }
    ];

    return (
        <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <Breadcrumbs 
                    items={[{ label: "Insights", href: "/insights" }]} 
                />
                <header className="border-b border-slate-200 pb-6 mb-12">
                    <h1 className="text-3xl font-serif font-bold text-slate-900">Advisory Insights</h1>
                    <p className="text-sm text-slate-500 mt-2">Professional frameworks and structural data supporting investment execution.</p>
                </header>

                <div className="grid grid-cols-1 gap-4">
                    {list.map((item, idx) => (
                        <Link 
                            key={idx}
                            href={`/insights/${item.slug}`}
                            className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 hover:shadow-sm transition group flex justify-between items-center"
                        >
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] font-semibold tracking-widest text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase">
                                        {item.type}
                                    </span>
                                </div>
                                <h2 className="text-lg font-serif font-bold text-slate-900 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h2>
                                <p className="text-sm text-slate-600 font-light mt-1 max-w-2xl">
                                    {item.description}
                                </p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-4" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
