import React, { useEffect } from 'react'

import { HeaderBlock } from '../../common/HeaderBlock'

import style from './AboutFestival.module.css'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { festivalTC } from 'bll/adminReduser'

export const AboutFestival: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(festivalTC())
  }, [])
  const festival = useAppSelector((state) => state.admin.festival)
  let content = { __html: festival.content }
  return (
    <div className={style.aboutFestival}>
      <HeaderBlock title="О ФЕСТИВАЛЕ" text="Узнайте про фестиваль подробнее" />
      <div className={style.aboutFestivalVideo}>
        <iframe
          width="100%"
          height="519"
          src="https://www.youtube.com/embed/H2DkW7olpeM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={style.aboutFestivalBody}>
        <div className={style.aboutFestivalBodyText}>
          <div dangerouslySetInnerHTML={content} />
        </div>
      </div>
    </div>
  )
}
