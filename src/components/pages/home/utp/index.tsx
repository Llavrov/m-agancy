import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type ScrollHeightChangeProps = {
    image: string,
    width: number,
    imageHeight: number,
}

function ScrollHeightChange({ image, width, imageHeight }: ScrollHeightChangeProps) {
    const utpRef = useRef(null);
    const { scrollY } = useScroll();
    const [height, setHeight] = useState(1300);

    useEffect(() => {
        const heightValues = [250, 50];

        const updateHeight = () => {
            // @ts-ignore
            const distanceFromTop = utpRef?.current?.getBoundingClientRect()?.top + window.pageYOffset;
            // @ts-ignore
            const objectHigherThenWindow = utpRef?.current?.getBoundingClientRect()?.top + utpRef?.current?.getBoundingClientRect()?.height + 300 > 0;
            const scrollRange = [distanceFromTop, distanceFromTop + 400];
            const scrollProgress = (scrollY.get() - scrollRange[0]) / (scrollRange[1] - scrollRange[0]);
            const newHeight = heightValues[0] * (1 - scrollProgress) + heightValues[1] * scrollProgress;

            // Берем дистанцию до верха изображения скролла и низа объекта
            if (objectHigherThenWindow) setHeight(Math.max(Math.abs(newHeight), 100));
        };

        scrollY.on('change', updateHeight);
    }, [scrollY, utpRef]);

    return (
        <motion.div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: height,
            }}
            ref={utpRef}
        >
            <Image src={image} alt={''} width={width} height={imageHeight} style={{
                height: height,
                width: '100%',
            }} />
        </motion.div>
    );
}

function UTP() {
    return (
        <div className="relative w-full mt-[400px] pb-[300px] flex min-h-screen flex-col items-center bg-[color:var(--light-background)]">
            <div className="relative gap-[300px] overflow-x-hidden max-w-screen-xl flex items-center flex-col w-full">
                <div className="flex gap-10">
                    <div className="max-w-[800px] relative">
                        <ScrollHeightChange imageHeight={85} width={976} image={'/utp/sell.svg'} />
                        <ScrollHeightChange imageHeight={93} width={976} image={'/utp/subscribers.svg'} />
                        <ScrollHeightChange imageHeight={106} width={977} image={'/utp/dontsell.svg'} />
                        <ScrollHeightChange imageHeight={115} width={977} image={'/utp/result.svg'} />
                    </div>
                    <div className="">
                        <p className="text-text-m">
                            (М)ы видим смысл в оплате за подписчиков лишь тогда,
                            когда они превращаются в ваших клиентов.
                            Наша миссия - сделать каждого подписчика вашим постоянным клиентом.
                        </p>
                    </div>
                </div>

                <div className="flex gap-10">
                    <div className="">
                        <p className="text-text-m">
                            Смелое мышление, бесстрашный креатив и высокоэффективный маркетинг
                            содействуют расцвету вашего бизнеса и позволяют вам полностью
                            раскрыть свой потенциал, минимизируя издержки на содержании маркетингового отдела.
                        </p>
                    </div>

                    <div className="max-w-[800px] relative">
                        <ScrollHeightChange imageHeight={95} width={1131} image={'/utp/we-its.svg'} />
                        <ScrollHeightChange imageHeight={114} width={1131} image={'/utp/successeful-way.svg'} />
                        <ScrollHeightChange imageHeight={77} width={1131} image={'/utp/ask-to-help.svg'} />
                        <ScrollHeightChange imageHeight={70} width={1131} image={'/utp/profi.svg'} />
                        <ScrollHeightChange imageHeight={110} width={1131} image={'/utp/market.svg'} />
                    </div>
                </div>

                <div className="flex gap-10">
                    <div className="max-w-[800px] relative">
                        <ScrollHeightChange imageHeight={85} width={575} image={'/utp/why.svg'} />
                        <ScrollHeightChange imageHeight={46} width={580} image={'/utp/work.svg'} />
                        <ScrollHeightChange imageHeight={71} width={574} image={'/utp/profit.svg'} />
                    </div>

                    <div className="">
                        <p className="text-text-m">
                            Смелое мышление, бесстрашный креатив и высокоэффективный маркетинг
                            содействуют расцвету вашего бизнеса и позволяют вам полностью
                            раскрыть свой потенциал, минимизируя издержки на содержании маркетингового отдела.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UTP;
