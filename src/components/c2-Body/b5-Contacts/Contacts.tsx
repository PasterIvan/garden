import React from 'react'
import style from './Contacts.module.css'
import {HeaderBlock} from "../../common/HeaderBlock";

export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <HeaderBlock title={'НАШИ КОНТАКТЫ'}/>
            <div className={style.contactsBodyText}>
                <p><b>Адрес</b>: Воронежская область Рамонский район пос. Горожанка</p>

                <p><b>Почта</b>: h.stepnoi@yandex.ru</p>

                <p><b>Телефон</b>: 8-910-348-28-09</p>
            </div>
            <HeaderBlock title={'ДОКУМЕНТЫ'}/>
            <div className={style.documents}>
                <div>Приложение</div>
                <div>ТЗ</div>
                <div>Топосъемка места</div>
            </div>
        </div>
    )
}
