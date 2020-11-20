import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./auth/reducer";
import {appsListReducer} from "./appsList/reducer";

const reducers = combineReducers({
    authState: authReducer,
    appsListState: appsListReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;