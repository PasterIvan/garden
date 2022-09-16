import React, { useEffect } from 'react'

import style from 'components/c2-Body/b1-Main/m7-Gallery/Gallery.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { galleryTC } from 'bll/adminReduser'
import { GalleryPicture } from 'components/c2-Body/b1-Main/m7-Gallery/GalleryPicture'

export const Gallery: React.FC = () => {
  const dispatch = useAppDispatch()
  const gallery = useAppSelector((state) => state.admin.gallery)

  useEffect(() => {
    dispatch(galleryTC())
  }, [])
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
      <div className={style.pictures}>
        {gallery.photos.map((p, index) => (
          <GalleryPicture key={p} picture={p} index={index} pictures={gallery.photos} />
        ))}
      </div>
    </div>
  )
}
