import React, { useEffect } from 'react'

import { HeaderBlock } from 'components/common/HeaderBlock'

import style from './Concurs.module.css'
import aboutConcurs from './img/aboutConcurs.svg'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { concursTC, galleryTC } from 'bll/adminReduser'

export const Concurs: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(concursTC())
    dispatch(galleryTC())
  }, [])
  const concurs = useAppSelector((state) => state.admin.concurs)
  const gallery = useAppSelector((state) => state.admin.gallery)
  let concursContent = { __html: concurs.content }
  return (
    <div className={style.aboutConcurs}>
      <HeaderBlock title="КОНКУРС" text="Ознакомьтесь с работами финалистов" />
      <div className={style.aboutConcursBody}>
        <div className={style.aboutConcursBodyPicture}>
          <img src={aboutConcurs} alt="" />
        </div>
        <div className={style.aboutConcursBodyText}>
          <div dangerouslySetInnerHTML={concursContent} />
        </div>
        <iframe
          width="100%"
          height="519"
          src={gallery.video_link}
          title="YouTube video player"
          frameBorder="0"
          style={{ borderRadius: '28px', margin: '0 auto' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={style.aboutConcursGallery}>
        <img src={gallery.photo1} alt="" />
        <img src={gallery.photo2} alt="" />
        <img src={gallery.photo3} alt="" />
        <img src={gallery.photo4} alt="" />
        <img src={gallery.photo5} alt="" />
        <img src={gallery.photo6} alt="" />
        <img src={gallery.photo7} alt="" />
        <img src={gallery.photo8} alt="" />
        <img src={gallery.photo9} alt="" />
        <img src={gallery.photo10} alt="" />
      </div>
    </div>
  )
}
