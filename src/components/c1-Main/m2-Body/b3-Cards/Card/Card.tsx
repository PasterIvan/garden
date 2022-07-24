import React from "react";
import Button from "../../../../../common/Button/Button";
import style from "./Card.module.css"

type Card = {
    id: number
    img: string
    title: string
    isDone: boolean
}
type Cards = {
    cards: Card[]
}

export const Card: React.FC<Cards> = ({cards}) => {
    return (
        <div className={style.cards}>
            {cards.map(card=>{
                return(
                    <div key={card.id} className={style.box}>
                        <div className={style.img}>
                            <img src={card.img} />
                        </div>
                        <div>{card.title}</div>
                        <Button>Выбрать</Button>
                    </div>
                )
            })}
        </div>
    );
}