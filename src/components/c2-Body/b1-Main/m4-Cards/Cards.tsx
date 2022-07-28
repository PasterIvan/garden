import React from "react";
import style from "./Cards.module.css"
import {useSelector} from "react-redux";
import {AppStoreType} from "../../../../store/store";
import {Card} from "./Card/Card";

export const Cards = () => {

    const cards = useSelector<AppStoreType, Card[]>(state => state.cards.cards);

    return (
        <div className={style.cards}>
            <div className={style.header}>
                <div className={style.title}>
                    Выберите растение
                </div>
                <div className={style.text}>
                    Растения зеленой зоны: лимонник китайский, калина давида, дикий виноград, пузыреплодник, дерен
                </div>
            </div>
            <Card cards={cards}/>
        </div>
    );
}