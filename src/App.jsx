import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Account } from "./components/Account/Account";
import { Chat } from "./components/Chat/Chat";
import { authSelector } from "./store/login/selectors";
import { getUserThunk } from "./store/user/thunk";
import './index.scss';
import { getAuthThunk } from "./store/login/thunk";
import { Auth } from "./components/Auth/Auth";

export function App() {
    const dispatch = useDispatch();
    const auth = useSelector(authSelector);
    console.log(auth)
    
    useEffect(() => {
        dispatch(getAuthThunk());
            
    }, []);

    return (
        Object.keys(auth).length && <Auth auth={auth} />
    );
}


