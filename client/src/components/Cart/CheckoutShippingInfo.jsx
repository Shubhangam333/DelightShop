import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CheckoutShippingInfo = () => {
  const { shippingInfo } = useSelector((state) => state.cart);
  return (
    <div>
      <div className="font-medium">
        <div className="flex flex-col gap-4 border-red-500 border-2 text-slate-800">
          <p>
            {shippingInfo.firstname} {shippingInfo.lastname}
          </p>
          <p>
            {shippingInfo.address} ,{shippingInfo.city}, {shippingInfo.region},
            {shippingInfo.country} , Postal code : {shippingInfo.pincode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutShippingInfo;
