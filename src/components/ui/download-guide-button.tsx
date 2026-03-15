"use client";

import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function DownloadGuideButton() {
    const [isPreparing, setIsPreparing] = useState(false);
    const router = useRouter();

    const handleDownload = () => {
        setIsPreparing(true);
        
        // Brief delay to show loading state and signify preparation
        setTimeout(() => {
            router.push("/starting-business-bali-guide/print");
        }, 1200);
    };

    return (
        <Button 
            size="sm" 
            variant="outline" 
            className="border-primary/40 text-primary hover:bg-primary/5 h-9 min-w-[150px]"
            onClick={handleDownload}
            disabled={isPreparing}
        >
            {isPreparing ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Preparing PDF...
                </>
            ) : (
                <>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                </>
            )}
        </Button>
    );
}
