import React from 'react'

import { HeaderBlock } from 'components/common/HeaderBlock'

import style from 'components/c2-Body/b5-Contacts/Contacts.module.scss'

export const Contacts: React.FC = () => {
  return (
    <div className={style.contacts}>
      <HeaderBlock title="КОНТАКТЫ" />
      <div className={style.contactsBody}>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>
            Полное официальное наименование предприятия:
          </div>
          <div className={style.contactsBodyBlockText}>
            Автономная некоммерческая организация «Центр экологических инициатив «Чистая тропа»
          </div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>Сокращенное наименование предприятия:</div>
          <div className={style.contactsBodyBlockText}>АНО «Чистая тропа»</div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>Директор:</div>
          <div className={style.contactsBodyBlockText}>Долматов Данил Эдуардович</div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>ИНН:</div>
          <div className={style.contactsBodyBlockText}>3662257540</div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>ОГРН:</div>
          <div className={style.contactsBodyBlockText}>1173600010825</div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>Юридический адрес:</div>
          <div className={style.contactsBodyBlockText}>
            3994005, г. Воронеж, ул. Владимира Невского, д. 31А, кв. 116.
          </div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>Телефон (факс):</div>
          <div className={style.contactsBodyBlockText}>+7(906)702-15-24</div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>Номер расчетного счета:</div>
          <div className={style.contactsBodyBlockText}>40703810213000002022</div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>Наименование учреждения банка:</div>
          <div className={style.contactsBodyBlockText}>ПАО «Сбербанк России»</div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>Местонахождение учреждения банка:</div>
          <div className={style.contactsBodyBlockText}>г.Воронеж</div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>Корреспондентский счет банка:</div>
          <div className={style.contactsBodyBlockText}>30101810600000000681</div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>БИК:</div>
          <div className={style.contactsBodyBlockText}>042007681</div>
        </div>
        <div className={style.contactsBodyBlock}>
          <div className={style.contactsBodyBlockTitle}>e-mail</div>
          <div className={style.contactsBodyBlockText}>eduard_dolmatov@mail.ru</div>
        </div>
      </div>
    </div>
  )
}
