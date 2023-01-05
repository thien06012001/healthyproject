import React, { useState } from "react";
import styles from "../styles/BMI.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Icon from "../public/assets/Logo.png";
function BMI() {
  const [weight, setWeight] = useState<number | any>(0);
  const [height, setHeight] = useState<number | any>(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const [weightCategory, setWeightCategory] = useState(null)
  let calcBmi = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));

      // Logic for Message
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("Your are in healthy weight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are overweight");
      } else if (bmi >= 30) {
        setMessage("You are obese");
      }

      if (bmi < 18.5) {
        setWeightCategory("UnderWeight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setWeightCategory("NormalWeight");
      } else if (bmi >= 25 && bmi < 30) {
        setWeightCategory("OverWeight");
      } else if (bmi >= 30) {
        setWeightCategory("Obese");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };
  return (
    <div className={styles.body}>
      <Head>
        <title>BMI calculator</title>
        <link rel="icon" href={Icon.src} />
      </Head>
      <div className={styles.container}>
        <p className={styles.title}>BMI calculator</p>
        <form onSubmit={calcBmi} className={styles.wrapper}>
          <div className={styles.height_wrap}>
            <input
              onChange={(event) => setHeight(event.target.value)}
              autoFocus={true}
              type="text"
              placeholder="Height(in meter)"
              className={styles.input}
            />
          </div>
          <div className={styles.height_wrap}>
            <input
              onChange={(event) => setWeight(event.target.value)}
              autoFocus={true}
              type="text"
              placeholder="Weight(in kg)"
              className={styles.input}
            />
          </div>
          <p className="text-center font-bold">Your BMI is: {bmi}</p>
          <p className="text-center font-bold">{message}</p>
          {weightCategory != null ? <button className={styles.button} onClick={() => router.push(`/Category/${weightCategory}/AllCategory`)}>{weightCategory}</button> : <></>}
          <div className="m-auto flex flex-col items-center justify-center uppercase">
            <button type="submit" className={styles.button}>
              Calculate
            </button>
            <button type="submit" onClick={reload} className={styles.button}>
              Reload
            </button>
          </div>
        </form>
        <div className="m-auto flex items-center justify-center uppercase">
          <button onClick={() => router.push("/")} className={styles.button}>
            Back to HomePage
          </button>
        </div>
      </div>
    </div>
  );
}

export default BMI;
