"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export default function Hero() {
    const [opacity, setOpacity] = React.useState([100])

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image Optimized */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/image/balihelp.webp"
                    alt="Bali Enterprises Hero"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover object-center"
                    quality={80}
                />
            </div>

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-black/30" />

            {/* Adjustable White Gradient Overlay (Bottom) - Increased Height */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[60vh] z-20 pointer-events-none transition-opacity duration-300 ease-in-out"
                style={{
                    background: `linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.2) 40%, #ffffff 100%)`,
                    opacity: opacity[0] / 100
                }}
            />

            {/* Slider Controls */}

            {/* Mobile: Bottom Center (Horizontal) */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 z-40 md:hidden flex flex-col items-center gap-2">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 shadow-lg w-full">
                    <Slider
                        defaultValue={[100]}
                        value={opacity}
                        onValueChange={setOpacity}
                        max={100}
                        step={1}
                        aria-label="Adjust Overlay Opacity"
                        className="w-full"
                    />
                </div>
            </div>

            {/* Desktop: Right Vertical */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 h-64 z-40 hidden md:flex flex-col items-center gap-4">
                <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 shadow-lg h-full flex flex-col items-center py-6">
                    <Slider
                        defaultValue={[100]}
                        value={opacity}
                        onValueChange={setOpacity}
                        max={100}
                        step={1}
                        aria-label="Adjust Overlay Opacity"
                        orientation="vertical"
                        className="h-full"
                    />
                </div>
                <div className="bg-white text-black font-bold text-xs py-1 px-3 rounded-full shadow-lg">
                    {opacity}%
                </div>
            </div>

            {/* Content */}
            <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-24 md:pt-0 top-0 md:top-[-5vh]">
                <h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight drop-shadow-lg"
                >
                    Connecting World to <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                        Indonesia's Future
                    </span>
                </h1>

                <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto text-gray-100/90 leading-relaxed font-light drop-shadow-md">
                    Your trusted gateway for international investment and strategic partnerships in Indonesia. We enable cross-border business development through professional governance and local execution strength.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="/partner-with-us"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
                    >
                        Partner With Us
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                        href="/explore-ecosystem"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black/40 backdrop-blur-sm text-white font-semibold text-lg rounded-full border border-white/30 hover:bg-black/60 transition-all hover:scale-105"
                    >
                        Explore Our Ecosystem
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Decorative Mouse Icon at bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce hidden md:block opacity-70">
                <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-black rounded-full" />
                </div>
            </div>
        </section>
    )
}
