import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AiOutlineShop, AiOutlineUser } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AdminDropDown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-red-500  px-4 py-3 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <AiOutlineUser className="text-lg" />
          Admin
          <ChevronDownIcon
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none shadow-zinc-800">
          <div className="px-1 py-1 ">
            <Link to="/admin/create-product">
              <Menu.Item className="hover:bg-red-500 text-black w-full rounded-md  my-2">
                <button className="flex items-center gap-2 px-2 py-1 hover:text-white">
                  <IoCreateOutline className="" />
                  <span className="text-md">Create Product</span>
                </button>
              </Menu.Item>
            </Link>
            <Link to="/admin/products">
              <Menu.Item className="hover:bg-red-500 text-black w-full rounded-md  my-2">
                <button className="flex items-center gap-2 px-2 py-1 hover:text-white">
                  <AiOutlineShop className="" />
                  <span className="text-md"> Products</span>
                </button>
              </Menu.Item>
            </Link>
            <Link to="/admin/users">
              <Menu.Item className="hover:bg-red-500 text-black w-full rounded-md  my-2">
                <button className="flex items-center gap-2 px-2 py-1 hover:text-white">
                  <FaUsers className="" />
                  <span className="text-md"> Users</span>
                </button>
              </Menu.Item>
            </Link>
            <Link to="/admin/orders">
              <Menu.Item className="hover:bg-red-500 text-black w-full rounded-md  my-2">
                <button className="flex items-center gap-2 px-2 py-1 hover:text-white">
                  <AiOutlineShop className="" />
                  <span className="text-md"> Orders</span>
                </button>
              </Menu.Item>
            </Link>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default AdminDropDown;
