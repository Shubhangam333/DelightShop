import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  addtoCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../features/cartSlice";
import StarRatings from "react-star-ratings";

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full font-medium">
      <h1 className="text-black text-2xl border-b-2 border-red-400 mb-8 ">
        {product.name}
      </h1>
      <p className="mb-4">
        <StarRatings
          rating={2.403}
          starDimension="20px"
          starSpacing="5px"
          starRatedColor="yellow"
        />
      </p>
      <h2 className="text-slate-900 font-medium text-xl">Product Details</h2>
      <div className="flex flex-col justify-between gap-3">
        <div className="details flex ">
          <h5 className="text-slate-600">Battery:</h5>
          <p>5000 mAh</p>
        </div>
        <div className="details flex ">
          <h5 className="text-slate-600">CPU :</h5>
          <p>2.4 GHz octa-core processor</p>
        </div>
        <div className="details flex ">
          <h5 className="text-slate-600">RAM :</h5>
          <p>125 GB</p>
        </div>
        <div className="details flex ">
          <h5 className="text-slate-600">Operating System :</h5>
          <p>Android 11</p>
        </div>
        <div className="details flex ">
          <h5 className="text-slate-600">Main Camera :</h5>
          <p> Quad 50 MP / 8 MP / 2 MP / 2 MP main cameras</p>
        </div>
        <div className="details flex ">
          <h5 className="text-slate-600">Screen :</h5>
          <p>6.43" Full HD+ AMOLED touchscreen</p>
        </div>
        <div className="details flex ">
          <h5 className="text-slate-600">Front Camera :</h5>
          <p>13 MP front camera</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-8 text-2xl">
            <p>Product Price</p>
            <p>{product.price}</p>
          </div>
          <div className="flex gap-4 items-center">
            <button
              className="text-3xl"
              onClick={() => dispatch(decreaseQuantity(product))}
            >
              -
            </button>
            <input
              type="number"
              className="w-12 pl-4  border-2 border-slate-700 text-2xl text-slate-600"
              value={product.length}
            />
            <button
              className="text-3xl"
              onClick={() => dispatch(increaseQuantity(product))}
            >
              +
            </button>
          </div>
          <button
            className="p-2 bg-red-700 opacity-90 text-slate-200 rounded-md w-52 flex justify-center active:scale-95 hover:opacity-100"
            onClick={() => dispatch(addtoCart(product))}
          >
            <p>Add to cart </p>
            <AiOutlineShoppingCart className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
