import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../Loader/Loader";

import OrderDetailsComponent from "./OrderDetailsComponent";
import { getOrderDetailsAsync } from "../../../features/orderSlice";
import Pagination from "../../Pagination/Pagination";

const Orders = () => {
  const { UserOrders } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const ordersPerPage = 7;

  console.log(totalPages);

  const indexofLastElement = currentPage * ordersPerPage;
  const indexofFirstElement = indexofLastElement - ordersPerPage;

  const visibleOrders =
    UserOrders && UserOrders.slice(indexofFirstElement, indexofLastElement);

  useEffect(() => {
    dispatch(getOrderDetailsAsync())
      .unwrap()
      .then((res) => {
        console.log("res", res);
        setTotalPages(Math.ceil(res.length / ordersPerPage));
      });
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
            visibleOrders.map((order) => (
              <OrderDetailsComponent order={order} key={order._id} />
            ))
          )}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div className="flex items-center justify-center w-full">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default Orders;
