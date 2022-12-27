import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};

function Contact({}: Props) {
  return (
    <div className="bg-lime-50 ">
      <div className="mt-[200px] flex flex-row">
        <div className="mx-auto">
          <div className="flex flex-col">
            <p
              className='text-[24px] text-[#585858] font-semibold 
                        font-family:"Roboto" '
            >
              BMI <span className="text-[#FB9333]">Kitchen</span>{" "}
            </p>
            <div className="w-[239px] h-[104px] mt-[20px]">
              <p className="text-[16px] text-[#575757]">
                BMI Kitchen is the pioneer of suggesting healthy foods depend on
                customer's BMI with high nutrition.
              </p>
            </div>
            <div className="mt-[40px]">
              <p className="text-[#2B2B2B] text-[16px]">
                ©Copyright BMI Kitchen
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid grid-row">
          <p className="text-[#FB9333] text-[16px] font-semibold">Feature</p>
          <p className="text-[#575757] text-[16px]">Menu</p>
          <p className="text-[#575757] text-[16px]">Custom your meals</p>
          <p className="text-[#575757] text-[16px]">Promo</p>
          <p className="text-[#575757] text-[16px]">Contact</p>
          <p className="text-[#575757] text-[16px]">About us</p>
        </div>
        <div className="mx-auto grid grid-row">
          <p className="text-[#FB9333] text-[16px] font-semibold">
            Get in Touch
          </p>
          <div className="flex flex-row">
            <MapPinIcon className="w-[22px] h-[18px] text-[#FB9333] animate-pulse" />
            <p className="text-[#575757] text-[16px]">
              District 7, Ho Chi Minh City, <br /> Vietnam
            </p>
          </div>
          <div className="flex flex-row">
            <EnvelopeIcon className="w-[22px] h-[18px] text-[#FB9333] animate-pulse" />
            <p className="text-[#575757] text-[16px]">BMI@hello.com</p>
          </div>
          <div className="flex flex-row">
            <PhoneIcon className="w-[22px] h-[18px] text-[#FB9333] animate-pulse" />
            <p className="text-[#575757] text-[16px]">+84 936 846 364</p>
          </div>
        </div>
        <div className="mx-auto ">
          <SocialIcon
            className="w-[2.5px] w-3px"
            url="https://www.facebook.com/profile.php?id=100083708621101"
            fgColor="orange"
            bgColor="transparent"
          />
          <div className="ml-[20px] mt-[10px]">
            <p className="text-[16px] text-[#575757]">
              Follow our social media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
