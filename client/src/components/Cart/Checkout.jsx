import React, { useEffect } from "react";
import CheckoutComponent from "./CheckoutComponent";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import CartItem from "./CartItem";
import CheckoutSummary from "./CheckoutSummary";
import CheckOutItem from "./CheckOutItem";
import CheckoutShippingInfo from "./CheckoutShippingInfo";
import { createOrderItems } from "../../features/orderSlice";

const Checkout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { orderItems } = useSelector((state) => state.order);

  console.log(orderItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createOrderItems(cartItems));
  }, []);

  return (
    <>
      <div className="mx-12 my-12 grid grid-cols-3">
        <div className="col-span-2 py-12">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CheckOutItem item={item} key={item._id} />)
          ) : (
            <h1 className="m-2 bg-red-600 text-white text-center">
              Your cart is empty
            </h1>
          )}
        </div>
        <CheckoutSummary />
        <CheckoutShippingInfo />
      </div>
    </>
  );
};

export default Checkout;
