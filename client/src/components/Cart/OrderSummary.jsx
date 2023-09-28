import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartTotal } from "../../features/cartSlice";

const OrderSummary = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems && (
        <div className="col-span-1 p-12 font-medium">
          <div className="flex flex-col items-start justify-between gap-12">
            <h2 className="text-2xl  bg-teal-500 text-slate-300 w-full rounded-md px-4">
              Order Summary
            </h2>
            <div className="flex justify-between items-center w-full">
              <p>Total Items</p>
              <p>{cartItems.length}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p>Total Amount</p>
              <p>{`${cartItems.reduce(
                (acc, i) => acc + i.price * i.quantity,
                0
              )}`}</p>
            </div>
            {isAuthenticated ? (
              <Link to="/profile/checkout">
                <button className="p-2 bg-red-700 opacity-90 text-slate-200 rounded-md w-full flex justify-center active:scale-95 hover:opacity-100">
                  Proceed to Checkout
                </button>
              </Link>
            ) : (
              <p className="p-2 bg-red-700 opacity-90 text-slate-200 ">
                Please login once to proceed to checkout page
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OrderSummary;
