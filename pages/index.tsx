import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/HomePage/Banner";
import Feed from "../components/HomePage/Feed";
import Feed2 from "../components/HomePage/Feed2";
import HowWeWork from "../components/HomePage/HowWeWork";
import FoodDemo from "../components/HomePage/FoodDemo";
import PeopleSay from "../components/HomePage/PeopleSay";
import Subscribe from "../components/HomePage/Subscribe";
import Contact from "../components/Contact";
import Icon from "../public/assets/Logo.png";
import Head from "next/head";
type Props = {

};
const Home = ({}: Props) => {

  return (
    <div className="bg-lime-50">
      <Head>
        <title>Healthy Food</title>
        <link rel="icon" href={Icon.src} />
        {/* <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="9176a8f2-933e-4550-842c-b3ac11c46ef6";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script> */}
      </Head>
      <Navbar />
      <main className="w-screen mx-auto">
        <Banner />

        <Feed />
        <Feed2 />
        <HowWeWork />
        <FoodDemo />
      </main>
      <main className="w-screen h-[674px] mx-auto mt-[100px] bg-gradient-to-b from-[#A1C94C] to-[#FFF8ED80]">
        <PeopleSay />
      </main>
      <main className="bg-[#A1C94CE5] rounded-3xl max-w-screen-xl h-[550px] mt-[150px] mx-auto">
        <Subscribe />
      </main>
      <main>
        <Contact />
      </main>
    </div>
  );
};

export default Home;

