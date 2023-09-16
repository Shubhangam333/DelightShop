import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex items-center justify-between px-4 py-4 border-b-2 border-red-500">
      <div className="w-24">
        <img src="./mobile-2.webp" alt="" className="w-100 object-cover" />
      </div>
      <p>SAMSUNG Galaxy A22 5G – 64 GB, Grey</p>
      <div className="flex gap-4 items-center">
        <button className="text-3xl">-</button>
        <input
          type="number"
          className="w-12 pl-4  border-2 border-slate-700 text-2xl text-slate-600"
          value="1"
        />
        <button className="text-3xl">+</button>
      </div>
      <div>
        <p>Total Amount</p>
        <p>2000</p>
      </div>
      <RiDeleteBin5Fill className="text-2xl cursor-pointer" />
    </div>
  );
};

export default CartItem;
