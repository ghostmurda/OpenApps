export const TOGGLE_LOADER = 'auth/TOGGLE_LOADER';
export const SET_AUTH = 'auth/SET_AUTH';
export const SET_USER_INFO = 'auth/SET_USER_INFO';

const initialState = {
    auth: false,
    isLoading: false,
    userInfo: {
        displayName: null,
        photoUrl: null,
        phoneNumber: null,
        email: null,
        uid: null
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_LOADER:{
            return {...state, isLoading: action.payload}
        }
        case SET_AUTH:{
            return {...state, auth: action.payload}
        }
        case SET_USER_INFO:{
            return {...state, userInfo: action.payload}
        }
        default:
            return state;
    }
}