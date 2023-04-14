// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyB2J4pmZnD6WacSqkQKILgxx52IFwWsSLI",
  authDomain: "electron-react-demo-bf424.firebaseapp.com",
  databaseURL: "https://electron-react-demo-bf424-default-rtdb.firebaseio.com",
  projectId: "electron-react-demo-bf424",
  storageBucket: "electron-react-demo-bf424.appspot.com",
  messagingSenderId: "918572508735",
  appId: "1:918572508735:web:174b4c2cf5dc879b4e7a8a",
  measurementId: "G-ZTXMF61WKQ"
};

// const authToken=snapshot.val()

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()

// export const signInWithGoogle=()=>{
//     signInWithPopup(auth,provider).then((result)=>{
//         const navigate=useNavigate()
//         console.log(result);
//         const check=result.user.emailVerified;
//         localStorage.setItem("verification",check);
//         console.log(check);
//         navigate('/home')
//     }).catch((error)=>{
//         console.log(error);
//     }); 
// }