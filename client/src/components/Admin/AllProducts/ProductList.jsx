import React from "react";
import ProductListComponent from "./ProductListComponent";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl mb-2">Products</h1>
      <table className="table-auto text-left bg-slate-300">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductListComponent product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
