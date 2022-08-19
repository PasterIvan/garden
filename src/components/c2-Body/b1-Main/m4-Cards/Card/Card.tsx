import React from "react";

import { useDispatch } from "react-redux";

import style from "./Card.module.css";

import { choosePlantAC } from "bll/cardsReducer";

type CardCT = {
  idZone: string;
  idCard: string;
  img: string;
  title: string;
  isDone: boolean;
};

export const Card: React.FC<CardCT> = ({
  idZone,
  idCard,
  img,
  title,
  isDone,
}) => {
  const dispatch = useDispatch();

  const onChangeCard = (idZone: string, idCard: string): void => {
    dispatch(choosePlantAC({ idZone, idCard }));
  };

  return (
    <div className={style.card}>
      <div className={isDone ? style.selectedBox : style.box}>
        <div className={style.img}>
          <img src={img} alt="" />
        </div>
        <div style={isDone ? { display: "none" } : {}}>{title}</div>
        <button onClick={() => onChangeCard(idZone, idCard)}>
          {isDone ? "Отменить" : "Выбрать"}
        </button>
      </div>
    </div>
  );
};
