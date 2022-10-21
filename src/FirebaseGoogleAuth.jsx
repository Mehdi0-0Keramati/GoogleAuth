import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDIyQfO7meB-zaoFqE5CU7xwkSoJk5GxUc",
    authDomain: "authentication-63eab.firebaseapp.com",
    projectId: "authentication-63eab",
    storageBucket: "authentication-63eab.appspot.com",
    messagingSenderId: "818173581386",
    appId: "1:818173581386:web:511f234d25d2ab411c2eb3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const SignInWithGoogle = async () => {

    await signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("name", result.user.displayName)
        localStorage.setItem("email", result.user.email)
        localStorage.setItem("photo", result.user.photoURL)
        window.location.reload(0)
    }).catch((err) => {
        console.log(err);
        localStorage.clear()
    })

}