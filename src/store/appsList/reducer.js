export const SET_STATS = 'appsList/SET_STATS';
export const SET_APPS = 'appsList/SET_APPS';
export const TOGGLE_LOADER = 'appsList/TOGGLE_LOADER';

const initialState = {
    isLoaded: false,
    page: 0,
    count: 2,
    apps: []
}
export const appsListReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_STATS:{
            return {...state, page: action.payload.page, count: action.payload.count}
        }
        case SET_APPS:{
            return {...state, apps: action.payload}
        }
        case TOGGLE_LOADER:{
            return {...state, isLoaded: action.payload}
        }
        default:
            return state;
    }
}