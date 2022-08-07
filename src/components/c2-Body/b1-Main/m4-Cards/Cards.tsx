import React, {useEffect} from "react";
import style from "./Cards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../../store/store";
import {CardsType, ZoneType} from "../../../../store/state";
import {Card} from "./Card/Card";
import {setZonesAC} from "../../../../bll/zonesReducer";

export const Cards = () => {

    const dispatch = useDispatch()

    const theme = useSelector<AppStateType, string>(state => state.theme.startTheme);
    const cards = useSelector<AppStateType, CardsType>(state => state.cards)
    const zones = useSelector<AppStateType, ZoneType[]>(state => state.zones)

    const zoneTexts = zones.filter(z => z.idZone === theme)[0]
    let zoneCards = cards[theme]
debugger
    return (
        <div className={style.cards}>
            <div className={style.header}>
                <div className={style.title}>
                    Выберите растение
                </div>
                <div className={style.text}>
                    {zoneTexts && zoneTexts.cardText}
                </div>
            </div>
            <div className={style.card}>
                {
                    zoneCards && zoneCards.map(z => {
                        return <Card key={z.idCard}
                                     idCard={z.idCard}
                                     title={z.title}
                                     img={z.img}
                                     isDone={z.isDone}
                                     idZone={theme}/>
                    })
                }
            </div>
        </div>
    );
}