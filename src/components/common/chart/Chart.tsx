import React, { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { externalTooltipHandler } from "./externalTooltipHandler";
import Image from "next/image";

ChartJS.register(
    CategoryScale, // x-axis
    LinearScale, // y-axis
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler
);

enum Tabs {
    Price = "Price",
    TVL = "TVL",
    Volume = "Volume",
}

function getGradient(color = "rgba(161, 88, 255, 0.52)") {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.05)");

    return gradient;
}

const options = {
    plugins: {
        legend: true,
        tooltip: {
            enabled: false,
            position: "nearest",
            external: externalTooltipHandler,
        },
    },
    interaction: {
        intersect: false,
        mode: "index",
    },
    hover: {
        mode: "y",
        intersect: true,
    },
    scales: {
        y: {
            min: 1,
            max: 50,
            display: false,
        },
        x: {
            display: false,
        },
    },
};

const LABELS: Array<string> = [];
LABELS.length = 29;
LABELS.fill("M-agancy");

const CHART_DATASET = (color = "#9D5AFF", points: number[]) => ({
    labels: LABELS,
    datasets: [
        {
            data: points,
            fill: "start",
            pointHoverBackgroundColor: color,
            pointHoverBorderColor: "rgba(255, 255, 255, 1)",
            backgroundColor: getGradient(color),
            hoverBorderWidth: 0.1,
            borderColor: color,
            borderWidth: 1,
            tension: 0.5,
            pointDotRadius: 1,
            pointDotStrokeWidth: 8,
            pointHitDetectionRadius: 20,
            pointRadius: 0.1,
        },
    ],
});

export function ChartComponent({color, points}: { color?: string, points: number[] }) {
    const [chartData, setChartData] = useState<any>({ datasets: [] });
    const [chartOptions, setChartOptions] = useState<any>({});

    useEffect(() => {
        setChartData(CHART_DATASET(color, points));
        setChartOptions(options);
    }, []);

    return (
        <section className="relative flex h-full max-h-[180px] min-h-[180px] w-full shrink items-end justify-center rounded-2 bg-secondary">
            <Line id={"canvas"} data={chartData} options={chartOptions} />
        </section>
    );
}
