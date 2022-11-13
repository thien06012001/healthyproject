"use client";
import React, { useState } from 'react'
import styles from '../styles/Form.module.css'
function BMI() {
    const [weight, setWeight] = useState<number | any>(0)
    const [height, setHeight] = useState<number | any>(0)
    const [bmi, setBmi] = useState('')
    const [message, setMessage] = useState(0)

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
    <div className={styles.bmi}>
        <h2 className='font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl'>
        CHECK <span className='glow'>YOUR BMI</span> FIRST
      </h2>
      <h3 className='text-secondary font-raleway text-2xl font-bold uppercase tracking-wide mb-14 md:text-base md:px-4 md:text-center'>
        We need your BMI so that we can give you the exact diet
      </h3>
      <div className='flex flex-col justify-between items-center w-full md:items-center'>
        <form className='flex w-full justify-center md:flex-col md:w-5/6' action="" onSubmit={calcBmi}>
          <input
           autoFocus={true}
           className='border-none outline-none bg-primary px-4 py-2 w-1/6 mx-2 rounded-sm font-raleway md:w-full md:mx-0 md:my-4'
           type="text"
           placeholder='Enter your weight (in kilograms)'
           onChange={(e) => setWeight(e.target.value)} />
          <input
          className='border-none outline-none bg-primary px-4 py-2 w-1/6 mx-2 rounded-sm font-raleway md:w-full md:mx-0'
          type="text"
          placeholder='Enter your height (in meters)' 
          onChange={(event) => setHeight(event.target.value)}/>
          <button 
          type='submit'
          className='outline-none border border-danger font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-danger text-lightGrey transition duration-300 hover:bg-bc hover:text-primary md:ml-0 md:mt-4'>
            Calculate
          </button>
        </form>
        <div className="border border-secondary text-secondary mt-16 md:w-4/5">
            <p className="px-4 py-4 tracking-wide leading-8">Your Body Mass Index: {bmi}</p>
        </div>
      </div> 
    </div>
  )
}

export default BMI