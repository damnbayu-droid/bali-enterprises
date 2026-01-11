import { Layers, Globe, MapPin, Building2, Smartphone, Server, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ExploreEcosystemPage() {
  const ecosystemLevels = [
    {
      level: 1,
      title: "Global Holding Company",
      description: "Bali Enterprises - Strategic oversight, governance, and international partnership management",
      color: "bg-primary"
    },
    {
      level: 2,
      title: "Regional Operations Hub",
      description: "Bali Enterprises Indonesia (EBali) - Executing business activities across Indonesia and ASEAN",
      color: "bg-primary/80"
    },
    {
      level: 3,
      title: "Operating Companies",
      description: "Sector-focused businesses providing specialized services across multiple industries",
      color: "bg-primary/60"
    },
    {
      level: 4,
      title: "Service Platforms",
      description: "Digital platforms and service delivery mechanisms for end customers",
      color: "bg-primary/40"
    }
  ]

  const keyServices = [
    {
      icon: Smartphone,
      title: "Super App Platform",
      description: "Integrated services for international tourists and expatriates including visa, business services, wellness, tourism, and more.",
      features: ["Visa & Immigration", "Business Services", "Equipment Rental", "Wellness Services", "Tourism"]
    },
    {
      icon: Server,
      title: "Digital Infrastructure",
      description: "Data center and technology infrastructure initiatives supporting digital growth and data sovereignty in Indonesia.",
      features: ["Data Center Collaboration", "Technology Integration", "Digital Ecosystem", "Scalable Infrastructure"]
    },
    {
      icon: Building2,
      title: "Corporate Services",
      description: "PT PMA formation, corporate structuring, and ongoing business support for international companies.",
      features: ["Company Formation", "Legal Services", "Immigration Support", "Business Operations"]
    },
    {
      icon: Globe,
      title: "International Network",
      description: "Global chain visa services network with offices across Europe, Americas, Asia, Australia, and Africa.",
      features: ["Global Visa Services", "ASEAN Expansion", "Cross-border Support", "International Partners"]
    }
  ]

  const operatingEntities = [
    {
      category: "Foreign Investment Companies",
      companies: [
        "PT Tropic Tech International - Work equipment & rental services",
        "PT Bali Experience Group - Wellness Bali services"
      ]
    },
    {
      category: "Local Operating Companies",
      companies: [
        "PT Inaranet Group Sejahtra - Media & digital support",
        "PT Nawa Cita Bersama - Bali Help Group operations",
        "PT Bali Surga Indah - Tourism services",
        "CV Tunas Raya - Procurement & vehicle rentals"
      ]
    },
    {
      category: "Service Brands",
      companies: [
        "Bali Help - Business services platform",
        "Indonesian Help - Extended services ecosystem",
        "Wellness Bali - Premium wellness experiences",
        "Indo Design - Digital design services",
        "My Bisnis - Business management platform",
        "Bali Hair - Premium salon services"
      ]
    }
  ]

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Layers className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Explore Our Ecosystem
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the complete network of companies, services, and partnerships that make Bali Enterprises your trusted gateway to Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Structure */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Ecosystem Structure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A layered approach enabling strategic control with operational flexibility
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {ecosystemLevels.map((level, index) => (
              <div
                key={index}
                className="relative p-6 rounded-lg border-2 border-border bg-card hover:shadow-lg transition-all"
              >
                <div className="absolute left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-10 h-10 rounded-full ${level.color} text-white flex items-center justify-center font-bold text-lg`}>
                    {level.level}
                  </div>
                </div>
                <div className="ml-16">
                  <h3 className="text-2xl font-bold mb-2">{level.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{level.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Key Services & Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Core offerings that serve international businesses and individuals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyServices.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Entities */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Operating Entities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our network of companies delivering excellence across industries
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {operatingEntities.map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.companies.map((company, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-all"
                    >
                      <p className="text-sm font-medium">{company}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Ecosystem Advantages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How our integrated ecosystem creates value for partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-border bg-card">
              <Layers className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Integrated Services</h3>
              <p className="text-muted-foreground">
                Access multiple services through a single ecosystem, reducing complexity and improving efficiency.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <MapPin className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Regional Coverage</h3>
              <p className="text-muted-foreground">
                Comprehensive coverage across Indonesia with established presence in key business and tourist destinations.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <Building2 className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Scalable Growth</h3>
              <p className="text-muted-foreground">
                Modular structure that enables seamless scaling as your business expands across the region.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <TrendingUp className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Risk Mitigation</h3>
              <p className="text-muted-foreground">
                Separated risk structure between holding and operating companies protecting your investments.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <Globe className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Global Standards</h3>
              <p className="text-muted-foreground">
                International business practices combined with local expertise for seamless cross-border operations.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <CheckCircle2 className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Consistent quality and service standards across all operating entities and service platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to Explore Partnership Opportunities?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you're an investor, business partner, or service provider, our ecosystem offers multiple pathways to success in Indonesia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/partner-with-us"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                Become a Partner
                <ArrowRight size={20} />
              </a>
              <a
                href="https://wa.me/61423854701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                Discuss Your Needs
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
