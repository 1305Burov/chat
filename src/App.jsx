import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Account } from "./components/Account/Account";
import { Chat } from "./components/Chat/Chat";
import './index.scss';
import { getUserThunk } from "./store/user/thunk";

export function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUserThunk());
    }, []);

    return (
        <main className="main"> 
            <div className="container">
                <div className="main__wrapper">
                    <Account />
                    <Routes>
                        <Route path="chat/:id" element={ <Chat /> } ></Route>
                        <Route path="/" element={ <div className="choose-chat"><span>Choose or start new chat</span></div> }></Route>
                    </Routes>
                </div>
            </div>
        </main>
    );
}


