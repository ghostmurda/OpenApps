import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./auth/reducer";
import {appsListReducer} from "./appsList/reducer";
import {appsCategoriesReducer} from "./appsCategories/reducer";

const reducers = combineReducers({
    authState: authReducer,
    appsListState: appsListReducer,
    appsCategoriesState: appsCategoriesReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;