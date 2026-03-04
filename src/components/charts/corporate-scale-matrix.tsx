"use client";

import React from "react";
import { Check, X, Info } from "lucide-react";

export function CorporateScaleMatrix() {
    const data = [
        { feature: "Required Paid-Up Capital", single: "IDR 10 Billion", holding: "IDR 10B/Entity", nominee: "Illegal" },
        { feature: "Investor KITAS Capacity", single: "Up to 5", holding: "Unlimited (across subs)", nominee: "None" },
        { feature: "Asset Protection", single: "Moderate", holding: "High (Ring-fenced)", nominee: "Zero" },
        { feature: "Tax Optimization", single: "Standard Corporate Rate", holding: "Consolidated Dividends", nominee: "High Audit Risk" },
        { feature: "Exit / M&A Friction", single: "Moderate", holding: "Low (Clean Equity Sale)", nominee: "Very High" },
    ];

    return (
        <div className="w-full bg-white border border-border rounded-xl shadow-sm overflow-hidden my-8 print:break-inside-avoid">
            <div className="p-6 bg-slate-50 border-b border-border flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">Corporate Scale & Risk Matrix</h3>
                    <p className="text-sm text-muted-foreground mt-1">Comparative structural analysis for foreign market entry.</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-medium bg-white px-3 py-1.5 border border-border rounded-full shadow-sm text-muted-foreground">
                    <Info className="w-4 h-4 text-primary" />
                    Data Matrix
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-100/50">
                            <th className="p-4 border-b border-border font-semibold text-foreground w-1/4">Structural Metric</th>
                            <th className="p-4 border-b border-border font-semibold text-primary w-1/4">Single PT PMA</th>
                            <th className="p-4 border-b border-border font-semibold text-primary w-1/4 bg-blue-50/30">Holding Company PT PMA</th>
                            <th className="p-4 border-b border-border font-semibold text-rose-600 w-1/4">Local Nominee Structure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition-colors">
                                <td className="p-4 border-b border-border font-medium text-slate-700">{row.feature}</td>
                                <td className="p-4 border-b border-border text-slate-600">{row.single}</td>
                                <td className="p-4 border-b border-border font-medium text-slate-800 bg-blue-50/10">{row.holding}</td>
                                <td className="p-4 border-b border-border text-rose-500 font-medium">{row.nominee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="p-6 bg-slate-50 text-sm text-muted-foreground">
                <strong>Advisory Note:</strong> Transitioning from a Nominee structure to a legal PT PMA later triggers severe capital gains taxes. The Holding Company model (incorporating an umbrella entity that owns operating subsidiaries) is the only scalable model for diversified investments (e.g., F&B, Real Estate, and Tech).
            </div>
        </div>
    );
}
