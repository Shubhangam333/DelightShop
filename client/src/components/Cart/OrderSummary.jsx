import React from "react";

const OrderSummary = () => {
  return (
    <div className="col-span-1 p-12">
      <div className="flex flex-col items-start justify-between gap-12 ">
        <h2 className="text-2xl">Order Summary</h2>
        <div className="flex justify-between items-center w-full">
          <p>Total Quantity</p>
          <p>2</p>
        </div>
        <div className="flex justify-between items-center w-full">
          <p>Total Amount</p>
          <p>2000</p>
        </div>
        <button className="p-2 bg-red-700 opacity-90 text-slate-200 rounded-md w-52 flex justify-center active:scale-95 hover:opacity-100">
          <p>Proceed to Checkout </p>
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
