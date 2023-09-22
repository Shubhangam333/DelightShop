import React from "react";

const BigProductImage = ({ product }) => {
  return (
    <div className="w-72 relative">
      <img
        src={product.images[0].url}
        alt=""
        className="w-100 object-contain"
      />
    </div>
  );
};

export default BigProductImage;
