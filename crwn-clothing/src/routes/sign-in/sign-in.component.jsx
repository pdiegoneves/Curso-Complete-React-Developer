import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoggleUser = async () => {
    const response = await signInWithGooglePopup()
    console.log(response)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoggleUser}>
        Sign in with Google Popup
      </button>
    </div>
  )
}

export default SignIn