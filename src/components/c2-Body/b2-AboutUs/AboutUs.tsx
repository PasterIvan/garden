import React, { useEffect } from 'react'

import { HeaderBlock } from 'components/common/HeaderBlock'
import { Gallery } from '../b1-Main/m7-Gallery/Gallery'

import style from 'components/c2-Body/b2-AboutUs/AboutUs.module.scss'
import aboutUs from './img/aboutUsNew.svg'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { aboutUsTC } from 'bll/adminReduser'

export const AboutUs: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(aboutUsTC())
  }, [])
  const aboutUsContent = useAppSelector((state) => state.admin.aboutUs)
  let content = { __html: aboutUsContent.content }
  return (
    <div className={style.aboutUs}>
      <HeaderBlock title="О НАС" text={aboutUsContent.title} />
      <div className={style.aboutUsBody}>
        <div className={style.aboutUsBodyPicture}>
          <img src={aboutUs} alt="" />
        </div>
        <div className={style.aboutUsBodyText}>
          <div dangerouslySetInnerHTML={content} />
        </div>
      </div>
      <Gallery />
    </div>
  )
}
