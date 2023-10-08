import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../Firebase/firebase.config'
export const AuthContext = createContext(null);
import {PropTypes} from 'prop-types'
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        signOut();
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return()=>{
            unsubscribe();
        }
    }, [])
    const authInfo = {user, createUser, signIn, logOut}
    return (
        <AuthProvider.Provider value={authInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

AuthProvider.propTypes={
    children: PropTypes.node
}
export default AuthProvider;