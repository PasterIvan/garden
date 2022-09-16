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
    return instance.get<{ title: string; content: string }>('aboutUs')
  },
  getConcurs() {
    return instance.get<{ video_link: string; content: string }>('participantsPage')
  },
  getGallery() {
    return instance.get<{ video_link: string; photos: string[] }>('gallery')
  },
  getFestival() {
    return instance.get<{ video_link: string; content: string }>('festival')
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
