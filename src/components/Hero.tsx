"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Hero() {
    // Keeping a constant for opacity style without the interactive slider as requested
    const gradientStyle = {
        background: `linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.4) 40%, #ffffff 100%)`,
        opacity: 0.95
    };

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image Optimized - High Priority LCP */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/image/balihelp.webp"
                    alt="Bali Enterprises: High-Fidelity Investment Gateway to Indonesia"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover object-center translate-y-0"
                    quality={85}
                />
            </div>

            {/* Dark Overlay for Text Readability - Dynamic Depth */}
            <div className="absolute inset-0 z-10 bg-black/45 backdrop-brightness-75 transition-all duration-300" />

            {/* Fixed White Gradient Overlay (Bottom) - The Opacity Style as requested */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[60vh] z-20 pointer-events-none"
                style={gradientStyle}
                aria-hidden="true"
            />

            {/* Content Group - Structured for SEO and Accessibility */}
            <div className="relative z-40 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center text-white pt-24 md:pt-0">
                <div className="space-y-2 mb-8 inline-block">
                    <span className="text-xs font-black uppercase tracking-[0.4em] italic text-primary/90 animate-in fade-in slide-in-from-bottom-4 duration-1000">Global Holding Group</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter mb-10 leading-[0.85] drop-shadow-2xl italic">
                    Connecting World <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
                        to Indonesia
                    </span>
                </h1>

                <p className="text-lg md:text-2xl mb-12 max-w-4xl mx-auto text-gray-100/90 leading-relaxed font-bold italic drop-shadow-xl opacity-95">
                    Empowering international vision through professional governance, strategic entry frameworks, and local execution strength across the Indonesian archipelago.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 text-white font-black text-lg rounded-full hover:bg-black transition-all hover:scale-105 shadow-2xl italic border border-white/20"
                    >
                        Inquire Now
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>

                    <Link
                        href="/ecosystem"
                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-black text-lg rounded-full border-2 border-white/40 hover:bg-white/20 transition-all hover:scale-105 shadow-2xl italic"
                    >
                        Our Network
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Modernized Mouse Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-40">
                <div className="w-5 h-8 border-[3px] border-white/40 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white/80 rounded-full" />
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest text-white/40">Scroll</span>
            </div>
        </section>
    )
}
