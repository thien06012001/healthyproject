import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Nav2.module.css'
type Props = {}

function NavForProduct({}: Props) {
    const router = useRouter()
  return (
    <div className=' bg-lime-400 h-[80px] flex flex-row items-center justify-center text-base w-full m-auto'> 
       
        <button onClick={() => router.push('/Category/All/AllCategory')} className={styles.button}>All Weight</button>
        <button onClick={() => router.push('/Category/UnderWeight/AllCategory')} className={styles.button}>Under Weight</button>
        <button onClick={() => router.push('/Category/NormalWeight/AllCategory')} className={styles.button}>Normal Weight</button>
        <button onClick={() => router.push('/Category/OverWeight/AllCategory')} className={styles.button}>Over Weight</button>
        <button onClick={() => router.push('/Category/Obese/AllCategory')} className={styles.button}>Obese</button>
       
    </div>
  )
}

export default NavForProduct