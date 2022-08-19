import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";

import { cardsReducer } from "bll/cardsReducer";
import { formReducer } from "bll/formReduser";
import { themeReducer } from "bll/themeReducer";
import { zonesReducer } from "bll/zonesReducer";
import { loadState, saveState } from "utils/localStorage-utils";

const rootReducer = combineReducers({
  theme: themeReducer,
  zones: zonesReducer,
  cards: cardsReducer,
  form: formReducer,
  // aboutUs: aboutUsReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunkMiddleware),
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState({
    theme: store.getState().theme,
    zones: store.getState().zones,
    cards: store.getState().cards,
    form: store.getState().form,
    // aboutUs: store.getState().aboutUs
  });
});

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  ActionsType
>;

export type AppDispatch = ThunkDispatch<AppStateType, unknown, ActionsType>;

export type ActionsType = any;
export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;
// @ts-ignore
window.store = store; // for dev
