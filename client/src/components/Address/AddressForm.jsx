import React, { useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const AddressForm = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  return (
    <div className="flex flex-col gap-8 col-span-2 font-medium">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <label htmlFor="firstname" className="text-lg">
            First Name :
          </label>
          <input
            type="text"
            id="firstname"
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
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="pincode" className="text-lg">
            PinCode :
          </label>
          <input
            type="number"
            id="pincode"
            className="border-2 border-slate-700 w-72 h-12 px-4 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
