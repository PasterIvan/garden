import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { formAPI, FormContactsType, FormStateType } from "api/api";
import { CardsType } from "store/state";
import { AppThunkType } from "store/store";

const initState = {
  redZone: [""],
  orangeZone: [""],
  greenZone: [""],
  blueZone: [""],
  violetZone: [""],
  contacts: {
    name: "",
    phone: "",
    email: "",
  },
};

const slice = createSlice({
  name: "form",
  initialState: initState,
  reducers: {
    addPlantAC(state, action: PayloadAction<{ cards: CardsType }>) {
      const redPlant = action.payload.cards.red
        .filter((card) => card.isDone)
        .map((c) => c.title);
      const orangePlant = action.payload.cards.orange
        .filter((card) => card.isDone)
        .map((c) => c.title);
      const greenPlant = action.payload.cards.green
        .filter((card) => card.isDone)
        .map((c) => c.title);
      const bluePlant = action.payload.cards.blue
        .filter((card) => card.isDone)
        .map((c) => c.title);
      const violetPlant = action.payload.cards.violet
        .filter((card) => card.isDone)
        .map((c) => c.title);

      state.redZone = redPlant;
      state.orangeZone = orangePlant;
      state.greenZone = greenPlant;
      state.blueZone = bluePlant;
      state.violetZone = violetPlant;
    },
    addFormAC(state, action: PayloadAction<{ contacts: FormContactsType }>) {
      state.contacts = action.payload.contacts;
    },
    clearFormAC() {
      return initState;
    },
  },
});

export const formReducer = slice.reducer;

export const { addPlantAC, addFormAC, clearFormAC } = slice.actions;

// thunks
export const preparationFormTC =
  (contacts: FormContactsType, cards: CardsType): AppThunkType =>
  async (dispatch) => {
    dispatch(addFormAC({ contacts }));
    dispatch(addPlantAC({ cards }));
  };
export const postFormTC =
  (form: FormStateType): AppThunkType =>
  (dispatch) => {
    dispatch(formAPI.postForm(form));
  };
