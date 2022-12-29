import React from "react";

type Props = {};

function Mission({}: Props) {
  return (
    <div className="bg-lime-50">
      <div className=" uppercase tracking-[2px] text-[#FB9333] font-semibold pt-20 pb-10 justify-center items-center text-center">
        <p className="text-2xl m-auto">Our Mission</p>
      </div>
      <div className="items-center w-[1330px] h-[170px] mx-auto justify-center ">
        <p className="text-[#585858] text-[40px]">
          Our mission is to be the most sustainable kitchen in Ho Chi Minh City
          by using homegrown products and fresh foods all-day; moreover, we
          provide the customer with the most suitable meals for their BMI.
        </p>
      </div>
    </div>
  );
}

export default Mission;
