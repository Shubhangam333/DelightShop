import React from "react";
import BigProductImage from "./ProductImageSection/BigProductImage";
import SmallProductImage from "./ProductImageSection/SmallProductImage";

const ProductImageContainer = () => {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <BigProductImage />
      <SmallProductImage />
    </div>
  );
};

export default ProductImageContainer;
