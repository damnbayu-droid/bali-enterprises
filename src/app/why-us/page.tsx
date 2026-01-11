import { Globe, MapPin, Building2, Shield, Zap, Users, CheckCircle2, Award, Target } from 'lucide-react'

export default function WhyUsPage() {
  const advantages = [
    {
      icon: Globe,
      title: "International Perspective",
      description: "We work with global partners and understand international business expectations, ensuring seamless communication and alignment with global standards.",
      features: [
        "Global business experience",
        "Cross-cultural competence",
        "International best practices",
        "Seamless communication"
      ]
    },
    {
      icon: MapPin,
      title: "Strong Local Execution",
      description: "Our regional entities operate on the ground with real market experience, combining international standards with local knowledge and relationships.",
      features: [
        "Local market expertise",
        "Government relationships",
        "Regional operations",
        "On-ground support"
      ]
    },
    {
      icon: Building2,
      title: "Structured & Scalable",
      description: "Our holding model allows growth without operational chaos, providing stability and clear governance as your business expands across the region.",
      features: [
        "Clear governance structure",
        "Scalable operations",
        "Risk separation",
        "Professional oversight"
      ]
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We prioritize compliance, clarity, and long-term relationships. Every partnership is built on transparent operations and ethical business practices.",
      features: [
        "Compliance-focused",
        "Transparent reporting",
        "Ethical practices",
        "Long-term relationships"
      ]
    },
    {
      icon: Zap,
      title: "One Gateway, Many Solutions",
      description: "Partners engage with one group while accessing a complete business ecosystem in Indonesia, from incorporation to immigration to lifestyle support.",
      features: [
        "Single point of contact",
        "Integrated services",
        "Complete ecosystem",
        "Streamlined operations"
      ]
    }
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Years of experience supporting international businesses enter and grow in the Indonesian market with documented success."
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Long-term partnership approach ensures we're invested in your success, not just transactional services."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Professional team with international experience and local expertise, committed to your business objectives."
    },
    {
      icon: Shield,
      title: "Compliance First",
      description: "All operations are conducted with full compliance with Indonesian regulations and international standards."
    },
    {
      icon: Globe,
      title: "Regional Reach",
      description: "Coverage across Indonesia with established presence in key business centers and tourist destinations."
    },
    {
      icon: CheckCircle2,
      title: "Comprehensive Support",
      description: "From initial consultation to ongoing operations, we provide end-to-end support for your Indonesian business journey."
    }
  ]

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Why Bali Enterprises
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The trusted partner for international business in Indonesia
            </p>
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Our Key Advantages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What sets us apart in the Indonesian market
            </p>
          </div>

          <div className="space-y-12">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
              >
                <div className={`order-2 md:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <advantage.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{advantage.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {advantage.description}
                  </p>
                  <ul className="space-y-3">
                    {advantage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary" size={20} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`order-1 md:order-${index % 2 === 0 ? '2' : '1'} p-8 rounded-lg bg-muted/30`}>
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <advantage.icon className="text-primary" size={48} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The Bali Enterprises difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Traditional Approach vs Bali Enterprises
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why our model delivers better results
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border bg-muted/30">
                <h3 className="text-xl font-bold mb-4 text-muted-foreground">Traditional Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Transaction-focused services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Multiple vendors needed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Limited local knowledge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">Short-term perspective</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✗</span>
                    <span className="text-muted-foreground">No operational support</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border-2 border-primary bg-primary/5">
                <h3 className="text-xl font-bold mb-4">Bali Enterprises</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1" size={20} />
                    <span className="text-foreground">Long-term partnership model</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1" size={20} />
                    <span className="text-foreground">Complete ecosystem access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1" size={20} />
                    <span className="text-foreground">Deep local expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1" size={20} />
                    <span className="text-foreground">Sustainable growth focus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1" size={20} />
                    <span className="text-foreground">Full operational support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience the Bali Enterprises advantage for your Indonesian business journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/61423854701"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Contact on WhatsApp
            </a>
            <a
              href="https://formspree.io/f/mldqzknn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Submit Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
