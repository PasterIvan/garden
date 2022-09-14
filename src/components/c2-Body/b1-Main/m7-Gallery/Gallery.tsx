import React, { useEffect, useState } from 'react'

import style from 'components/c2-Body/b1-Main/m7-Gallery/Gallery.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { galleryTC } from 'bll/adminReduser'

import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

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
      <div className={style.pictures}>
        {gallery.photos.map((p) => {
          const [open, setOpen] = React.useState(false)
          const [photo, setPhoto] = useState('')

          const onChangeImg = () => setPhoto(p)
          const handleClickOpen = (): void => {
            onChangeImg()
            setOpen(true)
          }

          const handleClose = (): void => {
            setOpen(false)
          }

          return (
            <div key={p} className={style.picture}>
              <img src={p} alt="" onClick={handleClickOpen} onChange={onChangeImg} />
              <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxWidth: '1440px',
                    maxHeight: '100vh',
                    margin: '5px',
                    borderRadius: 20,
                  },
                }}
              >
                <DialogContent style={{ padding: '5px' }}>
                  <img
                    src={photo}
                    alt=""
                    style={{ width: '100%', maxHeight: '92vh', borderRadius: 20 }}
                  />
                </DialogContent>
                <DialogActions style={{ paddingTop: '0', marginBottom: '0' }}>
                  <Button onClick={handleClose} color={'success'} style={{ padding: '0 20px 5px' }}>
                    Закрыть
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )
        })}
      </div>
    </div>
  )
}
