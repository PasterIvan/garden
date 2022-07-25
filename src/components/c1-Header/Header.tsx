import React from "react";
import {Contacts} from "./h2-Contacts/Contacts";
import style from "./Header.module.css"
import {Menu} from "./h1-Menu/Menu";

export const Header = () => {
    return (
        <div className={style.flower}>
            <header>
                <Menu/>
                <Contacts/>
            </header>
        </div>
    )
}