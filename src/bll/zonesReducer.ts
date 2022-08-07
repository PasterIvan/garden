import {zones, ZoneType} from "../store/state";

type SetZoneAT = ReturnType<typeof setZonesAC>

type ZoneActionsType =  SetZoneAT

type InitialStateType = typeof initState

const initState: Array<ZoneType> = zones;

export const zonesReducer = (state: Array<ZoneType>= initState, action: ZoneActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET-ZONES':
            return action.zones.map(zone => ({...zone}))
        default:
            return state;
    }
};

//AC
export const setZonesAC = (zones: Array<ZoneType>) => ({type: 'SET-ZONES', zones} as const);
