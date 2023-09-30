import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../../../features/filterSlice";

const CategoryComponent = ({ category }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setCategoryFilter(e.target.value));
  };

  return (
    <div className="flex gap-2 p-t-2">
      <input
        type="radio"
        id={category.name}
        value={category._id}
        name="category"
        onChange={handleChange}
      />
      <label htmlFor={category.name} className="text-sm">
        {category.name}
      </label>
    </div>
  );
};

export default CategoryComponent;
