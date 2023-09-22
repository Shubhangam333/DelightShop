import React from "react";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BsCurrencyRupee } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../../features/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-between w-60 shadow-xl relative py-4 gap-2">
      <Link to={`/product/${product._id}`}>
        <div className="w-full bg-slate-300">
          <img
            src={product.images[0].url}
            alt=""
            className="w-full object-contain hover:scale-105"
          />
        </div>
      </Link>
      <p>star</p>
      <p className="truncate w-full ">{product.name}</p>
      <div className="flex items-center justify-between w-full">
        <p className="flex justify-between">
          <BsCurrencyRupee className="text-2xl " /> <span>{product.price}</span>
        </p>
        <AiOutlineHeart className="text-2xl hover:pointer" />
      </div>

      {/* <div className="icons absolute left-2 top-8 bg-slate-50 flex flex-col gap-2 py-2 text-slate-400 rounded-lg">
        <BsCartPlus className="text-2xl" />
        <BsFillBagHeartFill className="text-2xl" />
      </div> */}
      <button
        className="p-2 bg-red-700 text-slate-200 rounded-md w-full flex justify-center active:scale-95 hover:opacity-90"
        onClick={() => dispatch(addtoCart(product))}
      >
        <p>Add to cart </p>
        <AiOutlineShoppingCart className="text-2xl" />
      </button>
    </div>
  );
};

export default ProductCard;
