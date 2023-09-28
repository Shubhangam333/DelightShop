import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import { PaymentRequestButtonElement } from "@stripe/react-stripe-js";
import CheckoutSummary from "./CheckoutSummary";

const CheckoutComponent = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="flex flex-col">
      <div className="mx-12 my-12 grid grid-cols-3">
        <div className="col-span-2 py-12">
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartItem item={item} key={item._id} />)
          ) : (
            <h1 className="m-2 bg-red-600 text-white text-center">
              Your cart is empty
            </h1>
          )}
        </div>
        <CheckoutSummary />
      </div>
    </div>
  );
};

export default CheckoutComponent;
