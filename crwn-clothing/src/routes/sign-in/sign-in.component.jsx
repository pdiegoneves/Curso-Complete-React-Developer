import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

const SignIn = () => {

  const logGoggleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await creatUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoggleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn
