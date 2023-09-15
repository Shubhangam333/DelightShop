import React from "react";

const CategoryComponent = () => {
  return (
    <div className="flex gap-2 p-t-2">
      <input type="checkbox" id="cloth" />
      <label htmlFor="cloth" className="text-sm">
        Tshirts
      </label>
    </div>
  );
};

export default CategoryComponent;
