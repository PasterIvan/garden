import React from "react";
import style from "./Picture.module.css"
import Group333553 from './img/button/Group33553.svg'
import '../../../../fonts/fonts.css'

export const Picture = () => {
    return (
        <div className={style.picture}>
            <div className={style.content}>
                <div className={style.text1} style={{fontFamily: 'Fredoka'}}>
                    Старый <div>сад </div> <br/> на новый лад
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