import React from "react";
import CategorySection from "./CategorySection";

const HomeCategory = () => {
  return (
    <article className="flex flex-col justify-between items-center my-8 mx-24">
      <h1 className="text-4xl my-4">Category of Goods</h1>
      <CategorySection />
    </article>
  );
};

export default HomeCategory;
