import Link from "next/link";
import React, { useRef } from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";
import Icon from "../public/assets/Logo.png";
import Head from "next/head";

function Signup() {
  const emailRef = useRef(null);
  const userRef = useRef(null);
  const passwordRef = useRef(null);
  const [signup, setSignup] = useState(false);
  const router = useRouter();
  const register = (e: any) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  return (
    <div className={styles.login_body}>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href={Icon.src} />
      </Head>
      <div className={styles.login_box}>
        <h2 className={styles.neon}>Sign Up</h2>
        <form action="">
          <div className={styles.user_box}>
            <input
              ref={emailRef}
              className={styles.user_input}
              type="email"
              name=""
            />
            <label className={styles.user_label}>Email</label>
          </div>
          <div className={styles.user_box}>
            <input
              ref={passwordRef}
              className={styles.user_input}
              type="password"
              name=""
            />
            <label className={styles.user_label}>Password</label>
          </div>
          <div className="flex flex-row justify-center items-center">
            <button type="submit" onClick={register} className={styles.button}>
              Sign Up
            </button>
            <Link className={styles.signup_button} href={"/HomePage"}>
              Sign In
            </Link>
          </div>
        </form>
        <div className="m-auto">
          <button
            onClick={() => router.push("/")}
            className={styles.button_homepage}
          >
            Back to HomePage
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
