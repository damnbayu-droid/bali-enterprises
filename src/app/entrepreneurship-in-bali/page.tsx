import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Users, 
    Zap, 
    CheckCircle2, 
    Coffee, 
    Globe, 
    MessageSquare,
    Network
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Entrepreneurship in Bali: Culture, Networking & Community | Bali Enterprises",
    description: "Explore the vibrant entrepreneurial culture in Bali. Learn about networking hubs, community events, and why founders are choosing Bali as their operational base.",
};

export default function EntrepreneurshipInBaliPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12">
            <div className="w-full max-w-4xl px-6 mb-8">
                <Link href="/starting-business-bali-guide" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Knowledge Hub
                </Link>
            </div>

            <main className="w-full max-w-4xl px-6 pb-24">
                <header className="space-y-6 mb-16">
                    <div className="flex items-center gap-3 text-primary mb-2">
                        <Users className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Founder Culture</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Entrepreneurship <span className="text-muted-foreground italic">in Bali</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        The "Bali Founder" is a new breed of international business leader—combining high-velocity tech execution with a focus on lifestyle retention and global connectivity.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Ecosystem Overview */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">A High-Trust Community</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Entrepreneurship in Bali is defined by its collaborative spirit. Unlike the zero-sum competition of Silicon Valley, the <Link href="/startup-ecosystem-bali" className="text-primary hover:underline">startup ecosystem in Bali</Link> thrives on knowledge sharing and "open-source" networking.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><Network className="h-4 w-4 text-primary" /> Strategic Networking</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Networking happens in "curated hubs"—private dinners in Uluwatu, coworking masterminds in Canggu, and invite-only Web3 summits.
                                </p>
                            </div>
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> Global Mindset</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Most founders in Bali are building for the international market, leveraging the island's cost arbitrage to scale global SaaS or creative agencies.
                                </p>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* The Founder Journey */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The Operational Pivot</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            For many, the journey begins with <Link href="/digital-nomads-startups-bali" className="text-primary hover:underline">digital nomadism in Bali</Link>. As a project scales, the need for a professional <Link href="/how-to-start-a-business-in-bali" className="text-primary hover:underline">roadmap to start a business in Bali</Link> becomes essential. Transitioning to a <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline">PT PMA</Link> is the ultimate mark of a serious entrepreneur.
                        </p>
                        <AdvisoryInsight title="Founder Briefing">
                            The shift from "Nomad" to "Founder" is more than legal; it's a shift in accountability. Having a local corporate entity allows you to hire local talent, open corporate accounts, and sign high-value commercial leases.
                        </AdvisoryInsight>
                    </section>

                    {/* Creative & Tech Concentration */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Focused Innovation Hubs</h2>
                        <div className="space-y-6">
                            {[
                                { title: "The Tech Scene", icon: <Zap className="h-5 w-5 text-primary" />, desc: "Heavy concentration of Web3, Fintech, and AI developers. Driven by the island's low burn rate and high concentration of 'exit-level' senior talent." },
                                { title: "Creative & Design Hub", icon: <Coffee className="h-5 w-5 text-primary" />, desc: "World-class architectural firms and boutique design agencies building for the Middle East, USA, and Europe from Bali headquarters." },
                                { title: "Lifestyle & Wellness Innovation", icon: <CheckCircle2 className="h-5 w-5 text-primary" />, desc: "Founders modernizing the $4.5T global wellness economy with longevity tech and high-end hospitality products." }
                            ].map((hub, i) => (
                                <div key={i} className="flex gap-4 p-4 border rounded-xl hover:bg-muted/30 transition-colors">
                                    <div className="mt-1">{hub.icon}</div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-sm">{hub.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{hub.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Strategic Opportunities */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Why Founders Choose Bali</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The decision is often driven by <Link href="/why-bali-for-startups" className="text-primary hover:underline">market analysis</Link>. Founders realize that they can <Link href="/building-a-business-in-bali" className="text-primary hover:underline font-medium">build a business in Bali</Link> with 40% less capital than in Singapore, without sacrificing access to top-tier global networking.
                        </p>
                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 flex flex-col md:flex-row gap-6 items-center">
                            <MessageSquare className="h-12 w-12 text-primary/40" />
                            <div className="space-y-2">
                                <h4 className="font-serif font-bold text-lg italic">"Bali provides the focus that cities take away."</h4>
                                <p className="text-sm text-muted-foreground">The island's pace allows founders to enter a 'deep work' state that is difficult to find in traditional financial hubs.</p>
                            </div>
                        </div>
                    </section>

                    {/* Mistakes & Growth */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Navigating the Journey</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Every founder's path has obstacles. To ensure your venture thrives, study the <Link href="/mistakes-foreign-entrepreneurs-make" className="text-primary hover:underline">common pitfalls for Bali founders</Link>. Understanding the <Link href="/bali-business-environment" className="text-primary hover:underline font-medium">regulatory environment</Link> is your first line of defense.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Join the Founder Community</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Gain a high-authority corporate edge. Access our central intelligence report for deep advisory on Bali business setup.
                        </p>
                        <Button size="lg" className="bg-primary text-primary-foreground px-8" asChild>
                            <Link href="/starting-business-bali-guide">
                                Access Ultimate Guide
                            </Link>
                        </Button>
                    </section>
                </div>
            </main>
        </div>
    );
}
