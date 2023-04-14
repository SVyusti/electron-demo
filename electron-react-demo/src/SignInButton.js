// import React from "react";
// import { v4 } from "uuid";
// import firebase from "firebase";

// const SignInButton = () => {

//   const handleSignIn = () => {
//     // generating uuid
//     const uuid = v4();

//     // grabbing reference to the firebase realtime db document for the uuid
//     const oneTimeUuidDocRef = firebase.database().ref(`onetime-uuids/${uuid}`);

//     // applying listener to the reference document
//     oneTimeUuidDocRef.on("value", async (snapshot) => {
//       // getting the custom firebase token
//       const authToken = snapshot.val();

//       // use this credential accordingly
//       const credential = await firebase.auth().signInWithCustomToken(authToken);

//       /*
//         Your rest auth code
//       */
//     });

//     // invoking main process method to open user's default browser
//     window.electronApi.ipcRenderer.invoke("initiate-login", uuid);
//   };

//   return (
//     <div>
//       <button onClick={handleSignIn}>Initiate Google Sign In</button>
//     </div>
//   );
// };
// export default SignInButton;

import React,{useState} from 'react'
import { Auth } from 'firebase/auth'

    function SignInButton() {
        const [username,setUsername]=useState('')
        const [password,setPassword]=useState('')

    const handleName=(e)=>{
        setUsername(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }

    const sendData=async(e)=>{
        e.preventDefault();
        const res=await fetch("https://electron-react-demo-bf424-default-rtdb.firebaseio.com/credentials.json",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                username,
                password
            })
        })

        if(res){
            setUsername('')
            setPassword('')
            alert("data stored")
        }
    }

    const logout=()=>{
        localStorage.clear()
        window.sessionStorage.clear()
        caches.keys().then((names) => {
            names.forEach((name) => {
              caches.delete(name);
            });
          });
        alert('Complete Cache Cleared')
        window.location.reload()
    }
  return (
    <div>
        {/* <form>
            <label for="fname">First name:</label><br>
            <input type="text" id="fname" name="fname" value="John"><br>
            <label for="lname">Last name:</label><br>
            <input type="text" id="lname" name="lname" value="Doe"><br><br>
            <input type="submit" value="Submit">
        </form>  */}
        <form onSubmit={sendData}>
            <div>
            <label>Username</label>
            </div>
            <div>
            <input type="text" onChange={handleName}></input>
            </div>
            <div>
            <label>Password</label>
            </div>
            <div>
            <input type="text" onChange={handlePassword}></input>
            </div>
            <input type="submit" value="submit"></input>
        </form>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default SignInButton

