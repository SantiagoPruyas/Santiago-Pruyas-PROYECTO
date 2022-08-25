import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Config/firebase";
import firebase from "firebase/compat/app";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const suscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return suscribe;
    }, []);

    function register(user) {
        return auth.createUserWithEmailAndPassword(user.email, user.password);
    }

    async function regWithGoogle() {
        try {
            const userCredentials = await auth.signInWithPopup(
                new firebase.auth.GoogleAuthProvider
            );
            setCurrentUser(userCredentials.user);
        } catch (error) {
            console.log(error);
        }
    }

    function logIn(user){
        return auth.signInWithEmailAndPassword(user.email, user.password);
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function logOut () {
        return auth.signOut();
    }

    const value = {
        currentUser,
        register,
        regWithGoogle,
        logIn,
        resetPassword,
        logOut
    };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
} 