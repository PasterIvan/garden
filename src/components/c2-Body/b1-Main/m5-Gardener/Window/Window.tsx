import React from 'react'

import { DialogContentText } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'

import style from 'components/c2-Body/b1-Main/m5-Gardener/Window/Window.module.scss'

import { FormStateType } from 'api/api'
import { clearFormAC, postFormTC, preparationFormTC } from 'bll/formReduser'
import { useAppDispatch } from 'hooks/hooks'
import { CardsType } from 'store/state'
import { AppStateType } from 'store/store'

type FormikErrorType = {
  name?: string
  phone?: string
  email?: string
}
const styleModal = {
  borderRadius: '10px',
}

export const Window: React.FC = () => {
  const dispatch = useAppDispatch()
  const cards = useSelector<AppStateType, CardsType>((state) => state.cards)
  const form = useSelector<AppStateType, FormStateType>((state) => state.form)

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
    },

    validate: (contacts) => {
      const errors: FormikErrorType = {}
      const minLengthNumber = 10

      if (!contacts.name) {
        errors.name = 'Укажите Ваше имя'
      } else if (contacts.name.length < 1) {
        errors.name = 'Некорректное имя'
      }

      if (!contacts.phone) {
        errors.phone = 'Укажите номер вашего телефона'
      } else if (contacts.phone.length < minLengthNumber) {
        errors.phone = 'Некорректный номер телефона'
      }

      if (!contacts.email) {
        errors.email = 'Укажите e-mail для обратной связи'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contacts.email)) {
        errors.email = 'Некорректный E-mail адрес'
      }

      return errors
    },
    onSubmit: (contacts) => {
      dispatch(preparationFormTC(contacts, cards))
      handleClickOpen()
    },
  })

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  const handleCloseAndPost = (): void => {
    setOpen(false)
    dispatch(postFormTC(form))
    dispatch(clearFormAC())
    formik.resetForm()
  }

  return (
    <div className={style.border}>
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
          <DialogTitle id="alert-dialog-title" style={{ color: 'red' }}>
            Проверьте информацию о заказе!
          </DialogTitle>
          <DialogContent>
            <DialogContentText component="div" id="alert-dialog-description">
              <div>
                <h1>Вы заказали:</h1>
                <p>
                  В красной зоне:
                  <b>
                    {form.redZone && form.redZone.length === 0
                      ? '—'
                      : form.redZone && form.redZone.join(', ')}
                  </b>
                </p>
                <p>
                  В оранжевой зоне:{' '}
                  <b>
                    {form.orangeZone && form.orangeZone.length === 0
                      ? '—'
                      : form.orangeZone && form.orangeZone.join(', ')}
                  </b>
                </p>
                <p>
                  В зеленой зоне:{' '}
                  <b>
                    {form.greenZone && form.greenZone.length === 0
                      ? '—'
                      : form.greenZone && form.greenZone.join(', ')}
                  </b>
                </p>
                <p>
                  В синей зоне:{' '}
                  <b>
                    {form.blueZone && form.blueZone.length === 0
                      ? '—'
                      : form.blueZone && form.blueZone.join(', ')}
                  </b>
                </p>
                <p>
                  В фиолетовой зоне:{' '}
                  <b>
                    {form.violetZone && form.violetZone.length === 0
                      ? '—'
                      : form.violetZone && form.violetZone.join(', ')}
                  </b>
                </p>
                <h1>Контактная информация:</h1>
                <p>
                  Имя: <b>{form.contacts && form.contacts.name}</b>
                </p>
                <p>
                  Номер телефона: <b>{form.contacts && form.contacts.phone}</b>
                </p>
                <p>
                  E-mail для обратной связи: <b>{form.contacts && form.contacts.email}</b>
                </p>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color={'error'}>
              Отмена
            </Button>
            <Button onClick={handleCloseAndPost} color={'success'} autoFocus>
              Оплатить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className={style.body}>
        <div>1200₽</div>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <input placeholder="Ваше имя" {...formik.getFieldProps('name')} />
          <input placeholder="Номер вашего телефона" {...formik.getFieldProps('phone')} />
          <input placeholder="E-mail для обратной связи" {...formik.getFieldProps('email')} />
          {formik.touched.name && formik.errors.name && (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                fontWeight: '400',
                height: '16px',
                textAlign: 'center',
              }}
            >
              {formik.errors.name}
            </div>
          )}
          {formik.touched.phone && formik.errors.phone && (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                fontWeight: '300',
                height: '16px',
                textAlign: 'center',
              }}
            >
              {formik.errors.phone}
            </div>
          )}
          {formik.touched.email && formik.errors.email && (
            <div
              style={{
                color: 'red',
                fontSize: '14px',
                fontWeight: '400',
                height: '16px',
                textAlign: 'center',
              }}
            >
              {formik.errors.email}
            </div>
          )}
          <button type="submit">Оформить заказ</button>
        </form>
        <div className={style.text1}>
          Нажимая кнопку «Оформить заказ» вы соглашаетесь с{' '}
          <a href="/main">Политикой конфиденциальности</a>
        </div>
      </div>
      <div className={style.additional}>
        <div style={{ width: '100%' }}>
          Саженцы/семена растений покупаются за счет средств президентского фонда культурных
          инициатив
        </div>
        <div className={style.text2}>
          Вы оплачиваете латунную табличку, на которой будет написана информация о растении и о Вас,
          как владельца посадки, а так же годовой уход за вашим растением, что составляет 1200
          рублей.
        </div>
      </div>
    </div>
  )
}
