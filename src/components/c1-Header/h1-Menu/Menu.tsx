import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import Button from "../../../common/Button/Button";
import style from "./Menu.module.css"
import logo from "./img/logo.svg";

export const Menu = () => {
    const [menuActive, setMenuActive] = useState(false)

    const setMenu = () => {
        if (window.screen.width <= 768) {
            setTimeout(function () {
                setMenuActive(!menuActive);
            }, 100)
        }
    }

    const scrollUp = () => {
        window.scrollTo(0, 0);
    }

    const scrollGardenPlan = () => {
        document.location.href = '#/main';
        setTimeout(function () {
            const divElement = document.getElementById('gardenPlan');
            divElement && divElement.scrollIntoView({behavior: 'smooth'});
        }, 100)
    }

    return (
        <div className={style.menu}>
            <div className={style.logo}>
                <img src={logo}/>
                <NavLink onClick={scrollUp} to={'/main'}>Наш сад</NavLink>
            </div>
            <Button className={style.buttonMenu}
                    onClick={setMenu}
                    onBlur={setMenu}
                    >меню</Button>
            <div className={style.textAndButton} >
                <div className={`${menuActive ? style.menuActive : style.text}`}>
                    <div>
                        <NavLink onClick={scrollUp} to={'/main'}>Наш сад</NavLink>
                        <NavLink onClick={scrollUp} to={'/about_us'}>О нас</NavLink>
                        <NavLink onClick={scrollUp} to={'/concurs'}>Конкурсные работы</NavLink>
                        <NavLink onClick={scrollUp} to={'/about_festival'}>О фестивале</NavLink>
                    </div>
                    <Button className={style.buttonTrees}
                            onClick={scrollGardenPlan}>деревья</Button>
                </div>
            </div>
        </div>
    )
}