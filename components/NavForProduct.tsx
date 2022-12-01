import React from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Nav2.module.css'
type Props = {}

function NavForProduct({}: Props) {
    const router = useRouter()
  return (
    <div className=' bg-lime-400 h-[80px]  flex flex-row items-center justify-center text-xs w-full m-auto'> 
       
        <button className={styles.button}>All Weight</button>
        <button className={styles.button}>Under Weight</button>
        <button className={styles.button}>Normal Weight</button>
        <button className={styles.button}>Over Weight</button>
        <button className={styles.button}>Obese</button>
       
    </div>
  )
}

export default NavForProduct