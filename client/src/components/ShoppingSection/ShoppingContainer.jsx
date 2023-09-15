import React from "react";
import Category from "./FilteringSection/Category";
import ProductCard from "../HomePage/LatestGoods/ProductCard";
import Filter from "./FilteringSection/Filter";

const ShoppingContainer = () => {
  return (
    <div className="flex gap-16 p-4">
      <Filter />
      <div className="flex flex-wrap gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ShoppingContainer;
