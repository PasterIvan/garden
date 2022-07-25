import React from "react";
import {Contacts} from "./h2-Contacts/Contacts";
import {MenuWithLogo} from "./h1-Menu/MenuWithLogo";
import style from "./Header.module.css"

export const Header = () => {
    return (
        <div className={style.background}>
            <div className={style.header}>
                <div className={style.menu}>
                    <MenuWithLogo/>
                    <div className={style.contacts}>
                        <Contacts/>
                    </div>
                </div>
            </div>
        </div>
    )
}