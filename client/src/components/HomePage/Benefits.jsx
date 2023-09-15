import React from "react";

const Benefits = () => {
  return (
    <div className="flex items-center justify-between px-24 py-8">
      <div className="flex flex-col items-center">
        <img src="./truck.webp" alt="" className="w-16" />
        <p>Express Delivery</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="./cod.webp" alt="" className="w-16" />
        <p>Cash on Delivery</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="./headphones.webp" alt="" className="w-16" />
        <p>24/7 support</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="./guranteed-delivery.webp" alt="" className="w-16" />
        <p>Guarantee the originality</p>
      </div>
    </div>
  );
};

export default Benefits;
