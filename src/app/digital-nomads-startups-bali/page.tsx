import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Wifi, 
    Rocket, 
    CheckCircle2, 
    ShieldAlert, 
    Zap, 
    Users,
    ChevronRight,
    Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvisoryInsight } from "@/components/ui/advisory-insight";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Digital Nomads & Startups in Bali: The Professional Pivot | Bali Enterprises",
    description: "The complete guide for digital nomads transitioning into formal startup founders in Bali. Learn about visa compliance, tax residency, and the PT PMA structure.",
};

export default function DigitalNomadsStartupsPage() {
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
                        <Wifi className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Nomad Strategy</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-tight">
                        Digital Nomads & <span className="text-muted-foreground italic">Startups in Bali</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                        The evolution from a solo remote worker to a venture-backed startup founder is the defining trend of the modern Bali economy.
                    </p>
                </header>

                <div className="space-y-16">
                    {/* The Professional Pivot */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The Professional Pivot</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            While being a digital nomad offers freedom, scaling a serious venture requires a formal corporate structure. Transitioning from a temporary visa to a <Link href="/starting-business-bali-guide#pma-structure" className="text-primary hover:underline font-medium">PT PMA (Foreign Owned Company)</Link> is the most critical step in this evolution.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="p-6 rounded-xl border bg-card/50 space-y-3">
                                <h4 className="font-bold flex items-center gap-2 text-primary font-serif">The Nomad Phase</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Single founder / Solo-preneur</li>
                                    <li>• Remote clients, no local entity</li>
                                    <li>• Reliance on B211A or E-Visas</li>
                                    <li>• No local hiring or bank assets</li>
                                </ul>
                            </div>
                            <div className="p-6 rounded-xl border border-primary/20 bg-primary/5 space-y-3">
                                <h4 className="font-bold flex items-center gap-2 text-primary font-serif">The Founder Phase</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Corporate liability protection</li>
                                    <li>• 100% foreign ownership rights</li>
                                    <li>• Investor KITAS (E23) sponsorship</li>
                                    <li>• Full local & global scalability</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <Separator />

                    {/* Visa Compliance */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Navigating the Compliance Gap</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Operationally, the "Nomad to Founder" shift is driven by visa compliance. Managing a team or being a director of an Indonesian entity without an <Link href="/starting-business-bali-guide#visa-options" className="text-primary hover:underline">Investor KITAS</Link> is a high-risk activity. 
                        </p>
                        <AdvisoryInsight title="Consultant Perspective">
                            The Indonesian government has introduced the "Remote Worker Visa" (E33G), but it is explicitly for those working for companies *outside* Indonesia. If you are building your own company, the PT PMA + Investor KITAS remains the only compliant path.
                        </AdvisoryInsight>
                    </section>

                    {/* Ecosystem Access */}
                    <section className="space-y-8">
                        <h2 className="text-3xl font-serif">Accelerating Through the Ecosystem</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Once formalised, founders gain access to the deeper <Link href="/startup-ecosystem-bali" className="text-primary hover:underline">startup ecosystem in Bali</Link>. This includes strategic networking hubs in Canggu and Uluwatu that are often restricted to registered business owners and investors.
                        </p>
                        <div className="space-y-4">
                            {[
                                { title: "Venture Access", desc: "Easier access to Jakarta-based VC circles when holding a formal PT PMA." },
                                { title: "Talent Acquisition", desc: "Legal rights to hire and provide BPJS (Insurance) to Indonesian talent." },
                                { title: "Banking Efficiency", desc: "Access to corporate accounts and faster international wires." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                                    <div className="flex gap-3 items-center">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        <span className="font-bold text-sm">{item.title}</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Cost of Transition */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">The Capital Commitment</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The transition involves a mandatory <Link href="/cost-of-doing-business-bali" className="text-primary hover:underline">operational cost increase</Link>. However, this is offset by the ability to tap into the $1.3T Indonesian consumer market and the significant <Link href="/business-opportunities-bali" className="text-primary hover:underline">business opportunities in Bali</Link> that are inaccessible to freelancers.
                        </p>
                    </section>

                    {/* Comparative Analysis */}
                    <section className="space-y-6">
                        <h2 className="text-3xl font-serif">Global Benchmarks</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            How does Bali compare for nomads-tuned-founders? For a comparison vs major digital hubs, read our <Link href="/bali-vs-thailand-business" className="text-primary hover:underline">Bali vs Thailand</Link> and <Link href="/bali-vs-singapore-startup" className="text-primary hover:underline">Bali vs Singapore</Link> reports.
                        </p>
                    </section>

                    {/* Strategic Funnel CTA */}
                    <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center space-y-6">
                        <h2 className="text-3xl font-serif">Formalise Your Freedom</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Move beyond the nomad phase. Protect your IP and scale your venture with a formal Indonesian corporate presence.
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
