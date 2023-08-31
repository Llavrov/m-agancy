import Button from '@mui/material/Button';
import Link from 'next/link';
import React, {type ReactElement} from 'react';
import QUModal from "@/components/header/modal";
import QUIcon from "@/components/common/icon/QUIcon";
import {Icon} from "@/components/common/icon/Icon";
import ContactUs from "@/components/common/contactUsButton/contactUsButton";

export interface QUMobileMenuProps {
    openMenu: boolean;
    handleOpenMenu: (value: boolean) => void;
    mobileMenuTabs?: { title: string; link: string }[];
}

export default function QUMobileMenu({
    openMenu,
    handleOpenMenu,
    mobileMenuTabs,
}: QUMobileMenuProps): ReactElement {
    return (
        <QUModal openMenu={openMenu} handleOpenMenu={handleOpenMenu}>
            <div className="h-full relative">
                <div className="pt-5 pr-5 w-full flex justify-end" onClick={(): void => handleOpenMenu(false)}>
                    <QUIcon icon={Icon.closeWhite} />
                </div>

                <div className="flex justify-between flex-col h-[calc(100%-140px)]">
                    <div className="flex flex-col p-4">
                        {mobileMenuTabs &&
                            mobileMenuTabs.map((menuTab, index) => (
                                <Link onClick={(): void => handleOpenMenu(false)} key={index} className="no-underline text-white" href={menuTab.link}>
                                    <Button sx={{ minWidth: 0, fontSize: 22, gap: '10px' }} style={{ color: 'white' }}>
                                        <svg width="6" height="19" viewBox="0 0 6 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="6" height="19" rx="3" fill="#F5F5F5"/>
                                        </svg>
                                        {menuTab.title}
                                    </Button>
                                </Link>
                            ))
                        }
                    </div>

                    <ContactUs/>
                </div>
            </div>
        </QUModal>
    );
}
