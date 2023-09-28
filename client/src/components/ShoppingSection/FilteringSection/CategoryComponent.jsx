import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategoryFilter } from "../../../features/filterSlice";

const CategoryComponent = ({ category }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 p-t-2">
      <input
        type="checkbox"
        id="cloth"
        value={category.name}
        onChange={(e) => dispatch(setCategoryFilter(e.target.value))}
      />
      <label htmlFor="cloth" className="text-sm">
        {category.name}
      </label>
    </div>
  );
};

export default CategoryComponent;
