import React from "react";

type Props = {};

function Mission({}: Props) {
  return (
    <div className="bg-lime-50 flex flex-col">
      <div className="uppercase tracking-[2px] text-[#FB9333] font-semibold pt-20 pb-10 text-2xl text-center m-auto">
        Our Mission
      </div>
      <div className="w-[1330px] h-[170px] mx-auto">
        <div className="text-[#585858] text-[40px] ">
          Our mission is to be the most sustainable kitchen in Ho Chi Minh City
          by using homegrown products and fresh foods all-day; moreover, we
          provide the customer with the most suitable meals for their BMI.
        </div>
      </div>
    </div>
  );
}

export default Mission;
