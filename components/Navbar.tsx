import React, { useEffect } from 'react'
import Image from 'next/image'
import Logo from '../public/assets/Logo.png'
import { useRouter } from 'next/router'
import styles from '../styles/Nav.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from '../slices/userSlice'
import { auth } from '../firebase'
import {Bars4Icon, MagnifyingGlassIcon, ShoppingCartIcon,  GifIcon, GiftIcon} from '@heroicons/react/24/solid'
type Props = {}

function Navbar({}: Props) {
    const user = useSelector(selectUser)
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        if(userAuth){
          console.log(userAuth)
          dispatch(login({
            uid: userAuth.uid,
            email: userAuth.email,
          }))
        }
        else{
          dispatch(logout())
        }
      })
  
      return unsubscribe
    }, [dispatch])
    
  return (
    <div className='bg-[#ecf0f3] sticky top-0 w-[100%] z-20'>
        <div className='flex items-center p-1 flex-grow py-2'>
            <div className='flex items-center flex-grow sm:flex-grow-0 mx-6 cursor-pointer w-[10%]'>
                <Image 
                    onClick={() => router.push('/')}
                    src={Logo} 
                    alt='' 
                    width={70}
                    height = {70} />
            </div>
            <div className='flex flex-row items-center justify-center text-xs w-[70%]'>
                <button onClick={() => router.push('/About')} className={styles.button}>About us</button>
                <button onClick={() => router.push('/Category/All/AllCategory')} className={styles.button}>Products</button>
                <button className={styles.button}>Blog</button>
                <button className={styles.button} onClick={() => router.push('/BMI')}>Custom Meal</button>
            </div>
            <div className='flex justify-end text-xs space-x-6 mx-6 w-[20%] whitespace-nowrap'>
                <div className='relative link flex items-center'>
                    <span 
                        className='absolute top-[5px] right-[-5px] md:right-10 h-4 w-4 
                        bg-green-400 text-center rounded-full text-black font-bold'
                    >
                        0
                    </span>
                    <GiftIcon className='h-10 cursor-pointer' />
                </div>
                <div className='relative link flex items-center'>
                    <span 
                        className='absolute top-0 right-0 md:right-10 h-4 w-4 
                        bg-green-400 text-center rounded-full text-black font-bold'
                    >
                        0
                    </span>
                    <ShoppingCartIcon className='h-10 cursor-pointer' />
                </div>
            {!user ? (
                <button onClick={() => router.push('/HomePage')} className={styles.button}>Login</button>
            ) : (<button className={styles.button} onClick={() => auth.signOut()}>Logout</button>) }
                
            </div>
        </div>
    </div>
  )
}

export default Navbar