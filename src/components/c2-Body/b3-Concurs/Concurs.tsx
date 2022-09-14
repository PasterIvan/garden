import React, { useEffect, useState } from 'react'

import { HeaderBlock } from 'components/common/HeaderBlock'

import style from 'components/c2-Body/b3-Concurs/Concurs.module.scss'
import aboutConcurs from './img/aboutConcurs.svg'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { concursTC, galleryTC } from 'bll/adminReduser'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { winners } from './ConcursState'

export const Concurs: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(concursTC())
    dispatch(galleryTC())
  }, [])
  const concurs = useAppSelector((state) => state.admin.concurs)
  const gallery = useAppSelector((state) => state.admin.gallery)
  const concursContent = { __html: concurs.content }

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
      <HeaderBlock
        title="Победители"
        text="Победители конкурса
Ландшафтного дизайна сенсорного сада
«Старый сад на новый лад»"
      />
      <div className={style.aboutConcursGalleryBlock}>
        {winners.map((w) => {
          const [open, setOpen] = React.useState(false)
          const [winner, setWinner] = useState('')

          const onChangeImg = () => setWinner(w.certificate)
          const handleClickOpen = (): void => {
            onChangeImg()
            setOpen(true)
          }

          const handleClose = (): void => {
            setOpen(false)
          }

          return (
            <div key={w.id} className={style.aboutConcursGallery}>
              <img src={w.certificate} alt="" onClick={handleClickOpen} onChange={onChangeImg} />
              <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxWidth: '760px',
                    margin: '5px',
                    borderRadius: 20,
                  },
                }}
              >
                <DialogContent style={{ padding: '0' }}>
                  <img src={winner} alt="" style={{ width: '100%' }} />
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
