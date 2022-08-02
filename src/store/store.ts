import {combineReducers, createStore} from "redux";
import {zonesReducer} from "../bll/zonesReducer";
import {cardsReducer} from "../bll/cardsReducer";
import {themeReducer} from "../bll/themeReducer";

const reducers = combineReducers({
        theme: themeReducer,
        zones: zonesReducer,
        cards: cardsReducer
})

export const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
