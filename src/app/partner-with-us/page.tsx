'use client'

import { useState } from 'react'
import { Handshake, Building2, Users, Target, CheckCircle2, ArrowRight, Send } from 'lucide-react'

export default function PartnerWithUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    partnership_type: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mldqzknn', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', partnership_type: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const partnershipBenefits = [
    {
      icon: Handshake,
      title: "Strategic Partnership",
      description: "Long-term collaboration with structured governance and shared success metrics."
    },
    {
      icon: Building2,
      title: "Market Access",
      description: "Direct access to Indonesian and ASEAN markets through our established ecosystem."
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Benefit from our deep local knowledge, relationships, and operational capabilities."
    },
    {
      icon: Target,
      title: "Growth Acceleration",
      description: "Accelerate your market entry and growth with proven execution infrastructure."
    }
  ]

  const partnershipTypes = [
    "Investment Partnership",
    "Strategic Alliance",
    "Joint Venture",
    "Market Entry Collaboration",
    "Technology Partnership",
    "Service Integration"
  ]

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Handshake className="text-primary" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our network of global partners and unlock opportunities in Indonesia's growing market
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Why Partner With Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Build meaningful partnerships that drive mutual growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Various collaboration models tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="text-primary" size={24} />
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {type}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Flexible partnership structure designed for mutual benefit and long-term success.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Start a Conversation
              </h2>
              <p className="text-xl text-muted-foreground">
                Tell us about your partnership interests and we'll be in touch
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                Thank you for your partnership interest. We will contact you within 24 hours.
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive">
                There was a problem submitting your request. Please try again or contact us directly via WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label htmlFor="partnership_type" className="block text-sm font-medium mb-2">
                  Partnership Type
                </label>
                <select
                  id="partnership_type"
                  name="partnership_type"
                  required
                  value={formData.partnership_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select partnership type</option>
                  {partnershipTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Partnership Proposal
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                  placeholder="Describe your partnership proposal, objectives, and how we can work together..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : (
                  <>
                    Submit Partnership Inquiry
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Prefer to talk directly?</p>
              <a
                href="https://wa.me/61423854701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                <Send size={20} />
                Contact on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Ready to Build Something Great Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join our growing network of partners and unlock the potential of the Indonesian market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/why-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Learn More About Us
              <ArrowRight size={20} />
            </a>
            <a
              href="/ecosystem"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Explore Our Ecosystem
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
