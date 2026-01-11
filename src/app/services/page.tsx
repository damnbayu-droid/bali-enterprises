import { Building2, Users, MapPin, Shield, Smartphone, CheckCircle, LayoutGrid } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: "Global Holding & Governance",
      description: "Providing corporate structure, oversight, and strategic direction for subsidiaries and joint ventures. We ensure professional governance frameworks that meet international standards while maintaining operational flexibility.",
      features: [
        "Corporate governance frameworks",
        "Strategic oversight",
        "Board structure & management",
        "Compliance & reporting",
        "International standards alignment"
      ]
    },
    {
      icon: Users,
      title: "Cross-Border Investment & Partnerships",
      description: "Facilitating international investments, strategic alliances, and long-term collaborations in Indonesia and ASEAN. We connect global capital with local opportunities through structured due diligence and partnership development.",
      features: [
        "Investment structuring",
        "Due diligence support",
        "Strategic partnership development",
        "Cross-border transactions",
        "Joint venture facilitation"
      ]
    },
    {
      icon: MapPin,
      title: "Market Entry Strategy",
      description: "Supporting foreign companies entering Indonesia through structured planning, risk mitigation, and local execution. We provide the strategic framework and on-ground coordination needed for successful market entry.",
      features: [
        "Market research & analysis",
        "Entry strategy development",
        "Risk assessment & mitigation",
        "Regulatory navigation",
        "Local partner identification"
      ]
    },
    {
      icon: Shield,
      title: "Brand & Intellectual Property Management",
      description: "Managing group-level branding, digital assets, and intellectual property across markets. We protect and develop your brand presence throughout Indonesia and the ASEAN region.",
      features: [
        "Brand strategy development",
        "Trademark & IP protection",
        "Digital asset management",
        "Brand consistency across markets",
        "Marketing coordination"
      ]
    },
    {
      icon: Smartphone,
      title: "Regional Development Oversight",
      description: "Supervising operational entities that handle legal, visa, business formation, and on-the-ground services. We ensure consistency and quality across all regional operations while maintaining strategic alignment.",
      features: [
        "Quality assurance",
        "Operational standards",
        "Regional coordination",
        "Performance monitoring",
        "Strategic alignment"
      ]
    },
    {
      icon: LayoutGrid,
      title: "Digital Infrastructure Development",
      description: "Developing integrated digital platforms and infrastructure solutions that support business operations, including super app development, data center collaboration, and digital ecosystem integration.",
      features: [
        "Super app platform development",
        "Digital ecosystem integration",
        "Data center collaboration",
        "Technology infrastructure",
        "Digital transformation support"
      ]
    }
  ]

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              What We Do
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A strategic holding and coordination platform for high-level business activities
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Bali Enterprises operates as a strategic holding and coordination platform, focusing on high-level business activities rather than day-to-day operations. Our core activities enable international businesses to establish, operate, and grow in Indonesia with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-primary mt-0.5 shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to successful market entry and growth
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-muted-foreground">
                Understanding your business objectives and requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Strategy</h3>
              <p className="text-muted-foreground">
                Developing customized market entry and growth strategies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Execution</h3>
              <p className="text-muted-foreground">
                Implementing strategies through our ecosystem
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Growth</h3>
              <p className="text-muted-foreground">
                Supporting continuous expansion and optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss how our services can support your business goals in Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://formspree.io/f/mldqzknn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Submit Inquiry
            </a>
            <a
              href="https://wa.me/61423854701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
