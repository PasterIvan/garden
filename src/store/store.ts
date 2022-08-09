import {applyMiddleware, combineReducers, createStore} from "redux";
import {zonesReducer} from "../bll/zonesReducer";
import {cardsReducer} from "../bll/cardsReducer";
import {themeReducer} from "../bll/themeReducer";
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {loadState, saveState} from "../utils/localStorage-utils";
import {ActionsTypeForAuthReducer, formReducer} from "../bll/formReduser";

const rootReducer = combineReducers({
        theme: themeReducer,
        zones: zonesReducer,
        cards: cardsReducer,
        form: formReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
        saveState({
                theme: store.getState().theme,
                zones: store.getState().zones,
                cards: store.getState().cards,
                form: store.getState()
        })
})

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>

export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionsType>

export type ActionsType = ActionsTypeForAuthReducer
export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
// @ts-ignore
window.store = store // for dev
