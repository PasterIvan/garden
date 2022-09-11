import React from 'react'

import { Icons } from './Icons/Icons'
import style from 'components/c2-Body/b1-Main/m2-Info/Info.module.scss'
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
