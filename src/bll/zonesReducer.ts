import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { zones, ZonesType } from "store/state";

const slice = createSlice({
  name: "zones",
  initialState: zones,
  reducers: {
    setZoneAC(state, action: PayloadAction<{ zone: ZonesType }>) {
      state.filter((zone) => zone.idZone === action.payload.zone);
    },
  },
});

export const zonesReducer = slice.reducer;

export const { setZoneAC } = slice.actions;
