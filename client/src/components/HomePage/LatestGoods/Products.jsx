import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAsync } from "../../../features/productSlice";

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
