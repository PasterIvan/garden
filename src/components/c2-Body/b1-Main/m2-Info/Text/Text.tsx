import React from 'react'

import style from 'components/c2-Body/b1-Main/m2-Info/Text/Text.module.scss'

export const Text: React.FC = () => {
  return (
    <div className={style.header}>
      <div className={style.title}>На территории нашего сада имеются</div>
      <div className={style.text}>
        Веломаршруты, кемпинг, спортивная площадка, базы отыха, фестивали, аренда палаток
      </div>
    </div>
  )
}
