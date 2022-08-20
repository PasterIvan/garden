import React from 'react'

import style from './Gardener.module.css'
import { Window } from './Window/Window'

import { HeaderBlock } from 'components/common/HeaderBlock'

export const Gardener: React.FC = () => {
  return (
    <div className={style.gardener}>
      <HeaderBlock
        title="Годовой уход за деревом"
        text="Растёт в кедрово-широколиственных и других хвойно-лиственных, иногда — в лиственных лесах, обычно в прогалинах, опушках, вырубках и старых гарях, чаще"
      />
      <Window />
    </div>
  )
}
