"use client";
import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import styles from '../styles/BMI.module.css'
import { CalculatorIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
function BMI() {
    const [weight, setWeight] = useState<number | any>(0)
    const [height, setHeight] = useState<number | any>(0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState(0)
    const router = useRouter()

  let calcBmi = (event : any) => {
    event.preventDefault()
    if(weight === 0 || height === 0){
      alert('Please enter a valid weight and height')
    }
    else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))
    }
  }
    return (
      <div className={styles.body}>
          <div className={styles.container}>
            <p className={styles.title}>BMI calculator</p>
            <form onSubmit={calcBmi} className={styles.wrapper}>
              <div className={styles.height_wrap}>
                <input onChange={(event) => setHeight(event.target.value)} autoFocus={true} type="text" placeholder='Height(in meter)' className={styles.input}/>   
              </div>
              <div className={styles.height_wrap}>
                <input onChange={(event) => setWeight(event.target.value)} autoFocus={true} type="text" placeholder='Weight(in kg)' className={styles.input}/>
              </div>
              <p className='text-center'>Your BMI is: {bmi}</p>
              <div className='m-auto'>
                <button type='submit' className={styles.button}>Calculate</button>
              </div>       
            </form>
            <div className='m-auto'>
              <button onClick={() => router.push('/')} className={styles.button}>Back to HomePage</button>
            </div>
          </div>
      </div>

  )
}

export default BMI