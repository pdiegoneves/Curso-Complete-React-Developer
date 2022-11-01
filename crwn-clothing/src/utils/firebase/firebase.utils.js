import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDcUYmZYghTBA7Sp4Bd-v56Vs9ePr8vawQ",
    authDomain: "crwn-clothing-db-ca40c.firebaseapp.com",
    projectId: "crwn-clothing-db-ca40c",
    storageBucket: "crwn-clothing-db-ca40c.appspot.com",
    messagingSenderId: "1012124737535",
    appId: "1:1012124737535:web:8efd5047c50a7dd97551ca"
  };
  
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)