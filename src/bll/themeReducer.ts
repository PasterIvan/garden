import {ZonesType} from "../store/state";

type ChangeThemeAT = ReturnType<typeof changeThemeAC>

type InitialStateType = typeof initState

const initState = {
    startTheme: 'green'
};

export const themeReducer = (state= initState, action: ChangeThemeAT): InitialStateType => {
    switch (action.type) {
        case "CHANGE-ZONE": {
            return {...state, startTheme: action.theme}
        }
        default:
            return state;
    }
};

//AC
export const changeThemeAC = (theme: ZonesType) => {
    return {type: "CHANGE-ZONE", theme} as const
};