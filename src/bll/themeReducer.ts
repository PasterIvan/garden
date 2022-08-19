import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ZonesType } from "../store/state";

const initState = {
  startTheme: "green",
};

const slice = createSlice({
  name: "theme",
  initialState: initState,
  reducers: {
    changeThemeAC(state, action: PayloadAction<{ theme: ZonesType }>) {
      state.startTheme = action.payload.theme;
    },
  },
});

export const themeReducer = slice.reducer;

export const { changeThemeAC } = slice.actions;
