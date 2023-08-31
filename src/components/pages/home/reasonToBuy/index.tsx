import React from 'react';
import styles from './styles.module.css';
import useResponsive from "@/hooks/useResponsive";
import ReasonToBuyCard from "@/components/common/ReasonToBuyCard";

const BUY_POINTS: {
    number: string;
    title: string;
    description: string;
}[] = [
    {
        number: '01',
        title: 'Готовая команда для полного цикла.',
        description: 'Комплексные решения для создания инновационных мобильных и веб-приложений, от концепции до реализации.',
    },
    {
        number: '02',
        title: 'Гибкие методы оценки нашей работы. ',
        description: 'Мы предлагаем как фиксированные ставки, так и вознаграждение в процентах от результата который мы вам принесем, обеспечивая гарантированную эффективность нашей работы. Бесплатно поможем сделать техническое задание, а после договоримся о стоимости.',
    },
    {
        number: '03',
        title: 'Предсказуемые результаты и четкие сроки.',
        description: 'Четкие сроки реализации и предсказуемые результаты. </br> От проекта на проект сроки\n и результаты работы могут меняться, но мы предоставляем реалистичный прогноз нашей работы, за выполнение которого несем ответственность',
    },
    {
        number: '04',
        title: 'Современный подход к решению .',
        description: 'Мы всегда на шаг впереди, отслеживая все новшества в мире маркетинга, исследуя передовые инструменты. Это позволяет нам создавать актуальные и эффективные решения.',
    },
    {
        number: '05',
        title: 'Интерес в долгосрочном партнерстве.',
        description: 'Наша ориентация на долгосрочное партнерство подразумевает создание качественных взаимоотношений с клиентами и обеспечивает максимально результативное и взаимовыгодное сотрудничество.',
    },
];

function ReasonToBuy() {
    const { isMobile } = useResponsive();

    return (
        <React.Fragment>
            <div className="w-full max-w-screen-xl flex-col items-center content:px-4">
                <div className={styles.title}>
                    ПОЧЕМУ (М)Ы
                </div>
                <div className="flex flex-wrap justify-center gap-10 my-[120px]">
                    {BUY_POINTS.map(({title, description, number}) => (
                        <ReasonToBuyCard
                            title={title}
                            number={number}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ReasonToBuy;
