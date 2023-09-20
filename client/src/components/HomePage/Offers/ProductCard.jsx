import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white flex items-center justify-between flex-col px-8 py-4 rounded-md cursor-pointer">
      <div className="wrapper w-44 relative h-full">
        <img
          src={product.images[0].url}
          alt=""
          className="object-cover hover:scale-105 "
        />
        <img
          src="./discount.webp"
          alt=""
          className="w-8 absolute top-0 right-0"
        />
      </div>

      <p className="truncate w-full">{product.name}</p>

      <p className="price">{product.price}</p>
    </div>
  );
};

export default ProductCard;
