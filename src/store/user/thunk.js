import { getUser } from "../../getUser";
import { updateUserAction, getUserAction } from "./actionCreators";

export function getUserThunk(user) {
    return (dispatch, getState) => {
        dispatch(getUserAction(getUser(user)))
    }
}

export function updateUserThunk(user) {
    return (dispatch, getState) => {
        dispatch(updateUserAction(user))
    }
}