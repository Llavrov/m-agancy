import styles from "@/components/common/contactUs/contact-us.module.css";
import QUIcon from "@/components/common/icon/QUIcon";
import {Icon} from "@/components/common/icon/Icon";
import QUMultiLineTextField from "@/components/common/textFields/QUMultiLineTextField";
import QUTextField from "@/components/common/textFields/QUTextField";
import ContactUsButton from "@/components/common/contactUsButton/contactUsButton";
import QUPhoneNumberTextField from "@/components/common/textFields/QUPhoneNumberTextField";
import React, {useState} from "react";
import Image from 'next/image';
import {motion} from "framer-motion"
import useResponsive from "@/hooks/useResponsive";
import classNames from "classnames";
import ContactUs from "@/components/common/contactUsButton/contactUsButton";


export default function QUContactUs() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const { isMobile } = useResponsive();

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <p className={styles.title}>ОБСУДИТЬ ЗАДАЧУ</p>

                <div className={styles.dot}>
                    <QUIcon icon={Icon.mmm} edgeLength={isMobile ? 12 : 32}/>
                </div>
            </div>

            <div className={styles.formContainer}>
                <div className={classNames(styles.form, 'max-w-[1100px]')}>
                    <div className="flex gap-4 w-full relative content:flex-col">
                        <div className="w-full min-w-[200px]">
                            <p>ИМЯ</p>
                            <QUTextField type="text" placeholder="Введите ваше имя"/>
                        </div>

                        <div className="w-full min-w-[200px]">
                            <p>ТЕЛЕФОН</p>

                            <QUPhoneNumberTextField
                                phoneNumber={phoneNumber}
                                placeholder=" --- --- -- --"
                                onChange={(number) => number.length <= 16 && setPhoneNumber(number)}
                            />
                        </div>

                        <div className="pt-[67px]">
                            <ContactUs width={'w-[200px]'} />
                        </div>
                    </div>
                    <div className="max-w-[555px] flex justify-between content:flex-col-reverse">
                        <p>
                            Нажимая кнопку, вы соглашаетесь <br/>
                            с нашей политикой конфиденциальности.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
