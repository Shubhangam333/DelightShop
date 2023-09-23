import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserAsync } from "../features/authSlice";

const Header = () => {
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <header className="font-medium ">
      <div className="bg-cyan-950 h-8 flex items-center justify-center ">
        <p className="text-gray-50 text-xs">
          <i className="fa-solid fa-truck p-2"></i>
          <span className="">Get free delivery on orders above 1000</span>
        </p>
      </div>
      <div className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-10  bg-white">
        <nav className="flex items-center justify-between gap-8">
          <Link to="/">
            <h1 className="text-2xl text-cyan-950">
              Delight <span className="text-fuchsia-700">Shop</span>
            </h1>
          </Link>
          <ul className="flex items-center justify-between gap-8 text-slate-950 ">
            <li className="hover:text-fuchsia-700 ">
              <Link to="/">Men</Link>
            </li>
            <li className="hover:text-fuchsia-700">
              <Link to="/">Women</Link>
            </li>
            <li className="hover:text-fuchsia-700">
              <Link to="/">Kids</Link>
            </li>
            <li className="hover:text-fuchsia-700">
              <Link to="/">Home & Living</Link>
            </li>
          </ul>
        </nav>
        <div className="max-w-md mx-auto">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white ">
            <div className="grid place-items-center h-full w-12 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-slate-950 pr-2"
              type="text"
              id="search"
              placeholder="What are you looking for ?"
            />
          </div>
        </div>

        <div className="flex items-center gap-8">
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
              <Link to="/login" className="cursor-pointer">
                <div className="hover:text-fuchsia-700 flex items-center">
                  {" "}
                  <p>
                    {" "}
                    <AiOutlineUser className="text-2xl" />
                  </p>
                </div>
              </Link>
            )}
          </div>
          <div className="hover:text-fuchsia-700 cursor-pointer">
            <AiOutlineHeart className="text-2xl" />
          </div>
          <Link to="/cart">
            <div className="px-4 hover:text-fuchsia-700 cursor-pointer bg-red-600 flex justify-between text-white">
              <AiOutlineShoppingCart className="text-2xl" />
              <span>{cartItems.length}</span>
            </div>
          </Link>
          {isAuthenticated && (
            <button
              className="bg-red-600 text-white px-2"
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
