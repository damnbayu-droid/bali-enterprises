"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Info } from "lucide-react";

type ZoneStatus = "safe" | "warning" | "danger" | "prohibited";

interface ZoneData {
    id: string;
    name: string;
    color: string;
    status: ZoneStatus;
    description: string;
    tourismAllowed: boolean;
    commercialAllowed: boolean;
    residentialAllowed: boolean;
}

const zones: ZoneData[] = [
    {
        id: "pariwisata",
        name: "Pariwisata (Tourism)",
        color: "bg-emerald-500",
        status: "safe",
        description: "Designated for commercial tourism. Hotels, beach clubs, and commercial villas are fully legal provided PBG matches.",
        tourismAllowed: true,
        commercialAllowed: true,
        residentialAllowed: true,
    },
    {
        id: "pemukiman",
        name: "Pemukiman (Residential)",
        color: "bg-amber-500",
        status: "warning",
        description: "Strictly for long-term living. Short-term rentals (Airbnb) are technically illegal and currently facing heavy enforcement.",
        tourismAllowed: false,
        commercialAllowed: false,
        residentialAllowed: true,
    },
    {
        id: "perdagangan",
        name: "Perdagangan (Commercial)",
        color: "bg-blue-500",
        status: "safe",
        description: "Retail, offices, and F&B. Not automatically zoned for hotels unless specifically integrated.",
        tourismAllowed: false,
        commercialAllowed: true,
        residentialAllowed: false,
    },
    {
        id: "pertanian",
        name: "Pertanian (Agriculture/Green)",
        color: "bg-rose-500",
        status: "prohibited",
        description: "Green zone. Absolute prohibition on permanent concrete structures or commercial activities. High risk of demolition.",
        tourismAllowed: false,
        commercialAllowed: false,
        residentialAllowed: false,
    },
];

export function ZoningMatrix({ isPrint = false }: { isPrint?: boolean }) {
    const [activeZone, setActiveZone] = useState<ZoneData | null>(zones[0]);

    const StatusIcon = ({ status }: { status: boolean }) => {
        return status ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        ) : (
            <XCircle className="w-5 h-5 text-rose-500" />
        );
    };

    if (isPrint) {
        return (
            <div className="space-y-12">
                {zones.map((zone) => (
                    <div key={zone.id} className="border rounded-xl p-8 bg-white break-inside-avoid">
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-4 h-4 rounded-full ${zone.color}`} />
                            <h4 className="text-2xl font-serif text-foreground">{zone.name}</h4>
                        </div>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {zone.description}
                        </p>
                        <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
                            <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="text-sm text-muted-foreground font-medium mb-3">Tourism</span>
                                <StatusIcon status={zone.tourismAllowed} />
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="text-sm text-muted-foreground font-medium mb-3">Retail / Office</span>
                                <StatusIcon status={zone.commercialAllowed} />
                            </div>
                            <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                                <span className="text-sm text-muted-foreground font-medium mb-3">Residential</span>
                                <StatusIcon status={zone.residentialAllowed} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="w-full bg-white border border-border rounded-xl shadow-sm overflow-hidden my-8">
            <div className="p-6 bg-slate-50 border-b border-border flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">Interactive Zoning Identification Matrix</h3>
                    <p className="text-sm text-muted-foreground mt-1">Select a zone classification to view structural legality data.</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-medium bg-white px-3 py-1.5 border border-border rounded-full shadow-sm text-muted-foreground">
                    <Info className="w-4 h-4 text-primary" />
                    Interactive Component
                </div>
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Left column: Zone Selectors */}
                <div className="w-full md:w-1/3 border-r border-border bg-slate-50/50 p-4 space-y-2">
                    {zones.map((zone) => (
                        <button
                            key={zone.id}
                            onClick={() => setActiveZone(zone)}
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-all duration-200 flex items-center gap-3 ${activeZone?.id === zone.id
                                    ? "bg-white border-primary/40 shadow-sm ring-1 ring-primary/20"
                                    : "bg-transparent border-transparent hover:bg-slate-100 hover:border-slate-200"
                                }`}
                        >
                            <div className={`w-3 h-3 rounded-full ${zone.color}`} />
                            <span className={`font-medium ${activeZone?.id === zone.id ? "text-primary" : "text-muted-foreground"}`}>
                                {zone.name}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Right column: Details and Matrix */}
                <div className="w-full md:w-2/3 p-6 md:p-8 bg-white min-h-[300px]">
                    {activeZone ? (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-4 h-4 rounded-full ${activeZone.color}`} />
                                <h4 className="text-2xl font-serif text-foreground">{activeZone.name}</h4>
                            </div>

                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                {activeZone.description}
                            </p>

                            <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
                                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <span className="text-sm text-muted-foreground font-medium mb-3">Commercial Tourism</span>
                                    <StatusIcon status={activeZone.tourismAllowed} />
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <span className="text-sm text-muted-foreground font-medium mb-3">Retail / Office</span>
                                    <StatusIcon status={activeZone.commercialAllowed} />
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <span className="text-sm text-muted-foreground font-medium mb-3">Long-Term Living</span>
                                    <StatusIcon status={activeZone.residentialAllowed} />
                                </div>
                            </div>

                            {activeZone.status === "warning" && (
                                <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
                                    <AlertTriangle className="w-5 h-5 shrink-0" />
                                    <p><strong>Enforcement Warning:</strong> Operating daily rentals (Airbnb/Booking.com) in this zone carries a high risk of site sealing by Satpol PP.</p>
                                </div>
                            )}
                            {activeZone.status === "prohibited" && (
                                <div className="mt-6 flex items-start gap-3 p-4 bg-rose-50 border border-rose-200 rounded-lg text-rose-800 text-sm">
                                    <XCircle className="w-5 h-5 shrink-0" />
                                    <p><strong>Critical Risk:</strong> Any construction here violates provincial spatial planning data. Ownership models masking actual use will fail compliance audits.</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="h-full flex items-center justify-center text-muted-foreground">
                            Select a zone to view compliance data.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
