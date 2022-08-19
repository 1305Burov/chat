import { auth } from "../..";
import { getAuthAction } from "./actionCreators";

export function getAuthThunk() {
    return (dispatch, getState) => {
        dispatch(getAuthAction(auth))
    }
}
