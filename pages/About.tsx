import React from "react";
import Navbar from "../components/Navbar";
import Banner2 from "../components/AboutUsPage/Banner2";
import Explore from "../components/AboutUsPage/Explore";
import Mission from "../components/AboutUsPage/Mission";
import Question from "../components/AboutUsPage/Question";
import Subscribe2 from "../components/AboutUsPage/Subscribe2";
import Contact from "../components/Contact";
import Icon from "../public/assets/Logo.png";
import Head from "next/head";
type Props = {};
const About = (props: Props) => {
  return (
    <div className="bg-lime-50 h-screen">
      <Head>
        <title>About us</title>
        <link rel="icon" href={Icon.src} />
      </Head>
      <Navbar />
      <main className="bg-lime-50">
        <Banner2 />
        <Explore />
        <Mission />
        <Question />
        <Subscribe2 />
        <Contact />
      </main>
    </div>
  );
};

export default About;
