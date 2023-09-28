import React from "react";
import Category from "./FilteringSection/Category";
import ProductCard from "../HomePage/LatestGoods/ProductCard";
import Filter from "./FilteringSection/Filter";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

const ShoppingContainer = () => {
  const { products, isLoading } = useSelector((state) => state.product);
  const { price, rating, discount, category } = useSelector(
    (state) => state.filter
  );

  console.log("category", category[0]);

  return (
    <div className="flex gap-16 p-4">
      <Filter />
      <div className="flex flex-wrap gap-4">
        {isLoading ? (
          <Loader />
        ) : (
          products &&
          products
            .filter((product) => product.category.name == category)
            .map((product) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <ProductCard product={product} />
              </Link>
            ))
        )}
      </div>
    </div>
  );
};

export default ShoppingContainer;
