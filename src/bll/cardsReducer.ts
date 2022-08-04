import {cards, CardsType} from "../store/state";

type ChangeThemeAT = ReturnType<typeof choosePlantAC>

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
            default:
                return state;
        }
    }
;
//AC
export const choosePlantAC = (idZone: string, idCard: string) => {
    return {type: "CHOOSE-PLANT", idZone, idCard} as const
};


