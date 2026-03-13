"use client";

import { cn } from "../../lib/utils";
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";
import { CardSpotlight } from "./card-spotlight";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <CardSpotlight
                    key={index}
                    className={cn(
                        "group relative p-6 rounded-2xl overflow-hidden transition-all duration-300",
                        "border border-slate-800 bg-slate-900",
                        "hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
                        "hover:-translate-y-0.5 will-change-transform",
                        item.colSpan || "col-span-1",
                        item.colSpan === 2 ? "md:col-span-2" : "",
                        item.colSpan === 3 ? "md:col-span-3" : "",
                        {
                            "shadow-[0_2px_12px_rgba(255,255,255,0.03)] -translate-y-0.5":
                                item.hasPersistentHover,
                        }
                    )}
                    color="#1e293b" // A dark slate color for the spotlight effect
                >
                    <div className="relative flex flex-col space-y-4 h-full justify-between z-20">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-800 group-hover:bg-gradient-to-br transition-all duration-300">
                                {item.icon}
                            </div>
                            <span
                                className={cn(
                                    "text-xs font-medium px-2.5 py-1.5 rounded-lg backdrop-blur-sm",
                                    "bg-slate-800 text-slate-300",
                                    "transition-colors duration-300 group-hover:bg-slate-700"
                                )}
                            >
                                {item.status || "Active"}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-slate-100 tracking-tight text-lg">
                                {item.title}
                                <span className="ml-2 text-xs text-slate-400 font-normal">
                                    {item.meta}
                                </span>
                            </h3>
                            <p className="text-sm text-slate-300 leading-relaxed font-normal">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-2 text-xs text-slate-400">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 rounded-md bg-slate-800 backdrop-blur-sm transition-all duration-200 hover:bg-slate-700"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.cta || "Explore →"}
                            </span>
                        </div>
                    </div>
                </CardSpotlight>
            ))}
        </div>
    );
}

export { BentoGrid };
