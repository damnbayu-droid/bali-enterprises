"use client";

import React, { useState } from "react";
import { AlertCircle, FileText, Landmark, Clock, CheckSquare } from "lucide-react";

export function ComplianceCalendar() {
    const [activeTab, setActiveTab] = useState<number>(1);

    const tabs = [
        { id: 1, name: "Monthly", icon: Clock },
        { id: 2, name: "Quarterly", icon: CheckSquare },
        { id: 3, name: "Annual", icon: Landmark },
    ];

    const content: Record<number, any> = {
        1: {
            items: [
                { title: "BPJS Manpower & Health Contributions", desc: "Mandatory social security and healthcare payments for all local and expatriate staff.", risk: "Low" },
                { title: "PPh 21 & 23 Withholding Taxes", desc: "Employee income tax withholding and vendor withholding tax declarations.", risk: "Medium" },
            ],
            warning: "Missing monthly tax deposits incurs a 2% monthly compounding interest penalty."
        },
        2: {
            items: [
                { title: "LKPM Investment Realization Report", desc: "Mandatory filing to BKPM proving the utilization of the IDR 10 Billion paid-up capital.", risk: "Critical" },
                { title: "Corporate Income Tax Installments (PPh 25)", desc: "Pre-paid corporate tax installments based on previous year performance.", risk: "Medium" }
            ],
            warning: "Failure to file LKPM for three consecutive quarters triggers immediate NIB (Business License) suspension and subsequent KITAS revocation."
        },
        3: {
            items: [
                { title: "Annual Corporate Tax Return (SPT Tahunan)", desc: "Audited financial reconciliation due April 30th of the following fiscal year.", risk: "High" },
                { title: "Expatriate Skill & Knowledge Transfer Report", desc: "Proof that foreign directors/experts have trained their required local counterparts.", risk: "Medium" },
                { title: "RPTKA / IMTA Renewals", desc: "Extension of the foreign worker expatriate placement plan (if on 1-year KITAS).", risk: "High" }
            ],
            warning: "Annual tax audits are aggressively targeting PT PMAs claiming sustained net losses while directors maintain high-visibility lifestyles (villa construction, etc)."
        }
    };

    return (
        <div className="w-full bg-white border border-border rounded-xl shadow-sm overflow-hidden my-8 print:break-inside-avoid">
            <div className="p-6 bg-slate-50 border-b border-border">
                <h3 className="text-xl font-serif font-bold text-foreground">Reporting Compliance Calendar</h3>
                <p className="text-sm text-muted-foreground mt-1">Cyclical regulatory obligations separating passive ownership from active compliance.</p>
            </div>

            <div className="flex border-b border-border">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 py-4 text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${activeTab === tab.id ? "border-b-2 border-primary text-primary bg-white" : "text-muted-foreground hover:bg-slate-50 hover:text-foreground"
                            }`}
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.name}
                    </button>
                ))}
            </div>

            <div className="p-6 md:p-8 min-h-[300px]">
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="space-y-4 mb-8">
                        {content[activeTab].items.map((item: any, i: number) => (
                            <div key={i} className="flex flex-col md:flex-row gap-4 p-5 border border-slate-100 rounded-lg shadow-sm hover:border-slate-300 transition-colors">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <FileText className="w-5 h-5 text-slate-400" />
                                        <h4 className="font-bold text-slate-800">{item.title}</h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed pl-7">{item.desc}</p>
                                </div>
                                <div className="flex items-center justify-start md:justify-end pl-7 md:pl-0">
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full border ${item.risk === 'Critical' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                                            item.risk === 'High' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                                                'bg-slate-50 text-slate-600 border-slate-200'
                                        }`}>
                                        {item.risk} Risk
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
                        <AlertCircle className="w-5 h-5 shrink-0" />
                        <p><strong>Regulatory Advisory:</strong> {content[activeTab].warning}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
