import React from 'react'
import BlogBody from '../components/BlogBody'
import Contact from '../components/Contact'
import HeaderForBlog from '../components/HeaderForBlog'
import Navbar from '../components/Navbar'

type Props = {}

function Blogs({}: Props) {
  return (
    <div className='bg-lime-50 h-screen'>
        <Navbar/>
        <main className='w-screen mx-auto flex flex-col'>
            <HeaderForBlog />
            <BlogBody/>
            <Contact/>
        </main>
    </div>
  )
}

export default Blogs