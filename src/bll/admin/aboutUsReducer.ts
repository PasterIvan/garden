import {AppThunkType} from "../../store/store"
import {aboutUsAPI} from "../../api/api";

export type SetAboutUsActionType = ReturnType<typeof setAboutUsAC>

export type ActionsTypeForAboutUsReducer =
    SetAboutUsActionType

export type aboutUsType = {
    title: string
    content: string
}

const initialState: aboutUsType = {
    title: '',
    content: ''
}

export const aboutUsReducer = (state: aboutUsType= initialState, action: ActionsTypeForAboutUsReducer) => {
    switch (action.type) {
        case 'SET_ABOUT_US':
            return action.data

        default:
            return state
    }
}

//AC
export const setAboutUsAC = (data: aboutUsType ) => {
    return {type: 'SET_ABOUT_US', data} as const
}

//THUNKS
export const setAboutUsTC = (): AppThunkType => async dispatch => {
    const res = await aboutUsAPI.get()
    dispatch(setAboutUsAC(res.data))

}
