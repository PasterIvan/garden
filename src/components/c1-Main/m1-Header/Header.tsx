import React from "react";
import {Contacts} from "../../../general/g2-Contacts/Contacts";
import {MenuWithLogo} from "../../../general/g1-Menu/MenuWithLogo";
import flower from "./img/flower.svg";
import style from "./Header.module.css"
import {Picture} from "./Picture/Picture";

export const Header = () => {
    return (
        <div className={style.background}>
            <div className={style.header}>
                <img src={flower} className={style.flower}/>
                <div className={style.menu}>
                    <MenuWithLogo/>
                    <div className={style.contacts}>
                        <Contacts/>
                    </div>
                </div>
            </div>
            <Picture/>
        </div>
    )
}