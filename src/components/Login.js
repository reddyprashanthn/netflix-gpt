import { useRef, useState } from "react"
import Header from "./Header"
import {checkvalidation} from "../utils/validate"
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from '../utils/constant'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  

  const handleFormValidation = () => {
    const validateResponse = checkvalidation(name, email.current.value, password.current.value);
    setErrorMessage(validateResponse);
    if(validateResponse) return;

    if(!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/207966478?v=4"
          }).then(() => {
            const {uid,email,displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL})); 
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });

    }

  }
  
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/af2fac72-d956-4952-8686-4d45d359d78c/web/IN-en-20250526-TRIFECTA-perspective_5db3e163-56f7-47c7-9a65-b79b9d76bf24_large.jpg" 
        alt = "backgroundpage"/>
    </div>
    <form 
      onSubmit={(e)=> e.preventDefault()}
      className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
      <h1 
        className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>
      {!isSignInForm && <input
        ref = {name}
        type="text" 
        placeholder="Full Name" 
        className="p-4 my-4 w-full rounded-lg bg-gray-900"
      />}
      <input 
        ref = {email}
        type="text" 
        placeholder="Email" 
        className="p-4 my-4 w-full rounded-lg bg-gray-900"
      />
      <input 
      ref= {password}
        type="password" 
        placeholder="Password" 
        className="p-4 my-4 w-full rounded-lg bg-gray-900"
      />
      <p
        className="text-red-500 font-bold text-lg py-2">
        {errorMessage}
      </p>
      <button 
        className="p-4 my-8 w-full bg-red-700 rounded-lg"
        onClick={handleFormValidation}>
          {isSignInForm ? "Sign In" : "Sign Up"}
      </button>
      <p 
        className="py-4 cursor-pointer" 
        onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix?Sign up now." : "Already registered user Sign In Now"}
      </p>
      </form>
    </div>
  )
}

export default Login
