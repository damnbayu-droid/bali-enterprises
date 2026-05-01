import { Metadata } from 'next'
import BPOMContent from './BPOMContent'
import Breadcrumbs from '@/components/ui/Breadcrumbs'

export const metadata: Metadata = {
  title: "BPOM Certification Indonesia | PT PMA Strategic Guide 2024",
  description: "The definitive guide for foreign investors (PT PMA) on obtaining BPOM certification in Indonesia. Covering cosmetics, food, supplements, and Bali-specific licensing.",
  alternates: {
    canonical: "https://bali.enterprises/bpom-certification-indonesia-pt-pma-guide",
  },
  openGraph: {
    title: "BPOM Certification Indonesia | PT PMA Strategic Guide",
    description: "Definitive roadmap for BPOM certification in Indonesia for international brands and PT PMA entities.",
    url: "https://bali.enterprises/bpom-certification-indonesia-pt-pma-guide",
    type: "article",
    images: [
      {
        url: "/image/bpom-guide-og.webp",
        width: 1200,
        height: 630,
        alt: "BPOM Certification Indonesia Guide",
      },
    ],
  },
}

export default function BPOMGuidePage() {
  return (
    <main className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Guides', href: '/sitemap' },
            { label: 'BPOM Certification', href: '/bpom-certification-indonesia-pt-pma-guide' }
          ]} 
        />
      </div>
      <BPOMContent />
    </main>
  )
}
