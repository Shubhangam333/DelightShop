import React from "react";
import CategoryComponent from "./CategoryComponent";
import { BiCategoryAlt } from "react-icons/bi";

const Category = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center text-xl font-bold p-4">
        <BiCategoryAlt />
        Categories
      </h1>
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
      <CategoryComponent />
    </div>
  );
};

export default Category;
