import React from 'react'
import Contact from '../components/Contact'
import ContentBlog from '../components/ContentBlog'
import Navbar from '../components/Navbar'

type Props = {}

function BlogBegin({}: Props) {
  return (
    <div className='bg-lime-50 '>
      <Navbar/>
      <main>
        <ContentBlog/>
        <Contact/>
      </main>
    </div>
  )
}

export default BlogBegin