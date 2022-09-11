import React from 'react'

import Group333553 from './img/button/Group33553.svg'
import style from 'components/c2-Body/b1-Main/m1-Picture/Picture.module.scss'
import 'fonts/fonts.css'

export const Picture: React.FC = () => {
  const scrollGardenPlan = (): void => {
    const divElement = document.getElementById('gardenPlan')

    if (divElement) {
      divElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={style.picture}>
      <div className={style.content}>
        <div className={style.text1}>
          Старый <div>сад </div> <br /> на новый лад
        </div>
        <div className={style.text2}>Выбери свое дерево</div>
        <button type="button" className={style.button} onClick={scrollGardenPlan}>
          Выбрать дерево
          <img src={Group333553} alt="" />
        </button>
      </div>
    </div>
  )
}
