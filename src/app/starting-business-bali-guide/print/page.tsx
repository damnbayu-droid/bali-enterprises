import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Globe, TrendingUp, Users, ShieldCheck, Scale, Building2, Banknote, ClipboardCheck, FileText, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { RiskNote } from "@/components/ui/risk-note";

// Charts
import { ZoningMatrix } from "@/components/charts/zoning-matrix";
import { CapitalPhasingCurve } from "@/components/charts/capital-phasing-curve";
import { VisaCriticalPath } from "@/components/charts/visa-critical-path";
import { ProgressionModelFlow } from "@/components/charts/progression-model-flow";
import { ComplianceCalendar } from "@/components/charts/compliance-calendar";

import { PrintTrigger } from "./print-trigger";

export const metadata: Metadata = {
    title: "The Complete Guide to Starting a Business in Bali - Print Edition | Bali Enterprises",
    description: "Complete advisory master document for foreign investment in Bali & Indonesia.",
};

export default function StartupGuidePrintPage() {
    return (
        <div className="bg-white min-h-screen text-black">
            <PrintTrigger />

            {/* Screen-only navigation */}
            <div className="fixed top-6 left-6 z-50 print-hidden">
                <Link
                    href="/starting-business-bali-guide"
                    className="inline-flex items-center px-4 py-2 bg-white border border-border rounded-md shadow-sm text-sm font-medium hover:bg-muted transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Knowledge Hub
                </Link>
            </div>

            {/* Master Title Page */}
            <div className="max-w-4xl mx-auto px-12 py-32 min-h-screen flex flex-col items-center justify-center text-center">
                <div className="mb-12">
                    <img
                        src="/image/Logobalienterprises.webp"
                        alt="Bali Enterprises Logo"
                        className="h-24 w-auto mx-auto mb-8 opacity-90 grayscale contrast-125"
                    />
                </div>
                <div className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-8 border-b border-border pb-4 w-32 mx-auto">
                    Master Guide
                </div>
                <h1 className="text-5xl md:text-7xl font-serif text-foreground tracking-tight leading-[1.1] mb-8">
                    Starting a Business in <br />
                    <span className="italic text-muted-foreground">Bali & Indonesia</span>
                </h1>
                <p className="text-2xl text-muted-foreground font-light mb-16 tracking-wide">
                    The Complete Strategic & Legal Framework for Foreign Founders
                </p>

                <div className="mt-20 text-left w-full max-w-2xl border-t border-border pt-12">
                    <h3 className="font-serif text-2xl mb-8 text-center text-foreground/80">Table of Contents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-sm text-muted-foreground">
                        <div className="space-y-3">
                            <div>01. Market Context</div>
                            <div>02. Local Network & Ecosystem</div>
                            <div>03. Legal Framework & Ownership</div>
                            <div>04. PT PMA Corporate Structure</div>
                            <div>05. Investment Capital Rules</div>
                            <div>06. Setup Costs & Phasing</div>
                            <div>07. Corporate Banking Strategy</div>
                        </div>
                        <div className="space-y-3">
                            <div>08. Step-by-Step Registration</div>
                            <div>09. Immigration & Investor KITAS</div>
                            <div>10. Fiscal & Taxation Systems</div>
                            <div>11. Land Zoning & Villa Legality</div>
                            <div>12. Ongoing Compliance Calendar</div>
                            <div>13. Regional Business Benchmarks</div>
                            <div>14. Final Readiness Checklist</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Page Break */}
            <div className="print:break-before-page"></div>

            {/* Content Sections - Flattened for PDF */}
            <div className="max-w-4xl mx-auto px-12 py-20 space-y-32">
                
                {/* 01. Market Context */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary mb-4">
                        <TrendingUp className="h-8 w-8" />
                        <h2 className="text-3xl font-serif">01. Why Bali Is Becoming a Global Business Hub</h2>
                    </div>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg leading-relaxed">
                            Over the past decade, Bali has transformed into a global hub attracting entrepreneurs, investors, and digital founders. 
                            Strategically located as a gateway to Southeast Asia's digital economy, it offers unmatched lifestyle appeal combined with access to Indonesia's 270+ million population.
                        </p>
                        <div className="grid grid-cols-2 gap-8 my-10">
                            <div className="p-6 rounded-xl border bg-muted/5">
                                <h4 className="font-bold text-sm mb-2">Strategic Location</h4>
                                <p className="text-xs text-muted-foreground">Gateway to Southeast Asia's digital economy.</p>
                            </div>
                            <div className="p-6 rounded-xl border bg-muted/5">
                                <h4 className="font-bold text-sm mb-2">Massive Market</h4>
                                <p className="text-xs text-muted-foreground">Access to Indonesia's 270+ million population.</p>
                            </div>
                            <div className="p-6 rounded-xl border bg-muted/5">
                                <h4 className="font-bold text-sm mb-2">Operational Efficiency</h4>
                                <p className="text-xs text-muted-foreground">Lower operating costs compared with Singapore or HK.</p>
                            </div>
                            <div className="p-6 rounded-xl border bg-muted/5">
                                <h4 className="font-bold text-sm mb-2">Lifestyle Draw</h4>
                                <p className="text-xs text-muted-foreground">Unmatched international lifestyle appeal for talent.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* 02. Ecosystem */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4 text-primary mb-4">
                        <Users className="h-8 w-8" />
                        <h2 className="text-3xl font-serif">02. The Startup Ecosystem in Bali</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <h4 className="font-serif text-lg font-bold border-b border-primary/20 pb-2">Canggu</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Hub for SaaS, Web3, and digital agencies. The "Silicon Valley of Bali".</p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-serif text-lg font-bold border-b border-primary/20 pb-2">Ubud</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Popular with wellness entrepreneurs, creative founders, and educators.</p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-serif text-lg font-bold border-b border-primary/20 pb-2">Seminyak</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">Focus on hospitality startups, lifestyle brands, and luxury services.</p>
                        </div>
                    </div>
                </section>

                <div className="print:break-after-page"></div>

                {/* 03 & 04. Legal */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary mb-4">
                        <ShieldCheck className="h-8 w-8" />
                        <h2 className="text-3xl font-serif">03. Legal Framework & Ownership</h2>
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg leading-relaxed">
                            Foreigners can legally operate businesses in Indonesia through a PT PMA (Foreign Investment Company). 
                            Ownership is regulated under Presidential Regulation No.49/2021 (Positive Investment List).
                        </p>
                        <div className="border rounded-xl bg-muted/5 p-8">
                            <h3 className="font-serif text-xl mb-6">Foreign Ownership Allowances (KBLI)</h3>
                            <table className="w-full text-sm">
                                <thead className="bg-muted text-[10px] tracking-widest font-bold border-b">
                                    <tr>
                                        <th className="px-6 py-4 text-left uppercase">Industry Sector</th>
                                        <th className="px-6 py-4 text-left uppercase">Ownership Limit</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr><td className="px-6 py-4">IT & Software Services</td><td className="px-6 py-4 font-bold text-primary">100%</td></tr>
                                    <tr><td className="px-6 py-4">Digital Marketing & Creative</td><td className="px-6 py-4 font-bold text-primary">100%</td></tr>
                                    <tr><td className="px-6 py-4">Management Consulting</td><td className="px-6 py-4 font-bold text-primary">100%</td></tr>
                                    <tr><td className="px-6 py-4">Hotel & Hospitality</td><td className="px-6 py-4 font-bold text-primary">100%</td></tr>
                                    <tr><td className="px-6 py-4">Construction Services</td><td className="px-6 py-4">Up to 67%</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <Separator />

                {/* 05 - 07. Corporate Architecture */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary mb-4">
                        <Building2 className="h-8 w-8" />
                        <h2 className="text-3xl font-serif">04. PT PMA Corporate Structure & Capital</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="p-6 border rounded-xl bg-muted/5">
                            <div className="text-xs font-bold text-primary uppercase mb-2">Min. Shareholders</div>
                            <div className="text-4xl font-serif">02</div>
                        </div>
                        <div className="p-6 border rounded-xl bg-muted/5">
                            <div className="text-xs font-bold text-primary uppercase mb-2">Min. Directors</div>
                            <div className="text-4xl font-serif">01</div>
                        </div>
                        <div className="p-6 border rounded-xl bg-muted/5">
                            <div className="text-xs font-bold text-primary uppercase mb-2">Min. Commissioners</div>
                            <div className="text-4xl font-serif">01</div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-serif">Minimum Investment Capital (10 Billion IDR)</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Indonesian law requires a minimum investment plan of IDR 10 Billion per business classification. 
                            This is an investment commitment rather than an immediate upfront requirement for all sectors.
                        </p>
                        <div className="border rounded-xl p-8 bg-card">
                            <CapitalPhasingCurve />
                            <p className="text-[10px] text-center text-muted-foreground mt-4 uppercase tracking-widest font-bold">Investment Phasing Analysis</p>
                        </div>
                    </div>
                </section>

                <div className="print:break-after-page"></div>

                {/* 08. Step-by-Step Registration */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary mb-4">
                        <ClipboardCheck className="h-8 w-8" />
                        <h2 className="text-3xl font-serif">05. Step-by-Step Company Registration</h2>
                    </div>
                    <p className="text-lg leading-relaxed">
                        The typical PT PMA setup takes 2–6 weeks, following a strict regulatory sequence managed via the OSS RBA system.
                    </p>
                    <div className="w-full border rounded-xl p-10 bg-card">
                        <ProgressionModelFlow />
                    </div>
                    <AdvisoryInsight title="OSS RBA Compliance">
                        Ensure your KBLI codes are strictly verified before notarial deed submission. Indonesia now uses the Risk-Based Approach (OSS RBA).
                    </AdvisoryInsight>
                </section>

                <Separator />

                {/* 09. Visas */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary mb-4">
                        <Globe className="h-8 w-8" />
                        <h2 className="text-3xl font-serif">06. Investor Visa and KITAS</h2>
                    </div>
                    <p className="text-lg leading-relaxed">
                        Foreign shareholders obtain residency through the Investor KITAS (Index E23/E28). 
                        This provides multiple entry privileges and residency for 1 or 2 years.
                    </p>
                    <div className="w-full border rounded-xl p-10 bg-card">
                        <VisaCriticalPath />
                    </div>
                </section>

                <div className="print:break-after-page"></div>

                {/* 10. Taxation */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary mb-4">
                        <Banknote className="h-8 w-8" />
                        <h2 className="text-3xl font-serif">07. Fiscal & Taxation Systems</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-8 rounded-xl border bg-card">
                            <div className="text-4xl font-serif text-primary mb-2">0.5%</div>
                            <div className="text-xs font-bold uppercase tracking-widest">SME/Startup Tax</div>
                            <div className="text-[10px] text-muted-foreground mt-2">First 3 Years (Revenue &lt; 4.8B IDR)</div>
                        </div>
                        <div className="p-8 rounded-xl border bg-card">
                            <div className="text-4xl font-serif text-primary mb-2">22%</div>
                            <div className="text-xs font-bold uppercase tracking-widest">Standard Corporate</div>
                        </div>
                        <div className="p-8 rounded-xl border bg-card">
                            <div className="text-4xl font-serif text-primary mb-2">11%</div>
                            <div className="text-xs font-bold uppercase tracking-widest">Standard VAT</div>
                        </div>
                    </div>
                    <RiskNote variant="destructive" title="Nominee Risk Warning">
                        Nominee structures are technically invalid under the Investment Law. Risks include loss of legal control and severe regulatory penalties.
                    </RiskNote>
                </section>

                <Separator />

                {/* 11. Zoning */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary mb-4">
                        <MapPin className="h-8 w-8" />
                        <h2 className="text-3xl font-serif">08. Land Zoning & Villa Operations</h2>
                    </div>
                    <p className="text-lg leading-relaxed">
                        Operational legality is tied directly to land zoning. Bali uses color-coded zones to determine permissible activity. 
                        Short-term accommodation requires a Pondok Wisata or Tourism license.
                    </p>
                    <div className="border rounded-xl overflow-hidden bg-card">
                        <div className="p-6 border-b bg-muted/10">
                            <h4 className="font-serif text-lg">Zoning Legality Matrix</h4>
                        </div>
                        <div className="p-8">
                            <ZoningMatrix isPrint={true} />
                        </div>
                    </div>
                </section>

                <div className="print:break-after-page"></div>

                {/* 12. Compliance Calendar */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4 text-primary mb-4">
                        <FileText className="h-8 w-8" />
                        <h2 className="text-3xl font-serif">09. Ongoing Compliance Calendar</h2>
                    </div>
                    <p className="text-lg leading-relaxed">
                        A PT PMA requires ongoing monthly and quarterly reporting (LKPM, Tax, Payroll) to remain in good standing.
                    </p>
                    <div className="w-full border rounded-xl p-10 bg-card">
                        <ComplianceCalendar />
                    </div>
                </section>

                <Separator />

                {/* Final Checklist */}
                <section className="space-y-12 pb-24">
                    <div className="flex items-center gap-4 text-primary mb-4">
                        <ClipboardCheck className="h-8 w-8" />
                        <h2 className="text-3xl font-serif">10. Practical Investor Checklist</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            "Confirm sector eligibility",
                            "Prepare investment capital",
                            "Establish PT PMA",
                            "Obtain visas",
                            "Secure office location",
                            "Set up corporate accounting",
                            "Monthly tax compliance",
                            "Quarterly LKPM reporting"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 rounded-lg border bg-muted/5">
                                <div className="h-6 w-6 rounded-full border border-primary flex items-center justify-center text-xs font-bold text-primary">
                                    {i + 1}
                                </div>
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

            </div>

            {/* Footer / Contact for PDF */}
            <div className="bg-muted px-12 py-24 border-t border-border flex flex-col items-center text-center">
                <img
                    src="/image/Logobalienterprises.webp"
                    alt="Logo"
                    className="h-12 w-auto mb-8 grayscale opacity-60"
                />
                <h3 className="text-2xl font-serif mb-4">Deep Advisory Support</h3>
                <p className="text-muted-foreground max-w-xl leading-relaxed mb-12">
                    For detailed consultations on company formation, taxation, and immigration in Indonesia, contact our specialized advisory team.
                </p>
                <div className="space-y-2 text-xs font-bold uppercase tracking-widest text-primary/60">
                    <div>www.bali.enterprises</div>
                    <div className="flex gap-8 justify-center mt-4">
                        <span>Bali</span>
                        <span>Jakarta</span>
                        <span>All Indonesia</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
