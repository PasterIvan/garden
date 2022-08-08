import React from "react";
import style from "./Footer.module.css";
import f from "./img/f.svg";
import t from "./img/t.svg";
import i from "./img/i.svg";
import {NavLink} from "react-router-dom";
import {scrollUp} from "../c1-Header/h1-Menu/HeaderMenu";

export const Footer = () => {

    return (
        <div className={style.background}>
            <div className={style.footer}>
                <div className={style.documents}>
                    <div >
                        документы
                    </div>
                    <div>
                        <NavLink onClick={scrollUp} to={'/contacts'}>контакты</NavLink>
                    </div>
                </div>
                <div></div>
                <div className={style.socialNetworks}>
                    <img src={f}/>
                    <img src={t}/>
                    <img src={i}/>
                </div>
            </div>
        </div>
    )
}