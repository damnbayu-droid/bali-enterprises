'use client'

import { useState } from 'react'
import { Mail, Phone, Globe, MapPin, User, Building, MessageSquare, Send, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry: '',
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
        setFormData({ name: '', email: '', company: '', inquiry: '', message: '' })
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

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's discuss how we can support your business goals in Indonesia
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                Thank you for your inquiry. We will respond within 24 hours.
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive">
                There was a problem submitting your form. Please try again or contact us directly via WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <User size={16} />
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
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Mail size={16} />
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

              <div>
                <label htmlFor="company" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Building size={16} />
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
                <label htmlFor="inquiry" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <MessageSquare size={16} />
                  Type of Inquiry
                </label>
                <select
                  id="inquiry"
                  name="inquiry"
                  required
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="investment">Investment Opportunities</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="market-entry">Market Entry Consultation</option>
                  <option value="services">Business Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <MessageSquare size={16} />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Submit Inquiry
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 p-4 rounded-lg bg-muted/30 text-center">
              <p className="text-sm text-muted-foreground mb-3">Or contact us directly</p>
              <a
                href="https://wa.me/61423854701"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                <Phone size={20} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Direct Contact</h2>
              <p className="text-muted-foreground">
                For business inquiries, strategic partnerships, or international collaboration
              </p>
            </div>

            <div className="p-8 rounded-lg border border-border bg-muted/30 mb-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Bayu Damopolii - Manoppo</h3>
                <p className="text-muted-foreground mb-1">Chief Executive Officer (CEO)</p>
                <p className="font-semibold text-foreground">ceo@bali.enterprises</p>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Phone (Australia)
                  </p>
                  <div className="flex items-center gap-2">
                    <Phone size={18} className="text-primary" />
                    <a
                      href="tel:+61423854701"
                      className="text-lg font-semibold hover:text-primary transition-colors"
                    >
                      +61 423854701
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Email
                  </p>
                  <div className="flex items-center gap-2">
                    <Mail size={18} className="text-primary" />
                    <a
                      href="mailto:info@bali.enterprises"
                      className="text-lg font-semibold hover:text-primary transition-colors"
                    >
                      info@bali.enterprises
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Website
                  </p>
                  <div className="flex items-center gap-2">
                    <Globe size={18} className="text-primary" />
                    <a
                      href="https://www.bali.enterprises"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:text-primary transition-colors"
                    >
                      www.bali.enterprises
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-border bg-card">
              <h3 className="text-xl font-bold mb-4">Contact For</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={20} />
                  <span className="text-muted-foreground">Investment discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={20} />
                  <span className="text-muted-foreground">Partnership proposals</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={20} />
                  <span className="text-muted-foreground">Cross-border business opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={20} />
                  <span className="text-muted-foreground">Market entry consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-0.5" size={20} />
                  <span className="text-muted-foreground">Corporate services inquiry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
