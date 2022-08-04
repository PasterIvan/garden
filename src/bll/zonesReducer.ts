import {zones, ZonesType, ZoneType} from "../store/state";

type ChangeZoneAT = ReturnType<typeof changeThemeAC>

type ZoneActionsType =  ChangeZoneAT

type InitialStateType = typeof initState

const initState: Array<ZoneType> = zones;

export const zonesReducer = (state: Array<ZoneType>= initState, action: ZoneActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
};

//AC
export const changeThemeAC = (theme: ZonesType) => {
    return {type: "CHANGE-ZONE", theme} as const
};
