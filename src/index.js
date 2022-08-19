import { Provider } from 'react-redux';
import { store } from './store';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const auth = getAuth(
    initializeApp(
        {
            apiKey: "AIzaSyBuHB_5a8PIGWq69nWWgV0EDecSy4QkM5k",
            authDomain: "chat-af2fe.firebaseapp.com",
            projectId: "chat-af2fe",
            storageBucket: "chat-af2fe.appspot.com",
            messagingSenderId: "275815837452",
            appId: "1:275815837452:web:ffcc4fc33db08b9913a329"
        }
    )
)



const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
         <Provider store={ store }>
            
            <App />
        </Provider>
    </BrowserRouter>
);
 