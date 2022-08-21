import React from 'react'
import style from './Footer.module.css'
import f from './img/f.svg'
import t from './img/t.svg'
import i from './img/i.svg'

export const Footer = () => {
  return (
    <div className={style.background}>
      <div className={style.footer}>
        <div className={style.documents}>
          Документы
          <p>Топосъемка места</p>
          <p>Приложение</p>
          <p>ТЗ</p>
        </div>
        <div className={style.contacts}>
          Контакты
          <p>
            <b>Адрес</b>: Воронежская область, Рамонский район, пос. Горожанка
          </p>
          <p>
            <b>Почта</b>: h.stepnoi@yandex.ru
          </p>
          <p>
            <b>Телефон</b>: 8-910-348-28-09
          </p>
        </div>
        <div className={style.socialNetworks}>
          <img src={f} alt="" />
          <img src={t} alt="" />
          <img src={i} alt="" />
        </div>
      </div>
    </div>
  )
}
