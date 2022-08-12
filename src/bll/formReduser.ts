import {formAPI, FormParamsType} from "../api/api";
import {CardsType} from "../store/state";
import {AppThunkType} from "../store/store";

const initialState = {} as FormStateType

export type FormStateType = {
    redZone: Array<string>,
    orangeZone: Array<string>,
    greenZone: Array<string>,
    blueZone: Array<string>,
    violetZone: Array<string>
    contacts: FormParamsType
}

export const formReducer = (state: FormStateType = initialState, action: ActionsTypeForAuthReducer): FormStateType => {
    switch (action.type) {
        case 'ADD-PLANT': {
            let redPlant = action.cards['red'].filter(card => card.isDone).map(c => c.title)
            let orangePlant = action.cards['orange'].filter(card => card.isDone).map(c => c.title)
            let greenPlant = action.cards['green'].filter(card => card.isDone).map(c => c.title)
            let bluePlant = action.cards['blue'].filter(card => card.isDone).map(c => c.title)
            let violetPlant = action.cards['violet'].filter(card => card.isDone).map(c => c.title)
            return {
                ...state,
                redZone: redPlant,
                orangeZone: orangePlant,
                greenZone: greenPlant,
                blueZone: bluePlant,
                violetZone: violetPlant
            }
        }
        case 'ADD-FORM': {
            return {
                ...state,
                contacts: action.contacts
            }
        }
        case 'CLEAR-FORM':
            return state = {
                redZone: [],
                orangeZone: [],
                greenZone: [],
                blueZone: [],
                violetZone: [],
                contacts: {
                    name: '',
                    phone: '',
                    email: ''
                }
            }

        default:
            return state
    }
}
// actions
export const addPlantAC = (cards: CardsType) => {
    return {type: 'ADD-PLANT', cards} as const
}
export const addFormAC = (contacts: FormParamsType) => {
    return {type: 'ADD-FORM', contacts} as const
}
export const clearFormAC = () => {
    return {type: 'CLEAR-FORM'} as const
}

// thunks
export const preparationFormTC = (contacts: FormParamsType, cards: CardsType): AppThunkType => async dispatch => {
    dispatch(addFormAC(contacts))
    dispatch(addPlantAC(cards))
}
export const postFormTC = (form: FormStateType): AppThunkType => async dispatch => {
    const res = await formAPI.postForm(form)
}

// types
export type ActionsTypeForAuthReducer =
    ReturnType<typeof addPlantAC>
    | ReturnType<typeof addFormAC>
    | ReturnType<typeof clearFormAC>