import React from "react";
import Image from "next/image";
import Trophy from "../../public/assets/Trophy.png";
import Medal from "../../public/assets/Medal.png";
import Farm from "../../public/assets/Farm.png";
import styles from "../../styles/Feed.module.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
type Props = {};

function Feed2({}: Props) {
  return (
    <div className="grid grid-flow-row-dense grid-cols-3">
      <div className={styles.Feed2}>
        <div className="w-[100px] h-[100px] text-center">
          <Image src={Farm} className="m-auto ml-[110px] mt-[50px]" alt="" />
        </div>
        <div className="font-bold text-center">Own fruit & Vegetable farm</div>
        <div className="h-[125px]">
          <p className="p-3 text-base text-[#6B7280] text-center">
            We have our own fruit and vegetable farm in Da Lat with an area of
            10 hectares.
          </p>
        </div>
        
      </div>
      <div className={styles.Feed2}>
        <div className="w-[100px] h-[100px]">
          <Image src={Medal} className="m-auto ml-[110px] mt-[50px]" alt="" />
        </div>
        <div className="font-bold  text-center">
          #1 Healthy meals base on BMI
        </div>
        <div className="h-[125px]">
          <p className="p-3 text-base text-[#6B7280] text-center">
            The pioneer of suggesting foods based on the BMI... We will help you
            having healthy weight and the best quality recipe.
          </p>
        </div>
        
      </div>
      <div className={styles.Feed2}>
        <div className="w-[100px] h-[100px]">
          <Image src={Trophy} className="mx-auto ml-[110px] mt-[50px]" alt="" />
        </div>
        <div className="font-bold  text-center">Top 100 brand</div>
        <div className="h-[125px]">
          <p className="p-3 text-base text-[#6B7280] text-center">
            We are one of the best brands in the Food and Beverage sector in
            Vietnam.
          </p>
        </div>
       
      </div>
    </div>
  );
}

export default Feed2;
