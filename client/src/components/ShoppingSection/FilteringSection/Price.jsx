import React from "react";
import { useDispatch } from "react-redux";
import { setPriceFilter } from "../../../features/filterSlice";

const Price = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="flex items-center justify-center text-xl font-bold p-4">
        Price
      </h1>
      <select
        name="pricefilter"
        id="pricefilter"
        onChange={(e) => dispatch(setPriceFilter(e.target.value))}
      >
        <option value="10000">Below 10000</option>
        <option value="30000">Between 10000 to 30000</option>
        <option value="50000">Between 30000 to 50000</option>
        <option value="100000">Between 50000 to 100000</option>
      </select>
    </div>
  );
};

export default Price;
