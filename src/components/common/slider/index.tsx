import React from "react";
import GradientSliderBorder from "./gradient_border";
import { SliderTab } from "./tab";

type Props = {
    tabs: {
        [key: string]: string; // label => value
    };
};

export const Slider = ({ tabs }: Props) => {
    const [activeTab, setActiveTab] = React.useState(Object.values(tabs)[0]);
    const [currentWidth, setCurrentWidth] = React.useState<number | null>(null);
    const [currentOffset, setCurrentOffset] = React.useState<number | null>(null);

    const handleTabChange = (
        value: string,
        ref: React.RefObject<HTMLDivElement> | undefined
    ) => {
        setActiveTab(value);

        // Update gradient border
        if (!ref?.current) return;
        const { current } = ref;
        const { offsetWidth, offsetLeft } = current;
        setCurrentOffset(offsetLeft);
        setCurrentWidth(offsetWidth);
    };

    return (
        <section className="relative flex w-max gap-[12px] rounded-[12px] bg-slider backdrop-blur-slider">
            {currentOffset !== null && currentWidth !== null ? (
                <GradientSliderBorder offsetX={currentOffset} width={currentWidth} />
            ) : null}
            <section className="z-10 flex">
                {Object.entries(tabs).map(([label, value]) => (
                    <SliderTab
                        emitTabChangeOnMount={
                            activeTab === value &&
                            (currentOffset === null || currentWidth === null)
                        }
                        key={value}
                        label={label}
                        active={activeTab === value}
                        onClick={({ ref }) => handleTabChange(value, ref)}
                        onClickInfo={() => console.log("info")}
                    />
                ))}
            </section>
        </section>
    );
};
