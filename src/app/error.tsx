'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { RefreshCcw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application Error:', error)
  }, [error])

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-background">
      <div className="max-w-xl w-full text-center space-y-8 p-12 rounded-[3rem] border-4 border-destructive/20 bg-destructive/5">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 text-destructive mb-4">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-black italic tracking-tighter uppercase leading-tight">
            Unexpected Error
          </h1>
          <p className="text-xl text-muted-foreground font-bold italic opacity-80">
            We've encountered a brief operational disruption. Our team has been notified.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={() => reset()}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-black rounded-full hover:bg-black hover:text-white transition-all shadow-xl italic"
          >
            <RefreshCcw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
            Retry System
          </button>
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-xl text-foreground font-black rounded-full border-2 border-border hover:bg-muted transition-all italic"
          >
            <Home size={20} />
            Emergency Home
          </Link>
        </div>

        <div className="pt-8 opacity-40">
          <p className="text-xs font-mono break-all">{error.digest && `Error ID: ${error.digest}`}</p>
        </div>
      </div>
    </div>
  )
}
