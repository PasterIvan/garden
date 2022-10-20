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

import Зямина from 'components/c2-Body/b3-Concurs/img/Зямина.png'
import Максимова from 'components/c2-Body/b3-Concurs/img/Максимова.png'
import Пищугина from 'components/c2-Body/b3-Concurs/img/Пищугина.png'
import Манцурова from 'components/c2-Body/b3-Concurs/img/Манцурова.png'
import Андреева from 'components/c2-Body/b3-Concurs/img/Андреева.png'
import Алифанов from 'components/c2-Body/b3-Concurs/img/Алифанов.png'

export const Concurs: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(concursTC())
    dispatch(galleryTC())
  }, [])
  const concurs = useAppSelector((state) => state.admin.concurs)
  const gallery = useAppSelector((state) => state.admin.gallery)
  const concursContent = { __html: concurs.content }
  const winners = [Зямина, Максимова, Пищугина, Манцурова, Андреева, Алифанов]
  return (
    <div className={style.aboutConcurs}>
      <HeaderBlock title="КОНКУРС" text="Ознакомьтесь с работами финалистов" />
      <div className={style.aboutConcursBody}>
        <div className={style.works}>
          <a href={'http://konkurs.hutorstepnoi.ru/posts/'} target={'_blank'} rel="noreferrer">
            <button>Работы финалистов</button>
          </a>
        </div>
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

          const onChangeImg = () => setWinner(w)
          const handleClickOpen = (): void => {
            onChangeImg()
            setOpen(true)
          }

          const handleClose = (): void => {
            setOpen(false)
          }

          return (
            <div key={w} className={style.aboutConcursGallery}>
              <img src={w} alt="" onClick={handleClickOpen} onChange={onChangeImg} />
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
