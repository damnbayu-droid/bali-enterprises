"use client";

import React, { useState } from "react";
import { Info, Users, Briefcase, TrendingUp, Handshake } from "lucide-react";

export function ProgressionModelFlow() {
    const [activeStage, setActiveStage] = useState<number>(3);

    const stages = [
        {
            id: 1,
            title: "Silent Capital Partner",
            icon: Handshake,
            level: "Entry Level",
            desc: "Purely passive investment in a PT PMA managed by others. Strict boundaries on day-to-day operations. Can utilize Investor KITAS (Index 313/314) without work rights.",
            focus: "Equity & Returns",
            reqs: "Minimum IDR 1B personal paid-in capital threshold.",
        },
        {
            id: 2,
            title: "Non-Executive Commissioner",
            icon: Users,
            level: "Advisory Level",
            desc: "Board-level oversight. Authorizes major strategic shifts and audits financials but cannot sign operational contracts or execute daily trades.",
            focus: "Governance & Approvals",
            reqs: "Named in Deed of Establishment as Komisaris.",
        },
        {
            id: 3,
            title: "Working Director (Direktur)",
            icon: Briefcase,
            level: "Operational Level",
            desc: "Full legal authority over the PT PMA. Can sign contracts, hire staff, and manage daily operations. Requires Ministry of Manpower taxation/approvals.",
            focus: "Daily Execution",
            reqs: "Requires RPTKA & Index 312 Working KITAS.",
        },
        {
            id: 4,
            title: "Ecosystem Builder",
            icon: TrendingUp,
            level: "Scaling Level",
            desc: "Managing a holding company structure that directs multiple subsidiary operating companies across F&B, tech, and real estate in Bali and Jakarta.",
            focus: "Venture Expansion",
            reqs: "Advanced holding corporate structure (Multi-Layering).",
        },
    ];

    return (
        <div className="w-full bg-white border border-border rounded-xl shadow-sm overflow-hidden my-8 print:break-inside-avoid">
            <div className="p-6 bg-slate-50 border-b border-border flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">The Progression Model</h3>
                    <p className="text-sm text-muted-foreground mt-1">Interactive roadmap mapping the foreign founder's operational involvement against regulatory constraints.</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-medium bg-white px-3 py-1.5 border border-border rounded-full shadow-sm text-muted-foreground">
                    <Info className="w-4 h-4 text-primary" />
                    Interactive Flow
                </div>
            </div>

            <div className="p-6 md:p-8 flex flex-col items-center">
                {/* Top Flow Navigation */}
                <div className="flex w-full justify-between relative mb-12">
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 z-0 hidden sm:block" />

                    {stages.map((stage) => (
                        <div
                            key={stage.id}
                            className="relative z-10 flex flex-col items-center cursor-pointer group w-1/4"
                            onClick={() => setActiveStage(stage.id)}
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${activeStage >= stage.id
                                    ? "bg-primary text-primary-foreground shadow-md ring-4 ring-primary/20 scale-110"
                                    : "bg-white text-slate-400 border-2 border-slate-200 group-hover:border-primary/50"
                                }`}>
                                <stage.icon className="w-5 h-5" />
                            </div>
                            <div className={`text-center mt-3 hidden sm:block transition-colors ${activeStage >= stage.id ? "text-primary font-bold" : "text-muted-foreground font-medium"
                                }`}>
                                <span className="text-xs tracking-wider uppercase block mb-1 opacity-70">{stage.level}</span>
                                <span className="text-sm">{stage.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content Display */}
                <div className="w-full max-w-2xl bg-slate-50 border border-slate-200 rounded-xl p-8 relative overflow-hidden min-h-[220px]">
                    {stages.map((stage) => (
                        <div
                            key={stage.id}
                            className={`transition-all duration-500 absolute inset-0 p-8 ${activeStage === stage.id ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-8 pointer-events-none"
                                }`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <stage.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-serif text-foreground">{stage.title}</h4>
                                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">{stage.level}</span>
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                {stage.desc}
                            </p>

                            <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-6">
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Primary Focus</span>
                                    <span className="text-sm font-medium text-slate-800">{stage.focus}</span>
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Key Requirement</span>
                                    <span className="text-sm font-medium text-slate-800">{stage.reqs}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
