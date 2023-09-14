import React from "react";

const CategoryCard = () => {
  return (
    <div className="flex bg-orange-200 p-8">
      <div>
        <h3>Digital Products</h3>
        <p>We offer the newest products at the most competitive prices</p>
        <button>See All Products</button>
      </div>
      <div className="relative">
        <img src="./digital-category.webp" alt="" srcset="" className="w-24 " />
      </div>
    </div>
  );
};

export default CategoryCard;
