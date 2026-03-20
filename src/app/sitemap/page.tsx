import { Metadata } from "next";
import Link from "next/link";
import { 
    ArrowLeft, 
    Map, 
    ChevronRight,
    BookOpen,
    TrendingUp,
    Briefcase,
    ShieldCheck,
    Globe,
    Building2,
    Users
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
    title: "Sitemap: Bali Investment Knowledge Hub | Bali Enterprises",
    description: "Navigate the complete Bali Enterprises Knowledge Hub. Access 30+ high-authority guides on starting a business, legal frameworks, and investment opportunities in Bali.",
};

const clusters = [
    {
        name: "Core Guides",
        icon: <BookOpen className="h-5 w-5 text-primary" />,
        links: [
            { title: "Ultimate Business Guide", href: "/starting-business-bali-guide" },
            { title: "Strategic Entry Blueprint", href: "/strategic-entry-blueprint-bali" },
            { title: "Why Invest in Bali", href: "/why-invest-in-bali" },
            { title: "Startup Ecosystem Bali", href: "/startup-ecosystem-bali" },
        ]
    },
    {
        name: "Cluster 6: National Economic Hubs (PT PMA)",
        icon: <Building2 className="h-5 w-5 text-primary" />,
        links: [
            { title: "Company Formation Bali", href: "/company-formation-bali" },
            { title: "Company Formation Jakarta", href: "/company-formation-jakarta" },
            { title: "PT PMA Setup Surabaya", href: "/pt-pma-setup-surabaya" },
            { title: "PT PMA Setup Lombok", href: "/pt-pma-setup-lombok" },
            { title: "PT PMA Setup Yogyakarta", href: "/pt-pma-setup-yogyakarta" },
            { title: "PT PMA Setup Bandung", href: "/pt-pma-setup-bandung" },
            { title: "PT PMA Setup Medan", href: "/pt-pma-setup-medan" },
            { title: "Company Formation Indonesia", href: "/company-formation-indonesia" },
        ]
    },
    {
        name: "Cluster 7: Regional Growth Centers (PT PMA)",
        icon: <Globe className="h-5 w-5 text-primary" />,
        links: [
            { title: "Batam (Free Trade Zone)", href: "/pt-pma-setup-batam" },
            { title: "Makassar (Eastern Gateway)", href: "/pt-pma-setup-makassar" },
            { title: "Semarang (Central Java)", href: "/pt-pma-setup-semarang" },
            { title: "Balikpapan (IKN Gateway)", href: "/pt-pma-setup-balikpapan" },
            { title: "Palembang (Energy Hub)", href: "/pt-pma-setup-palembang" },
            { title: "Labuan Bajo (Eco-Tourism)", href: "/pt-pma-setup-labuan-bajo" },
            { title: "Manado (Dive & Trade)", href: "/pt-pma-setup-manado" },
            { title: "Malang (Agribusiness)", href: "/pt-pma-setup-malang" },
            { title: "Denpasar (Urban Bali)", href: "/pt-pma-setup-denpasar" },
            { title: "Tangerang (Industrial Hub)", href: "/pt-pma-setup-tangerang" },
        ]
    },
    {
        name: "Cluster 1: Business in Bali",
        icon: <Briefcase className="h-5 w-5 text-primary" />,
        links: [
            { title: "Doing Business in Bali", href: "/doing-business-in-bali" },
            { title: "Bali Business Environment", href: "/bali-business-environment" },
            { title: "Business Opportunities Bali", href: "/business-opportunities-bali" },
            { title: "Cost of Doing Business", href: "/cost-of-doing-business-bali" },
            { title: "Growth Industries", href: "/industries-growing-bali" },
        ]
    },
    {
        name: "Cluster 2: Entrepreneurship",
        icon: <Users className="h-5 w-5 text-primary" />,
        links: [
            { title: "How to Start a Business", href: "/how-to-start-a-business-in-bali" },
            { title: "Entrepreneurship Culture", href: "/entrepreneurship-in-bali" },
            { title: "Digital Nomads & Startups", href: "/digital-nomads-startups-bali" },
            { title: "Building Your Team", href: "/building-a-business-in-bali" },
            { title: "Common Mistakes to Avoid", href: "/mistakes-foreign-entrepreneurs-make" },
        ]
    },
    {
        name: "Cluster 3: Investment Indonesia",
        icon: <TrendingUp className="h-5 w-5 text-primary" />,
        links: [
            { title: "Foreign Investment Guide", href: "/foreign-investment-indonesia" },
            { title: "Why Invest Indonesia", href: "/why-invest-indonesia" },
            { title: "Investment Opportunities", href: "/investment-opportunities-indonesia" },
            { title: "Bali Investment Strategy", href: "/bali-investment-guide" },
            { title: "Available Sectors", href: "/sectors-open-foreign-investors" },
            { title: "Macro Business Growth", href: "/indonesia-business-growth" },
        ]
    },
    {
        name: "Cluster 4: Corporate Ecosystem",
        icon: <ShieldCheck className="h-5 w-5 text-primary" />,
        links: [
            { title: "The Bali Enterprises Ecosystem", href: "/bali-enterprises-ecosystem" },
            { title: "Investor Referral Program", href: "/investor-referral-bali" },
            { title: "Corporate Services Stack", href: "/bali-corporate-services" },
            { title: "Investment Consultancy", href: "/bali-investment-consultancy" },
            { title: "Boutique Investment Model", href: "/boutique-investment-bali" },
            { title: "Expansion Beyond Bali", href: "/expanding-business-indonesia" },
        ]
    },
    {
        name: "Cluster 5: Comparisons",
        icon: <Globe className="h-5 w-5 text-primary" />,
        links: [
            { title: "Bali vs Thailand", href: "/bali-vs-thailand-business" },
            { title: "Bali vs Singapore", href: "/bali-vs-singapore-startup" },
            { title: "Bali vs Dubai", href: "/bali-vs-dubai-business" },
            { title: "Indonesia vs Malaysia", href: "/indonesia-vs-malaysia-business" },
            { title: "Why Bali for Startups", href: "/why-bali-for-startups" },
            { title: "Business Regions in Indonesia", href: "/business-regions-indonesia" },
        ]
    }
];

export default function SitemapPage() {
    return (
        <div className="flex flex-col items-center min-h-screen bg-background pt-12">
            <div className="w-full max-w-5xl px-6 mb-8">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Home
                </Link>
            </div>

            <main className="w-full max-w-5xl px-6 pb-24">
                <header className="space-y-6 mb-16">
                    <div className="flex items-center gap-3 text-primary mb-2">
                        <Map className="h-6 w-6" />
                        <span className="text-sm font-bold uppercase tracking-widest">Navigation Hub</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-tight text-foreground leading-tight">
                        Knowledge Hub <span className="text-muted-foreground italic">Sitemap</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl border-l-2 border-primary/20 pl-6 italic">
                        A high-authority index of our strategic business intelligence, localized guidance, and jurisdictional benchmarks for Bali and Indonesia.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {clusters.map((cluster, i) => (
                        <section key={i} className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-border pb-4">
                                {cluster.icon}
                                <h2 className="text-lg font-bold uppercase tracking-wider">{cluster.name}</h2>
                            </div>
                            <ul className="space-y-4">
                                {cluster.links.map((link, j) => (
                                    <li key={j}>
                                        <Link 
                                            href={link.href}
                                            className="group flex flex-col space-y-1 hover:text-primary transition-colors"
                                        >
                                            <span className="font-medium flex items-center gap-2">
                                                {link.title}
                                                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                                            </span>
                                            <span className="text-xs text-muted-foreground uppercase tracking-widest leading-none">
                                                {link.href}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>

                <Separator className="my-20" />

                <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 text-center">
                    <h2 className="text-3xl font-serif mb-6">Need Strategic Guidance?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                        Our knowledge hub is designed to reduce the friction of Indonesian market entry. Access our Ultimate Guide for a comprehensive technical roadmap.
                    </p>
                    <Link 
                        href="/starting-business-bali-guide"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                        Access Ultimate Guide
                    </Link>
                </section>
            </main>
        </div>
    );
}
