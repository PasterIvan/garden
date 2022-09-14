import React, { useEffect, useState } from 'react'

import style from 'components/c2-Body/b1-Main/m7-Gallery/Gallery.module.scss'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { galleryTC } from 'bll/adminReduser'
import { winners } from 'components/c2-Body/b3-Concurs/ConcursState'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { GalleryType } from 'api/api'

export const Gallery: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(galleryTC())
  }, [])
  const gallery = useAppSelector((state) => state.admin.gallery)

  console.log(galleryPhotos)
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
        {/*{gallery.((w) => {*/}
        {/*  const [open, setOpen] = React.useState(false)*/}
        {/*  const [winner, setWinner] = useState('')*/}

        {/*  const onChangeImg = () => setWinner(w.certificate)*/}
        {/*  const handleClickOpen = (): void => {*/}
        {/*    onChangeImg()*/}
        {/*    setOpen(true)*/}
        {/*  }*/}

        {/*  const handleClose = (): void => {*/}
        {/*    setOpen(false)*/}
        {/*  }*/}

        {/*  return (*/}
        {/*    <div key={w.id} className={style.aboutConcursGallery}>*/}
        {/*      <img src={w.certificate} alt="" onClick={handleClickOpen} onChange={onChangeImg} />*/}
        {/*      <Dialog*/}
        {/*        open={open}*/}
        {/*        onClose={handleClose}*/}
        {/*        PaperProps={{*/}
        {/*          style: {*/}
        {/*            maxWidth: '760px',*/}
        {/*            margin: '5px',*/}
        {/*            borderRadius: 20,*/}
        {/*          },*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        <DialogContent style={{ padding: '0' }}>*/}
        {/*          <img src={winner} alt="" style={{ width: '100%' }} />*/}
        {/*        </DialogContent>*/}
        {/*        <DialogActions style={{ paddingTop: '0', marginBottom: '0' }}>*/}
        {/*          <Button onClick={handleClose} color={'success'} style={{ padding: '0 20px 5px' }}>*/}
        {/*            Закрыть*/}
        {/*          </Button>*/}
        {/*        </DialogActions>*/}
        {/*      </Dialog>*/}
        {/*    </div>*/}
        {/*  )*/}
        {/*})}*/}
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
