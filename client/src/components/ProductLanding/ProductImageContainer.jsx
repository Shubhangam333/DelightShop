import React, { useState } from "react";
import BigProductImage from "./ProductImageSection/BigProductImage";
import SmallProductImage from "./ProductImageSection/SmallProductImage";
import ProductImageCaraousel from "./ProductImageSection/ProductImageCaraousel";

const ProductImageContainer = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="flex flex-col justify-between items-center w-full ">
      <BigProductImage product={product} selectedImage={selectedImage} />
      <ProductImageCaraousel
        product={product}
        setSelectedImage={setSelectedImage}
      />
    </div>
  );
};

export default ProductImageContainer;
