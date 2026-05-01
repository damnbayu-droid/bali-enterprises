import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8 ${className}`}
    >
      <ol className="flex items-center space-x-2">
        <li className="flex items-center">
          <Link 
            href="/" 
            className="hover:text-primary transition-colors flex items-center"
            title="Home"
          >
            <Home className="h-3 w-3 mr-1" />
          </Link>
        </li>
        
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="h-3 w-3 mx-1 text-slate-300" />
              {isLast ? (
                <span className="text-slate-600 font-bold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
