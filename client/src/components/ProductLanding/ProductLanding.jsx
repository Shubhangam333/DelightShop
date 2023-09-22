import React, { useEffect } from "react";
import ProductImageContainer from "./ProductImageContainer";
import ProductInfo from "./ProductInfoSection/ProductInfo";
import ProductReviews from "./ProductReview/ProductReviews";
import CreateProductReview from "./ProductReview/CreateProductReview";
import { useSelector } from "react-redux";

const ProductLanding = () => {
  const { product } = useSelector((state) => state.product);
  return (
    <>
      {product && (
        <>
          <div className="flex justify-between items-center ">
            <ProductImageContainer product={product} />
            <ProductInfo product={product} />
          </div>
          <div className="my-12 grid grid-cols-2 gap-8">
            <ProductReviews product={product} />
            <CreateProductReview product={product} />
          </div>
        </>
      )}
    </>
  );
};

export default ProductLanding;
