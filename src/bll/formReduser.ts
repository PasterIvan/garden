import {formAPI, FormParamsType} from "../api/api";
import {AppThunkType} from "../store/store";

const initialState = {}

type InitialStateType = typeof initialState

export const formReducer = (state: InitialStateType = initialState, action: ActionsTypeForAuthReducer): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
export const postFormTC = (data: FormParamsType): AppThunkType => async (dispatch) => {
alert()
    const res = await formAPI.postForm(data)

}

// types
export type ActionsTypeForAuthReducer = ReturnType<typeof setIsLoggedInAC>