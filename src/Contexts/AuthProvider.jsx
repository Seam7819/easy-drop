import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContexts } from './AuthContexts';
import { auth } from '../Firebase/Firebase.init';
import { useEffect, useState } from 'react';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)


    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        }) 
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        createUser,
        loading,
        signIn,
        logOut,
        googleLogIn,
        user
    }
    return (
        <AuthContexts value={authInfo}>
            {children}
        </AuthContexts>
    );
};

export default AuthProvider;