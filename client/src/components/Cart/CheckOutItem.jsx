import React from "react";

const CheckOutItem = ({ item }) => {
  return (
    <div className="flex items-center my-8 gap-3 border-b-2 border-red-500">
      <div className="w-24">
        <img src={item.images[0].url} alt="" className="w-100 object-cover" />
      </div>
      <p className="w-full text-center">{item.name}</p>

      <div>
        <p className="text-lg">{item.price}</p>
      </div>
    </div>
  );
};

export default CheckOutItem;
