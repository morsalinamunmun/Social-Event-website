import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../Firebase/firebase.config'

export const AuthContext = createContext(null);
import {PropTypes} from 'prop-types'
const auth = getAuth(app);

const AuthProviders = ({children}) => {
    const [user, setUser] = useState([]);

    const createUser = (email, password) =>{
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
        })
        return()=>{
            unsubscribe();
        }
    }, [])
    const authInfo = {user, createUser, signIn, logOut}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};
AuthProviders.propTypes={
    children: PropTypes.node
}
export default AuthProviders;
