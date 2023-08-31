import {PropsWithChildren} from 'react'
import styles from './QUTag.module.css';

interface QUTagProps {
    light?: boolean;
    checked?: boolean;
}

export default function QUTag({light = true, checked = false, children}: PropsWithChildren<QUTagProps>) {
    return (
        <span
            className={light ? styles.light : styles.dark}
            style={{opacity: checked || !light  ? '1' : '0.6'}}
        >
            {children}
        </span>
    );
}