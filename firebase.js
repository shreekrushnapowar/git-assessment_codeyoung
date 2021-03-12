import firebase from "firebase/app"
import "firebase/auth"

const app=firebase.initializeApp({
    apiKey: "AIzaSyCj6yta_dsTfF9xiC-dMEkg5ATuoGlkdXU",
    authDomain: "auth-developement-d084b.firebaseapp.com",
    projectId: "auth-developement-d084b",
    storageBucket: "auth-developement-d084b.appspot.com",
    messagingSenderId: "483040973739",
    appId: "1:483040973739:web:eb223321d6a8515cc8b8ee"
  })
export const auth=app.auth()
export default auth