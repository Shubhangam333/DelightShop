import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../Loader/Loader";

import OrderDetailsComponent from "./OrderDetailsComponent";
import { getOrderDetailsAsync } from "../../../features/orderSlice";

const Orders = () => {
  const { UserOrders } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetailsAsync());
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
          </tr>
        </thead>
        <tbody className="">
          {!UserOrders ? (
            <Loader className="text-center" />
          ) : (
            UserOrders.map((order) => (
              <OrderDetailsComponent order={order} key={order._id} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
