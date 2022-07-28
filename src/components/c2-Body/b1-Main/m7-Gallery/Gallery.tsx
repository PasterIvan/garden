import React from "react";
import style from "./Gallery.module.css"
import festival from "./img/festival.svg"

export const Gallery = () => {

    return (
        <div className={style.gallery}>
            <div className={style.video}></div>
            <div className={style.picture}></div>
        </div>
    );
}