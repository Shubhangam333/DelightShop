import React from "react";

const ProductReview = () => {
  return (
    <div className="border-red-700 border-4 p-4 flex justify-between items-center">
      <div className="flex flex-col gap-2 items-start">
        <div className="flex gap-4 items-center">
          <img
            src="./cod.webp"
            alt=""
            className="w-8 rounded-full border-red-600 border-2"
          />
          <p>John Doe</p>
        </div>
        <p>2023-18-09</p>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-yellow-500 text-2xl">*****</p>
        <p>Good Product</p>
      </div>
    </div>
  );
};

export default ProductReview;
