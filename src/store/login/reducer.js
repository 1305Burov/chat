import { GET_AUTH } from "./actionTypes";

const initialState = {};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case GET_AUTH:
            return action.payload;
        
        default:
            return state;
    }
}

 