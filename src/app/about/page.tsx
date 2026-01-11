import { Eye, Globe, Shield, Users, TrendingUp, Handshake } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About Bali Enterprises
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              An international holding company connecting global partners with strategic opportunities in Indonesia and ASEAN
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Bali Enterprises is an international holding company established to connect global partners with strategic opportunities in Indonesia and the ASEAN region.
              </p>
              <p>
                We operate as a gateway for cross-border collaboration, investment structuring, and long-term business development. With strong regional execution through our subsidiaries, Bali Enterprises enables foreign companies, investors, and institutions to enter Indonesia with confidence, clarity, and professional governance.
              </p>
              <p>
                Our approach combines international standards with deep local understanding. We focus on building sustainable business ecosystems rather than short-term projects, ensuring every partnership is structured for growth, compliance, and long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted global gateway connecting international ambition with Indonesia's economic future.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="text-primary" size={24} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide structure, governance, and execution platforms that enable seamless international business expansion into Indonesia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Upholding the highest ethical standards in every interaction
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Eye className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Clear communication and honest business practices
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Professionalism</h3>
              <p className="text-muted-foreground leading-relaxed">
                Delivering excellence through expertise and dedication
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Long-Term Growth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building sustainable partnerships for mutual success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bali Enterprises */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What sets Bali Enterprises apart in the Indonesian market
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg border border-border bg-card">
              <Handshake className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">International Perspective</h3>
              <p className="text-muted-foreground leading-relaxed">
                We work with global partners and understand international business expectations, ensuring seamless communication and alignment with global standards.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <Shield className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Local Execution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our regional entities operate on the ground with real market experience, combining international standards with local knowledge and relationships.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <TrendingUp className="text-primary mb-4" size={40} />
              <h3 className="text-xl font-bold mb-3">Structured Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our holding model allows growth without operational chaos, providing stability and clear governance as your business expands across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss how we can support your business goals in Indonesia
          </p>
          <a
            href="https://wa.me/61423854701"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
