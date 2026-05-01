import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const knowledgeLinks = [
    { name: 'Ecosystem Overview', url: '/ecosystem' },
    { name: 'Strategic Entry Blueprint', url: '/strategic-entry-blueprint-bali' },
    { name: 'Starting Business Guide', url: '/starting-business-bali-guide' },
    { name: 'Startup Ecosystem Bali', url: '/startup-ecosystem-bali' },
    { name: 'Why Invest in Bali', url: '/why-invest-in-bali' },
  ]

  const flagshipDomains = [
    { name: 'balihelp.id', url: 'https://balihelp.id' },
    { name: 'indonesianvisas.com', url: 'https://indonesianvisas.com' },
    { name: 'indodesign.website', url: 'https://indodesign.website' },
  ]

  const technicalDomains = [
    { name: 'mybisnis.app', url: 'https://mybisnis.app' },
    { name: 'tropictech.rent', url: 'https://tropictech.rent' },
    { name: 'bali.technology', url: 'https://bali.technology' },
  ]

  return (
    <footer className="border-t border-slate-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-900">Bali Enterprises Group</h3>
            <p className="text-sm text-slate-500 font-light leading-relaxed max-w-sm italic">
              Strategic governance and investment ecosystem for the Indonesian archipelago.
            </p>
            <div className="pt-4 border-t border-slate-100 space-y-1">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Legal Identity</p>
               <p className="text-[10px] text-slate-500 uppercase tracking-tight">PT Indonesian Visas Agency (MYVISA)</p>
               <p className="text-[10px] text-slate-500">NIB: 0402260034806 | AHU-00065.AH.02.01</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Navigation</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-slate-600 hover:text-primary transition-colors italic">Home</Link></li>
                <li><Link href="/insights" className="text-sm text-slate-600 hover:text-primary transition-colors italic">Insights</Link></li>
                <li><Link href="/services" className="text-sm text-slate-600 hover:text-primary transition-colors italic">Services</Link></li>
                <li><Link href="/about" className="text-sm text-slate-600 hover:text-primary transition-colors italic">About</Link></li>
                <li><Link href="/sitemap" className="text-sm text-slate-600 hover:text-primary transition-colors italic">Sitemap</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Knowledge</h4>
              <ul className="space-y-2">
                {knowledgeLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.url} className="text-sm text-slate-600 hover:text-primary transition-colors italic">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p 
              className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]"
              suppressHydrationWarning
            >
              © {new Date().getFullYear()} PT Bali Enterprises Group. All rights reserved.
            </p>
            <div className="flex flex-col items-center md:items-end gap-4">
              {/* Layer 1 */}
              <div className="flex gap-6">
                {flagshipDomains.map((domain) => (
                  <Link
                    key={domain.name}
                    href={domain.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    {domain.name}
                  </Link>
                ))}
              </div>
              {/* Layer 2 */}
              <div className="flex gap-6">
                {technicalDomains.map((domain) => (
                  <Link
                    key={domain.name}
                    href={domain.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    {domain.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
