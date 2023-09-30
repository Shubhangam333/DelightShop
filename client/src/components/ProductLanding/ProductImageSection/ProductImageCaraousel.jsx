import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SmallProductImage from "./SmallProductImage";

const ProductImageCaraousel = ({ product, setSelectedImage }) => {
  const handleClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      slidesPerGroup={3}
      className="w-80"
    >
      {product &&
        product.images.map((image) => (
          <>
            <SwiperSlide key={image.public_id}>
              <SmallProductImage image={image} handleClick={handleClick} />
            </SwiperSlide>
          </>
        ))}
    </Swiper>
  );
};

export default ProductImageCaraousel;
