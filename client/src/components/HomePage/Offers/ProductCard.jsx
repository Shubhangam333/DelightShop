import React from "react";

const ProductCard = () => {
  return (
    <div className="bg-white flex items-center justify-between flex-col px-8 py-4 rounded-md cursor-pointer">
      <div className="wrapper w-44 relative">
        <img
          src="./mobile.webp"
          alt=""
          className="object-cover hover:scale-105"
        />
        <img
          src="./discount.webp"
          alt=""
          className="w-8 absolute top-0 right-0"
        />
      </div>

      <p className="truncate w-full">Apple Iphone 11 - 64GB wsaasd</p>

      <p className="price">&euro; 321.75</p>
    </div>
  );
};

export default ProductCard;
