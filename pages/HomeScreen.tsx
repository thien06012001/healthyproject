import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import { selectUser } from '../slices/userSlice'
function HomeScreen() {
    const user = useSelector(selectUser)
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