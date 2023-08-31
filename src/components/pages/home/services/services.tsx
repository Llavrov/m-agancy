import React from 'react'
import QUDropDown from "@/components/common/dropDown";
import styles from './services.module.css';
import QUIcon from "@/components/common/icon/QUIcon";
import {Icon} from "@/components/common/icon/Icon";
import Marquee from "react-fast-marquee";
import useResponsive from "@/hooks/useResponsive";
import Image from "next/image";
import {motion, Variants} from "framer-motion";


const DROPDOWN_POINTS: {
    number: string;
    title: string;
    details: string;
}[] = [
    {
        number: '01',
        title: 'Комплексное продвижение в соцмедиа',
        details: 'Мы берем на себя всю полноту операций по продвижению бренда в социальных медиа и помогаем организовать и обучить внутренние команды.',
    },
    {
        number: '02',
        title: 'Формирование имиджа бренда',
        details: 'Мы берем на себя всю полноту операций по продвижению бренда в социальных медиа и помогаем организовать и обучить внутренние команды.',
    },
    {
        number: '03',
        title: 'Выстраивание каналов продаж',
        details: 'Мы фокусируемся на улучшении восприятия бренда и его узнаваемости. Мы создаем характерный стиль бренда, запускаем сотрудничества и акции, а также распространяем информацию через различные каналы. Мы стремимся развивать прочные взаимоотношения с нашей аудиторией. Для этого мы внимательно изучаем проект, его среду и конкурентов, разрабатываем подходящие коммуникационные стратегии и стратегии развития бренда.',
    },
    {
        number: '04',
        title: 'SMM-стратегия',
        details: 'Мы разрабатываем стратегию в соответствии с методологией SOSTAC. Наш долгосрочный план охватывает все аспекты работы с социальными сетями: от построения воронок продаж до разработки дизайна и принципов коммуникации. На этом пути мы анализируем продукт, рынок и конкурентов, прорабатываем воронки продаж, создаем контент, разрабатываем рекламные кампании и эффективные рассылки. Медиаплан и тактика на ближайший период также входят в нашу стратегию, обеспечивая целостный и результативный подход к продвижению.',
    },
    {
        number: '05',
        title: 'Мессенджер-маркетинг',
        details: 'Мы строим эффективные воронки продаж, используя рассылки: привлекаем новую аудиторию, затем сосредотачиваемся на ее удержании, создании прочного ядра лояльных клиентов и стимулировании повторных покупок. В нашем подходе мы также внедряем чат-боты, которые не только обогащают взаимодействие с клиентами, но и служат для геймификации, автоматизации обработки запросов и предоставления ответов на часто задаваемые вопросы.',
    },
    {
        number: '06',
        title: 'Инфлюенс-маркетинг',
        details: 'Мы инициируем сотрудничество с лидерами мнений и разрабатываем органичные интеграции. Тщательно подбираем партнеров, включая блоггеров и внешние площадки для рекламы. Разрабатываем убедительную концепцию, достигаем соглашений о размещении, анализируем результаты и масштабируем наиболее успешные и креативные подходы.',
    },
    {
        number: '07',
        title: 'PR в digital-среде',
        details: 'Мы создаем стратегию сопровождения через PR на внешних ресурсах: поддерживаем в разработке экспертных статей, размещаем их на востребованных медиа-платформах и организуем их распространение в социальных сетях.',
    }
];

export default function Services() {
    const { isMobile } = useResponsive();
    const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

    return (
        <React.Fragment>
            <Marquee
                className="mt-[37px]"
                autoFill={true}
            >
                <div className='flex ali justify-center items-center'>
                    <span className={styles.marquee_text}>ДОХОД</span>
                    <div className="px-10">
                        <QUIcon icon={Icon.mmm} edgeLength={isMobile ? 24 : 68} />
                    </div>
                    <span className={styles.marquee_text}>БРЕНД</span>
                    <div className="px-10">
                        <QUIcon icon={Icon.mmm} edgeLength={isMobile ? 24 : 68} />
                    </div>
                    <span className={styles.marquee_text}>УЗНАВАЕМОСТЬ</span>
                    <div className="px-10">
                        <QUIcon icon={Icon.mmm} edgeLength={isMobile ? 24 : 68} />
                    </div>
                </div>
            </Marquee>

            <div className="w-full max-w-screen-xl flex-col items-center content:px-4 pb-[160px]">
                <div className={styles.title}>
                    НАШИ УСЛУГИ
                </div>
                <div className="max-w-[1130px] mx-auto">
                    <QUDropDown points={DROPDOWN_POINTS} />
                </div>

                <div className="flex mt-[240px]">
                    <div className="max-w-[680px]">
                        <h2 className="text-heading-48 text-white">
                            Думай крупно. Начинай с малого. Развивайся быстро.
                        </h2>
                        <p className="text-heading-ss text-white">
                            Смелое мышление, акцент на исследования, бесстрашный творческий подход и высокоэффективный маркетинг — все это в совокупности будет способствовать активному росту вашего бизнеса и поможет полностью раскрыть его потенциал.
                        </p>
                    </div>
                    <div className="relative">
                        <motion.div
                            className="absolute top-1/2 translate-y-[-50%] card-container flex gap-10 items-end"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <motion.div className={styles.card}
                                variants={{
                                    offscreen: {
                                        x: 0,
                                        opacity: 0
                                    },
                                    onscreen: {
                                        x: 100,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            bounce: 0.4,
                                            duration: 0.8
                                        }
                                    }
                                }
                            }>
                                <Image width={60} height={60} src={'/circle.svg'} alt={'круг'} />
                            </motion.div>

                            <motion.div className={styles.card}
                                variants={{
                                    offscreen: {
                                        x: 0,
                                        opacity: 0
                                    },
                                    onscreen: {
                                        x: 100,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            bounce: 0.4,
                                            duration: 0.8,
                                            delay: 0.3
                                        }
                                    }
                                }
                            }>
                                <Image width={115} height={100} src={'/triangle.svg'} alt={'треугольник'} />
                            </motion.div>

                            <motion.div className={styles.card}
                                variants={{
                                    offscreen: {
                                        x: 0,
                                        opacity: 0
                                    },
                                    onscreen: {
                                        x: 100,
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            bounce: 0.4,
                                            duration: 0.8,
                                            delay: 0.6
                                        }
                                    }
                                }
                            }>
                                <Image width={180} height={180} src={'/cube.svg'} alt={'квадрат'} />
                            </motion.div>
                        </motion.div>

                        <Image width={600} height={400} src={'/dashed-lines.svg'} alt={'Думай крупно. Начинай с малого. Развивайся быстро.'} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
