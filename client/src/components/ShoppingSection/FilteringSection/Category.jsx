import React, { useEffect } from "react";
import CategoryComponent from "./CategoryComponent";
import { BiCategoryAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAsync } from "../../../features/categorySlice";
import Loader from "../../Loader/Loader";

const Category = () => {
  const { categories, isLoading } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesAsync());
  }, [dispatch]);
  return (
    <div>
      <h1 className="flex items-center justify-center text-xl font-bold p-4">
        <BiCategoryAlt />
        Categories
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        categories &&
        categories.map((category) => (
          <CategoryComponent key={category._id} category={category} />
        ))
      )}
    </div>
  );
};

export default Category;
