import { ReactNode } from "react";
import { BarChart3 } from "lucide-react";

interface ChartPlaceholderProps {
    title: string;
    description?: string;
    icon?: ReactNode;
    type?: "bar" | "line" | "pie" | "flow" | "matrix" | "table";
}

export function ChartPlaceholder({ title, description, icon, type = "bar" }: ChartPlaceholderProps) {
    return (
        <div className="my-10 overflow-hidden rounded-xl border border-border bg-card shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)]">
            <div className="border-b border-border bg-muted/30 px-6 py-4">
                <h4 className="font-semibold text-foreground drak:text-primary">{title}</h4>
                {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
            </div>
            <div className="flex h-[300px] flex-col items-center justify-center bg-muted/10 p-8 text-center sm:h-[400px]">
                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                    {icon ? icon : <BarChart3 className="h-8 w-8" />}
                </div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Interactive {type} visualization
                </p>
                <p className="mt-2 text-xs text-muted-foreground/60 max-w-[250px]">
                    Data visualization active in full interactive mode or PDF export.
                </p>
            </div>
        </div>
    );
}
