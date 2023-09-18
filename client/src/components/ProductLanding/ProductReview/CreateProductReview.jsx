import React from "react";

const CreateProductReview = () => {
  return (
    <div className="w-full text-center ">
      <h1 className="bg-slate-800 text-white mb-2">Create Product Review</h1>
      <form className="flex flex-col items-start px-12 border-red-700 border-4 p-4 gap-2">
        <label htmlFor="rating">Rating</label>
        <select
          name=""
          id="rating"
          className="w-full p-2 border-2 border-slate-700"
        >
          <option value="0">Select--</option>
          <option value="1">Very Poor - 1</option>
          <option value="2">Poor - 2</option>
          <option value="3">Average - 3</option>
          <option value="4">Good - 4</option>
          <option value="5">Very Good - 5</option>
        </select>
        <label htmlFor="comment">Comment</label>
        <textarea
          name=""
          id="comment"
          className="w-full h-24 p-2 border-2 border-slate-700"
        />
        <button
          type="submit"
          className="p-2 bg-red-700 opacity-90 text-slate-200 rounded-md w-52 flex justify-center active:scale-95 hover:opacity-100"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProductReview;
