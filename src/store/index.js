import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./login/reducer";
import { userReducer } from "./user/reducer";


const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));