import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { adminAPI, GalleryType } from 'api/api'
import { AppThunkType } from 'store/store'
import { AxiosError } from 'axios'

const initState = {
  aboutUs: {
    title: '',
    content: '',
  },
  gallery: {
    video_link: '',
    photo1: '',
    photo2: '',
    photo3: '',
    photo4: '',
    photo5: '',
    photo6: '',
    photo7: '',
    photo8: '',
    photo9: '',
    photo10: '',
  },
  festival: {
    video_link: '',
    content: '',
  },
}

const slice = createSlice({
  name: 'admin',
  initialState: initState,
  reducers: {
    setAboutUs(state, action: PayloadAction<{ title: string; content: string }>) {
      state.aboutUs = action.payload
    },
    setGallery(state, action: PayloadAction<GalleryType>) {
      state.gallery = action.payload
    },
    setFestival(state, action: PayloadAction<{ video_link: string; content: string }>) {
      state.festival = action.payload
    },
  },
})

export const adminReducer = slice.reducer

export const { setAboutUs, setGallery, setFestival } = slice.actions

// thunks
export const aboutUsTC = (): AppThunkType => async (dispatch) => {
  try {
    const res = await adminAPI.getAboutUs()

    dispatch(setAboutUs(res.data))
  } catch (error) {
    const typedError = error as AxiosError
    //handleServerNetworkError(typedError, dispatch)
  }
}
export const galleryTC = (): AppThunkType => async (dispatch) => {
  try {
    const res = await adminAPI.getGallery()

    dispatch(setGallery(res.data))
  } catch (error) {
    const typedError = error as AxiosError
    //handleServerNetworkError(typedError, dispatch)
  }
}
export const festivalTC = (): AppThunkType => async (dispatch) => {
  try {
    const res = await adminAPI.getFestival()

    dispatch(setFestival(res.data))
  } catch (error) {
    const typedError = error as AxiosError
    //handleServerNetworkError(typedError, dispatch)
  }
}
