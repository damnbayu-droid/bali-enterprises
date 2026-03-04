"use client";

import React, { useState } from "react";
import { Calendar, Info, Play, CheckCircle2 } from "lucide-react";

export function DeploymentGantt() {
    const [activePhase, setActivePhase] = useState<number | null>(null);

    const phases = [
        {
            id: 1,
            name: "Phase 1: Foundation (Months 1-3)",
            color: "bg-slate-800",
            width: "w-1/4",
            tasks: ["Legal Establishment (PT PMA)", "Initial Capital Injection", "Investor KITAS Approval", "Bank Account Activation"],
        },
        {
            id: 2,
            name: "Phase 2: Development (Months 4-12)",
            color: "bg-slate-600",
            width: "w-1/3",
            tasks: ["Land Acquisition / Due Diligence", "PBG (Building Permit) Approval", "Construction Commencement", "Vendor Contracting"],
        },
        {
            id: 3,
            name: "Phase 3: Operations (Months 13-18)",
            color: "bg-slate-400",
            width: "w-1/4",
            tasks: ["Pre-opening Operations", "Staff Hiring & RPTKA limits", "Marketing Rollout", "Soft Launch"],
        },
        {
            id: 4,
            name: "Phase 4: Scale (Months 19-24)",
            color: "bg-primary/80",
            width: "w-1/6",
            tasks: ["LKPM Investment Finalization", "Grand Opening", "Tax Consolidation Audit", "Expansion Planning"],
        },
    ];

    return (
        <div className="w-full bg-white border border-border rounded-xl shadow-sm overflow-hidden my-8 print:break-inside-avoid">
            <div className="p-6 bg-slate-50 border-b border-border flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">24-Month Deployment Gantt Chart</h3>
                    <p className="text-sm text-muted-foreground mt-1">Timeline visualization mapping regulatory milestones against operational execution.</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-medium bg-white px-3 py-1.5 border border-border rounded-full shadow-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    Interactive Timeline
                </div>
            </div>

            <div className="p-6 md:p-10">
                {/* Timeline Header */}
                <div className="flex w-full mb-4 text-xs font-semibold text-slate-400 uppercase tracking-wider relative px-2">
                    <div className="w-1/4 text-left">Months 1-6</div>
                    <div className="w-1/4 text-center">Months 7-12</div>
                    <div className="w-1/4 text-center">Months 13-18</div>
                    <div className="w-1/4 text-right">Months 19-24</div>
                    <div className="absolute bottom-[-10px] left-0 right-0 h-px bg-slate-200" />
                </div>

                {/* Gantt Bars */}
                <div className="space-y-4 mt-8">
                    {phases.map((phase) => (
                        <div
                            key={phase.id}
                            className="relative h-12 flex group cursor-pointer"
                            onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                            onMouseEnter={() => setActivePhase(phase.id)}
                        >
                            <div
                                className={`absolute h-full rounded-md shadow-sm transition-all duration-300 flex items-center px-4 overflow-hidden ${phase.color} ${phase.width} ${activePhase === phase.id ? "scale-y-110 ring-2 ring-primary ring-offset-2 z-10" : "opacity-90 hover:opacity-100"
                                    }`}
                                style={{
                                    left: phase.id === 1 ? '0%' : phase.id === 2 ? '25%' : phase.id === 3 ? '58%' : '83%'
                                }}
                            >
                                <span className="text-white text-xs font-bold truncate whitespace-nowrap">{phase.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Details Panel */}
                <div className="mt-8 bg-slate-50 p-6 rounded-xl border border-border min-h-[180px] transition-all">
                    {activePhase ? (
                        <div className="animate-in fade-in slide-in-from-bottom-4">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-3 h-3 rounded-full ${phases.find(p => p.id === activePhase)?.color}`} />
                                <h4 className="text-lg font-bold text-foreground">{phases.find(p => p.id === activePhase)?.name}</h4>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {phases.find(p => p.id === activePhase)?.tasks.map((task, i) => (
                                    <div key={i} className="flex gap-3 items-start p-3 bg-white rounded border border-slate-100 shadow-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                        <span className="text-sm font-medium text-slate-700">{task}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="h-full w-full flex flex-col items-center justify-center text-muted-foreground opacity-70">
                            <Play className="w-8 h-8 mb-2 text-slate-300" />
                            <p>Hover over or tap a timeline phase to view operational milestones.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
