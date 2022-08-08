import {applyMiddleware, combineReducers, createStore} from "redux";
import {zonesReducer} from "../bll/zonesReducer";
import {cardsReducer} from "../bll/cardsReducer";
import {themeReducer} from "../bll/themeReducer";
import thunk from 'redux-thunk'
import {loadState, saveState} from "../utils/localStorage-utils";
import {appReducer} from "../bll/appReducer";

const rootReducer = combineReducers({
        app: appReducer,
        theme: themeReducer,
        zones: zonesReducer,
        cards: cardsReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
        saveState({
                app: store.getState().app,
                theme: store.getState().theme,
                zones: store.getState().zones,
                cards: store.getState().cards
        })
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
// @ts-ignore
window.store = store // for dev
