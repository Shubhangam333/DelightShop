import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { addtoCart } from "../../features/cartSlice";
import { BsCurrencyRupee } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";

const ShoppingProductCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col  w-60  shadow-xl relative py-4  gap-2">
      <Link to={`/product/${product._id}`}>
        <div className="w-full bg-slate-300 h-44">
          <img
            src={product.images[0].url}
            alt=""
            className="w-full h-full object-contain hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex justify-between">
        {" "}
        <StarRatings
          rating={product.ratings}
          starDimension="20px"
          starSpacing="5px"
          starRatedColor="yellow"
        />
        <span>{product.numOfReviews} review</span>
      </div>
      <p className="truncate w-full ">{product.name}</p>
      <div className="flex items-center justify-between w-full">
        <p className="flex justify-between">
          <BsCurrencyRupee className="text-2xl " /> <span>{product.price}</span>
        </p>
        <AiOutlineHeart className="text-2xl hover:pointer" />
      </div>
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

export default ShoppingProductCard;
