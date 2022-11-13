import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../firebase'
import { selectUser } from '../slices/userSlice'
function HomeScreen() {
    const user = useSelector(selectUser)
    const [user_email, setUserEmail] = useState(
        {
            have_email: user.email,
            error: 'error'
        }
    )

    const checkEmail = () =>{
        setUserEmail(!user ? user_email.have_email : user_email.error )
    }
    const [user_displayname, setUserDisplayName] = useState(
        {
            have_displayname: user.displayName,
            error: 'error'
        }
    )

    const [user_uid, setUserUid] = useState(
        {
            user_uid: user.displayname,
            error: 'error'
        }
    )
    return (
    <div>
        <h1>Welcome to our page</h1>
        <label htmlFor=""></label>
        <h2>{user.email}</h2>\
        <h2>{user.displayName}</h2>
        <h2>{user.uid}</h2>
        <Link href={'/BMI'}>BMI</Link>
        <button onClick={() => auth.signOut()}>Logout</button>
        <button onClick={checkEmail}>Show</button>
    </div>
    )
}

export default HomeScreen