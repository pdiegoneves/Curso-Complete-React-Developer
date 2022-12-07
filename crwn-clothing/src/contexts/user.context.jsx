import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser, creatUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    setCurrentUSer: () => null,
    currentUSer: null,
})

export const UserProvider = ({ children }) => {
    const [currentUSer, setCurrentUSer] = useState(null)
    const value = { currentUSer, setCurrentUSer }

    signOutUser()
    
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                creatUserDocumentFromAuth(user)
            }
            setCurrentUSer(user)
        })
        return unsubscribe
    }, [])


    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}