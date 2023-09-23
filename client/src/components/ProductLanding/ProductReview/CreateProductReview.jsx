import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProductReview } from "../../../../../controllers/productController";
import { toast } from "react-toastify";

const ratings = [
  { rate: "1", name: "Very Poor - 1" },
  { rate: "2", name: "Poor - 2" },
  { rate: "3", name: "Average - 3" },
  { rate: "4", name: "Good - 4" },
  { rate: "5", name: "Very Good -5" },
];

const CreateProductReview = ({ product }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [productrating, setProductRating] = useState(0);
  const [productreview, setProductReview] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProductReview({ productrating, productreview }))
      .unwrap()
      .then((res) => {
        toast.success(res);
      })
      .catch((err) => toast.error(err));
  };

  return (
    <div className="w-full text-center ">
      <h1 className="bg-slate-800 text-white mb-2">Create Product Review</h1>
      {isAuthenticated ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start px-12 border-red-700 border-4 p-4 gap-2"
        >
          <label htmlFor="rating">Rating</label>
          <select
            name=""
            id="rating"
            className="w-full p-2 border-2 border-slate-700"
            onChange={(e) => setProductRating(e.target.value)}
          >
            {ratings.map((rating) => (
              <option value={rating.rate}>{rating.name}</option>
            ))}
          </select>
          <label htmlFor="comment">Comment</label>
          <textarea
            name=""
            id="comment"
            className="w-full h-24 p-2 border-2 border-slate-700"
            onChange={(e) => setProductReview(e.target.value)}
          />
          <button
            type="submit"
            className="p-2 bg-red-700 opacity-90 text-slate-200 rounded-md w-52 flex justify-center active:scale-95 hover:opacity-100"
          >
            Submit
          </button>
        </form>
      ) : (
        <h2 className=" px-12 border-red-700 border-4 p-4 ">
          Please login once to write a review
        </h2>
      )}
    </div>
  );
};

export default CreateProductReview;
