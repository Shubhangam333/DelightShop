import React from "react";
import BigProductImage from "./ProductImageSection/BigProductImage";
import SmallProductImage from "./ProductImageSection/SmallProductImage";

const ProductImageContainer = ({ product }) => {
  return (
    <div className="flex flex-col justify-between items-center w-full">
      <BigProductImage product={product} />
      <SmallProductImage />
    </div>
  );
};

export default ProductImageContainer;
