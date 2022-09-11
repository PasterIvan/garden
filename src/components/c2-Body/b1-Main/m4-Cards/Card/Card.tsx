import React from 'react'

import { useDispatch } from 'react-redux'

import style from 'components/c2-Body/b1-Main/m4-Cards/Card/Card.module.scss'

import { choosePlantAC } from 'bll/cardsReducer'

type CardCT = {
  idZone: string
  idCard: string
  img: string
  title: string
  isDone: boolean
}

export const Card: React.FC<CardCT> = ({ idZone, idCard, img, title, isDone }) => {
  const dispatch = useDispatch()

  const image = {
    backgroundImage: `url(${img})`,
  }

  const onChangeCard = (idZone: string, idCard: string): void => {
    dispatch(choosePlantAC({ idZone, idCard }))
  }

  return (
    <div className={style.card}>
      <div className={isDone ? style.selectedBox : style.box}>
        <div style={image} className={style.img}>
          {/*<img src={img} alt="" />*/}
        </div>
        <div style={isDone ? { display: 'none' } : {}}>{title}</div>
        <button onClick={() => onChangeCard(idZone, idCard)}>
          {isDone ? 'Отменить' : 'Выбрать'}
        </button>
      </div>
    </div>
  )
}
