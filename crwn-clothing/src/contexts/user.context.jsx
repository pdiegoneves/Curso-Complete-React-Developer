import { useEffect } from "react";
import { createContext, useState } from "react";
import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUSer: null,
    setCurrentUSer: () => null,
})

export const UserProvider = ({ children }) => {
    const [currentUSer, setCurrentUSer] = useState(null)
    const value = { currentUSer, setCurrentUSer }

    signOutUser()
    
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => { console.log(user) })
        return unsubscribe
    }, [])


    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}