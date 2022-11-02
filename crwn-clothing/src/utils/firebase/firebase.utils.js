import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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

const db = getFirestore()

export const creatUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}