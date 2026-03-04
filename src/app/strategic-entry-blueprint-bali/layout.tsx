"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function StrategicBlueprintLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="relative min-h-screen bg-background text-foreground">
            {/* Consultation Popup Overlay */}
            {isPopupOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm print-hidden p-4">
                    <div className="w-full max-w-lg rounded-xl bg-background p-8 shadow-2xl relative border border-border">
                        <button
                            onClick={() => setIsPopupOpen(false)}
                            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
                        >
                            ✕
                        </button>
                        <h3 className="mb-2 text-2xl font-bold">Schedule Consultation</h3>
                        <p className="mb-6 text-sm text-muted-foreground">
                            Discuss your structural plan with our strategic advisory team.
                        </p>

                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsPopupOpen(false); }}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Name</label>
                                    <Input type="text" placeholder="John Doe" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Nationality</label>
                                    <Input type="text" placeholder="e.g. Australian" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Business Intention</label>
                                <Input type="text" placeholder="e.g. Tech Startup / Real Estate" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email</label>
                                    <Input type="email" placeholder="john@company.com" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Estimated Arrival</label>
                                    <Input type="text" placeholder="e.g. Q3 2026" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">WhatsApp Number</label>
                                <Input type="tel" placeholder="+1 234 567 8900" required />
                            </div>

                            <Button type="submit" className="w-full mt-2 bg-primary text-primary-foreground">
                                Request Strategy Session
                            </Button>
                        </form>
                    </div>
                </div>
            )}

            {/* Main Content Area */}
            <main className="pb-24 pt-20">
                {children}
            </main>

            {/* Floating WhatsApp Button */}
            <a
                href="https://wa.me/6285727041992?text=I%20would%20like%20to%20discuss%20my%20structural%20plan%20for%20Bali"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg transition-transform hover:scale-105 print-hidden"
            >
                <MessageCircle className="h-5 w-5" />
                <span className="font-semibold hidden sm:inline">Discuss Your Structural Plan</span>
            </a>

            {/* Global State Injector for children to trigger popup */}
            {/* We use a React Context or an invisible global event in a real app, 
          but for simplicity, we provide instructions to use the WhatsApp link as primary CTA if context isn't set up.
          Alternatively, they can just use the WhatsApp as the primary contact. */}
        </div>
    );
}
