import { GET_AUTH } from "./actionTypes";

export function getAuthAction(auth) {
    return {
        type: GET_AUTH,
        payload: auth
    }
}
