import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { AuthContexts } from './AuthContexts';
import { auth } from '../Firebase/Firebase.init';
import { useEffect, useState } from 'react';


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
        user
    }
    return (
        <AuthContexts value={authInfo}>
            {children}
        </AuthContexts>
    );
};

export default AuthProvider;