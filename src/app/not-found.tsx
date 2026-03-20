'use client'

import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-background">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-9xl font-serif font-black italic tracking-tighter text-primary/20">404</h1>
          <h2 className="text-4xl md:text-5xl font-serif font-black italic tracking-tighter uppercase leading-tight">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground font-bold italic opacity-80">
            The investment route you're looking for doesn't exist or has been moved within our network.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-black rounded-full hover:bg-black hover:text-white transition-all shadow-xl italic"
          >
            <Home size={20} />
            Back to Gateway
          </Link>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-xl text-foreground font-black rounded-full border-2 border-border hover:bg-muted transition-all italic"
          >
            Contact Support
          </Link>
        </div>

        <div className="pt-12 opacity-30 select-none pointer-events-none">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">Bali Enterprises | Global Holding Group</span>
        </div>
      </div>
    </div>
  )
}
