import React from "react";
import { BsCartPlus, BsFillBagHeartFill } from "react-icons/bs";

const ProductCard = () => {
  return (
    <div className="flex flex-col items-center justify-between w-60 shadow-2xl relative py-4 gap-2">
      <div className="w-full bg-slate-300">
        <img
          src="./mouse.webp"
          alt=""
          className="w-full object-contain hover:scale-105"
        />
      </div>
      <p>star</p>
      <p>Corsair Ironclaw RGB 18000 DPI Optical Gaming Mouse</p>
      <p>&euro; 65.99</p>
      <div className="icons absolute left-2 top-8 bg-slate-50 flex flex-col gap-2 py-2 text-slate-400 rounded-lg">
        <BsCartPlus className="text-2xl" />
        <BsFillBagHeartFill className="text-2xl" />
      </div>
      <button className="p-2 bg-red-700 text-slate-200 rounded-md">
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
