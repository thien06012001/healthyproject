import type { NextPage } from 'next'
import React, { useState } from 'react'
import Link from 'next/link';
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import HomePage from './HomePage';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Feed from '../components/Feed';
import Feed2 from '../components/Feed2';
import HowWeWork from '../components/HowWeWork';
import FoodDemo from '../components/FoodDemo';
import PeopleSay from '../components/PeopleSay';
const Home: NextPage = () => {
  // const [text, count] = useTypewriter({
  //   words: [
  //     `Hi!`,
  //     "Welcome to our website", 
  //     "This is a website for everyone health",
  //     'From group 12:30 AM'
  //   ],
  //   loop: true,
  //   delaySpeed:2000,
  // })
  return (
    <div className='bg-lime-50'>
        <Navbar />
        <main className='w-screen mx-auto'>
          <Banner />
          <Feed />
          <Feed2/>
          <HowWeWork />
          <FoodDemo />
        </main>
        <main className='max-w-screen-2xl mx-auto 
        style={{
          0%={
            bg-[#FFF8ED80]
          }
          100%={
            bg-[#A1C94C]
          }
        }}'>
          <PeopleSay />
        </main>
     </div>
  )
}

export default Home
