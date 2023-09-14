import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
import SideBarMenu from "./MegaMenu/SideBarMenu";

const Header = () => {
  return (
    <header className="font-medium ">
      <div className="bg-cyan-950 h-8 flex items-center justify-center ">
        <p className="text-gray-50 text-xs">
          <i class="fa-solid fa-truck p-2"></i>
          <span className="">Get free delivery on orders above 1000</span>
        </p>
      </div>
      <div className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-10  bg-white">
        <nav className="flex items-center justify-between gap-8">
          <h1 className="text-2xl text-cyan-950">
            Delight <span className="text-fuchsia-700">Shop</span>
          </h1>
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
        <div class="max-w-md mx-auto">
          <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white ">
            <div class="grid place-items-center h-full w-12 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              class="peer h-full w-full outline-none text-sm text-slate-950 pr-2"
              type="text"
              id="search"
              placeholder="What are you looking for ?"
            />
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div>
            <Link to="/signup" className="cursor-pointer">
              <div className="hover:text-fuchsia-700 flex items-center">
                {" "}
                <HiOutlineLogin className="text-lg" />
                <p> Log In | Sign Up</p>
              </div>
            </Link>
          </div>
          <div className="hover:text-fuchsia-700 cursor-pointer">
            <AiOutlineHeart className="text-lg" />
          </div>
          <div className="px-4 hover:text-fuchsia-700 cursor-pointer">
            <AiOutlineShoppingCart className="text-lg" />
          </div>
        </div>
      </div>

      <div className="bg-fuchsia-700">
        <h1 className=" text-center text-slate-300 my-2">
          Upto 60% off shop now
        </h1>
      </div>
      <div className="w-full">
        <img src="src/assets/slider-img-2.png" alt="" />
      </div>
    </header>
  );
};

export default Header;
