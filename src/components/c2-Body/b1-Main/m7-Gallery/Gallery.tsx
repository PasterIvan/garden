import React, { useEffect } from 'react'

import style from './Gallery.module.css'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { galleryTC } from 'bll/adminReduser'

export const Gallery: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(galleryTC())
  }, [])
  const gallery = useAppSelector((state) => state.admin.gallery)
  return (
    <div className={style.gallery}>
      <iframe
        width="100%"
        height="519"
        src={gallery.video_link}
        style={{ borderRadius: '28px' }}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className={style.picture}>
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
