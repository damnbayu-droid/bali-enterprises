"use client";

import React, { useState } from "react";
import { Info, Merge, Network, Link as LinkIcon, AlertCircle } from "lucide-react";

export function KbliSynergyMap() {
    const [activeKbli, setActiveKbli] = useState<string | null>(null);

    const kblis = [
        {
            id: "hospitality",
            code: "55120",
            title: "Star Hotels",
            icon: Network,
            color: "border-blue-500 bg-blue-50 text-blue-700",
            desc: "Accommodation. Needs synergistic codes for integrated resorts (F&B, Spas).",
            connected: ["fb", "wellness"],
        },
        {
            id: "fb",
            code: "56101",
            title: "Restaurants",
            icon: Merge,
            color: "border-emerald-500 bg-emerald-50 text-emerald-700",
            desc: "Crucial for beach clubs or hotel-owned dining outlets.",
            connected: ["hospitality", "entertainment"],
        },
        {
            id: "wellness",
            code: "96122",
            title: "Spas / Wellness",
            icon: LinkIcon,
            color: "border-purple-500 bg-purple-50 text-purple-700",
            desc: "High risk of nominee usage. Strict zoning integration required.",
            connected: ["hospitality"],
        },
        {
            id: "entertainment",
            code: "93293",
            title: "Recreation",
            icon: AlertCircle,
            color: "border-amber-500 bg-amber-50 text-amber-700",
            desc: "Water sports, beach clubs. Often requires separate operating entities under a holding company.",
            connected: ["fb"],
        },
    ];

    return (
        <div className="w-full bg-white border border-border rounded-xl shadow-sm overflow-hidden my-8 print:break-inside-avoid">
            <div className="p-6 bg-slate-50 border-b border-border flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">KBLI Operational Synergy Map</h3>
                    <p className="text-sm text-muted-foreground mt-1">Interactive web indicating licensing dependencies and integration risks.</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-medium bg-white px-3 py-1.5 border border-border rounded-full shadow-sm text-muted-foreground">
                    <Info className="w-4 h-4 text-primary" />
                    Interactive Web
                </div>
            </div>

            <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center bg-slate-50/30">

                {/* Left Side: interactive grid of KBLIs */}
                <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                    {kblis.map((k) => (
                        <div
                            key={k.id}
                            onMouseEnter={() => setActiveKbli(k.id)}
                            onMouseLeave={() => setActiveKbli(null)}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${k.color} ${activeKbli === k.id || activeKbli === null || kblis.find(x => x.id === activeKbli)?.connected.includes(k.id)
                                    ? "opacity-100 scale-100 shadow-md"
                                    : "opacity-40 scale-95"
                                }`}
                        >
                            <k.icon className="w-8 h-8 mb-3 opacity-80" />
                            <h4 className="font-bold">{k.code}</h4>
                            <p className="text-xs font-semibold mt-1 uppercase tracking-wide opacity-90">{k.title}</p>
                        </div>
                    ))}
                </div>

                {/* Right side: details */}
                <div className="w-full md:w-1/2 bg-white border border-border rounded-xl p-6 min-h-[200px] flex items-center shadow-sm">
                    {activeKbli ? (
                        <div className="animate-in fade-in run-in">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="bg-slate-100 text-slate-800 text-xs font-bold px-2 py-1 rounded">KBLI {kblis.find(k => k.id === activeKbli)?.code}</span>
                                <h4 className="text-lg font-bold">{kblis.find(k => k.id === activeKbli)?.title}</h4>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                {kblis.find(k => k.id === activeKbli)?.desc}
                            </p>

                            <div className="border-t border-border pt-4">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-2">Synergizes with:</span>
                                <div className="flex flex-wrap gap-2">
                                    {kblis.find(k => k.id === activeKbli)?.connected.map(connId => {
                                        const conn = kblis.find(x => x.id === connId);
                                        return (
                                            <span key={connId} className="bg-primary/5 border border-primary/20 text-primary text-xs px-2 py-1 rounded-full font-medium">
                                                {conn?.code} - {conn?.title}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-muted-foreground flex flex-col items-center justify-center w-full text-center">
                            <Network className="w-12 h-12 text-slate-200 mb-3" />
                            <p>Hover over a KBLI sector to explore business integration risks and synergies.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
