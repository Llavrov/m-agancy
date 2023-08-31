import React, {FC, useState} from 'react';
import styles from './contact-us.module.css';
import classNames from "classnames";
import QUIcon from "@/components/common/icon/QUIcon";
import {Icon} from "@/components/common/icon/Icon";

const ContactUsButton = ({ width }: { width?: string; }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className={classNames(width, styles.wrapper, 'cursor-pointer relative mr-6')}
        >
            <div onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}  className={classNames(width, styles.content, 'absolute z-10 cursor-pointer')}>
                <span>Обсудить задачу</span>
            </div>

            <div className={classNames("absolute flex justify-center items-center w-[64px] h-[64px] border-black border-[3px] border-solid rounded-4", {
                'right-[-20px]': !isHovering,
                'right-[-50px]': isHovering,
            })}>
                <QUIcon icon={Icon.arrow} />
            </div>
        </div>
    );
}

export default ContactUsButton;