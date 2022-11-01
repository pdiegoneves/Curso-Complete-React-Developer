import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoggleUser = async () => {
    const response = await signInWithGooglePop()
    console.log(response)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button>
        Sign in with Google Popup
      </button>
    </div>
  )
}

export default SignIn