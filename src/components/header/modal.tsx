import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Slide from '@mui/material/Slide';
import { useEffect, useRef, useState, type ReactElement } from 'react';

const style = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '80%',
    height: '100vh',
    boxSizing: 'border-box',
    background: '#171717',
    boxShadow: 24,
};

export interface QUModalProps {
    openMenu: boolean;
    handleOpenMenu: (value: boolean) => void;
}

export default function QUModal({ openMenu, handleOpenMenu, children }: React.PropsWithChildren<QUModalProps>): ReactElement {
    const [open, setOpen] = useState(openMenu);
    const containerRef = useRef(null);

    const handleClose = (): void => {
        setOpen(false);
        handleOpenMenu(false);
    };

    useEffect((): void => {
        setOpen(openMenu);
    }, [openMenu]);

    return (
        <div>
            <Modal
                ref={containerRef}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Slide container={containerRef.current} direction="left" in={open}>
                    <Box sx={style}>
                        {children}
                    </Box>
                </Slide>
            </Modal>
        </div>
    );
}
