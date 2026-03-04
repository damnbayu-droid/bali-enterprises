import { ReactNode } from "react";
import { AlertCircle } from "lucide-react";

interface RiskNoteProps {
    title?: string;
    children: ReactNode;
    variant?: "warning" | "destructive";
}

export function RiskNote({ title = "Regulatory Risk Note", children, variant = "warning" }: RiskNoteProps) {
    const isDestructive = variant === "destructive";

    return (
        <div
            className={`my-8 rounded-lg border p-6 shadow-sm ${isDestructive
                    ? "border-red-900/30 bg-red-500/5"
                    : "border-amber-500/30 bg-amber-500/5 text-amber-900 dark:text-amber-200"
                }`}
        >
            <div className={`flex items-center gap-3 space-x-2 mb-4 ${isDestructive ? "text-red-600 dark:text-red-400" : "text-amber-600 dark:text-amber-500"}`}>
                <AlertCircle className="h-5 w-5" />
                <h4 className="font-semibold">{title}</h4>
            </div>
            <div className={`text-[15px] leading-relaxed ${isDestructive ? "text-red-800/80 dark:text-red-200/80" : "text-amber-800/80 dark:text-amber-100/70"}`}>
                {children}
            </div>
        </div>
    );
}
