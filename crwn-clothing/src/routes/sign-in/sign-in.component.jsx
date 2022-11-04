import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'

const SignIn = () => {

  const logGoggleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await creatUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoggleUser}>Sign in with Google Popup</button>
    <SignUpForm />
    </div>
  )
}

export default SignIn
