import React from "react";
import AddressForm from "../Address/AddressForm";
import OrderSummary from "../Cart/OrderSummary";

const Shipping = () => {
  return (
    <div className="grid grid-cols-3 m-24">
      <AddressForm />
      <OrderSummary />
    </div>
  );
};

export default Shipping;
