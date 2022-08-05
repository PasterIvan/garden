import React from "react";
import {Contacts} from "./h2-Contacts/Contacts";
import style from "./Header.module.css"
import {HeaderMenu} from "./h1-Menu/HeaderMenu";

export const Header = () => {
    return (
        <div className={style.flower}>
            <header>
                <HeaderMenu/>
                <Contacts/>
            </header>
        </div>
    )
}