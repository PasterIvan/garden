import plant2 from "../img/plant2.svg";
import plant1 from "../img/plant1.svg";

type ChangeThemeAT = ReturnType<typeof choosePlantAC>
type InitialStateType = typeof initState

const initState = {
    cards: [
        {id: 1, img: plant2, title: 'Дикий виноград', isDone: true},
        {id: 2, img: plant1, title: 'Дуб', isDone: false},
        {id: 3, img: plant1, title: 'Вишня', isDone: false},
        {id: 4, img: plant1, title: 'Яблоня', isDone: false},
        {id: 5, img: plant1, title: 'Дикий виноград', isDone: false},
        {id: 6, img: plant1, title: 'Дикий виноград', isDone: false},
        {id: 7, img: plant1, title: 'Дикий виноград', isDone: false},
        {id: 8, img: plant1, title: 'Дикий виноград', isDone: false},
    ]
};

export const cardsReducer = (state = initState, action: ChangeThemeAT): InitialStateType => {
    switch (action.type) {
        case "CHOOSE-PLANT": {
            return {...state,
...state.cards.map(c=>action.id === c.id ? {...c, idDone: action.isDone}: c)
            }
        }
        default: return state;
    }
};
//AC
export const choosePlantAC = (id: number, isDone: boolean) => {
    return {type: "CHOOSE-PLANT", id, isDone} as const
};