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

const OfferCaraousel = () => {
  const { products } = useSelector((state) => state.product);

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
        {products.map((product) => (
          <SwiperSlide>
            <Link to={`/product/${product._id}`}>
              <ProductCard key={product._id} product={product} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default OfferCaraousel;
