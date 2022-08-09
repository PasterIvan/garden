import {formAPI, FormParamsType} from "../api/api";
import {AppThunkType} from "../store/store";
import {CardsType} from "../store/state";

const initialState = {}

type InitialStateType = typeof initialState

export const formReducer = (state: InitialStateType = initialState, action: ActionsTypeForAuthReducer): InitialStateType => {
    switch (action.type) {
        case 'ADD-PLANT': {
            let redPlant = action.cards['red'].filter(card => card.isDone).map(c => c.title)
            let orangePlant = action.cards['orange'].filter(card => card.isDone).map(c => c.title)
            let greenPlant = action.cards['green'].filter(card => card.isDone).map(c => c.title)
            let bluePlant = action.cards['blue'].filter(card => card.isDone).map(c => c.title)
            let violetPlant = action.cards['violet'].filter(card => card.isDone).map(c => c.title)
            return {...state,
                redZone: redPlant,
                orangeZone: orangePlant,
                greenZone: greenPlant,
                blueZone: bluePlant,
                violetZone: violetPlant
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

// thunks
export const postFormTC = (data: FormParamsType): AppThunkType => async (dispatch) => {
    const res = await formAPI.postForm(data)
}

// types
export type ActionsTypeForAuthReducer = ReturnType<typeof addPlantAC>