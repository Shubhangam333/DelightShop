import { useCallback, useEffect, useState } from "react";
import Filter from "./FilteringSection/Filter";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import {
  getAllPaginatedProductsAsync,
  getFilteredProductByKeyowrdAsync,
  getFilteredProductByPriceAsync,
  getFilteredProductsAsync,
} from "../../features/productSlice";
import ShoppingProductCard from "./ShoppingProductCard";
import Pagination from "../Pagination/Pagination";
import { removeFilters } from "../../features/filterSlice";

const ShoppingContainer = () => {
  const { products, isLoading, filteredproducts } = useSelector(
    (state) => state.product
  );

  const [Products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const {
    category,
    isCategorySelected,

    isSearchSelected,
    keyword,
  } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const getProducts = useCallback(
    async (page) => {
      const res = await dispatch(getAllPaginatedProductsAsync(page));
      setProducts(res.payload);
    },
    [dispatch]
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch(removeFilters());
    getProducts(page);
  };

  useEffect(() => {
    getProducts(1);

    if (isSearchSelected) {
      dispatch(getFilteredProductByKeyowrdAsync(keyword));
    }

    if (isCategorySelected) {
      dispatch(getFilteredProductsAsync(category));
    }

    // if (isPriceSelected) {
    //   dispatch(getFilteredProductByPriceAsync(price));
    // }
  }, [
    isCategorySelected,
    category,
    dispatch,
    isSearchSelected,
    keyword,
    getProducts,
  ]);

  return (
    <div className=" flex flex-wrap gap-4  ">
      <Filter />
      <div className="flex flex-wrap gap-4 px-16">
        {isCategorySelected || isSearchSelected ? (
          isLoading ? (
            <Loader />
          ) : (
            filteredproducts &&
            filteredproducts.map((product) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <ShoppingProductCard product={product} />
              </Link>
            ))
          )
        ) : (
          Products &&
          Products.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <ShoppingProductCard product={product} />
            </Link>
          ))
        )}
      </div>
      <div className="flex items-center justify-center w-full">
        <Pagination
          totalPages={Math.ceil(products.length / 3)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ShoppingContainer;
