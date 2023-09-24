import React from "react";

const ProductListComponent = ({ product }) => {
  return (
    <tr className="px-4">
      <td>{product._id}</td>
      <td className="truncate ">{product.name.slice(0, 40)}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td>{product.Stock}</td>
      <td>{product.Stock}</td>
    </tr>
  );
};

export default ProductListComponent;
