import React from 'react'
import Navbar from '../components/Navbar'
import Banner2 from '../components/Banner2';
import Explore from '../components/Explore';
import Mission from '../components/Mission';
import Question from '../components/Question';
import Subscribe2 from '../components/Subscribe2';
import Contact from '../components/Contact';
type Props = {}

const About = (props: Props) => {
  return (
    <div className='bg-lime-50 h-screen'>
        <Navbar />
        <main className='bg-lime-50'>
            <Banner2/>
            <Explore />
            <Mission/>
            <Question/>
            <Subscribe2/>
            <Contact/>
        </main>
    </div>
  )
}

export default About