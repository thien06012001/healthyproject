import Link from 'next/link'
import React, { useRef } from 'react'
import styles from '../styles/Login.module.css'
import { auth } from '../firebase';
import { useRouter } from 'next/router'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signIn = (e: any) => {
        e.preventDefault()
        signInWithEmailAndPassword
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
  }
    return (
    <div className={styles.login_body}>
        <div className={styles.login_box}>
            <h2 className={styles.neon}>Sign In</h2>
            <form action=''>
              <div className={styles.user_box}>
                <input ref={emailRef} className={styles.user_input} type="email" name=""/>
                <label className={styles.user_label}>Email</label>
              </div>
              <div className={styles.user_box}>
                <input ref={passwordRef} className={styles.user_input} type="password" name="" />
                <label className={styles.user_label}>Password</label>
              </div>
              <button type='submit' onClick={signIn} >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign In
              </button>
            </form>
            <div className='p-5'>
                <p className='text-white'>Don't have an account yet? <Link className={styles.signup_button} href={'/Signup'}>Sign Up</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login