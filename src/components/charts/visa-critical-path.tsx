"use client";

import React, { useState } from "react";
import { ArrowDown, CheckCircle2, Circle, Clock, Building2, User, Landmark, ShieldCheck } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "PT PMA Deed of Establishment",
        icon: Building2,
        duration: "1-2 Weeks",
        actor: "Notary & Ministry of Law",
        details: "Foundational legal structure. Founders must be explicitly listed as Commissioners/Directors or Shareholders with IDR 1B+ paid-up capital.",
        status: "prerequisite",
    },
    {
        id: 2,
        title: "NIB & Standard Certifications",
        icon: ShieldCheck,
        duration: "1 Week",
        actor: "OSS System (BKPM)",
        details: "Business identification number activation. Required to sponsor visas and apply for specific KBLI operational licenses.",
        status: "prerequisite",
    },
    {
        id: 3,
        title: "Expatriate Placement Plan (RPTKA)",
        icon: Landmark,
        duration: "2-3 Weeks",
        actor: "Ministry of Manpower",
        details: "Mandatory for working directors (Index 312). Purely passive investors (Index 313/314) bypass this step entirely.",
        status: "active",
    },
    {
        id: 4,
        title: "Visa Approval (VITAS)",
        icon: User,
        duration: "1 Week",
        actor: "Directorate General of Immigration",
        details: "Electronic visa issued to the foreign national while offshore, authorizing entry into Indonesia for the purpose of KITAS conversion.",
        status: "pending",
    },
    {
        id: 5,
        title: "Biometrics & KITAS Issuance",
        icon: CheckCircle2,
        duration: "1-2 Weeks",
        actor: "Local Immigration Office (Bali)",
        details: "Applicant enters Indonesia, completes biometric screening, and receives the physical/electronic KITAS and Multiple Exit Re-entry Permit (MERP).",
        status: "final",
    },
];

export function VisaCriticalPath() {
    const [activeStep, setActiveStep] = useState<number>(3);

    return (
        <div className="w-full bg-white border border-border rounded-xl shadow-sm overflow-hidden my-8 print:break-inside-avoid">
            <div className="p-6 bg-slate-50 border-b border-border">
                <h3 className="text-xl font-serif font-bold text-foreground">The Critical Path: Equity to Visa</h3>
                <p className="text-sm text-muted-foreground mt-1">Interactive sequencing of PT PMA establishment through Investor KITAS issuance.</p>
            </div>

            <div className="flex flex-col md:flex-row p-6">
                {/* Left Side: Timeline */}
                <div className="w-full md:w-1/2 space-y-0">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`relative flex gap-4 p-4 rounded-lg cursor-pointer transition-all duration-200 ${activeStep === step.id ? "bg-slate-50 border border-slate-200 shadow-sm" : "hover:bg-slate-50/50 border border-transparent"
                                }`}
                            onClick={() => setActiveStep(step.id)}
                        >
                            <div className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 transition-colors ${activeStep === step.id ? "bg-primary text-primary-foreground" : "bg-slate-100 text-slate-500"
                                    }`}>
                                    <step.icon className="w-5 h-5" />
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`w-0.5 h-full absolute top-12 bottom-[-16px] left-[35px] ${activeStep > step.id ? "bg-primary" : "bg-slate-200"
                                        }`} />
                                )}
                            </div>

                            <div className="pt-2 pb-4">
                                <h4 className={`font-semibold ${activeStep === step.id ? "text-primary" : "text-foreground"}`}>
                                    {step.title}
                                </h4>
                                <div className="flex items-center gap-2 mt-1 text-xs font-medium text-slate-500">
                                    <Clock className="w-3.5 h-3.5" />
                                    {step.duration}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Details Panel */}
                <div className="w-full md:w-1/2 md:pl-8 mt-8 md:mt-0 flex items-center">
                    <div className="w-full h-full bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col justify-center transition-all">
                        {steps.map((step) => (
                            <div
                                key={`detail-${step.id}`}
                                className={`${activeStep === step.id ? "animate-in fade-in slide-in-from-right-4 block" : "hidden"}`}
                            >
                                <div className="flex items-center gap-3 mb-4 text-primary">
                                    <step.icon className="w-6 h-6" />
                                    <span className="font-semibold uppercase tracking-wider text-sm">Step 0{step.id}</span>
                                </div>
                                <h4 className="text-2xl font-serif text-foreground mb-4">{step.title}</h4>
                                <div className="space-y-4">
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Primary Actor</span>
                                        <p className="font-medium text-foreground">{step.actor}</p>
                                    </div>
                                    <div className="h-px w-full bg-border" />
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Execution Details</span>
                                        <p className="text-muted-foreground text-sm leading-relaxed mt-1">
                                            {step.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
