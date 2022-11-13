import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import { selectUser } from '../slices/userSlice'
function HomeScreen() {
    const user = auth.currentUser;
    if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
    }
    // else {
    //     const displayName = user.displayName;
    //     const email = user.email;

    // // The user's ID, unique to the Firebase project. Do NOT use
    // // this value to authenticate with your backend server, if
    // // you have one. Use User.getToken() instead.
    //     const uid = user.uid;
    // }
    return (
    <div>
        <h1>Welcome to our page</h1>
        <h2>{user.email}</h2>\
        <h2>{user.displayName}</h2>
        <h2>{user.uid}</h2>
        <button onClick={() => auth.signOut()}>Logout</button>
    </div>
    )
}

export default HomeScreen