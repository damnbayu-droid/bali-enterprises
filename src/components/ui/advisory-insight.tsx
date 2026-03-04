import { ReactNode } from "react";
import { Info } from "lucide-react";

interface AdvisoryInsightProps {
    title?: string;
    children: ReactNode;
}

export function AdvisoryInsight({ title = "Strategic Insight", children }: AdvisoryInsightProps) {
    return (
        <div className="my-8 rounded-lg border border-primary/20 bg-primary/5 p-6 shadow-sm">
            <div className="flex items-center gap-3 space-x-2 mb-4">
                <Info className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-primary">{title}</h4>
            </div>
            <div className="text-muted-foreground leading-relaxed text-[15px]">
                {children}
            </div>
        </div>
    );
}
