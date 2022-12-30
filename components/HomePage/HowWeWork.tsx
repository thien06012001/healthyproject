import React from "react";
import Image from "next/image";
import pic1 from "../../public/assets/pic1.png";
import pic2 from "../../public/assets/pic2.png";
import pic3 from "../../public/assets/pic3.png";
import bmi from "../../public/assets/bmi.png";
import deliver from "../../public/assets/deliver.png";
import dishes from "../../public/assets/dishes.png";
import enjoy from "../../public/assets/enjoy.png";
import { useRouter } from "next/router";
type Props = {};

function HowWeWork({}: Props) {
  const router = useRouter();
  return (
    <div className="bg-lime-50">
      <div
        className="uppercase tracking-[2px] text-[#FB9333] font-semibold text-3xl text-center mt-[75px]
        "
      >
        How we work
      </div>
      <div className="grid grid-cols-2 justify-center">
        <div className="mx-auto">
          <div className="mt-[5px] flex">
            <div className="flex flex-col text-center items-center justify-center">
              <div className="flex flex-row mx-auto">
                <Image
                  src={pic1}
                  className="absolute mt-6 mx-6 h-[340px] w-[379px] "
                  alt=""
                />
                <Image
                  src={pic2}
                  className=" ml-[442px] h-[204px] w-[278px] mt-6"
                  alt=""
                />
              </div>
              <button
                onClick={() => router.push("/Category/All/AllCategory")}
                className="text-white text-2xl font-bold uppercase text-center my-[40px] bg-[#A1C94CE5] w-[278px] h-[56px] 
                            rounded-3xl ml-[440px] mt-[20px] cursor-pointer"
              >
                Buy Now
              </button>
            </div>
          </div>
          <div className="">
            <Image
              src={pic3}
              className="my-6 mx-6 h-[308px] w-[697px] mt-[-20px]"
              alt=""
            />
          </div>
        </div>
        <div className="mx-auto px-36 h-[112px] text-start grid grid-row ">
        
            <p className="text-[#585858] font-semibold text-[40px] mt-[24.5px]">
              It's Time Your Healthy Future <br /> Begins
            </p>
        
          <div className="flex flex-row">
            <Image src={bmi} className="h-[58px] w-[60px] mt-[30px] " alt="" />
            <div className=" mt-[18px] px-14 flex flex-col ">
              <p className="text-[#38962F] font-bold text-[28px]">
                {" "}
                Calculating your BMI{" "}
              </p>{" "}
              <br />
              <div className="mt-[-20px] ml-[3px]">
                <p className="text-[#585858] font-semibold text-lg ">
                  You will fill in your height, weight
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <Image
              src={dishes}
              className="h-[58px] w-[60px] mt-[50px] "
              alt=""
            />
            <div className=" mt-[18px] px-14 flex flex-col ">
              <p className="text-[#38962F] font-bold text-[28px]">
                {" "}
                Choosing your favorite dishes{" "}
              </p>{" "}
              <br />
              <div className="mt-[-20px] ml-[3px]">
                <p className="text-[#585858] font-semibold text-lg ">
                  Choose your favorite meals and order online or by phone. It's
                  easy to customize your order.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <Image
              src={deliver}
              className="h-[58px] w-[60px] mt-[40px] "
              alt=""
            />
            <div className=" mt-[18px] px-14 flex flex-col ">
              <p className="text-[#38962F] font-bold text-[28px]">
                {" "}
                We deliver your meal{" "}
              </p>{" "}
              <br />
              <div className="mt-[-20px] ml-[3px]">
                <p className="text-[#585858] font-semibold text-lg ">
                  We prepared and delivered meals arrive at your door
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <Image
              src={enjoy}
              className="h-[58px] w-[60px] mt-[30px] "
              alt=""
            />
            <div className=" mt-[18px] px-14 flex flex-col ">
              <p className="text-[#38962F] font-bold text-[28px]">
                {" "}
                Enjoy your meals{" "}
              </p>{" "}
              <br />
              <div className="mt-[-20px] ml-[3px]">
                <p className="text-[#585858] font-semibold text-lg ">
                  No shopping, no cooking and no cleaning. Enjoy your healthy
                  meals with your lovely familiars.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
