"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function PrintButton() {
    return (
        <Button size="lg" variant="outline" className="min-w-[240px] text-md border-border" asChild>
            <Link href="/strategic-entry-blueprint-bali/print">
                <Download className="mr-2 h-4 w-4" />
                Download Full Blueprint (PDF)
            </Link>
        </Button>
    );
}
