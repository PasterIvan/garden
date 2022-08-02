import React from "react";
import Button from "../../../../../common/Button/Button";
import style from "./Card.module.css"
import {CardType} from "../../../../../store/state";

export const Card: React.FC<CardType> = ({idCard, img,title, isDone, }) => {

    return (
        <div className={style.cards}>
            <div className={style.box}>
                <div className={style.img}>
                    <img src={img}/>
                </div>
                <div>{title}</div>
                <Button>Выбрать</Button>
            </div>
        </div>
    );
}