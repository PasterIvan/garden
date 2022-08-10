import {cards, CardsType} from "../store/state";
import {clearFormAC} from "./formReduser";

type ChangeThemeAT = ReturnType<typeof choosePlantAC> | ReturnType<typeof clearFormAC>

type CardsActionsType = ChangeThemeAT

type InitialStateType = typeof initState

const initState: CardsType = cards

export const cardsReducer = (state: CardsType = initState, action: CardsActionsType): InitialStateType => {
        switch (action.type) {
            case 'CHOOSE-PLANT': {
                return {
                    ...state, [action.idZone]:
                        state[action.idZone].map(card => card.idCard === action.idCard ? {
                            ...card,
                            isDone: !card.isDone
                        } : card)
                }
            }
            case 'CLEAR-FORM':
                return state = cards

            default:
                return state;
        }
    }
;
//AC
export const choosePlantAC = (idZone: string, idCard: string) => {
    return {type: "CHOOSE-PLANT", idZone, idCard} as const
};


