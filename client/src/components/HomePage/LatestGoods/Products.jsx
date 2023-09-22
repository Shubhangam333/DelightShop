import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAsync } from "../../../features/productSlice";
import Loader from "../../Loader/Loader";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, isLoading } = useSelector((state) => state.product);
  return (
    <div className="grid grid-cols-4 my-8 gap-12">
      {isLoading ? (
        <Loader />
      ) : (
        products.slice(0, 4).map((product) => <ProductCard product={product} />)
      )}
    </div>
  );
};

export default Products;
