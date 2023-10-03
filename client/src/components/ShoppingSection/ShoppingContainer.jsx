import { useCallback, useEffect, useState } from "react";
import Filter from "./FilteringSection/Filter";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import { getAllPaginatedProductsAsync } from "../../features/productSlice";
import ShoppingProductCard from "./ShoppingProductCard";
import Pagination from "../Pagination/Pagination";

const ShoppingContainer = () => {
  const { productCount, isPaginatedLoading, paginatedProducts } = useSelector(
    (state) => state.product
  );

  const [currentPage, setCurrentPage] = useState(1);

  const { category, keyword } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const getProducts = useCallback(
    async (page) => {
      dispatch(
        getAllPaginatedProductsAsync({ page, categoryId: category, keyword })
      );
      setCurrentPage(page);
    },
    [dispatch, category, keyword]
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);

    getProducts(page);
  };

  useEffect(() => {
    getProducts(1);
  }, [getProducts]);

  return (
    <div className=" flex flex-wrap gap-4 ">
      <Filter />
      <div className="flex flex-wrap gap-4 px-16  h-96">
        {isPaginatedLoading ? (
          <Loader />
        ) : (
          paginatedProducts &&
          paginatedProducts.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <ShoppingProductCard product={product} />
            </Link>
          ))
        )}
      </div>
      <div className="flex items-center justify-center w-full">
        <Pagination
          totalPages={Math.ceil(productCount / 3)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ShoppingContainer;
