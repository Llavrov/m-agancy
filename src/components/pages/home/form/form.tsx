import styles from './form.module.css';
import QUContactUs from "@/components/common/contactUs/contactUs";
import Image from "next/image";
import {Icon} from "@/components/common/icon/Icon";
import useResponsive from "@/hooks/useResponsive";

export default function Form() {
    const { isMobile } = useResponsive();

    return (
        <div className={styles.wrapper}>
            <div id="contacts" className={styles.container}>
                <QUContactUs />
            </div>
        </div>
    )
}
