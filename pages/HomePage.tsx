import React from 'react'
import { useEffect } from 'react'
import {auth} from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Login from './Login'
import HomeScreen from './HomeScreen'
import { login, logout, selectUser } from '../slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
function HomePage() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          console.log(userAuth)
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
          }))
        }
        else{
          dispatch(logout())
        }
      })
  
      return unsubscribe
    }, [dispatch])
    return (
     
    <div>
        {!user ? (
        <Login />
      ) : (<HomeScreen/>) }
    </div>
  )
}

export default HomePage