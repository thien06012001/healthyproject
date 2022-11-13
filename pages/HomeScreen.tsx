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
        <h2>{user_email.error}</h2>\
        <h2>{user_displayname.error}</h2>
        <h2>{user_uid.error}</h2>
        <Link href={'/BMI'}>BMI</Link>
        <button onClick={() => auth.signOut()}>Logout</button>
    </div>
    )
}

export default HomeScreen