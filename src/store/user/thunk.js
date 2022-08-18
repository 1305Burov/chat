import { getUser } from "../../getUser";
import { updateUserAction, getUserAction } from "./actionCreators";

export function getUserThunk() {
    return (dispatch, getState) => {
        dispatch(getUserAction(getUser()))
    }
}

export function updateUserThunk(user) {
    return (dispatch, getState) => {
        dispatch(updateUserAction(user))
    }
}