import React from 'react'
import styles from '../styles/Subscribe.module.css'
type Props = {}

function Subscribe2({}: Props) {
  return (
    <div className='bg-[#A1C94CE5] rounded-3xl max-w-screen-xl h-[550px] mt-[150px] mx-auto'>
      <div className='  tracking-[2px] text-[#FB9333] font-semibold justify-center 
        items-center text-center py-[20px]'>
            <p className='text-[30px]'>Our Subscribe</p>
        </div>
        <div className='top-24 tracking-[2px] font-semibold text-2xl justify-center 
          items-center text-center mt-[20px]'> 
          <p className='text-[#585858] text-[48px] py-[5px]'> Subscribe To Get The Latest</p> <br />
          <p className='text-[#585858] text-[48px] py-[5px]'>Promo from Kitchen </p> 
        </div>
        <div className='justify-center items-center text-center mt-[30px]'>
          <p className='text-[16px] text-[#3E3E3E] opacity-[0.7]'>We recommended you to subscribe to our promo program, <br /> 
            drop your email below to get daily update about us.</p>
        </div>
        <div className='justify-center items-center text-center flex flex-col'>
          <input type="email" placeholder='Enter your email address ' 
          name="" className={styles.input}  /> 
          <button className='bg-[#FB9333] w-[170px] h-[55px] cursor-pointer mt-[30px] rounded-full
            text-[18px] text-white font-semibold'>
            Subscribe
          </button>
        </div>
    </div>
  )
}

export default Subscribe2