import './index.css'
import { FcGoogle } from "react-icons/fc"
import { auth, SignInWithGoogle } from "./FirebaseGoogleAuth"
import { signOut } from 'firebase/auth'

const logout = async () => {
  await signOut(auth)
  localStorage.clear()
  window.location.reload(0)
}
const App = () => {
  return (
    <>
      {
        localStorage.getItem("photo") ?
          <>
            <h1> {localStorage.getItem("name")}</h1>
            <h3>{localStorage.getItem("email")} </h3>
            <img alt="emailpicture" src={localStorage.getItem('photo')} />
            <button className='signOut' onClick={logout}>Sign Out</button>
          </>
          :
          <div className="boxButton">
            <span className="icon"><FcGoogle /></span>
            <button onClick={() => SignInWithGoogle()}>Sign in with Google</button>
          </div>
      }
    </>
  )
}

export default App