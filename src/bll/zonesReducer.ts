import {ZonesType, ZoneType} from "../store/state";

type ChangeZoneAT = ReturnType<typeof changeThemeAC>

type ZoneActionsType =  ChangeZoneAT

type InitialStateType = typeof initState

const initState: Array<ZoneType> = [];

export const zonesReducer = (state: Array<ZoneType>= initState, action: ZoneActionsType): InitialStateType => {
    switch (action.type) {
        // case "CHANGE-ZONE": {
        //     return {...state, startTheme: action.theme}
        // }
        default:
            return state;
    }
};

//AC
export const changeThemeAC = (theme: ZonesType) => {
    return {type: "CHANGE-ZONE", theme} as const
};
