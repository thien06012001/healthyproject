import React from "react";
import Image from "next/image";
import BlogPic1 from "../../public/assets/BlogPic1.png";
import BlogPic4 from "../../public/assets/BlogPic4.png";
import BlogPic3 from "../../public/assets/BlogPic3.png";
import Blog2 from "../../public/assets/Blog2.png";
import { useRouter } from "next/router";
type Props = {};

function ContentBlog({}: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-col bg-lime-50 h-full">
      <div className="text-center items-center justify-center flex">
        <div className="absolute m-auto text-[#38962F] text-[55px] font-bold">
          BLOGS
        </div>
        <Image src={Blog2} className="w-screen h-screen" alt={""} />
      </div>
      <div className="flex ml-[2.5%] mt-[30px]">
        <div
          onClick={() => router.push("Blogs")}
          className="flex flex-col m-auto opacity-[0.6] cursor-pointer hover:opacity-100 "
        >
          <Image src={BlogPic1} alt={""} className="w-[450px] h-[320px] " />
          <p className="text-[34px] font-bold w-[450px] ">
            Healthy Eating for Healthy Weight
          </p>
          <p className="text-[#575757] text-[22px] w-[450px]">
            Dark, leafy greens, oranges, and tomatoes-even fresh herbs-are
            loaded with vitamins, fiber, and minerals.
          </p>
        </div>
        <div className="flex flex-col m-auto opacity-[0.6] cursor-pointer hover:opacity-100 ">
          <Image src={BlogPic3} alt={""} className="w-[450px] h-[320px] " />
          <p className="text-[34px] font-bold w-[450px] ">
            Know your limit for Added sugar
          </p>
          <p className="text-[#575757] text-[22px] w-[450px]">
            Good nutrition is essential for keeping Americans healthy across the
            lifespan, but most of us do not have a healthy diet.
          </p>
        </div>
        <div className="flex flex-col m-auto opacity-[0.6] cursor-pointer hover:opacity-100 ">
          <Image src={BlogPic4} alt={""} className="w-[450px] h-[320px] " />
          <p className="text-[34px] font-bold w-[450px] ">Cutting Calories</p>
          <p className="text-[#575757] text-[22px] w-[450px]">
            Eating fewer calories doesn't necessarily mean eating less food. To
            be able to cut calories without eating less and feeling hungry, you
            need to...
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentBlog;
