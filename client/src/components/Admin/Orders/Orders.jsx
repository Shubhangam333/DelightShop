import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAdminOrdersAsync,
  getAllAdminUsersAsync,
} from "../../../features/adminSlice";
import Loader from "../../Loader/Loader";
import OrderComponent from "./OrderComponent";

const Orders = () => {
  const { AdminOrders } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdminOrdersAsync());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl mb-2">Orders</h1>
      <table className="text-left bg-slate-300 h-full border-spacing-2 border-separate border-red-500 border-2 ">
        <thead className="bg-black text-white ">
          <tr>
            <th>Order ID</th>
            <th>Payment Status</th>
            <th>User</th>
            <th>Order Status</th>
            <th>Paid At</th>
            <th>Payment ID</th>
            <th className="col-span-2">Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {!AdminOrders ? (
            <Loader className="text-center" />
          ) : (
            AdminOrders.map((order) => (
              <OrderComponent order={order} key={order._id} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
