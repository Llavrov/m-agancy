import React from 'react';
import styles from './footer.module.css';
import QUIcon from "@/components/common/icon/QUIcon";
import {Icon} from "@/components/common/icon/Icon";
import classNames from "classnames";
import QUTextField from "@/components/common/textFields/QUTextField";

export default function QUFooter() {
    return (
        <footer className={'bg-primary w-full pt-10'}>
            <div className={classNames(styles.footer, 'py-5 flex flex-col')}>
                <div className="flex w-full py-5 gap-[100px] flex-row">
                    <QUIcon className="h-[73px] w-[180px] object-contain" icon={Icon.logoWhite} width={230} height={93} />

                    <div className="w-full flex flex-row justify-between">
                        <a href="#" className="text-white no-underline">
                            КЕЙСЫ
                        </a>
                        <a href="#" className="text-white no-underline">
                            УСЛУГИ
                        </a>
                        <a href="#" className="text-white no-underline">
                            ЧТО МЫ ДЕЛАЕМ
                        </a>
                        <a href="#" className="text-white no-underline">
                            КОНТАКТЫ
                        </a>
                    </div>
                </div>

                <div className="flex w-full gap-[100px] flex-row justify-between">
                    <div>
                        <div className="w-full min-w-[300px]">
                            <p className="text-white m-0 mb-2">ИМЯ</p>
                            <QUTextField color="white" type="text" placeholder="Ваш Email"/>
                        </div>
                        <div className="w-full border-solid border-[2px] border-white mt-4 rounded-4 overflow-hidden">
                            <p className="text-white text-center m-0 p-3 cursor-pointer active:bg-primary hover:bg-black">
                                Подписаться
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-heading-48-bold whitespace-nowrap text-white m-0">Расти просто.</p>
                    </div>
                </div>

                <div className="w-full flex justify-end mt-10">
                    <p className="text-white">
                        © 2023 M-agancy Все права защищены. Правила пользования.
                    </p>
                </div>
            </div>
        </footer>
    );
}
