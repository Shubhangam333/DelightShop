import React from "react";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="my-16">
      <div className="border-y-2 border-y-slate-400  border-solid p-12 px-24 text-slate-700">
        <div className="grid grid-cols-3 mx-24 gap-48 ">
          <div className="section flex flex-col gap-2 items-start">
            <p className="border-4 border-solid border-l-fuchsia-900 px-2 -mx-8">
              Delight Shop
            </p>
            <p>About us</p>
            <p>Contact Us</p>
            <p>Sale in DelightShop</p>
            <p>Career Opportunities</p>
          </div>
          <div className="section flex flex-col gap-2 items-start">
            <p className="border-4 border-solid border-l-fuchsia-900 px-2 -mx-8">
              Customer Services
            </p>
            <p>Common Questions</p>
            <p>Return Proedures</p>
            <p>Privacy</p>
          </div>
          <div className="section flex flex-col gap-2 items-start">
            <p className="border-4 border-solid border-l-fuchsia-900 px-2 -mx-8">
              Shopping Guide
            </p>
            <p>How to Place an Order?</p>
            <p>Order Submission Procedure</p>
            <p>Payment Methods</p>
            <p>Career Opportunities</p>
          </div>
        </div>
        <p className="px-36 text-slate-700">Be With Us!</p>
        <div className="text-4xl mx-36 flex justify-between items-center w-36 text-slate-700">
          <AiFillInstagram />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
          <AiFillMail />
        </div>
        <form className="flex items-center flex-wrap sm:flex-nowrap mt-4 mx-32">
          <input
            className=" w-72 py-3 px-4 outline-none rounded-lg sm:rounded-none ltr:sm:rounded-tl-lg ltr:sm:rounded-bl-lg rtl:sm:rounded-tr-lg rtl:sm:rounded-br-lg shadow-md sm:shadow-none focus:shadow-sm"
            type="email"
            placeholder="Please Enter Your Email"
            wfd-id="id12"
          />
          <button
            className="outline-none py-3 px-4 w-full sm:w-auto mt-2 sm:mt-0 rounded-lg sm:rounded-none md:w-auto bg-red-600 text-neutral-200 text-palette-side rtl:sm:rounded-tl-lg rtl:sm:rounded-bl-lg ltr:sm:rounded-tr-lg ltr:sm:rounded-br-lg "
            type="button"
          >
            Register
          </button>
        </form>
      </div>

      <p className="text-center my-8">
        ©2023 DelightShop. All rights reserved - Designed and Developed by
        Shubhangam Saxena
      </p>
    </footer>
  );
};

export default Footer;
