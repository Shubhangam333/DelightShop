import React from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  return (
    <div className="mx-24 my-12 grid grid-cols-3">
      <div className="col-span-2 py-12">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <OrderSummary />
    </div>
  );
};

export default Cart;
