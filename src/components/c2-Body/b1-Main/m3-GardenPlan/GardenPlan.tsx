import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import style from 'components/c2-Body/b1-Main/m3-GardenPlan/GardenPlan.module.scss'
import plan from './img/planNew.svg'
import SuperRadio from './Radio/SuperRadio'

import { changeThemeAC } from 'bll/themeReducer'
import { themes, zones, ZonesType } from 'store/state'
import { AppStateType } from 'store/store'

export const GardenPlan: React.FC = () => {
  const theme = useSelector<AppStateType, string>((state) => state.theme.startTheme)

  const dispatch = useDispatch()

  const onChangeTheme = (zone: ZonesType): void => {
    dispatch(changeThemeAC({ theme: zone }))
  }

  const zoneTexts = zones.filter((zone) => zone.idZone === theme)[0]

  return (
    <div id="gardenPlan" className={style.plan}>
      <div className={style.column}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginRight: '24px',
            padding: '24px 0',
          }}
        >
          <div className={style.header}>
            <div className={style.headerTitle}>ПЛАН САДА</div>
            <div className={style.headerText}>
              Парк разделен на 2 зоны : открытую, для активного отдыха и закрытую в тени садовых
              деревьев.
            </div>
          </div>
          <div className={style.buttons}>
            <span className={style[`buttons-${theme}`]}>
              <SuperRadio
                className={style[`button-${theme}`]}
                options={themes}
                value={theme}
                onChangeOption={onChangeTheme}
              />
            </span>
            <div className={style[`buttonsInfo-${theme}`]}>{zoneTexts.textButton}</div>
          </div>
        </div>
        <div className={style[`planBody-${theme}`]}>
          <div className={style.planBodyInfo}>
            <div className={style.planBodyTitle}>{zoneTexts.title}</div>
            <div className={style.planBodyText}>{zoneTexts.text}</div>
          </div>
        </div>
      </div>
      <div className={style.picture}>
        <img src={plan} alt="" />
      </div>
    </div>
  )
}
