import { RiDeleteBin5Fill } from "react-icons/ri";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../features/cartSlice.js";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center  gap-3 border-b-2 border-red-500">
      <div className="w-24">
        <img src={item.images[0].url} alt="" className="w-100 object-cover" />
      </div>
      <p className="w-full text-center">{item.name}</p>
      <div className="flex gap-4 items-center">
        <button
          className="text-3xl"
          onClick={() => dispatch(decreaseQuantity(item))}
        >
          -
        </button>
        <input
          type="number"
          className="w-12 pl-4  border-2 border-slate-700 text-2xl text-slate-600"
          value={item.quantity}
        />
        <button
          className="text-3xl"
          onClick={() => dispatch(increaseQuantity(item))}
        >
          +
        </button>
      </div>
      <div>
        <p className="text-lg">{item.price}</p>
      </div>
      <button onClick={() => dispatch(removeFromCart(item))}>
        {" "}
        <RiDeleteBin5Fill className="text-3xl cursor-pointer" />
      </button>
    </div>
  );
};

export default CartItem;
