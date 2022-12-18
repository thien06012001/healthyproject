import React from 'react'
import Contact from '../components/Contact'
import ContentBlog from '../components/ContentBlog'
import Navbar from '../components/Navbar'
import Icon from '../public/assets/Logo.png'
import Head from 'next/head';
type Props = {}

function BlogBegin({}: Props) {
  return (
    <div className='bg-lime-50 '>
      <Head>
          <title>Blog</title>
          <link rel="icon" href={Icon.src} />
        </Head>
      <Navbar/>
      <main>
        <ContentBlog/>
        <Contact/>
      </main>
    </div>
  )
}

export default BlogBegin