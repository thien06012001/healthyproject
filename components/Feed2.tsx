import React from 'react'
import Image from 'next/image'
import test from '../public/assets/test.png'
import styles from '../styles/Feed.module.css'
type Props = {}

function Feed2({}: Props) {
  return (
    <div className='grid grid-flow-row-dense grid-cols-3'>
        <div className={styles.Feed2}>
            <Image src={test} className='my-6 mx-6' alt=''/>
            <div className='font-bold mx-5 text-center'>Own fruit & Vegetable farm</div>
            <p className='p-3 text-base text-[#6B7280]'>We have our own fruit and vegetable farm in Da Lat with an area of 10 hectares.</p>
        </div>
        <div className={styles.Feed2}>
            <Image src={test} className='my-6 mx-6' alt=''/>
            <div className='font-bold mx-10 text-center'>#1 Healthy meals base on BMI</div>
            <p className='p-3 text-base text-[#6B7280]'> The pioneer of suggesting foods based on the BMI... We will help you having healthy weight and the best quality recipe.</p>
        </div>
        <div className={styles.Feed2}>
            <Image src={test} className='my-6 mx-6' alt=''/>
            <div className='font-bold mx-10 text-center'>Top 100 brand</div>
            <p className='p-3 text-base text-[#6B7280]'> We are one of the best brands in the Food and Beverage sector in Vietnam</p>
        </div>
    </div>
  )
}

export default Feed2