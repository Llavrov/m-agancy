import styles from "./styles.module.css";
import {motion, useScroll, Variants} from "framer-motion";
import {useEffect, useRef, useState} from "react";

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function TitleOnScroll() {
    const utpRef = useRef(null);
    const { scrollY } = useScroll();
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const updateOpacity = () => {
            // @ts-ignore
            const distanceFromTop = utpRef?.current?.getBoundingClientRect()?.top + window.pageYOffset;
            const scrollRange = [distanceFromTop, distanceFromTop + 400];
            const scrollProgress = (scrollY.get() - scrollRange[0]) / (scrollRange[1] - scrollRange[0]);

            if (scrollProgress > -1.5) {
                setOpacity(1);
            } else {
                setOpacity(0);
            }
        };

        scrollY.on('change', updateOpacity);
    }, [scrollY, utpRef]);

    return (
        <motion.div
            ref={utpRef}
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div className={styles.card} style={{opacity: opacity,}}>
                Действуй
            </motion.div>
        </motion.div>
    );
}

export default TitleOnScroll;
