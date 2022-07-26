import {NavLink} from "react-router-dom";
import React from "react";
import Button from "../../../common/Button/Button";
import style from "./Menu.module.css"
import logo from "./img/logo.svg";

export const Menu = () => {
    return (
        <div className={style.menu}>
            <div className={style.logo}>
                <img src={logo}/>
                <div>Наш Сад</div>
            </div>
            <Button className={style.buttonMenu}>меню</Button>
            <div className={style.textAndButton}>
                <div className={style.text}>
                    <div>
                        <NavLink to={'/main'}>наш сад</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/about_us'}>О нас</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/concurs'}>конкурсные работы</NavLink>
                    </div>
                    <div>
                        <NavLink to={'/about_festival'}>О фестивале</NavLink>
                    </div>
                </div>

                <Button className={style.button}>деревья</Button>
            </div>
        </div>
    )
}