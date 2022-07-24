import React from "react";
import style from "./Picture.module.css"
import Group333553 from './img/button/Group33553.svg'

export const Picture = () => {
    return (
        <div className={style.picture}>
            <div className={style.text1}>Старый <div>сад </div> на новый лад</div>
            <div className={style.text2}>Мы продаем деревья</div>
            <div className={style.button}>
                Выбрать дерево
                <img src={Group333553}/>
            </div>
        </div>
    )
}