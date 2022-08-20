import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { adminAPI } from 'api/api'
import { AppThunkType } from 'store/store'
import { AxiosError } from 'axios'

const initState = {
  aboutUs: {
    title: '',
    content: '',
  },
}

const slice = createSlice({
  name: 'admin',
  initialState: initState,
  reducers: {
    setAboutUs(state, action: PayloadAction<{ aboutUs: { title: string; content: string } }>) {
      state.aboutUs = action.payload.aboutUs
    },
  },
})

export const adminReducer = slice.reducer

export const { setAboutUs } = slice.actions

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
