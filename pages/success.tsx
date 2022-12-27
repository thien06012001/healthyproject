import React from "react";
import Navbar from "../components/Navbar";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";
import Icon from "../public/assets/Logo.png";
import Head from "next/head";
function success() {
  const router = useRouter();
  return (
    <div className="bg-lime-50 h-screen">
      <Head>
        <title>Success</title>
        <link rel="icon" href={Icon.src} />
      </Head>
      <Navbar />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you, your order has been confirmed
            </h1>
          </div>
          <p>
            Thank your for shopping with us. We will send a confirmation once
            the item has shipped, if you would like to check the status of
            orders please press the link below.
          </p>
          <button onClick={() => router.push("/")} className={styles.button}>
            Go back to HomePage
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;
