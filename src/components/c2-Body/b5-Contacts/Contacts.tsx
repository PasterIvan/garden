import React from 'react'

import plan from './img/Plan-1024x821.jpg'

import style from 'components/c2-Body/b5-Contacts/Contacts.module.scss'
import { HeaderBlock } from 'components/common/HeaderBlock'

export const Contacts: React.FC = () => {
  const block = style.contactsBodyBlock
  const title = style.contactsBodyBlockTitle
  const text = style.contactsBodyBlockText

  return (
    <div className={style.contacts}>
      <HeaderBlock title="КОНТАКТЫ" />
      <div className={style.contactsBody}>
        <div className={style.plan}>
          <img src={plan} alt="" />
        </div>
        <div className={block}>
          <div className={title}>Полное официальное наименование предприятия:</div>
          <div className={text}>
            Автономная некоммерческая организация «Центр экологических инициатив «Чистая тропа»
          </div>
        </div>
        <div className={block}>
          <div className={title}>Сокращенное наименование предприятия:</div>
          <div className={text}>АНО «Чистая тропа»</div>
        </div>
        <div className={block}>
          <div className={title}>Директор:</div>
          <div className={text}>Долматов Данил Эдуардович</div>
        </div>
        <div className={block}>
          <div className={title}>ИНН:</div>
          <div className={text}>3662257540</div>
        </div>
        <div className={block}>
          <div className={title}>ОГРН:</div>
          <div className={text}>1173600010825</div>
        </div>
        <div className={block}>
          <div className={title}>Юридический адрес:</div>
          <div className={text}>3994005, г. Воронеж, ул. Владимира Невского, д. 31А, кв. 116.</div>
        </div>
        <div className={block}>
          <div className={title}>Телефон (факс):</div>
          <div className={text}>+7(906)702-15-24</div>
        </div>
        <div className={block}>
          <div className={title}>Номер расчетного счета:</div>
          <div className={text}>40703810213000002022</div>
        </div>
        <div className={block}>
          <div className={title}>Наименование учреждения банка:</div>
          <div className={text}>ПАО «Сбербанк России»</div>
        </div>
        <div className={block}>
          <div className={title}>Местонахождение учреждения банка:</div>
          <div className={text}>г.Воронеж</div>
        </div>
        <div className={block}>
          <div className={title}>Корреспондентский счет банка:</div>
          <div className={text}>30101810600000000681</div>
        </div>
        <div className={block}>
          <div className={title}>БИК:</div>
          <div className={text}>042007681</div>
        </div>
        {/*<div className={block}>*/}
        {/*  <div className={title}>e-mail</div>*/}
        {/*  <div className={text}>eduard_dolmatov@mail.ru</div>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}
