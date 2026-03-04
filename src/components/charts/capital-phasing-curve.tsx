"use client";

import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { Info } from "lucide-react";

const data = [
    { month: "Month 1", declared: 10, deployed: 1.5 },
    { month: "Month 6", declared: 10, deployed: 2.5 },
    { month: "Month 12", declared: 10, deployed: 4.0 },
    { month: "Month 18", declared: 10, deployed: 6.5 },
    { month: "Month 24", declared: 10, deployed: 10.0 }, // Reaches 10bn IDR by 24 months
    { month: "Month 30", declared: 10, deployed: 10.0 },
];

export function CapitalPhasingCurve() {
    return (
        <div className="w-full bg-white border border-border rounded-xl shadow-sm overflow-hidden my-8 print:break-inside-avoid">
            <div className="p-6 bg-slate-50 border-b border-border flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">Capital Phasing Injection Curve</h3>
                    <p className="text-sm text-muted-foreground mt-1">Declared Capital (Legal Commitment) vs Target Deployed Capital (IDR Billions)</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-medium bg-white px-3 py-1.5 border border-border rounded-full shadow-sm text-muted-foreground">
                    <Info className="w-4 h-4 text-primary" />
                    Interactive Chart
                </div>
            </div>

            <div className="p-6 w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorDeployed" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0f172a" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#0f172a" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                            stroke="#64748b"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `Rp ${value}B`}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            formatter={(value: number, name: string) => [`Rp ${value} Billion`, name.charAt(0).toUpperCase() + name.slice(1)]}
                        />
                        {/* The 10 Billion Statutory Line */}
                        <ReferenceLine y={10} stroke="#ef4444" strokeDasharray="4 4" label={{ position: 'top', value: 'IDR 10B Statutory Minimum', fill: '#ef4444', fontSize: 12 }} />

                        <Area
                            type="monotone"
                            dataKey="deployed"
                            stroke="#0f172a"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorDeployed)"
                            name="capital deployed"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div className="px-6 pb-6 text-sm text-muted-foreground">
                <strong>Strategic Insight:</strong> The curve demonstrates the acceptable 24-month runway to deploy the legally required IDR 10 Billion paid-up capital. Failure to intersect the 10B red line by Month 24 triggers LKPM reporting audits and potential license suspension.
            </div>
        </div>
    );
}
