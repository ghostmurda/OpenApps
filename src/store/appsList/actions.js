import {SET_APPS, SET_STATS, TOGGLE_LOADER} from "./reducer";

export const toggleLoaderCreator = (payload) => {
    return {
        type: TOGGLE_LOADER,
        payload
    }
}

export const setStatsCreator = (payload) => {
    return {
        type: SET_STATS,
        payload
    }
}

export const setAppsCreator = (payload) => {
    return {
        type: SET_APPS,
        payload
    }
}