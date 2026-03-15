import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Users, 
    MapPin, 
    Cpu, 
    Coffee, 
    Building,
    ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "The Startup Ecosystem in Bali | Founders & Hubs Guide | Bali Enterprises",
    description: "Explore Bali's rapidly growing startup ecosystem. Deep dive into Canggu, Ubud, and Seminyak hubs, coworking spaces, and industry clusters.",
};

export default function StartupEcosystemPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12 pb-24">
            {/* Header */}
            <div className="w-full max-w-5xl px-6 mb-8">
                <Link href="/starting-business-bali-guide" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Main Guide
                </Link>
            </div>

            {/* Hero Section */}
            <header className="w-full max-w-5xl px-6 mb-16">
                <div className="space-y-6 max-w-3xl">
                    <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary bg-primary/5 uppercase tracking-widest text-[10px] font-bold">
                        Ecosystem Overview
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-foreground leading-[1.1]">
                        The Bali <span className="text-muted-foreground italic">Startup Ecosystem</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Beyond tourism, Bali has emerged as a fertile ground for tech founders, creative agencies, and digital entrepreneurs building global products from paradise.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="w-full max-w-5xl px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-16">
                        
                        {/* 1. Overview */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <Users className="h-6 w-6" />
                                <h2 className="text-2xl md:text-3xl font-serif">A Network of Global Founders</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                Bali's startup ecosystem has expanded significantly since 2018. The island now hosts a large network of founders, incubators, coworking spaces, and global tech entrepreneurs who enjoy a high-density networking environment.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                {[
                                    { title: "Remote-First DNA", desc: "Native infrastructure for distributed teams and async work culture." },
                                    { title: "Web3 & Blockchain", desc: "A significant concentration of cryptocurrency and decentralized project founders." },
                                    { title: "Creative Agencies", desc: "World-class digital marketing and branding studios operating globally." },
                                    { title: "E-commerce Hub", desc: "Major fulfillment and logistics bridge for international D2C brands." }
                                ].map((item, i) => (
                                    <div key={i} className="p-5 rounded-xl border bg-card/50">
                                        <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* 2. Geographic Hubs */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <MapPin className="h-6 w-6" />
                                <h2 className="text-2xl md:text-3xl font-serif">Strategic Industry Hubs</h2>
                            </div>
                            
                            {/* Canggu */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold font-serif flex items-center gap-2">
                                    Canggu: <span className="text-primary italic">"Silicon Valley of Bali"</span>
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Canggu is the beating heart of Bali’s tech scene. It is currently the most popular destination for SaaS founders, Web3 developers, and digital agencies.
                                </p>
                                <div className="p-4 rounded-lg bg-muted/20 border-l-4 border-primary">
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Key Coworking Spaces:</p>
                                    <div className="flex flex-wrap gap-4 text-xs font-medium">
                                        <span className="flex items-center gap-1"><ExternalLink className="h-3 w-3" /> BWork Bali</span>
                                        <span className="flex items-center gap-1"><ExternalLink className="h-3 w-3" /> Dojo Bali</span>
                                        <span className="flex items-center gap-1"><ExternalLink className="h-3 w-3" /> Outpost Canggu</span>
                                        <span className="flex items-center gap-1"><ExternalLink className="h-3 w-3" /> Zin Cafe</span>
                                    </div>
                                </div>
                            </div>

                            {/* Ubud */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold font-serif">Ubud: Wellness & Creative Tech</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Ubud attracts a different persona of entrepreneurs—those focused on wellness tech, educational platforms, and creative workshops. It is the destination for founders seeking intense focus and community integration.
                                </p>
                            </div>

                            {/* Seminyak */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold font-serif">Seminyak: Hospitality & Lifestyle Brands</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Seminyak is the commercial hub for lifestyle brands, luxury hospitality startups, and premium F&B ventures. It offers high visibility for consumer-facing businesses.
                                </p>
                            </div>
                        </section>

                        <Separator className="opacity-40" />

                        {/* 3. Technology focus */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <Cpu className="h-6 w-6" />
                                <h2 className="text-2xl md:text-3xl font-serif">Future-Forward Focus</h2>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                The ecosystem is currently pivoting towards high-tech sectors including GreenTech, AI-driven automation for remote teams, and regulated FinTech. 
                            </p>
                            <AdvisoryInsight title="Market Entry Tip">
                                Networking in Bali happens at coworking hubs and specialized founder dinner events. Being "on the ground" in Canggu for even 2 weeks provides more strategic networking than 6 months of remote research.
                            </AdvisoryInsight>
                        </section>

                        <Separator className="opacity-40" />

                        {/* Infrastructure */}
                        <section className="space-y-6">
                            <div className="flex items-center gap-3 text-primary mb-2">
                                <Building className="h-6 w-6" />
                                <h2 className="text-2xl md:text-3xl font-serif">Infrastructure Support</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Coffee className="h-5 w-5 text-primary" />
                                    </div>
                                    <h4 className="font-bold">Coworking Culture</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">World-class internet speeds, 24/7 access, and vibrant communities of high-performing individuals.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Users className="h-5 w-5 text-primary" />
                                    </div>
                                    <h4 className="font-bold">Incubator Access</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">Growing interest from regional VC firms looking to tap into the unique founder density of the island.</p>
                                </div>
                            </div>
                        </section>
                        
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-24 space-y-8">
                            <div className="p-8 rounded-2xl border bg-card space-y-6">
                                <h4 className="font-serif text-xl">Quick Links</h4>
                                <div className="flex flex-col gap-4">
                                    <Link href="/starting-business-bali-guide#zoning-bali" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                                        → Business Zoning in Bali
                                    </Link>
                                    <Link href="/starting-business-bali-guide#pt-pma-explained" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                                        → Legal Structure for Startups
                                    </Link>
                                    <Link href="https://wa.me/6285727041992" className="text-xs font-bold text-primary">
                                        Ask an Ecosystem Expert
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
