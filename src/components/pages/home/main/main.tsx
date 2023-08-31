import React, {useEffect, useState} from 'react';

import styles from './main.module.css';
import Title from "@/components/title/title";
import {useScroll} from "framer-motion"
import useResponsive from "@/hooks/useResponsive";

import TitleOnScroll from "@/components/common/titleOnScroll";
import MacBookScreen from "@/components/common/MacBookScreen";

const Main = () => {
    const {scrollYProgress} = useScroll();
    const [_, setScrollStarted] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (val) =>
            val !== 0 && setScrollStarted(true)
        );

        return () => unsubscribe();
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className="flex items-center flex-col pt-[200px] pb-[100px]">
                    <Title text="МАСШТАБИРУЙСЯ" delay={0.04} />
                    <Title text="ПРОСТО" delay={0.52} />
                </div>

                <MacBookScreen />
            </div>
        </div>
    );
}

export default Main;