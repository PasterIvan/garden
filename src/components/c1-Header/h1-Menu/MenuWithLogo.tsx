import {Menu} from "./Menu";
import React from "react";
import logo from "./img/logo.svg"
import style from "./MenuWithLogo.module.css"

export const MenuWithLogo = () => {
    return (
        <div className={style.menuWithLogo}>
            <div className={style.logo}>
                <div>
                    <img src={logo}/>
                </div>
                <div className={style.text}>Наш Сад</div>
            </div>
            <Menu/>
        </div>
    )
}