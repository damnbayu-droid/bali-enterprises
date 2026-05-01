'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [desktopExpanded, setDesktopExpanded] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Strategic Blueprint', href: '/strategic-entry-blueprint-bali' },
    { name: 'About Us', href: '/about' },
    { name: 'What We Do', href: '/services' },
    { name: 'Our Ecosystem', href: '/ecosystem' },
    { name: 'Why Us', href: '/why-us' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-xl border-b border-white/10 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/image/Logobalienterprises.webp"
              alt="Bali Enterprises Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
              fetchPriority="high"
              sizes="40px"
            />
            <span 
              className="text-xl font-bold tracking-tighter text-slate-900"
              style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
            >
              BALI ENTERPRISES
            </span>
          </Link>

          {/* Desktop Navigation Group */}
          <div className="hidden md:flex items-center gap-6">
            {/* Expandable Links */}
            <div className={`flex items-center gap-6 overflow-hidden transition-all duration-500 ease-in-out ${desktopExpanded ? 'max-w-[800px] opacity-100' : 'max-w-0 opacity-0'}`}>
              <ul className="flex items-center gap-6 whitespace-nowrap">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 pl-6 border-l border-slate-100">
              <button 
                onClick={() => setDesktopExpanded(!desktopExpanded)}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 hover:text-primary transition-all group"
              >
                {desktopExpanded ? <X size={14} /> : <Menu size={14} />}
                <span>{desktopExpanded ? 'Close' : '<'}</span>
              </button>

              <Link
                href="/contact"
                className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all shadow-sm"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/40 backdrop-blur-2xl border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col p-8 gap-6">
            {navLinks.concat({ name: 'Contact', href: '/contact' }).map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 hover:text-primary transition-colors italic"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navigation
