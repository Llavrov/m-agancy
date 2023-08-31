import CardWithChart from "@/components/pages/home/main/cardWithChart";
import styles from "@/components/pages/home/main/main.module.css";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import {motion, useScroll} from "framer-motion";

const VISITORS = [
    9, 11, 10, 12, 10, 8, 7, 10, 14, 24, 17, 22, 26, 25, 27,
    31, 33, 29, 30, 27, 31, 33, 29, 30, 27, 34, 28, 29, 30, 27
];

const NEW_VISITORS = [
    6, 7, 5, 4, 5, 8, 7, 10, 14, 24, 21, 26, 24, 26, 27, 32,
    30, 33, 36, 29, 31, 33, 29, 30, 29, 32, 34, 31, 30, 27
];

const REJECTS = [
    27, 30, 29, 28, 34, 27, 30, 29, 33, 31, 27, 30, 29, 33, 31,
    26, 24, 21, 17, 17, 15, 14, 10, 6, 7, 5, 4, 5, 4, 3
];

type ShowOnScrollChangeProps = {
    distance: number,
    children?: React.ReactElement,
}

type MoveOnScrollChangeProps = {
    distance?: number,
    children?: React.ReactElement,
}

function ShowOnScrollChange({ distance, children }: ShowOnScrollChangeProps) {
    const utpRef = useRef(null);
    const { scrollY } = useScroll();
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const updateOpacity = () => {
            if (!opacity && scrollY.get() >= distance) setOpacity(1);
        };

        scrollY.on('change', updateOpacity);
    }, [scrollY, utpRef, distance, opacity]);

    return (
        <motion.div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            ref={utpRef}
        >
            {opacity ? children : null}
        </motion.div>
    );
}

function MoveOnScrollChange({ distance, children }: MoveOnScrollChangeProps) {
    const utpRef = useRef(null);
    const { scrollY } = useScroll();
    const [mt, setMt] = useState(0);

    useEffect(() => {
        const updateHeight = () => {
            // @ts-ignore
            const distanceFromTop = utpRef?.current?.getBoundingClientRect()?.top + window.pageYOffset;

            if (scrollY.get() + 500 > distanceFromTop && scrollY.get() + 300 < distanceFromTop + distance)
                setMt(scrollY.get() + 500 - distanceFromTop);
        };

        setTimeout(() => scrollY.on('change', updateHeight), 50);
    }, [scrollY, utpRef, distance]);

    return (
        <motion.div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: mt,
            }}
            ref={utpRef}
            initial={{ paddingTop: 0 }} // начальное значение paddingTop
            animate={{ paddingTop: mt }} // анимация изменения
            transition={{ duration: 0.2, ease: 'easeOut' }} // параметры анимации
        >
            {children}
        </motion.div>
    );
}


function MacBookScreen() {
    return (
        <MoveOnScrollChange distance={200}>
            <div className="relative flex justify-center items-start w-[1100px] h-[1000px]">
                <ShowOnScrollChange distance={800}>
                    <>
                        <div className="absolute top-[103px] right-[-74px] w-[150px] h-[800px] flex gap-10 z-10 overflow-hidden">
                            <div className="absolute left-0 flex flex-col gap-10">
                                <CardWithChart title="" color="#97C263" noChart />
                                <CardWithChart title="" color="#97C263" noChart />
                            </div>
                        </div>

                        <div className="absolute top-[103px] left-[-74px] w-[150px] h-[800px] flex gap-10 z-10 overflow-hidden">
                            <div className="absolute right-0 flex flex-col gap-10">
                                <CardWithChart title="" color="#97C263" noChart />
                                <CardWithChart title="" color="#97C263" noChart />
                            </div>
                        </div>

                        <div className="absolute top-[63px] left-[120px] w-[1250px] h-[50px] flex gap-10 z-10 overflow-hidden">
                            <div className="absolute top-[-250px] flex gap-10">
                                <CardWithChart title="" color="#97C263" noChart />
                                <CardWithChart title="" color="#97C263" noChart />
                            </div>
                        </div>
                    </>
                </ShowOnScrollChange>

                <div className="absolute left-[120px] w-[1250px] h-[770px] flex gap-10 z-10 top-[150px]">
                    <div className="flex flex-col gap-10">
                        <ShowOnScrollChange distance={200}>
                            <CardWithChart title="Посетители" color="#97C263" points={VISITORS} />
                        </ShowOnScrollChange>

                        <ShowOnScrollChange distance={700}>
                            <div className="relative flex justify-center flex-col items-center w-[400px] h-[300px] border border-solid border-border">
                                <div className="flex justify-between flex-col w-[330px] h-[300px] pb-[50px]">
                                    <p className="text-heading-ss-bold">Источник трафика</p>

                                    <div className="top-[87px] rounded-4 bg-base p-5 absolute flex flex-col justify-center items-center w-[330px] h-[100px]">
                                        <Image className="w-[120px] h-[55px] object-contain" src={'/logo-white.svg'} alt={'logo'} width={230} height={92} />
                                    </div>
                                </div>
                            </div>
                        </ShowOnScrollChange>
                    </div>

                    <div className="flex flex-col gap-10">
                        <ShowOnScrollChange distance={400}>
                            <CardWithChart title="Новые посетители" points={NEW_VISITORS} />
                        </ShowOnScrollChange>

                        <ShowOnScrollChange distance={800}>
                            <CardWithChart title="Отказы" color="#6ABDDB" points={REJECTS} />
                        </ShowOnScrollChange>
                    </div>
                </div>

                <div className={styles.macBook}>
                    <Image src={'/MacBook.png'} alt={'mac book'} width={1660} height={930} />
                </div>
            </div>
        </MoveOnScrollChange>
    )
}

export default MacBookScreen;
