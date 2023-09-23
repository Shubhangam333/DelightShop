import React from "react";
import StarRatings from "react-star-ratings";

const ProductReview = ({ product }) => {
  console.log(product);
  return (
    <>
      {product.reviews.length > 0 ? (
        product.reviews.map((review) => (
          <div className="border-red-700 border-4 p-4 flex justify-between items-center">
            <div className="flex flex-col gap-2 items-start">
              <div className="flex gap-4 items-center">
                <img
                  src="./cod.webp"
                  alt=""
                  className="w-8 rounded-full border-red-600 border-2"
                />
                <p>{review.name}</p>
              </div>
              <p>{review.createdAt}</p>
            </div>
            <div className="flex flex-col items-start">
              <StarRatings
                rating={review.rating}
                starDimension="20px"
                starSpacing="5px"
                starRatedColor="yellow"
              />
              <p>{review.comment}</p>
            </div>
          </div>
        ))
      ) : (
        <h2 className=" px-12 border-red-700 border-4 p-4 ">
          No reviews found for this product
        </h2>
      )}
    </>
  );
};

export default ProductReview;
