import {SET_AUTH, SET_USER_INFO, TOGGLE_LOADER} from "./reducer";

export const toggleLoaderCreator = (payload) => {
    return {
        type: TOGGLE_LOADER,
        payload
    }
}

export const setAuthCreator = (payload) => {
    return {
        type: SET_AUTH,
        payload
    }
}

export const setUserInfoCreator = (payload) => {
    return {
        type: SET_USER_INFO,
        payload
    }
}