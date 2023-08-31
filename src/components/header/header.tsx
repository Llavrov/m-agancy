import React, {FC, useState} from 'react';
import styles from './header.module.css';
import {Icon} from "@/components/common/icon/Icon";
import ContactUs from '@/components/common/contactUsButton/contactUsButton';
import QUIcon from "@/components/common/icon/QUIcon";
import Link from 'next/link'
import useResponsive from "@/hooks/useResponsive";
import QUMobileMenu from "@/components/header/mobileMenu";

const navigationItems = [
    {title: 'услуги', link: 'home#services'},
    {title: 'Что мы делаем', link: 'home#partners'},
    {title: 'портфолио', link: 'portfolio'},
    {title: 'контакты', link: 'home#contacts'}
];

const Header: FC = () => {
    const { isMobile } = useResponsive();
    const [openMenu, setOpenMenu] = useState(false);

    function handleCloseMobileMenu(value: boolean): void {
        setOpenMenu(value);
    }

    return (
        <header className={styles.header}>
            <div className="flex justify-between gap-[100px] w-full max-w-[1400px]">
                <div className={styles.header__navigation}>
                    <div className="flex items-end justify-end h-[120px] w-[230px]">
                        <Link href='/home'>
                            <QUIcon icon={Icon.logo} width={230} height={92} />
                        </Link>
                    </div>

                    {!isMobile && (
                        <div className={styles.navigation__items}>
                            {
                                navigationItems.map((item, index) =>
                                    <React.Fragment key={index}>
                                        <Link href={`/${item.link}`}>
                                            <span className={styles.navigation__item}>{item.title}</span>
                                        </Link>
                                        <hr className={styles.navigation__divider}/>
                                    </React.Fragment>
                                )
                            }
                        </div>
                    )}
                </div>

                {isMobile && (
                    <QUMobileMenu
                        openMenu={openMenu}
                        handleOpenMenu={handleCloseMobileMenu}
                        mobileMenuTabs={navigationItems}
                    />
                )}

                {isMobile && (
                    <div className="text-white" onClick={() => setOpenMenu(true)}>
                        Меню
                    </div>
                )}

                <ContactUs width={'w-[200px]'} />
            </div>
        </header>
    );
}

export default Header;
