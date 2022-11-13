import type { NextPage } from 'next'
import React, { useState } from 'react'
import Link from 'next/link';
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import HomePage from './HomePage';
const Home: NextPage = () => {
  const [text, count] = useTypewriter({
    words: [
      `Hi!`,
      "Welcome to our website", 
      "This is a website for everyone health",
      'From group 12:30 AM'
    ],
    loop: true,
    delaySpeed:2000,
  })
  return (
    <div className='welcome_page'>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
        <div id='title'>
            <span className='mr-3 p-0'>
              {text} <Cursor cursorColor='white' />
            </span>
            
          <Link href={'HomePage'} className='button'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Get Started 
          </Link>
        </div>
     </div>
  )
}

export default Home
