import React from "react";
import Category from "./Category";
import Price from "./Price";

const Filter = () => {
  return (
    <div className="p-2 col-span-1">
      <Category />
      <Price />
    </div>
  );
};

export default Filter;
