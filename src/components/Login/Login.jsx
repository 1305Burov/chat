import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../store/login/selectors";
import { getAuthThunk } from "../../store/login/thunk";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const auth = useSelector(authSelector);
    const dispatch = useDispatch();
        
    function login() {
        const provider = new GoogleAuthProvider();
        const {user} = signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }

    return (
        <button onClick={login}>
            Sign In With Google
        </button>
    );
}

export default Login;
