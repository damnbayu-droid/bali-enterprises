import { Globe, Building2, MapPin, Smartphone, Server, CheckCircle, Layers, Link as LinkIcon } from 'lucide-react'

export default function EcosystemPage() {
  const superAppServices = [
    {
      title: "All Visa and Immigration Services",
      description: "Expandable to ASEAN countries. Active visa services with established offices in Europe, Americas, Asia, Australia, and Africa as a global chain visa services network, with branch services for Indonesian visas in all major cities throughout Indonesia."
    },
    {
      title: "Business Services Under Bali Help",
      description: "Company formation and corporate support for international businesses entering Indonesia."
    },
    {
      title: "Work Equipment Rental",
      description: "Professional workspace equipment including computers, monitors, desks, and ergonomic chairs for remote workers and digital nomads."
    },
    {
      title: "Wellness and Leisure Services",
      description: "Premium wellness experiences including jacuzzi and traditional massage services for relaxation and rejuvenation."
    },
    {
      title: "Cocktail Home Service",
      description: "Professional bartending services delivered to your location (currently under development)."
    },
    {
      title: "Tourism Services",
      description: "Expert local guides and comprehensive tourism services for all destinations across Bali."
    }
  ]

  const operatingCompanies = [
    {
      category: "Foreign Investment Companies (PT PMA)",
      companies: [
        { name: "PT Tropic Tech International", description: "Work setup and equipment rental services for digital professionals and remote workers." },
        { name: "PT Bali Experience Group", description: "Wellness services under Wellness Bali brand, providing holistic health and relaxation solutions." }
      ]
    },
    {
      category: "Local Operating Companies",
      companies: [
        { name: "PT Inaranet Group Sejahtra", description: "Media and digital support services for businesses and content creators." },
        { name: "PT Nawa Cita Bersama", description: "Bali Help Group operations, coordinating integrated services for expatriates and tourists." },
        { name: "PT Bali Surga Indah", description: "Tourism services connecting visitors with authentic Balinese experiences." },
        { name: "CV Tunas Raya", description: "Procurement services and vehicle rentals for business and personal needs." }
      ]
    }
  ]

  const ecosystemBenefits = [
    { icon: Layers, title: "Centralized Governance", description: "With decentralized execution" },
    { icon: LinkIcon, title: "Strong Collaboration", description: "Between holding and operating companies" },
    { icon: CheckCircle, title: "Modular Structure", description: "Enabling scalable growth" },
    { icon: MapPin, title: "Risk Separation", description: "Between strategic and operational layers" },
    { icon: Globe, title: "Long-Term Vision", description: "Supported by real operational assets" }
  ]

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Ecosystem
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A structured and scalable ecosystem of regional companies, sector-focused businesses, and strategic collaborations
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Bali Enterprises operates through a structured and scalable ecosystem of regional companies, sector-focused businesses, and strategic collaborations. The ecosystem is designed to support international investment, digital infrastructure, and integrated services across Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Structure */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Ecosystem Structure</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The organizational framework that enables our global operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Holding</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bali Enterprises acts as the global holding company, providing strategic direction, governance, brand oversight, and international partnership management.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <MapPin className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Regional Operations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bali Enterprises Indonesia (EBali) serves as the regional operating hub, executing business activities across Indonesia and ASEAN through subsidiaries and local partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Business Pillars */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Strategic Business Pillars</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Core focus areas driving our ecosystem development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Server className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Infrastructure & Data Center Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bali Enterprises is open to strategic collaboration in developing data center infrastructure in key regions of Indonesia, including Bali and Sulawesi. These initiatives aim to support digital growth, data sovereignty, and long-term technology ecosystems through partnerships with local and international stakeholders.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Smartphone className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Integrated Super App Platform</h3>
              <p className="text-muted-foreground leading-relaxed">
                Bali Enterprises is developing a unified Super App under the Bali Help / Indonesian Help ecosystem. The application is designed for App Store and Google Play, integrating multiple services into a single digital platform for international tourists and expatriates in Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Super App Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Planned Super App Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Integrated services in a single platform
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {superAppServices.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border-l-4 border-primary bg-card"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Companies */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {operatingCompanies.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 last:mb-0">
              <h2 className="text-2xl font-bold mb-8 border-l-4 border-primary pl-4">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.companies.map((company, companyIndex) => (
                  <div
                    key={companyIndex}
                    className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-bold mb-3">{company.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{company.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why This Ecosystem Works */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Why This Ecosystem Works</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key advantages of our structured approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {ecosystemBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 rounded-lg bg-muted/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Explore Our Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              This ecosystem enables Bali Enterprises to build sustainable, technology-driven, and service-oriented business platforms while maintaining clarity, control, and long-term strategic focus.
            </p>
            <a
              href="https://wa.me/61423854701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Discuss Partnership Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
