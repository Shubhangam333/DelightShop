import React from "react";
import ProductImageContainer from "./ProductImageContainer";
import ProductInfo from "./ProductInfoSection/ProductInfo";
import ProductReviews from "./ProductReview/ProductReviews";
import CreateProductReview from "./ProductReview/CreateProductReview";

const ProductLanding = () => {
  return (
    <div className="m-24 ">
      <div className="flex justify-between items-center ">
        <ProductImageContainer />
        <ProductInfo />
      </div>
      <div className="my-12 grid grid-cols-2 gap-8">
        <ProductReviews />
        <CreateProductReview />
      </div>
    </div>
  );
};

export default ProductLanding;
