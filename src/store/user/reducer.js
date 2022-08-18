import { GET_USER, UPDATE_USER} from "./actionTypes";

const initialState = {};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return action.payload;
        case UPDATE_USER:
            return action.payload;
        default:
            return state;
    }
}

 