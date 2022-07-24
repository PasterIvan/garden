import React, {useState} from "react";
import {Card} from "./Card/Card";
import plant1 from "./img/plant1.svg";
import plant2 from "./img/plant2.svg";
import style from "./Cards.module.css"

export const Cards = () => {

    let [cards, setCards] = useState(
        [
            {id: 1, img: plant2, title: 'Дикий виноград', isDone: true},
            {id: 2, img: plant1, title: 'Дуб', isDone: false},
            {id: 3, img: plant1, title: 'Вишня', isDone: false},
            {id: 4, img: plant1, title: 'Яблоня', isDone: true},
            {id: 5, img: plant1, title: 'Дикий виноград', isDone: true},
            {id: 6, img: plant1, title: 'Дикий виноград', isDone: true},
            {id: 7, img: plant1, title: 'Дикий виноград', isDone: true},
            {id: 8, img: plant1, title: 'Дикий виноград', isDone: true},
        ]
    )

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