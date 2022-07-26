import React from 'react'

import style from 'components/common/HeaderBlock.module.scss'

type HeaderCT = {
  title: string
  text?: string
}

export const HeaderBlock: React.FC<HeaderCT> = ({ title, text }) => {
  return (
    <div className={style.header}>
      <div className={style.title}>{title}</div>
      <div className={style.text}>{text}</div>
    </div>
  )
}
