import React from 'react'
import style from 'components/c3-Footer/Footer.module.scss'

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
      </div>
    </div>
  )
}
