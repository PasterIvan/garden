import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://2.56.213.189:8083/api/',
})

export const formAPI = {
  postForm(form: FormStateType) {
    return instance.post('orders/submit', form)
  },
}
export const adminAPI = {
  getAboutUs() {
    return instance.get<{ aboutUs: { title: string; content: string } }>('aboutUs')
  },
}

export type FormContactsType = {
  name: string
  phone: string
  email: string
}

export type FormStateType = {
  redZone: string[]
  orangeZone: string[]
  greenZone: string[]
  blueZone: string[]
  violetZone: string[]
  contacts: FormContactsType
}
