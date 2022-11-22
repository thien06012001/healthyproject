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
import Subscribe from '../components/Subscribe';
import Contact from '../components/Contact';
import { PhoneIcon,MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
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
        <main className='w-screen h-[674px] mx-auto mt-[100px] bg-gradient-to-b from-[#A1C94C] to-[#FFF8ED80]'>
          <PeopleSay />
        </main>
        <main className='bg-[#A1C94CE5] rounded-3xl max-w-screen-xl h-[550px] mt-[150px] mx-auto'>
          <Subscribe/>
        </main>
        <main>
          <Contact />
        </main>
     </div>
  )
}

export default Home
