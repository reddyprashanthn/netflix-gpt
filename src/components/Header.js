import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch();

  useEffect ( () => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    //UnSubscribe when the component unmounts
    return () => unSubscribe();
  },[])


  const handleSignOut = () =>{
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error")
    });

  }
  return (
    <div className="absolute px-2 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
        <img className="w-44" 
        src= {LOGO_URL}
        alt = "logo"
        />
        {user && (<div className="flex p-4">
          <img 
          className="w-16 h-16 p-1"
          alt = "user-icon"
          src= {user?.photoURL}
          />
          <button className="text-white font-bold" onClick={handleSignOut}>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header
