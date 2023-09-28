import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAdminProductsAsync } from "../../../features/adminSlice";

const ProductListComponent = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <tr className=" text-center ">
      <td>{product._id}</td>
      <td className="truncate ">{product.name}</td>
      <td>{product.price}</td>
      <td>{product.category.name}</td>
      <td>{product.Stock}</td>
      <td>
        <Link to={`/admin/edit-product/${product._id}`}>
          <button>
            <AiOutlineEdit />
          </button>
        </Link>
      </td>
      <td>
        <button onClick={() => dispatch(deleteAdminProductsAsync(product._id))}>
          <AiOutlineDelete />
        </button>
      </td>
    </tr>
  );
};

export default ProductListComponent;
