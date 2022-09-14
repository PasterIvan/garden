import React, { MouseEventHandler } from 'react'

import { useDispatch } from 'react-redux'

import style from 'components/c2-Body/b1-Main/m4-Cards/Card/Card.module.scss'

import { choosePlantAC } from 'bll/cardsReducer'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import { DialogContentText } from '@mui/material'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

type CardCT = {
  idZone: string
  idCard: string
  img: string
  title: string
  isDone: boolean
  text: string
}

export const Card: React.FC<CardCT> = ({ idZone, idCard, img, title, isDone, text }) => {
  const dispatch = useDispatch()

  const image = {
    backgroundImage: `url(${img})`,
  }
  // const clickButton = () => {
  //   onChangeCard(idZone, idCard)
  // }

  const onChangeCard = (idZone: string, idCard: string): void => {
    dispatch(choosePlantAC({ idZone, idCard }))
  }
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  return (
    <div className={style.card}>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{
            style: { borderRadius: 20 },
          }}
        >
          <DialogContent>
            <DialogContentText component="div" id="alert-dialog-description">
              <div>
                <h1>{title}</h1>
                {text}
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color={'success'}>
              ЗАКРЫТЬ
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className={isDone ? style.selectedBox : style.box}>
        <div style={image} className={style.img} onClick={handleClickOpen} />
        <div style={isDone ? { display: 'none' } : {}}>{title}</div>
        <button onClick={() => onChangeCard(idZone, idCard)}>
          {isDone ? 'Отменить' : 'Выбрать'}
        </button>
      </div>
    </div>
  )
}
