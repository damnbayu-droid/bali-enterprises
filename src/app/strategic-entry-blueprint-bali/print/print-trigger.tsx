"use client";

import { useEffect } from "react";

export function PrintTrigger() {
    useEffect(() => {
        // Small delay to allow images and layouts to render before popping the print dialog
        const timer = setTimeout(() => {
            window.print();
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return null;
}
