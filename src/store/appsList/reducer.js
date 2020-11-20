export const SET_STATS = 'appsList/SET_STATS';
export const SET_APPS = 'appsList/SET_APPS';
export const TOGGLE_LOADER = 'appsList/TOGGLE_LOADER';

const initialState = {
    isLoading: false,
    page: 0,
    count: 2,
    apps: [
        {
            name: "App",
            genre: "Test",
            img: "https://app2top.ru/wp-content/uploads/2019/05/PUBG-MOBILE-0.4.0-1024x725.jpg",
            description: "App description test text test text App description test text test text App description test text test text"
        }
    ]
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
            return {...state, isLoading: action.payload}
        }
        default:
            return state;
    }
}