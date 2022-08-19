import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { cards } from "../store/state";

import { clearFormAC } from "./formReduser";

const slice = createSlice({
  name: "cards",
  initialState: cards,
  reducers: {
    choosePlantAC(
      state,
      action: PayloadAction<{ idZone: string; idCard: string }>
    ) {
      state[action.payload.idZone] = state[action.payload.idZone].map((card) =>
        card.idCard === action.payload.idCard
          ? {
              ...card,
              isDone: !card.isDone,
            }
          : card
      );
    },
  },
  extraReducers: {
    [clearFormAC.type]: () => cards,
  },
});

export const cardsReducer = slice.reducer;

export const { choosePlantAC } = slice.actions;
//
//     case 'CLEAR-FORM':
//       return (state = cards);
//
