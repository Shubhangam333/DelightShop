import React from "react";

const BigProductImage = ({ product, selectedImage }) => {
  return (
    <div className="w-72 h-full">
      {selectedImage ? (
        <img src={selectedImage.url} alt="" className="w-full  object-cover" />
      ) : (
        <img
          src={product.images[0].url}
          alt=""
          className="w-100 object-cover"
        />
      )}
    </div>
  );
};

export default BigProductImage;
