import React from 'react';
import styles from './footer.module.css';
import QUIcon from "@/components/common/icon/QUIcon";
import {Icon} from "@/components/common/icon/Icon";
import classNames from "classnames";

export default function QUFooter() {
    return (
        <footer className={styles.wrapper}>
            <div className={classNames(styles.footer, 'md:flex-col-reverse py-5')}>
                <div>
                    <div className="flex items-center h-[43px] overflow-hidden mb-2">
                        <QUIcon icon={Icon.quadoGray} edgeLength={155}/>
                    </div>
                    <p className={styles.mark}>2023 © Quado</p>
                    <p className={styles.mark}>Все права защищены.</p>
                </div>

                <div>
                    <p className={styles.contact}>+7 996 068-19-41</p>
                    <p className={styles.contact}>we.quado@gmail.com</p>
                    <p className={styles.contact}>Telegram</p>
                </div>
            </div>
        </footer>
    );
}
