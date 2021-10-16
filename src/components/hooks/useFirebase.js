import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import init from '../../FireBase/Firebase.init';

init();
let useFirebase = () => {
    let [user, setUser] = useState({});
    let [error, setError] = useState('');
    const Googleprovider = new GoogleAuthProvider();
    let auth = getAuth();
    let SignInWithGoogle = () => {
        return signInWithPopup(auth,Googleprovider)
            
    }
    let logOut = () => {
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError(error)
          });
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    },[])
    return {
        user,
        SignInWithGoogle,
        logOut,
        error
    }
}

export default useFirebase;