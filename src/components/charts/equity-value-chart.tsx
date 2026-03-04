"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Info } from "lucide-react";

const data = [
    { year: "Year 1", deployed: 2, valuation: 2.1 },
    { year: "Year 2", deployed: 4, valuation: 4.8 },
    { year: "Year 3", deployed: 6, valuation: 8.5 },
    { year: "Year 4", deployed: 8, valuation: 14.2 },
    { year: "Year 5", deployed: 10, valuation: 22.0 },
];

export function EquityValueChart() {
    return (
        <div className="w-full bg-white border border-border rounded-xl shadow-sm overflow-hidden my-8 print:break-inside-avoid">
            <div className="p-6 bg-slate-50 border-b border-border flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-serif font-bold text-foreground">Capital Deployment vs Equity Value</h3>
                    <p className="text-sm text-muted-foreground mt-1">Projected ROI trajectory leveraging 100% foreign ownership holding structures (IDR Billions).</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-medium bg-white px-3 py-1.5 border border-border rounded-full shadow-sm text-muted-foreground">
                    <Info className="w-4 h-4 text-primary" />
                    Interactive Chart
                </div>
            </div>

            <div className="p-6 w-full h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="year" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis
                            stroke="#64748b"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `Rp ${value}B`}
                        />
                        <Tooltip
                            contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            formatter={(value: number) => [`Rp ${value} Billion`]}
                        />
                        <Legend verticalAlign="top" height={36} iconType="circle" />

                        <Line
                            type="monotone"
                            dataKey="deployed"
                            name="Capital Deployed"
                            stroke="#64748b"
                            strokeWidth={3}
                            dot={{ r: 4, fill: "#64748b" }}
                            activeDot={{ r: 6 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="valuation"
                            name="Asset Valuation (Estimated)"
                            stroke="#0f172a"
                            strokeWidth={4}
                            dot={{ r: 4, fill: "#0f172a" }}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-slate-50 p-6 text-sm text-muted-foreground">
                <strong>Strategic ROI:</strong> In the first 24 months, asset valuation closely tracks deployed capital as hard assets (land leases, construction) dominate the balance sheet. Post Year-3, once operational maturity is achieved across multiple KBLIs, the holding company valuation decouples from sunk capital, realizing exit-grade multipliers.
            </div>
        </div>
    );
}
