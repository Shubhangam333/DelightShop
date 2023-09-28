import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { saveShippingInfo } from "../../features/cartSlice";

const AddressForm = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPinCode] = useState();
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      saveShippingInfo({
        country,
        firstname,
        lastname,
        city,
        region,
        pincode,
        address,
      })
    );
  };

  return (
    <div className="flex flex-col  col-span-2 font-medium">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <label htmlFor="firstname" className="text-lg">
            First Name :
          </label>
          <input
            type="text"
            id="firstname"
            onChange={(e) => setFirstName(e.target.value)}
            className="border-2 border-slate-700 w-72 h-12 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="lastname" className="text-lg">
            Last Name :
          </label>
          <input
            type="text"
            id="lastname"
            onChange={(e) => setLastName(e.target.value)}
            className="border-2 border-slate-700 w-72 h-12 px-4 rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="address" className="text-lg">
          Address
        </label>
        <textarea
          style={{ resize: "none" }}
          name=""
          id="address"
          className="border-2 border-slate-700 w-full p-4 rounded-md"
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <label htmlFor="country" className="text-lg">
            Country
          </label>
          <CountryDropdown
            id="country"
            value={country}
            onChange={(val) => setCountry(val)}
            className="border-2 border-slate-700 w-72 h-12 px-4 rounded-md"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="region" className="text-lg">
            State
          </label>
          <RegionDropdown
            country={country}
            value={region}
            id="region"
            onChange={(val) => setRegion(val)}
            className="border-2 border-slate-700 w-72 h-12 px-4 rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <label htmlFor="city" className="text-lg">
            City :
          </label>
          <input
            type="text"
            id="city"
            className="border-2 border-slate-700 w-72 h-12 px-4 rounded-md"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-4 ">
          <label htmlFor="pincode" className="text-lg">
            PinCode :
          </label>
          <input
            type="number"
            id="pincode"
            className="border-2 border-slate-700 w-72 h-12 px-4 rounded-md "
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button
          onClick={handleClick}
          className="p-2 my-4 bg-red-700 opacity-90 text-slate-200 rounded-md w-full flex justify-center active:scale-95 hover:opacity-100"
        >
          Save Shipping Information
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
