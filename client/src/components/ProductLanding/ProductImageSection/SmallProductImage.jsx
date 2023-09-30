import React from "react";

const SmallProductImage = ({ image, handleClick }) => {
  return (
    <div
      className="flex justify-between items-center mt-4 h-24 w-24 border-slate-500 border-2"
      onClick={() => handleClick(image)}
    >
      <img src={image.url} alt="" className="w-100 object-cover" />
    </div>
  );
};

export default SmallProductImage;
