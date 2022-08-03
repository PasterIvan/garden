import {applyMiddleware, combineReducers, createStore} from "redux";
import {zonesReducer} from "../bll/zonesReducer";
import {cardsReducer} from "../bll/cardsReducer";
import {themeReducer} from "../bll/themeReducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
        theme: themeReducer,
        zones: zonesReducer,
        cards: cardsReducer
})

let preloadedState;
const persistedTodosString = localStorage.getItem('app-state')
if (persistedTodosString) {
        preloadedState =  JSON.parse(persistedTodosString)
}

export const store = createStore(reducers, preloadedState, applyMiddleware(thunk))

store.subscribe(()=>{
        localStorage.setItem('app-state', JSON.stringify(store.getState()))
})

export type AppStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
