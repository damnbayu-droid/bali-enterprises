"use client";

import React from "react";
import { ArrowDownToLine, CheckCircle2, AlertCircle } from "lucide-react";

export default function ProposalContent({ isPrint = false }: { isPrint?: boolean }) {
    return (
        <div className={`max-w-4xl mx-auto px-6 py-16 ${isPrint ? 'bg-white text-black' : 'text-slate-800'}`}>
            
            {/* Page Header (H1) */}
            <header className="border-b border-slate-200 pb-8 mb-12 text-center">
                <div className="text-sm font-semibold tracking-wider text-slate-500 uppercase mb-3">
                    Boutique Advisory & Legal Proposal
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight">
                    Company Registration Proposal in Indonesia
                </h1>
                <p className="text-lg text-slate-600 mt-2 font-light">
                    Web Development & IT Services – Foreign Investor Structure
                </p>
            </header>

            {/* EXECUTIVE SUMMARY */}
            <section className="bg-slate-50 border border-slate-200 rounded-lg p-8 mb-16 shadow-sm">
                <h2 className="text-xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    Executive Summary
                </h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                        <ul className="space-y-3">
                            <li><strong className="text-slate-900">Recommended Structure:</strong> Penanaman Modal Asing (PT PMA)</li>
                            <li><strong className="text-slate-900">Ownership Eligibility:</strong> 100% Foreign Shareholder (Russian National)</li>
                            <li><strong className="text-slate-900">Macro Sector:</strong> IT / Web Development (KBLI Compliant)</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-3">
                            <li><strong className="text-slate-900">Timeline:</strong> 3 – 12 weeks (Risk-based licensing dependent)</li>
                            <li><strong className="text-slate-900">Capital Plan:</strong> IDR 10 Billion investment criteria</li>
                            <li><strong className="text-slate-900">Visa Protocol:</strong> Investor KITAS (Operational or Non-Operational)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CONTENT START: 25 Topics / 50 Sections */}
            <div className="space-y-16">

                {/* TOPIC 1: SECTION 1–2 - Project Overview */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">01</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Project Overview</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                This proposal covers the legal and operational framework for incorporating an IT/Software company in Indonesia supporting foreign investors (specifically Russian Federation individuals), facilitating digital operations through law-compliant structures, corporate governance, and licensing criteria.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="border border-slate-200 rounded p-4 bg-slate-50/50">
                                <ul className="text-sm list-disc list-inside space-y-2 text-slate-600">
                                    <li><strong className="text-slate-800">Incorporation:</strong> Legal deed and ministry approval</li>
                                    <li><strong className="text-slate-800">Licensing:</strong> Risk-based OSS certification</li>
                                    <li><strong className="text-slate-800">Obligations:</strong> Tax submission and compliance</li>
                                    <li><strong className="text-slate-800">Visa:</strong> Direct investor residence sequencing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 2: SECTION 3–4 - Recommended Legal Structure */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">02</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Recommended Legal Structure</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Foreign investors entering the Indonesian market are mandated to incorporate a PT PMA (Perseroan Terbatas Penanaman Modal Asing). This vehicle operates under the Indonesian Investment Law, providing a robust, standalone legal entity structure separating personal and corporate liabilities.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="border border-slate-200 rounded p-4 bg-slate-50/50">
                                <ul className="text-sm list-disc list-inside space-y-2 text-slate-600">
                                    <li><strong className="text-slate-800">Liability:</strong> Strictly limited to subscribed shares</li>
                                    <li><strong className="text-slate-800">Rights:</strong> Qualified to hold assets, hire foreign labor</li>
                                    <li><strong className="text-slate-800">FDI Thresholds:</strong> Subject to centralized BKPM thresholds</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 3: SECTION 5–6 - Shareholding Structure */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">03</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Shareholding Structure</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Indonesian corporate law stipulates a minimum of two distinct shareholders (individuals or corporations). Governance is split among the General Meeting of Shareholders (GMS), Board of Directors (executives), and Board of Commissioners (supervisors).
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="border border-slate-200 rounded p-4 bg-slate-50/50">
                                <ul className="text-sm list-disc list-inside space-y-2 text-slate-600">
                                    <li><strong className="text-slate-800">Shareholder 1:</strong> Primary investor (e.g., Russian Individual)</li>
                                    <li><strong className="text-slate-800">Shareholder 2:</strong> Minority backer or placeholder entity</li>
                                    <li><strong className="text-slate-800">Director:</strong> Operational executive (can be identical to Sh.1)</li>
                                    <li><strong className="text-slate-800">Commissioner:</strong> Non-executive supervisor</li>
                                </ul>
                                <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-600 space-y-1">
                                    <p className="font-semibold text-slate-800 flex items-center gap-1">
                                        <AlertCircle className="h-3.5 w-3.5 text-amber-600" />
                                        Administrative Pre-requisite:
                                    </p>
                                    <p>Although 100% foreign ownership is legislated for IT services, Notaries require 1 local individual designated for reporting setup, tax triggers, and compliance workflows. <strong className="text-slate-800">Bali Enterprises facilitates compliant local subject placement directly as part of our integration assistance</strong>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 4: SECTION 7–8 - Business Classification (KBLI) */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">04</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Klasifikasi Baku Lapangan Usaha (KBLI)</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                KBLI is the 5-digit indexing system dictating exact business line permissions. Accurate KBLI selection dictates the company's risk profile in the OSS system, affecting licensing strictness, tax code assignment, and banking onboarding filters.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="border border-slate-200 rounded p-4 bg-slate-50/50">
                                <ul className="text-sm space-y-2 text-slate-600">
                                    <li><strong className="text-slate-800">62010:</strong> Software Development (Computer programming)</li>
                                    <li><strong className="text-slate-800">62020:</strong> IT Consulting / Computer Facility Management</li>
                                    <li><strong className="text-slate-800">63111:</strong> Web Portal, Hosting & Data Processing</li>
                                </ul>
                                <p className="text-xs text-slate-400 mt-3">*Subsequent BKPM approval required for combined execution.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 5: SECTION 9–10 - Foreign Ownership Rules */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">05</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Foreign Ownership Rules</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Under Perpres 49/2021 (Investment Positive List), the core IT services and software development sectors have been fully liberalized, allowing up to 100% foreign direct investment without local partner mandates.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <table className="w-full text-sm border-collapse border border-slate-200">
                                <thead className="bg-slate-50 text-slate-700">
                                    <tr>
                                        <th className="border border-slate-200 p-2 text-left">Sector / KBLI</th>
                                        <th className="border border-slate-200 p-2 text-left">FDI Cap</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600">
                                    <tr>
                                        <td className="border border-slate-200 p-2">Software (62010)</td>
                                        <td className="border border-slate-200 p-2 font-semibold">100%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 p-2">IT Consulting (62020)</td>
                                        <td className="border border-slate-200 p-2 font-semibold">100%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* TOPIC 6: SECTION 11–12 - Capital Requirements */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">06</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Capital Requirements</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                A PT PMA is classified as a large-scale enterprise, requiring an investment plan exceeding IDR 10 billion (excluding land and building costs) per 5-digit KBLI generally, though combining multiple KBLI inside single groups is usually assessed uniformly.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="border border-slate-200 rounded p-4 bg-slate-50/50">
                                <table className="w-full text-sm">
                                    <tbody>
                                        <tr><td className="py-1 text-slate-500">Authorized Capital</td><td className="py-1 text-right font-semibold">IDR 10B+</td></tr>
                                        <tr><td className="py-1 text-slate-500">Paid-Up Capital (25%)</td><td className="py-1 text-right font-semibold">IDR 2.5B+</td></tr>
                                        <tr><td className="py-1 text-slate-500">Value per Share (Min)</td><td className="py-1 text-right">IDR 10M</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 7: SECTION 13–14 - Company Registration Process */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">07</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Company Registration Process</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                The process operates under two distinct jurisdictions: Ministry of Law (HAM) for corporate creation (Deed of Establishment) and BKPM/OSS for operational permitting and licensing distribution based on risk classification.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="relative border-l-2 border-slate-200 pl-4 space-y-3 text-sm text-slate-600">
                                <div><strong className="text-slate-800">1. Reservation:</strong> Finalize exact name availability</div>
                                <div><strong className="text-slate-800">2. Deed creation:</strong> Signed by Notary</div>
                                <div><strong className="text-slate-800">3. Ministry approval:</strong> (SK HAM) legalizes entity</div>
                                <div><strong className="text-slate-800">4. Tax/NPWP:</strong> Registration attached to location</div>
                                <div><strong className="text-slate-800">5. OSS-NIB:</strong> Business identification issuance</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 8: SECTION 15–16 - Required Documents */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">08</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Required Documents</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Document vetting ensures compliance with anti-money laundering regulations and identifies ultimate beneficial owners. Foreign individuals must submit notarized/apostilled standard IDs or corporate registry records if layering.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="border border-slate-200 rounded p-4 bg-slate-50/50 text-sm">
                                <ul className="list-disc list-inside space-y-2 text-slate-600">
                                    <li>Passport (minimum 18 months validity)</li>
                                    <li>Residential address profile & contact details</li>
                                    <li>Authorized signature exemplars</li>
                                    <li>Alternative corporate docs (if holding layered)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 9: SECTION 17–18 - Government Fees */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">09</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Government Fees</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Official levies are payable to the Ministry of Law & Human Rights (PNBP) for name booking and legalization. Notarial fees are pegged to capital amounts setup rather than flat rates.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="text-sm text-slate-600 space-y-2">
                                <p>• <strong className="text-slate-800">HAM/PNBP fees:</strong> ~$200 - $400</p>
                                <p>• <strong className="text-slate-800">Notary certification:</strong> ~$500 - $1,500 (dependent on capital tiers)</p>
                                <p>• <strong className="text-slate-800">OSS registration:</strong> Zero (Governmental facilitation)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 10: SECTION 19–20 - Professional Fees */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">10</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Professional Fees</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Consulting engagement guarantees error mitigation regarding KBLI assignment and risk modeling. Market distribution reflects distinct vendor tier setups ranging from local administrative handling to corporate law firms.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown (Bali Enterprises Packages)</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                <div className="border border-slate-200 rounded p-4 bg-slate-50 text-xs flex flex-col h-full shadow-sm">
                                    <div className="font-bold text-slate-900 mb-0.5">Basic Planning</div>
                                    <div className="text-slate-500 text-[10px] mb-2">Core selection & shareholding</div>
                                    <div className="text-slate-900 font-mono font-bold text-sm mb-3 border-b border-slate-200 pb-2">Rp 25.000.000</div>
                                    <ul className="space-y-1 text-slate-500 list-disc list-inside flex-grow">
                                        <li>Deed of Establishment</li>
                                        <li>Ministry Approval Letter</li>
                                        <li>Business ID (NIB)</li>
                                        <li>Risk-Based Business License</li>
                                        <li>OSS & AHU Registration</li>
                                        <li>NPWP (Corporate Tax Number)</li>
                                        <li>Taxable Entrepreneur Certificate</li>
                                        <li>Standard Articles of Association</li>
                                    </ul>
                                </div>

                                <div className="border border-slate-300 rounded p-4 bg-white text-xs flex flex-col h-full shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[9px] px-2 py-0.5 font-semibold">RECOMMENDED</div>
                                    <div className="font-bold text-slate-900 mb-0.5">Strategic Planning</div>
                                    <div className="text-slate-500 text-[10px] mb-2">In-depth structure audit</div>
                                    <div className="text-emerald-700 font-mono font-bold text-sm mb-3 border-b border-slate-200 pb-2">Rp 45.000.000</div>
                                    <ul className="space-y-1 text-slate-600 list-disc list-inside flex-grow">
                                        <li><strong className="font-semibold">All Basic Planning inclusions</strong></li>
                                        <li>Prime Virtual Office (6 Months)</li>
                                        <li>Bank Account Opening setup</li>
                                        <li>Legal Consultation (6 Months)</li>
                                        <li>Tax Assistance (6 Months)</li>
                                    </ul>
                                </div>

                                <div className="border border-slate-900 rounded p-4 bg-slate-900 text-white text-xs flex flex-col h-full shadow-md">
                                    <div className="font-bold mb-0.5">End-to-End Complete</div>
                                    <div className="text-slate-400 text-[10px] mb-2">Full framework management</div>
                                    <div className="text-amber-400 font-mono font-bold text-sm mb-3 border-b border-slate-700 pb-2">Rp 84.800.000</div>
                                    <ul className="space-y-1 text-slate-300 list-disc list-inside flex-grow">
                                        <li><strong className="font-semibold text-white">All Strategic inclusions</strong></li>
                                        <li>Full Setup: Email, Logo & Web</li>
                                        <li>Prime Virtual Office (1 Year)</li>
                                        <li>Legal Consultation (3 Years)</li>
                                        <li>Tax Assistance (3 Years)</li>
                                        <li>1x Investor KITAS setup</li>
                                        <li>Foreign ID / KTP support</li>
                                        <li>Local driving licence kit</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 11: SECTION 21–22 - Timeline */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">11</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Timeline</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Overall duration relies implicitly on the risk profile of selected KBLIs and government processing queues. Static corporate setups process quickly: licensing activation might overlap contingent triggering rules.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="space-y-2 text-sm text-slate-600">
                                <p><strong className="text-slate-800">Phase 1: Deed & Ministry Approval</strong> — 1 to 2 weeks</p>
                                <p><strong className="text-slate-800">Phase 2: OSS Setup, Tax & NIB issuance</strong> — 1 week</p>
                                <p><strong className="text-slate-800">Phase 3: Operational Licensing</strong> — 1 to 4 weeks (KBLI risk level dependent)</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 12: SECTION 23–24 - Tax Registration & Obligations */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">12</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Tax Registration & Obligations</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Attained with legal deed: the corporate NPWP dictates subsequent monthly financial disclosure mandates to the Directorate General of Taxes (DGT), irrespective of revenue activation status.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="border border-slate-200 rounded p-4 bg-slate-50/50 text-sm">
                                <ul className="space-y-1 text-slate-600">
                                    <li><strong className="text-slate-800">Corporate Income Tax (CIT):</strong> 22% on flat reporting</li>
                                    <li><strong className="text-slate-800">Value Added Tax (VAT):</strong> 11% triggers strictly if revenue {`>`}4.8B IDR/annum</li>
                                    <li><strong className="text-slate-800">Withholding Tax (PPH):</strong> Applied on salaries/contracts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 13: SECTION 25–26 - Licensing Requirements */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">13</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Licensing Requirements</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Risk-Based Licensing dictates exact compliance thresholds. IT services (62010/62020) generally correlate to **Low or Medium-Low Risk**. This enables immediate operational readiness upon NIB issuance without heavy high-risk inspection audits.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <p className="text-sm text-slate-600">
                                <strong className="text-slate-800 text-sm">Action Level:</strong> Standard NIB distribution usually yields full operational rights for software houses immediately on issuance. Basic self-declaration statements supporting workflow safety compliance are generated automatically.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TOPIC 14: SECTION 27–28 - Corporate Bank Account */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">14</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Corporate Bank Account</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Commercial setup requires a dedicated local IDR corresponding setup. Banks conduct independent Know-Your-Customer (KYC) compliance reviews targeting Directors and ultimate owners before enabling swift capitalization.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="border border-slate-200 rounded p-4 bg-slate-50/50 text-sm text-slate-600">
                                <p>• Requires physical presence of Director at signing</p>
                                <p>• Fully operational online banking supported post-activation</p>
                                <p>• Multicurrency accounts (USD/EUR) usually unlocked on separate tiering approvals</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 15: SECTION 29–30 - Office Address Requirements */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">15</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Office Address Requirements</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Legal domicile triggers physical space assessment. Commercial zoning (not residential) stands as prerequisite. Virtual offices are fully permitted in major cities specifically Supporting IT, consulting, and digital service setups.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                                <div className="border border-slate-200 p-3 rounded">
                                    <strong className="text-slate-800">Virtual Office</strong>
                                    <p className="text-xs text-slate-500 mt-1">Cost-effective, compliant for IT. Allowed indefinitely for 62010.</p>
                                </div>
                                <div className="border border-slate-200 p-3 rounded">
                                    <strong className="text-slate-800">Physical Office</strong>
                                    <p className="text-xs text-slate-500 mt-1">Required if keeping physical inventory or hiring 10+ local staff immediately.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 16: SECTION 31–32 - Visa & Residence Options */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">16</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Visa & Residence Options</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Foreign directors or shareholders qualify for distinct residency tracks (KITAS). Selecting suitable indices dictates exact work-eligible authorization or simple capital oversight privileges only.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="border border-slate-200 rounded p-4 bg-slate-50/50 text-sm">
                                <p><strong className="text-slate-800">Investor KITAS (Index E33):</strong> For shareholders. 1 to 2 year validity. Low government fees compared to work visa. Operational or non-operational tracks available.</p>
                                <p className="mt-2 text-xs text-slate-500">*Minimum share valuation IDR 10B tier dictates eligibility for index triggers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 17: SECTION 33–34 - Remote Setup Capability */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">17</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Remote Setup Capability</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Primary corporate incorporation layer executes 100% remotely through digital document dispatching and notarization workflow triggers executed under representation authority.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <table className="w-full text-sm border-collapse border border-slate-200">
                                <thead><tr className="bg-slate-50"><th className="border p-2">Location status</th><th className="border p-2">Permitted executions</th></tr></thead>
                                <tbody>
                                    <tr><td className="border p-2">Remote</td><td className="border p-2">Deed setup, SK HAM, OSS-NIB, Tax setup</td></tr>
                                    <tr><td className="border p-2 font-semibold">Onshore Presence</td><td className="border p-2 font-semibold">Corporate Banking full authorization setup</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* TOPIC 18: SECTION 35–36 - Ongoing Compliance */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">18</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Ongoing Compliance</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                PT PMA vehicles must fulfill monthly tax disclosure guidelines (Nil reported if no revenue) and quarterly LKPM (Investment Realization Report) submissions to the BKPM regarding invested capitalization metrics.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <p className="text-sm text-slate-600">
                                <strong className="text-slate-800">Action thresholds:</strong> LKPM filed every 3 months. Failure to submit triggers automatic OSS blockages impeding subsequent visa renewals or operational permissions. Flat-rate corporate compliance retainers resolve continuous reporting criteria implicitly.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TOPIC 19: SECTION 37–38 - Russian Shareholder Considerations */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">19</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Russian Shareholder Considerations</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Zero legal restrictions exist impeding Russian nationals from holding PT PMA shares in Indonesia. The jurisdiction generally maintains neutral macro-geopolitics regarding Foreign Direct Investment (FDI) channels.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="border border-amber-100 bg-amber-50 rounded p-4 text-sm text-slate-600 flex gap-2">
                                <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                                <div>
                                    <strong className="text-slate-800">Compliance Warning:</strong> Although legal setups are approved, internal banking KYC rules are subject to global correspondent restrictions. Multi-step sourcing proof is mandatory to pass compliance filters for capital injection onboarding.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 20: SECTION 39–40 - Risk & Compliance Notes */}
                <section>
                    <div className="flex items-slate-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">20</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Risk & Compliance Notes</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Use of third-party proxy "nominees" to hold shares is strictly illegal under Art. 33 of the Investment Law. Direct setups represent the sole conservative and durable path to retaining ownership rights independently.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <p className="text-sm text-slate-600">
                                Avoid informal capital buffering. Retain full control through direct names in MinistryHAM records. Proxy assets are subject to standard forfeiture triggers if disputed.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TOPIC 21: SECTION 41–42 - Market Entry Considerations */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">21</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Market Entry Considerations</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Approaching the Indonesian market requires scaling thresholds correctly. Immediate capital injection is evaluated quarterly; initial setup allows progressive allocation of the investment plan supporting organic tech scaling.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <p className="text-sm text-slate-600">
                                <strong className="text-slate-800">Phasing approach:</strong> Finalize incorporation + legal presence before committing full dev headcounts to lock contracts legally.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TOPIC 22: SECTION 43–44 - Cost Summary */}
                <section className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                    <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-sm font-mono text-slate-400">22</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Cost Summary</h2>
                    </div>
                    <table className="w-full text-sm">
                        <thead className="border-b border-slate-200 text-slate-700">
                            <tr>
                                <th className="pb-2 text-left">Expense Category</th>
                                <th className="pb-2 text-right">Estimate Range (USD)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-600">
                            <tr><td className="py-2">Government / PNBP Vetting Fees</td><td className="py-2 text-right">$500 – $1,000</td></tr>
                            <tr><td className="py-2">Notarial Deed creation & HAM Legalization</td><td className="py-2 text-right">$1,000 – $1,500</td></tr>
                            <tr><td className="py-2">Professional Retainer (Corporate Setup)</td><td className="py-2 text-right">$4,500 – $7,500</td></tr>
                            <tr className="font-bold border-t-2 border-slate-300 text-slate-900">
                                <td className="py-3">Estimated Total Investment Envelope</td>
                                <td className="py-3 text-right">$6,000 – $10,000</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* TOPIC 23: SECTION 45–46 - Timeline Summary */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">23</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Timeline Summary</h2>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600">
                           Based on typical queues backing IT sector distributions:
                        </p>
                        <div className="bg-emerald-50 text-emerald-800 font-semibold p-4 rounded text-center mt-3 border border-emerald-200">
                            Estimated Completion Range: 3 – 12 Weeks Total
                        </div>
                    </div>
                </section>

                {/* TOPIC 24: SECTION 47–48 - Next Steps */}
                <section>
                    <div className="flex items-baseline gap-3 border-b border-slate-100 pb-2 mb-4">
                        <span className="text-sm font-mono text-slate-400">24</span>
                        <h2 className="text-xl font-serif font-bold text-slate-900">Next Steps</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">A: Strategic Explanation</h3>
                            <p className="text-sm leading-relaxed text-slate-600">
                                Prior to triggering legal reservation, shareholding and capitalization splits must be locked to mitigate downstream Notary deed refactoring.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-wider text-slate-400 mb-2">B: Practical Breakdown</h3>
                            <div className="border border-slate-200 rounded p-4 bg-slate-50/50 text-sm">
                                <ul className="list-decimal list-inside space-y-2 text-slate-600 font-semibold">
                                    <li>Confirm Shareholder configuration & directors</li>
                                    <li>Submit documentation dossiers (Passport, Address)</li>
                                    <li>Initiate booking/Reservation queue trigger</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TOPIC 25: SECTION 49–50 - Closing Statement */}
                <section className="border-t border-slate-200 pt-8 mt-16 text-center text-slate-500 text-xs">
                    <p className="max-w-xl mx-auto leading-relaxed">
                        Disclaimer: This document constitutes advisory guidance supporting general structuring criteria in current force in Indonesia. Legal and regulatory standards are subject to change. Fees are estimates representing realistic market scopes, subject to finalized BKPM parameters at triggering.
                    </p>
                </section>

            </div>

            {/* FINAL CTA SECTION - Hidden on Print */}
            {!isPrint && (
                <div className="mt-16 flex justify-center gap-4">
                    <a
                        href="/insights/company-registration-proposal-indonesia-it-services/print"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition shadow-md"
                    >
                        <ArrowDownToLine className="h-4 w-4" />
                        Download Proposal (PDF)
                    </a>
                </div>
            )}
        </div>
    );
}
