import { UPDATE_USER, GET_USER} from "./actionTypes";

export function updateUserAction(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}
export function getUserAction(user) {
    return {
        type: GET_USER,
        payload: user
    }
}
