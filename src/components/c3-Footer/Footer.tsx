import React from 'react'
import style from 'components/c3-Footer/Footer.module.scss'
import { NavLink } from 'react-router-dom'
import { scrollUp } from 'components/c1-Header/h1-Menu/HeaderMenu'
import vk from 'components/c1-Header/h2-Contacts/img/vk.svg'

export const Footer = () => {
  return (
    <div className={style.background}>
      <div className={style.footer}>
        <div className={style.documents}>
          Документы
          <a className={style.documents_link} href="/Топосъемка.pdf" download="" target="_blank">
            Топосъемка места
          </a>
          <a className={style.documents_link} href="/Положение.docx" download="" target="_blank">
            Приложение
          </a>
          <a className={style.documents_link} href="/TZ.docx" download="" target="_blank">
            ТЗ
          </a>
        </div>
        <div className={style.contacts}>
          <NavLink onClick={scrollUp} to="/contacts">
            Контакты
          </NavLink>
          <p>
            <b>Адрес:</b> Воронежская область, Рамонский район, пос. Горожанка
          </p>
          <p>
            <b>Почта:</b> h.stepnoi@yandex.ru
          </p>
          <p>
            <b>Телефон:</b> 8-910-348-28-09
          </p>
          <p>
            <b>Социальные сети:</b>{' '}
            <a href="https://vk.com/chistya_tropa" target="blank">
              vk.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
