import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import Button from "../../../../../common/Button/Button";
import style from "./Card.module.css"
import {choosePlantAC} from "../bll/cardsReducer";

export type Card = {
    id: number
    img: string
    title: string
    isDone: boolean
}
export type CardsType = {
    cards: Card[]
}

export const Card: React.FC<CardsType> = ({cards}) => {
const {id, isDone} = cards[0]
    const dispatch = useDispatch()

    const choosePlant = useCallback(() => {
        dispatch(choosePlantAC( id, isDone));
        alert(cards[0].isDone)
    }, [dispatch, id])

    return (
        <div className={style.cards}>
            {cards.map(card=>{
                return(
                    <div key={card.id} className={style.box}>
                        <div className={style.img}>
                            <img src={card.img} />
                        </div>
                        <div>{card.title}</div>
                        <Button onClick={choosePlant}>Выбрать</Button>
                    </div>
                )
            })}
        </div>
    );
}