import React from 'react'

import { useSelector } from 'react-redux'

import { Card } from './Card/Card'
import style from './Cards.module.css'

import { HeaderBlock } from 'components/common/HeaderBlock'
import { CardsType, ZoneType } from 'store/state'
import { AppStateType } from 'store/store'

export const Cards: React.FC = () => {
  const theme = useSelector<AppStateType, string>((state) => state.theme.startTheme)
  const cards = useSelector<AppStateType, CardsType>((state) => state.cards)
  const zones = useSelector<AppStateType, ZoneType[]>((state) => state.zones)

  const zoneTexts = zones.filter((z) => z.idZone === theme)[0]
  const zoneCards = cards[theme]

  return (
    <div className={style.cards}>
      <HeaderBlock title="Выберите растение" text={zoneTexts && zoneTexts.cardText} />
      <div className={style.card}>
        {zoneCards &&
          zoneCards.map((z) => {
            return (
              <Card
                key={z.idCard}
                idCard={z.idCard}
                title={z.title}
                img={z.img}
                isDone={z.isDone}
                idZone={theme}
              />
            )
          })}
      </div>
    </div>
  )
}
