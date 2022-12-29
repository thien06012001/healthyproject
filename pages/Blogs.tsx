import React from "react";
import BlogBody from "../components/BlogPage/BlogBody";
import Contact from "../components/Contact";
import HeaderForBlog from "../components/BlogPage/HeaderForBlog";
import Navbar from "../components/Navbar";
import Icon from "../public/assets/Logo.png";
import Head from "next/head";
type Props = {};

function Blogs({}: Props) {
  return (
    <div className="bg-lime-50 h-screen">
      <Head>
        <title>Blog</title>
        <link rel="icon" href={Icon.src} />
      </Head>
      <Navbar />
      <main className="w-screen mx-auto flex flex-col">
        <HeaderForBlog />
        <BlogBody />
        <Contact />
      </main>
    </div>
  );
}

export default Blogs;
