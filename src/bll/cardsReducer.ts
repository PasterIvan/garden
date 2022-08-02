import {CardsType, CardType} from "../store/state";

type ChangeThemeAT = ReturnType<typeof choosePlantAC>
type SetCardsAT = ReturnType<typeof setCardsAC>

type CardsActionsType = SetCardsAT | ChangeThemeAT

type InitialStateType = typeof initState

const initState = {}

export const cardsReducer = (state: CardsType = initState, action: CardsActionsType): InitialStateType => {
    switch (action.type) {
        // case 'SET-ZONE': {
        //     const copyState = {...state}
        //     action.todolists.forEach(tl => {
        //         copyState[tl.id] = []
        //     })
        //     return copyState
        // }
        case 'SET-CARDS':
            return {...state, [action.idZone]: action.cards}
        default:
            return state;
    }
};
//AC
export const choosePlantAC = (zone: string, id: number, isDone: boolean) => {
    return {type: "CHOOSE-PLANT", zone, id, isDone} as const
};
export const setCardsAC = (cards: Array<CardType>, idZone: string) => ({type: 'SET-CARDS', cards, idZone} as const)

