import Link from 'next/link'

const Footer = () => {
  const linkedDomains = [
    { name: 'balihelp.id', url: 'https://balihelp.id' },
    { name: 'indonesianvisas.com', url: 'https://indonesianvisas.com' },
    { name: 'indodesign.website', url: 'https://indodesign.website' },
    { name: 'mybisnis.app', url: 'https://mybisnis.app' },
    { name: 'tropictech.online', url: 'https://tropictech.online' },
    { name: 'wellnessbali.id', url: 'https://wellnessbali.id' },
  ]

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bali Enterprises. All rights reserved.
          </p>

          {/* Main Domain */}
          <Link
            href="/sitemap"
            className="text-base font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-[0.2em]"
          >
            Sitemap
          </Link>

          {/* Linked Company Domains */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-border/50">
            {linkedDomains.map((domain) => (
              <Link
                key={domain.name}
                href={domain.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {domain.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
