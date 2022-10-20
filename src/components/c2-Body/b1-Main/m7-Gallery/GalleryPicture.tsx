import style from 'components/c2-Body/b1-Main/m7-Gallery/Gallery.module.scss'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import React, { useState } from 'react'

type PictureType = {
  picture: string
  index: number
  pictures: string[]
}
export const GalleryPicture: React.FC<PictureType> = ({ picture }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div key={picture} className={style.picture}>
      <img src={picture} alt="" onClick={handleClickOpen} />
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
            src={picture}
            alt=""
            style={{
              width: '100%',
              maxHeight: '92vh',
              borderRadius: 20,
            }}
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
}
