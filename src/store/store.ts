import {combineReducers, createStore} from "redux";
import {themeReducer} from "../components/c2-Body/b1-Main/m3-GardenPlan/bll/themeReducer";
import {cardsReducer} from "../components/c2-Body/b1-Main/m4-Cards/bll/cardsReducer";

const reducers = combineReducers({
        theme: themeReducer,
        cards: cardsReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
