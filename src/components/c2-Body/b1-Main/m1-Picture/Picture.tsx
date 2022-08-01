import React from "react";
import style from "./Picture.module.css"
import Group333553 from './img/button/Group33553.svg'
import test from './img/test.svg'

export const Picture = () => {
    return (
        <div className={style.picture}>
            <div className={style.content}>
                <div className={style.text1}>Старый <div>сад </div> <br/> на новый лад
                <img src={test}/>
                </div>
                <div className={style.text2}>Выбери свое дерево</div>
                <div className={style.button}>
                    Выбрать дерево
                    <img src={Group333553}/>
                </div>
            </div>
        </div>
    )
}