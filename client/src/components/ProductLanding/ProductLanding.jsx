import React from "react";
import ProductImageContainer from "./ProductImageContainer";
import ProductInfo from "./ProductInfoSection/ProductInfo";

const ProductLanding = () => {
  return (
    <div className="m-24 flex justify-between items-center ">
      <ProductImageContainer />
      <ProductInfo />
    </div>
  );
};

export default ProductLanding;
