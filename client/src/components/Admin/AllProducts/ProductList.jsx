import React, { useEffect } from "react";
import ProductListComponent from "./ProductListComponent";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdminProductsAsync } from "../../../features/adminSlice";
import Loader from "../../Loader/Loader";

const ProductList = () => {
  const { Adminproducts } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdminProductsAsync());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl mb-2">Products</h1>
      <table className="text-left bg-slate-300 h-full border-spacing-2 border-separate border-red-500 border-2 ">
        <thead className="bg-black text-white ">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>Stock</th>
            <th className="col-span-4">Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {!Adminproducts ? (
            <Loader className="text-center" />
          ) : (
            Adminproducts.map((product) => (
              <ProductListComponent product={product} key={product._id} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
