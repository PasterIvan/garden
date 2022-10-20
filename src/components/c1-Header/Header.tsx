import React from 'react'

import { HeaderMenu } from './h1-Menu/HeaderMenu'
import { Contacts } from './h2-Contacts/Contacts'
import style from 'components/c1-Header/Header.module.scss'

export const Header: React.FC = () => {
  return (
    <div className={style.flower}>
      <header>
        <HeaderMenu />
        {/*<Contacts />*/}
      </header>
    </div>
  )
}
