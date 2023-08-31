import React from 'react';
import ChartContainer from "@/components/common/chart";
import classNames from "classnames";

function CardWithChart({ color = '#F6CC56', title = '', noChart, points }: { color?: string, title?: string, noChart?: boolean, points?: number[] }) {
    return (
        <div className="relative flex justify-center flex-col items-center w-[400px] h-[300px] border border-solid border-border">
            <div className="flex justify-between flex-col w-[330px] h-[300px] pb-[50px]">
                <p className="text-heading-ss-bold">{title}</p>
                {!noChart && (
                    <div className="absolute z-10 w-[330px]">
                        <ChartContainer color={color} points={points ?? []} />
                    </div>
                )}

                <div className="top-[87px] absolute flex flex-col justify-between w-[330px] px-[5px] h-[90px]">
                    <div className="w-full h-[1px] bg-border"></div>
                    <div className="w-full h-[1px] bg-border"></div>
                    <div className="w-full h-[1px] bg-border"></div>
                </div>

                {!noChart && (
                    <div className="flex items-center gap-1">
                        <div className={classNames(`w-[8px] h-[8px] rounded-2`, {
                            [`bg-[${color}]`]: color,
                        })}></div>
                        <p className="text-text-s-bold m-0">{title}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CardWithChart;
