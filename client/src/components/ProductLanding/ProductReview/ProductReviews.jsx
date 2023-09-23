import React from "react";
import ProductReview from "./ProductReview";

const ProductReviews = ({ product }) => {
  return (
    <div className=" w-full text-center">
      <h1 className="bg-slate-800 text-white mb-4">Product Reviews</h1>
      <ProductReview product={product} />
    </div>
  );
};

export default ProductReviews;
