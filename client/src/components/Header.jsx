import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAsync } from "../features/authSlice";
import UserDropDown from "./DropDown/UserDropDown";
import AdminDropDown from "./DropDown/AdminDropDown";

const Header = () => {
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <header className="font-medium z-10 header">
      <div className="bg-cyan-950 h-8 flex items-center justify-center ">
        <p className="text-gray-50 text-xs">
          <i className="fa-solid fa-truck p-2"></i>
          <span className="">Get free delivery on orders above 1000</span>
        </p>
      </div>
      <div className="flex items-center justify-between p-4   bg-white">
        <nav className="flex items-center  gap-8">
          <Link to="/">
            <h1 className="text-2xl text-cyan-950">
              Delight <span className="text-fuchsia-700">Shop</span>
            </h1>
          </Link>
        </nav>
        <ul className="flex items-center justify-between gap-8 text-slate-950 ">
          <li className="hover:text-fuchsia-700 text-xl">
            <Link to="/shopping">Shop</Link>
          </li>
        </ul>

        <div className="flex items-center gap-8">
          <div className="hover:text-fuchsia-700 cursor-pointer">
            {/* <AiOutlineHeart className="text-2xl" /> */}
          </div>
          <div>
            {!isAuthenticated ? (
              <Link to="/login" className="cursor-pointer">
                <div className="hover:text-fuchsia-700 flex items-center">
                  {" "}
                  <HiOutlineLogin className="text-lg" />
                  <p> Log In | Sign Up</p>
                </div>
              </Link>
            ) : (
              <UserDropDown />
            )}
          </div>
          <div>
            {isAuthenticated && userInfo && userInfo.role === "admin" && (
              <AdminDropDown />
            )}
          </div>
          <Link to="/cart">
            <div className="px-4 py-2 rounded-md hover:text-fuchsia-700 cursor-pointer bg-red-500 flex justify-between text-white">
              <AiOutlineShoppingCart className="text-2xl" />
              <span>{cartItems.length}</span>
            </div>
          </Link>

          {isAuthenticated && (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => dispatch(logoutUserAsync())}
            >
              Logout
            </button>
          )}
        </div>
      </div>

      <div className="bg-fuchsia-700">
        <h1 className=" text-center text-slate-300 my-2">
          Upto 60% off shop now
        </h1>
      </div>
    </header>
  );
};

export default Header;
