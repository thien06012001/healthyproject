import Link from 'next/link'
import React, { useRef } from 'react'
import styles from '../styles/Login.module.css'
import { auth } from '../firebase';
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth';
import Icon from '../public/assets/Logo.png'
import Head from 'next/head';
function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const router = useRouter()
    const signIn = (e: any) => {
        e.preventDefault()
        signInWithEmailAndPassword
        (
        auth, emailRef.current.value, passwordRef.current.value
        )
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        router.push('/')
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
      <Head>
        <title>Sign In</title>
        <link rel="icon" href={Icon.src} />
      </Head>
        <div className={styles.login_box}>
            <h2 className={styles.neon}>Sign In</h2>
            <form action=''>
              <div className={styles.user_box}>
                <span className={styles.user_span}></span>
                <input ref={emailRef} className={styles.user_input} type="email" name=""/>
                <label className={styles.user_label}>Email</label>
              </div>
              <div className={styles.user_box}>
                <input ref={passwordRef} className={styles.user_input} type="password" name="" />
                <label className={styles.user_label}>Password</label>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <button type='submit' onClick={signIn} className={styles.button} >
                  Sign In
                </button>
                <Link className={styles.signup_button} href={'/Signup'}>Sign Up</Link>
              </div>
            </form>
            <div className='m-auto'>
              <button onClick={() => router.push('/')} className={styles.button_homepage}>Back to HomePage</button>
            </div>
        </div>
    </div>

  
  )
}

export default Login