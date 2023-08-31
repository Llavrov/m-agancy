import React from "react";
import { ChartComponent } from "./Chart";

export default function ChartContainer({color, points}: { color?: string, points?: number[] }) {
    return (
        <section className="relative mr-auto ml-auto flex h-[200px] max-h-[300px] overflow-hidden w-full shrink items-start">
            <ChartComponent color={color} points={points} />
        </section>
    );
}
