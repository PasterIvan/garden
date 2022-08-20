import React from 'react'

import { Icons } from './Icons/Icons'
import style from './Info.module.css'
import { Text } from './Text/Text'

export const Info: React.FC = () => {
  return (
    <div className={style.infoContainer}>
      <div className={style.info}>
        <Text />
        <Icons />
      </div>
    </div>
  )
}
