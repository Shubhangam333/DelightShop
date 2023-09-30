import React, { useEffect } from "react";
import Category from "./FilteringSection/Category";
import ProductCard from "../HomePage/LatestGoods/ProductCard";
import Filter from "./FilteringSection/Filter";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import {
  getFilteredProductByPriceAsync,
  getFilteredProductsAsync,
} from "../../features/productSlice";

const ShoppingContainer = () => {
  const { products, isLoading, filteredproducts } = useSelector(
    (state) => state.product
  );
  const {
    price,
    rating,
    discount,
    category,
    isCategorySelected,
    isPriceSelected,
  } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    if (isCategorySelected) {
      dispatch(getFilteredProductsAsync(category));
    }

    if (isPriceSelected) {
      dispatch(getFilteredProductByPriceAsync(price));
    }
  }, [isCategorySelected, category, isPriceSelected, price]);

  return (
    <div className="grid grid-cols-5">
      <Filter />
      <div className="col-span-4 flex flex-wrap gap-4">
        {isCategorySelected || isPriceSelected ? (
          isLoading ? (
            <Loader />
          ) : (
            filteredproducts &&
            filteredproducts.map((product) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <ProductCard product={product} />
              </Link>
            ))
          )
        ) : (
          products &&
          products.map((product) => (
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
