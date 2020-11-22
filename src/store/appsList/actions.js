import {SET_APPS, SET_STATS, TOGGLE_LOADER} from "./reducer";
import {getAppsReq} from "../../api/requests";

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

export const getAppsThunk = () => async (dispatch) => {
    try{
        const res = await getAppsReq();
        dispatch(setAppsCreator(res));
        dispatch(toggleLoaderCreator(true));
    } catch (err){
        console.log(err);
    }
}