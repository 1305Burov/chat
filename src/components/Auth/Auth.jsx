import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { getUserThunk } from '../../store/user/thunk';
import { signOut } from "firebase/auth";
import { Account } from '../Account/Account';
import { Chat } from '../Chat/Chat';
import Login from '../Login/Login';
export const Auth = ({auth}) => {
    const dispatch = useDispatch();
    const [user] = useAuthState(auth);
    
    useEffect(() => {
        if (user) {
            dispatch(getUserThunk(user));
        }
    }, [user]);
    
    if (!user) {
        return (
            <main className="main"> 
                <div className="container">
                    <div className="main__wrapper">
                        <Login />
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="main"> 
            <div className="container">
                <button className='out' onClick={() => {signOut(auth)}}>Sign out</button>
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
