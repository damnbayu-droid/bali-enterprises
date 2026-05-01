"use client";

import React from "react";
import { 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  ShieldCheck, 
  Activity, 
  Layers, 
  MapPin, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function BPOMContent() {
    const sections = [
        { id: "intro", title: "The Gatekeeper of the Archipelago", icon: <ShieldCheck className="h-5 w-5" /> },
        { id: "legal", title: "Legal & Regulatory Foundation", icon: <FileText className="h-5 w-5" /> },
        { id: "pma", title: "PT PMA Eligibility Criteria", icon: <Layers className="h-5 w-5" /> },
        { id: "oss", title: "The OSS-RBA Connection", icon: <Activity className="h-5 w-5" /> },
        { id: "categories", title: "Product Category Mapping", icon: <ChevronRight className="h-5 w-5" /> },
        { id: "warehouse", title: "The Local Hub Requirement", icon: <MapPin className="h-5 w-5" /> },
        { id: "audit", title: "The Physical Site Audit (PSF)", icon: <AlertCircle className="h-5 w-5" /> },
        { id: "flow", title: "Step-by-Step Application Flow", icon: <TrendingUp className="h-5 w-5" /> },
        { id: "ml-md", title: "Import (ML) vs. Local (MD)", icon: <ChevronRight className="h-5 w-5" /> },
        { id: "pharmacist", title: "The Technical Manager Rule", icon: <ShieldCheck className="h-5 w-5" /> },
        { id: "testing", title: "Laboratory Testing Protocols", icon: <Activity className="h-5 w-5" /> },
        { id: "compliance", title: "Ingredient & Safety Compliance", icon: <CheckCircle2 className="h-5 w-5" /> },
        { id: "labeling", title: "Bahasa Labeling Regulations", icon: <FileText className="h-5 w-5" /> },
        { id: "capital", title: "Capital & Investment Alignment", icon: <DollarSign className="h-5 w-5" /> },
        { id: "pricing", title: "Pricing & Fee Transparency", icon: <DollarSign className="h-5 w-5" /> },
        { id: "bali", title: "The Bali Operational Context", icon: <MapPin className="h-5 w-5" /> },
        { id: "timeline", title: "Realistic Timeline Expectations", icon: <Clock className="h-5 w-5" /> },
        { id: "checklist", title: "Final Strategic Checklist", icon: <CheckCircle2 className="h-5 w-5" /> },
    ];

    return (
        <div className="bg-white pb-24">
            {/* Hero Section */}
            <header className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                        <Activity size={14} />
                        Strategic Operational Blueprint
                    </div>
                    <h1 className="text-4xl md:text-7xl font-serif italic font-bold tracking-tighter leading-tight mb-8">
                        BPOM Certification <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-300">
                            Roadmap for PT PMA
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed italic">
                        The definitive guide for international brands entering the Indonesian market through high-fidelity food, drug, and cosmetic compliance.
                    </p>
                </div>
            </header>

            {/* Quick Navigation Sidebar & Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-16">
                
                {/* Sidebar Navigation */}
                <aside className="lg:w-1/4 hidden lg:block sticky top-32 h-fit space-y-6">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-100 pb-4">
                        Roadmap Sections
                    </h3>
                    <nav className="space-y-1">
                        {sections.map((section) => (
                            <a 
                                key={section.id}
                                href={`#${section.id}`}
                                className="group flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-slate-50 transition-all"
                            >
                                <span className="text-slate-300 group-hover:text-primary transition-colors">{section.icon}</span>
                                <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-slate-900 transition-colors">
                                    {section.title}
                                </span>
                            </a>
                        ))}
                    </nav>
                    <div className="pt-8">
                        <Link 
                            href="/contact"
                            className="block w-full text-center py-4 bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-black transition-all shadow-lg"
                        >
                            BPOM Consultation
                        </Link>
                    </div>
                </aside>

                {/* Content Area */}
                <div className="flex-1 space-y-24">
                    
                    {/* SECTION 1: INTRO */}
                    <section id="intro" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <ShieldCheck size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                01. The Gatekeeper
                            </h2>
                        </div>
                        <div className="prose prose-slate max-w-none">
                            <p className="text-lg text-slate-600 leading-relaxed font-medium italic mb-6">
                                The Badan Pengawas Obat dan Makanan (BPOM) serves as the ultimate regulatory hurdle for any brand looking to distribute ingestible or topical goods in Indonesia. For a PT PMA, obtaining the NIE (Nomor Izin Edar) is not merely a compliance task—it is the creation of a valuable intangible asset for your company.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Without BPOM certification, a product exists in a legal vacuum in Indonesia. It cannot be cleared through customs, it cannot be listed on Tokopedia or Shopee, and it certainly cannot be stocked in premium Bali retailers. The certification acts as a "Trust Seal" that guarantees the safety, quality, and efficacy of your products to 275 million consumers.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 2: LEGAL */}
                    <section id="legal" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <FileText size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                02. Legal Foundation
                            </h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed mb-8">
                            The BPOM registration process is anchored in **Law No. 34 of 2014 regarding Health** and is further refined by category-specific regulations. These laws mandate that the government must protect the public from products that do not meet safety standards.
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Key Regulations</h4>
                                <ul className="space-y-3 text-sm font-bold italic text-slate-700">
                                    <li>• BPOM Reg No. 12/2020 (Cosmetics)</li>
                                    <li>• BPOM Reg No. 27/2017 (Processed Food)</li>
                                    <li>• BPOM Reg No. 32/2019 (Supplements)</li>
                                </ul>
                            </div>
                            <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                                <h4 className="text-primary text-[10px] font-black uppercase tracking-widest mb-4">Strict Liability</h4>
                                <p className="text-xs leading-relaxed opacity-80">
                                    The "Responsible Person" (Director) of the PT PMA holds strict legal liability for any adverse effects caused by non-compliant formulations.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3: PT PMA ELIGIBILITY */}
                    <section id="pma" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <Layers size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                03. PT PMA Eligibility
                            </h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed italic mb-10">
                            BPOM only issues distribution permits to locally registered legal entities. For foreign investors, this means incorporating a **PT PMA (Foreign Direct Investment Company)** with a minimum paid-up capital of IDR 10 Billion. 
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 border border-slate-100 rounded-3xl">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Permitted Activities</h4>
                                <p className="text-sm font-bold text-slate-700 leading-relaxed mb-4">Your PT PMA must have the correct KBLI codes to apply for BPOM:</p>
                                <ul className="text-xs space-y-2 text-slate-500">
                                    <li>• KBLI 46441: Wholesale of Cosmetics</li>
                                    <li>• KBLI 46399: Wholesale of Food & Beverages</li>
                                    <li>• KBLI 20232: Manufacturing of Cosmetics</li>
                                </ul>
                            </div>
                            <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Strategic Advantage</h4>
                                <p className="text-sm font-medium italic text-slate-700 leading-relaxed">
                                    By holding the BPOM NIE directly in your PT PMA, you own the distribution rights. If you use a third-party importer (nominee), *they* own the license, leaving your brand vulnerable.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: OSS-RBA CONNECTION */}
                    <section id="oss" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <Activity size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                04. The OSS-RBA Connection
                            </h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed mb-8">
                            In the modern "Risk-Based Approach" (RBA) system, your BPOM registration is digitally tethered to your **Business Identification Number (NIB)**. 
                        </div>
                        <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 space-y-6">
                            <p className="text-sm font-bold text-slate-700 italic underline underline-offset-4 decoration-primary/30">The Digital Sequence:</p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black">1</div>
                                        <p className="text-sm font-black uppercase tracking-tighter text-slate-900">NIB Issuance</p>
                                    </div>
                                    <p className="text-xs text-slate-500 pl-11">The NIB must have the "Commercial/Operational License" activated for BPOM registration.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black">2</div>
                                        <p className="text-sm font-black uppercase tracking-tighter text-slate-900">Account Mapping</p>
                                    </div>
                                    <p className="text-xs text-slate-500 pl-11">BPOM verifies your NIB data before granting access to the e-Registration portal.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 5: CATEGORIES */}
                    <section id="categories" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <ChevronRight size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                05. Product Category Mapping
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { cat: "Food (MD/ML)", code: "KBLI 463", risk: "Low to High", desc: "Covers all processed foods, beverages, and raw ingredients for retail." },
                                { cat: "Cosmetics (NA)", code: "KBLI 202", risk: "Low", desc: "Skincare, makeup, and personal care. Usually the fastest category for registration." },
                                { cat: "Supplements (TR)", code: "KBLI 464", risk: "Medium to High", desc: "Vitamins, herbal medicine, and traditional health supplements." },
                            ].map((item) => (
                                <div key={item.cat} className="p-8 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
                                    <h4 className="text-lg font-black italic tracking-tighter text-slate-900 mb-2 uppercase">{item.cat}</h4>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Risk: {item.risk}</div>
                                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 6: WAREHOUSE */}
                    <section id="warehouse" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <MapPin size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                06. The Local Hub Requirement
                            </h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed mb-10">
                            You cannot apply for BPOM from a virtual office alone. You must have a **physical storage facility (warehouse)** that meets BPOM's strict hygiene and temperature control standards.
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">Hub Prerequisites:</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Dedicated space for 'Rejected' products.",
                                        "Temperature & humidity monitoring logs.",
                                        "Pest control system & hygiene certification.",
                                        "Zoning must be 'Industrial' or 'Commercial' (not residential)."
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-slate-700 font-bold italic">
                                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Pro Tip</h4>
                                <p className="text-xs text-slate-600 leading-relaxed font-medium italic">
                                    Many investors in Bali utilize a "Third-Party Logistics" (3PL) warehouse that is already BPOM-certified. This bypasses the need for a personal warehouse audit.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 7: PSF AUDIT */}
                    <section id="audit" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <AlertCircle size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                07. The Physical Site Audit (PSF)
                            </h2>
                        </div>
                        <div className="bg-slate-900 p-12 rounded-[3rem] text-white">
                            <div className="max-w-2xl">
                                <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4">Mandatory Inspection</h4>
                                <p className="text-xl font-serif italic mb-8">The Physical Site Feedback (PSF) is the moment BPOM officers visit your facility to verify your documentation against reality.</p>
                                <div className="grid grid-cols-2 gap-6 text-xs opacity-70">
                                    <div className="border-l border-primary/30 pl-4">BPOM looks for standard operating procedures (SOPs) for product handling.</div>
                                    <div className="border-l border-primary/30 pl-4">Facility must be separate from personal living quarters.</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 8: FLOWCHART */}
                    <section id="flow" className="scroll-mt-32 bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-2xl text-primary">
                                <TrendingUp size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                08. Step-by-Step Flow
                            </h2>
                        </div>
                        <div className="space-y-8 max-w-4xl mx-auto">
                            {[
                                { step: "01", title: "Account Registration", desc: "Setting up e-Registration account through the BPOM portal linked to your NIB." },
                                { step: "02", title: "PSF Approval", "desc": "Physical Site Feedback (Warehouse Inspection) audit and certificate issuance." },
                                { step: "03", title: "Product Classification", "desc": "Assigning KBLI codes and risk categories to your specific product range." },
                                { step: "04", title: "Lab & Testing", "desc": "Submission of samples to accredited labs for safety and stability testing." },
                                { step: "05", title: "Final Submission", "desc": "Uploading dossiers (Ingredients, COA, LOA) for final BPOM evaluator review." },
                                { step: "06", title: "NIE Issuance", "desc": "Distribution Permit (Nomor Izin Edar) granted. Your product can now be sold legally." },
                            ].map((s) => (
                                <div key={s.step} className="flex gap-6 group">
                                    <div className="text-2xl font-black text-primary/30 group-hover:text-primary transition-colors italic">{s.step}</div>
                                    <div className="flex-1 pb-8 border-b border-slate-200">
                                        <h4 className="text-lg font-black uppercase italic tracking-tighter text-slate-900 mb-2">{s.title}</h4>
                                        <p className="text-sm text-slate-600 font-medium italic opacity-80">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 9: ML vs MD */}
                    <section id="ml-md" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <ChevronRight size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                09. Import (ML) vs. Local (MD)
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm">
                                <h4 className="text-2xl font-black italic tracking-tighter text-slate-900 mb-4 uppercase">ML (Makanan Luar)</h4>
                                <p className="text-sm text-slate-500 mb-6 font-medium italic">For products manufactured outside Indonesia and imported.</p>
                                <ul className="space-y-2 text-xs font-bold text-slate-700">
                                    <li>• Requires Letter of Authorization (LOA).</li>
                                    <li>• Requires Free Sale Certificate from origin.</li>
                                    <li>• Subject to higher import duties.</li>
                                </ul>
                            </div>
                            <div className="p-10 bg-primary/5 border border-primary/10 rounded-[2.5rem] shadow-sm">
                                <h4 className="text-2xl font-black italic tracking-tighter text-slate-900 mb-4 uppercase">MD (Makanan Dalam)</h4>
                                <p className="text-sm text-slate-500 mb-6 font-medium italic">For products manufactured locally in Indonesia.</p>
                                <ul className="space-y-2 text-xs font-bold text-slate-700">
                                    <li>• Requires Local Manufacturing License.</li>
                                    <li>• Lower logistics costs and duties.</li>
                                    <li>• Eligible for 'Proudly Indonesian' branding.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 10: PHARMACIST */}
                    <section id="pharmacist" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <ShieldCheck size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                10. The Technical Manager Rule
                            </h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed mb-8">
                            Every BPOM license holder must appoint a **Penanggung Jawab Teknis (PJT)**. This is a qualified Indonesian professional who oversees product quality.
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 italic">
                            <p className="text-sm text-slate-700 font-bold">
                                Category Requirements:
                            </p>
                            <ul className="mt-4 space-y-2 text-xs text-slate-500">
                                <li>• <strong className="text-slate-900">Cosmetics:</strong> Pharmacist (Apoteker) or Chemist.</li>
                                <li>• <strong className="text-slate-900">Food:</strong> Food Technologist or Quality Control expert.</li>
                                <li>• <strong className="text-slate-900">Supplements:</strong> Licensed Pharmacist (STR/SIP mandatory).</li>
                            </ul>
                        </div>
                    </section>

                    {/* SECTION 11: TESTING */}
                    <section id="testing" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <Activity size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                11. Laboratory Testing
                            </h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600 italic font-medium leading-relaxed mb-8">
                            Testing is the scientific backbone of your application. BPOM only accepts results from specific accredited laboratories within Indonesia.
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                                <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4">Mandatory Tests</h4>
                                <ul className="space-y-3 text-sm font-bold opacity-80">
                                    <li>• Microbiology (E.coli, Salmonella)</li>
                                    <li>• Heavy Metals (Lead, Mercury)</li>
                                    <li>• Chemical Stability & Shelf Life</li>
                                </ul>
                            </div>
                            <div className="p-8 border border-slate-100 rounded-[2rem]">
                                <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Protocol</h4>
                                <p className="text-xs text-slate-500 italic">Samples must be submitted in retail packaging. Lab results (COA) must be no older than 6 months at the time of submission.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 12: COMPLIANCE */}
                    <section id="compliance" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <CheckCircle2 size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                12. Ingredient Compliance
                            </h2>
                        </div>
                        <div className="bg-red-50 border border-red-100 p-10 rounded-[2.5rem] italic">
                            <h4 className="text-red-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">The Negative List</h4>
                            <p className="text-sm text-red-900 leading-relaxed font-bold mb-6">
                                Indonesia maintains a unique list of prohibited ingredients that may be legal in the EU or US but are banned here.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-xs text-red-800 opacity-80">
                                <div>• No Hydroquinone in retail cosmetics.</div>
                                <div>• Specific limits on preservative percentages.</div>
                                <div>• Prohibited herbal extracts in supplements.</div>
                                <div>• Strict coloring agent (Dyes) restrictions.</div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 13: LABELING */}
                    <section id="labeling" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <FileText size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                13. Bahasa Labeling Regulations
                            </h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed mb-8">
                            All products sold in Indonesia must have labeling in **Bahasa Indonesia**. This is a non-negotiable legal requirement.
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 text-sm italic font-bold">
                            <div className="p-6 border-l-4 border-primary bg-slate-50">
                                <p className="text-slate-900 mb-2">Mandatory Info:</p>
                                <ul className="text-slate-500 space-y-1 text-xs">
                                    <li>• Product Name & Variant</li>
                                    <li>• Net Weight / Volume</li>
                                    <li>• Full Ingredient List</li>
                                    <li>• NIE (BPOM Permit Number)</li>
                                    <li>• Batch Number & Expiry Date</li>
                                </ul>
                            </div>
                            <div className="p-6 border-l-4 border-primary bg-slate-50">
                                <p className="text-slate-900 mb-2">Company Info:</p>
                                <ul className="text-slate-500 space-y-1 text-xs">
                                    <li>• Name of PT PMA (Distributor)</li>
                                    <li>• City & Address of Importer</li>
                                    <li>• Name of Manufacturer</li>
                                    <li>• Country of Origin (for ML)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 14: CAPITAL */}
                    <section id="capital" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <DollarSign size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                14. Capital Alignment
                            </h2>
                        </div>
                        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Investment Thresholds</h4>
                            <p className="text-sm text-slate-700 leading-relaxed font-medium italic mb-8">
                                BKPM requires PT PMAs to realize their IDR 10 Billion investment plan. For BPOM-heavy businesses, this capital is typically allocated to:
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {["Laboratory Equipment", "Warehouse Lease", "Stock Ingestion", "Legal Licensing"].map((item) => (
                                    <div key={item} className="p-4 bg-white border border-slate-100 rounded-2xl text-center">
                                        <p className="text-[10px] font-black uppercase tracking-tighter text-slate-900">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SECTION 15: PRICING */}
                    <section id="pricing" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <DollarSign size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                15. Pricing Transparency
                            </h2>
                        </div>
                        <div className="overflow-hidden border border-slate-100 rounded-[2rem] shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-50 border-b border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                    <tr>
                                        <th className="px-8 py-6">Category</th>
                                        <th className="px-8 py-6">Gov Fee (PNBP)</th>
                                        <th className="px-8 py-6">Consultancy Range</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 text-sm italic font-bold">
                                    <tr>
                                        <td className="px-8 py-6 text-slate-900">Cosmetics (NA)</td>
                                        <td className="px-8 py-6 text-slate-600">Rp 500k – 1.5M / SKU</td>
                                        <td className="px-8 py-6 text-primary">$400 – $800 / SKU</td>
                                    </tr>
                                    <tr>
                                        <td className="px-8 py-6 text-slate-900">Food (MD)</td>
                                        <td className="px-8 py-6 text-slate-600">Rp 1M – 5M / Category</td>
                                        <td className="px-8 py-6 text-primary">$800 – $1,500 / SKU</td>
                                    </tr>
                                    <tr>
                                        <td className="px-8 py-6 text-slate-900">Supplements (TR)</td>
                                        <td className="px-8 py-6 text-slate-600">Rp 2M – 10M / SKU</td>
                                        <td className="px-8 py-6 text-primary">$1,200 – $2,500 / SKU</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 16: BALI CONTEXT */}
                    <section id="bali" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <MapPin size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                16. The Bali Operational Context
                            </h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed mb-8 italic">
                            Bali is Indonesia's hub for "Artisan" and "Boutique" skincare brands. However, BPOM enforcement in Bali is highly vigilant due to the high volume of foreign-owned creative startups.
                        </div>
                        <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white">
                            <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4">Bali Strategy</h4>
                            <p className="text-lg font-serif italic opacity-90 leading-relaxed">
                                Avoid the "Denpasar Backyard" Trap. Do not manufacture in villa basements. Ensure your facility is in a dedicated commercial zone (e.g., Gatot Subroto or Mahendradatta) to pass the PSF audit on the first attempt.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 17: TIMELINE */}
                    <section id="timeline" className="scroll-mt-32">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/5 flex items-center justify-center rounded-2xl text-primary">
                                <Clock size={24} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-black italic tracking-tighter uppercase text-slate-900">
                                17. Timeline Expectations
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { stage: "Account & PSF", time: "2-4 Weeks", color: "border-slate-200" },
                                { stage: "Lab Analysis", time: "3-6 Weeks", color: "border-slate-200" },
                                { stage: "Final NIE Issuance", time: "2-12 Weeks", color: "border-primary" },
                            ].map((item) => (
                                <div key={item.stage} className={`p-8 border rounded-3xl text-center ${item.color}`}>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.stage}</p>
                                    <p className="text-2xl font-black italic text-slate-900 tracking-tighter">{item.time}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-xs text-slate-400 italic text-center font-bold">*Timelines vary based on KBLI risk level and lab queue status.</p>
                    </section>

                    {/* SECTION 18: CHECKLIST */}
                    <section id="checklist" className="scroll-mt-32">
                        <div className="max-w-4xl mx-auto p-12 md:p-16 bg-slate-900 rounded-[4rem] text-white italic relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
                            <h2 className="text-3xl md:text-5xl font-serif font-black italic tracking-tighter uppercase mb-12 text-center">
                                Final Strategic <br /> Checklist
                            </h2>
                            <div className="space-y-6">
                                {[
                                    "Is your PT PMA legally established with active NIB?",
                                    "Does your zoning allow for a dedicated storage hub?",
                                    "Is your formula free of restricted 'Negative List' items?",
                                    "Do you have a locally accredited laboratory contract?",
                                    "Is your technical manager (Pharmacist) appointed?",
                                    "Are your labels translated and compliant with Bahasa laws?"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center group">
                                        <div className="w-6 h-6 border-2 border-primary/40 rounded-full flex items-center justify-center group-hover:border-primary transition-colors">
                                            <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                        <p className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">{item}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 pt-12 border-t border-white/10 text-center">
                                <Link 
                                    href="/contact"
                                    className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white text-[12px] font-black uppercase tracking-[0.4em] rounded-full hover:bg-white hover:text-black transition-all shadow-xl"
                                >
                                    Start BPOM Ingestion
                                    <ChevronRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
            
            {/* SEO Structured Data Footer (Invisible) */}
            <footer className="max-w-7xl mx-auto px-4 text-[10px] text-slate-300 mt-20 text-center uppercase tracking-widest italic font-bold">
                BPOM Certification Guide for Indonesia • Strategic Operational Blueprint • PT PMA Governance 2024
            </footer>
        </div>
    );
}
