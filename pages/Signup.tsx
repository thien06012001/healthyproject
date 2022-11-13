import Link from 'next/link'
import React, { useRef } from 'react'
import { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/Login.module.css'
import { useRouter } from 'next/router';

function Signup() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [signup, setSignup] = useState(false)
    const router = useRouter()
    const register = (e: any) => {
      e.preventDefault()
      createUserWithEmailAndPassword
      (
        auth, emailRef.current.value, passwordRef.current.value
      )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
      router.push('/HomePage')
    };
    
    return (
    <div className={styles.login_body}>
        <div className={styles.login_box}>
            <h2>Sign Up</h2>
            <form action=''>
              <div className={styles.user_box}>
                <input ref={emailRef} className={styles.user_input} type="text" name=""/>
                <label className={styles.user_label}>Email</label>
              </div>
              <div className={styles.user_box}>
                <input ref={passwordRef} className={styles.user_input} type="password" name="" />
                <label className={styles.user_label}>Password</label>
              </div>
              <button type='submit' onClick={register} className='button' >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign Up
              </button>
            </form>
            <div className='p-5'>
                <p className='text-white'>Already have an account? <Link className={styles.signup_button} href={'/HomePage'}>Sign In</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Signup