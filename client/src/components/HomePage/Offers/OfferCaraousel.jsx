import React, { useEffect } from "react";
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAsync } from "../../../features/productSlice";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

const OfferCaraousel = () => {
  const { products, isLoading } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAsync());
    console.log(products);
  }, [dispatch]);

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        slidesPerGroup={4}
      >
        {isLoading ? (
          <Loader />
        ) : (
          products &&
          products.map((product) => (
            <SwiperSlide key={product._id}>
              <Link to={`/product/${product._id}`}>
                <ProductCard product={product} />
              </Link>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default OfferCaraousel;
