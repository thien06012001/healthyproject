import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../../slices/basketSlice";
import styles from "../styles/Checkout.module.css";
function CheckoutProduct({
  id,
  name,
  price,
  calories,
  rating,
  ingredients,
  categories,
  image,
}: any) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      name,
      price,
      calories,
      rating,
      ingredients,
      categories,
      image,
    };
    dispatch(addToBasket(product));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      {/* Left */}
      <Image
        src={image}
        height={250}
        width={200}
        alt={""}
        className="w-[200px] h-[200px]"
      />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{name}</p>
        <div className="flex">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs mt-2 my-2 line-clamp-3">{ingredients}</p>${price}
      </div>
      {/* Right add/remove button */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className={styles.button} onClick={addItemToBasket}>
          Add
        </button>
        <button className={styles.button2} onClick={removeItemFromBasket}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
