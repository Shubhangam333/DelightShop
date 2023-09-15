import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="grid grid-cols-4 my-8 gap-12">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;
