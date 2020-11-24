export const SET_PAGE = 'appsCategories/SET_PAGE';

const initialState = {
    selectedPage: 'All'
}

export const appsCategoriesReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PAGE:{
            return {...state, selectedPage: action.payload}
        }
        default:
            return state;
    }
}