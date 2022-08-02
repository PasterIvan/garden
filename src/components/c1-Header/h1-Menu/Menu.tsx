import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import Button from "../../../common/Button/Button";
import style from "./Menu.module.css"
import logo from "./img/logo.svg";

export const Menu = () => {
    const [menuActive, setMenuActive] = useState(false)

    const scrollUp = () => {
        if (window.screen.width <= 768) {
            setMenuActive(!menuActive);
        }
        window.scrollTo(0, 0)
    }

    return (
        <div className={style.menu}>
            <div className={style.logo}>
                <img src={logo}/>
                <div>Наш Сад</div>
            </div>
            <Button className={style.buttonMenu} onClick={() => setMenuActive(!menuActive)}>меню</Button>
            <div className={style.textAndButton}>
                <div className={`${menuActive ? style.menuActive : style.text}`}>
                    <div>
                        <NavLink onClick={scrollUp} to={'/main'} >наш сад</NavLink>
                        <NavLink onClick={scrollUp} to={'/about_us'}>О нас</NavLink>
                        <NavLink onClick={scrollUp} to={'/concurs'}>конкурсные работы</NavLink>
                        <NavLink onClick={scrollUp} to={'/about_festival'}>О фестивале</NavLink>
                    </div>
                    <Button className={style.buttonTrees}>деревья</Button>
                </div>
            </div>
        </div>
    )
}