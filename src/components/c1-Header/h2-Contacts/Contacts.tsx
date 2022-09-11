import Tooltip from '@mui/material/Tooltip'
import React from 'react'

import style from './Contacts.module.css'
import phone from './img/phone.svg'
import telegram from './img/telegram.svg'
import vk from './img/vk.svg'
import whatsapp from './img/whatsapp.svg'

export const Contacts: React.FC = () => {
  return (
    <div className={style.contacts}>
      <Tooltip title="8-910-348-28-09">
        <img src={phone} alt="" />
      </Tooltip>
      <Tooltip title="WhatsApp">
        <img src={whatsapp} alt="" />
      </Tooltip>
      <Tooltip title="Telegram">
        <img src={telegram} alt="" />
      </Tooltip>
      <Tooltip title="Мы в VK">
        <a href="https://vk.com/chistya_tropa" target="blank">
          <img src={vk} alt="" />
        </a>
      </Tooltip>
    </div>
  )
}
