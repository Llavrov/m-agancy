import * as React from 'react';
import {type ReactElement, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import QUIcon from "@/components/common/icon/QUIcon";
import {Icon} from "@/components/common/icon/Icon";
import {AccordionDetails} from "@mui/material";
import styles from './dropDown.module.css';
import useResponsive from "@/hooks/useResponsive";

type QUDropDownProps = {
    points: {
        number?: string;
        title: string;
        details: string;
    }[];
};

export default function QUDropDown({points = []}: QUDropDownProps): ReactElement {
    const [selected, setSelected] = useState<number[]>([]);

    const {isMobile} = useResponsive();

    return (
        <div className="w-full gap-4" style={{alignItems: 'center', marginTop: 8}}>
            {points
                .map(({number, title, details}, index) => (
                    <Accordion
                        key={index}
                        expanded={selected.includes(index)}
                        sx={{
                            width: '100%',
                            color: selected.includes(index) ? 'white' : '#7B7B7B',
                            '&:before': {
                                display: 'none',
                            },
                            borderBottom: '1px solid #353535',
                            background: 'transparent',
                            boxShadow: 'none',
                            '& .Mui-expanded': {
                                minHeight: '24px',
                                marginY: '0',
                            },
                            '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                transform: 'rotate(90deg)',
                            },
                            '& .MuiAccordionSummary-content': {
                                marginY: '20px',
                            },
                            '&.Mui-expanded': {
                                marginY: '0',
                            }
                        }}
                        onChange={() => selected.includes(index)
                            ? setSelected(selected.filter(item => item !== index))
                            : setSelected([...selected, index])
                        }
                    >
                        <AccordionSummary
                            expandIcon={selected.includes(index)
                                ? (
                                    <div className={styles.closeIcon}>
                                        <QUIcon icon={Icon.mmm} edgeLength={isMobile ? 22 : 44}/>
                                    </div>
                                ) : (
                                    <div className={styles.openIcon}>
                                        <QUIcon icon={Icon.mmm} edgeLength={isMobile ? 22 : 44}/>
                                    </div>
                                )}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{
                                width: '100%',
                            }}
                        >
                            {(number && !isMobile) && (
                                <Typography
                                    style={{
                                        fontSize: '28px',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        position: 'absolute',
                                        height: '52px'
                                    }}>
                                    {number}
                                </Typography>
                            )}
                            <Typography sx={{
                                fontSize: isMobile ? '22px' : '42px',
                                marginLeft: (number && !isMobile) ? '40px' : '0'
                            }}>{title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{marginBottom: '40px'}}>
                            <Typography sx={{marginLeft: (number && !isMobile) ? '40px' : '0', maxWidth: '530px'}}>
                                {details}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            )}
        </div>
    );
}


