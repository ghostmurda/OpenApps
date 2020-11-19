import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./auth/reducer";

const reducers = combineReducers({
    authState: authReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;