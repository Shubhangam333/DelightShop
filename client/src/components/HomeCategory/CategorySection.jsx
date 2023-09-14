import React from "react";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-8">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
};

export default CategorySection;
