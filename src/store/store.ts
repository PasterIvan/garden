import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {zonesReducer} from "../bll/zonesReducer";
import {cardsReducer} from "../bll/cardsReducer";
import {themeReducer} from "../bll/themeReducer";
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {loadState, saveState} from "../utils/localStorage-utils";
import {ActionsTypeForFormReducer, formReducer} from "../bll/formReduser";
import {aboutUsReducer, ActionsTypeForAboutUsReducer} from "../bll/admin/aboutUsReducer";

const rootReducer = combineReducers({
        theme: themeReducer,
        zones: zonesReducer,
        cards: cardsReducer,
        form: formReducer,
        // aboutUs: aboutUsReducer
})

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
        saveState({
                theme: store.getState().theme,
                zones: store.getState().zones,
                cards: store.getState().cards,
                form: store.getState().form,
                // aboutUs: store.getState().aboutUs
        })
})

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsType>

export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionsType>

export type ActionsType = ActionsTypeForFormReducer | ActionsTypeForAboutUsReducer
export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
// @ts-ignore
window.store = store // for dev
