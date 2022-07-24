import React from "react";
import style from "./Text.module.css"

export const Text = () => {
    return (
        <div className={style.header}>
            <div className={style.title}>На территории нашего сада имеются</div>
            <div className={style.text}>Веломаршруты, кемпинг, спортивная площадка, базы отыха,
            фестивали, аренда палаток</div>
        </div>
    )
}