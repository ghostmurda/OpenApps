import {SET_PAGE} from "./reducer";

export const setPageCreator = (payload) => {
    return {
        type: SET_PAGE,
        payload
    }
}