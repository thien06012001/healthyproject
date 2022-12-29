import React, { useState } from "react";
import { urlFor } from "../sanity";
import { NormalWeight } from "../typings";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import styles from "../styles/Addbutton.module.css";
type Props = {
  normalweight: NormalWeight;
};

function NormalWeight({ normalweight }: Props) {
  const MAX_RATINGS = 5;
  const MIN_RATINGS = 1;
  const RANDOM =
    Math.floor(Math.random() * (MAX_RATINGS - MIN_RATINGS + 1)) + MIN_RATINGS;
  const [rating, setRating] = useState(RANDOM);
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id: normalweight._id,
      name: normalweight.name,
      price: normalweight.price,
      rating,
      calories: normalweight.calories,
      ingredients: normalweight.ingredients,
      categories: normalweight.categories,
      image: urlFor(normalweight.image).url(),
    };
    //Sending the product as an action to the REDUX store.. basketSlice
    dispatch(addToBasket(product));
  };
  return (
    <div className="relative flex flex-col m-5 w-[340px] h-[500px] rounded-xl bg-[#FFE8C8] p-10">
      <p className="absolute text-gray-500 top-[2%] left-[3%] font-bold">
        {normalweight.categories}
      </p>
      <Image
        className="w-[200px] h-[200px] m-auto"
        src={urlFor(normalweight.image).url()}
        height={200}
        width={200}
        alt={""}
      />
      <p className="m-auto text-base font-[Inter] font-bold w-full h-[50px] text-center flex items-center justify-center">
        {normalweight.name}
      </p>
      <div className="flex">
        <div className="w-[50%]">
          <p className="text-[#4D81AE] text-[14px] font-[Inter] font-bold opacity-[5] ">
            50+ orders
          </p>
        </div>
        <div className="flex justify-end w-[50%]">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <StarIcon className="h-4 text-yellow-500" />
            ))}
        </div>
      </div>
      <p className="text-[#4D81AE] text-[14px] font-[Inter] font-bold opacity-[5] ">
        {normalweight.calories} calories
      </p>
      <p className="text-[#727272] text-[14px] w-full h-[50px] overflow-y-scroll snap-y snap-mandatory z-10 scrollbar scrollbar-track-[#FFE8C8] scrollbar-thumb-[#FFE8C8] my-3">
        {normalweight.ingredients}
      </p>
      <div className="flex">
        <div className="m-auto ml-[-1px] text-[18px] font-bold text-[#7DBB4D]">
          ${normalweight.price}
        </div>
        <div className="">
          <button onClick={addItemToBasket} className={styles.button}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default NormalWeight;
