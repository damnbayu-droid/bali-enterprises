"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";

export function ComplianceLayerCake() {
    const [activeLayer, setActiveLayer] = useState<number | null>(null);

    const layers = [
        {
            id: 1,
            name: "Federal DNI (Negative Investment List)",
            color: "bg-slate-900 text-white hover:bg-slate-800",
            height: "h-24",
            description: "The supreme federal regulation dictating foreign ownership caps (e.g., hospitality usually 100% open, local retail 0%).",
        },
        {
            id: 2,
            name: "Provincial Spatial Planning (RTRW)",
            color: "bg-slate-700 text-white hover:bg-slate-600",
            height: "h-20",
            description: "Bali's macro-zoning. Defines broad areas for agriculture, tourism, and settlement. Strict enforcement against concrete in green zones.",
        },
        {
            id: 3,
            name: "Regency/Kabupaten Zoning (RDTR)",
            color: "bg-slate-500 text-white hover:bg-slate-400",
            height: "h-16",
            description: "Micro-zoning down to the street level across Badung, Gianyar, etc. Determines the exact KBLI codes permitted on roughly a square-kilometer basis.",
        },
        {
            id: 4,
            name: "Banjar / Adat Regulations (Customary Law)",
            color: "bg-slate-300 text-slate-900 hover:bg-slate-200",
            height: "h-14",
            description: "Hyper-local customary ordinances. Can veto structural designs, dictate local hiring quotas, and require ceremonial donations.",
        },
    ];

    return (
        <div className="w-full bg-white border border-border rounded-xl shadow-sm overflow-hidden my-8 print:break-inside-avoid">
            <div className="p-6 bg-slate-50 border-b border-border flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">The Compliance Layer Cake</h3>
                    <p className="text-sm text-muted-foreground mt-1">Hierarchical visualization of Indonesian and Balinese regulatory jurisdictions.</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-medium bg-white px-3 py-1.5 border border-border rounded-full shadow-sm text-muted-foreground">
                    <Info className="w-4 h-4 text-primary" />
                    Interactive Stack
                </div>
            </div>

            <div className="flex flex-col md:flex-row p-6 md:p-10 gap-8 items-center bg-white relative">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-end gap-2 perspective-1000">
                    <div className="w-full max-w-sm flex flex-col gap-1 items-center z-10">
                        {layers.map((layer) => (
                            <button
                                key={layer.id}
                                onMouseEnter={() => setActiveLayer(layer.id)}
                                onMouseLeave={() => setActiveLayer(null)}
                                onClick={() => setActiveLayer(layer.id)}
                                className={`w-full ${layer.height} ${layer.color} border border-transparent rounded-lg shadow-sm font-semibold flex items-center justify-center transition-all duration-300 transform ${activeLayer === layer.id ? "scale-[1.03] z-20 shadow-lg ring-2 ring-primary ring-offset-2" : "hover:scale-[1.01]"
                                    }`}
                            >
                                {layer.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-6 bg-slate-50 border border-slate-100 rounded-xl min-h-[200px] flex flex-col justify-center">
                    {activeLayer ? (
                        <div className="animate-in fade-in slide-in-from-right-4">
                            <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2 block">
                                Jurisdiction Level {activeLayer}
                            </span>
                            <h4 className="text-xl font-bold text-foreground mb-3">
                                {layers.find(l => l.id === activeLayer)?.name}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                                {layers.find(l => l.id === activeLayer)?.description}
                            </p>
                        </div>
                    ) : (
                        <div className="text-center text-muted-foreground">
                            Hover over or tap a regulatory layer to view structural impact details.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
