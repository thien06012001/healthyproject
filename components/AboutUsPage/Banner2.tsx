import React from "react";
import NewBanner from "../../public/assets/NewBanner.png";
import Image from "next/image";
type Props = {};

function Banner2({}: Props) {
  return (
    <div className="relative">
      <div className="bg-[#A1C94C] w-[850px] h-[130px] ml-[-425px] mt-[-65px] top-[50%] left-[50%] absolute z-10">
        <p className="text-[#FFFCF9] text-center mt-[25px] text-[55px] uppercase">
          ABOUT BMI <span className="text-[#EC690B]">KITCHEN</span>
        </p>
      </div>
      <Image
        src={NewBanner}
        className="w-screen h-screen opacity-80"
        alt={""}
      />
    </div>
  );
}

export default Banner2;
