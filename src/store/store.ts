import {combineReducers, createStore} from "redux";
import {themeReducer} from "../components/c2-Body/b1-Main/m3-GardenPlan/bll/themeReducer";

const reducers = combineReducers({
        theme: themeReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
