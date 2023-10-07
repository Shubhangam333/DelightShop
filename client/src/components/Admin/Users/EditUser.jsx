import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";
import { getAdminUserByIdAsync } from "../../../features/adminSlice";

const EditUser = () => {
  const dispatch = useDispatch();

  const { AdminUser } = useSelector((state) => state.admin);

  const params = useParams();

  const { userId } = params;

  useEffect(() => {
    dispatch(getAdminUserByIdAsync(userId));
  }, [dispatch]);
  return (
    <>
      {AdminUser && (
        <div className="py-12 px-18 grid items-center justify-center border-red-500 border-2 ">
          <h1 className="text-3xl text-slate-950 py-4">Edit Profile</h1>

          <form className="flex flex-col justify-between ">
            <label htmlFor="name" className="py-2">
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
            />
            <button
              type="submit"
              className="rounded-md bg-red-700 py-2 px-2 my-4 text-slate-100 active:scale-95"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditUser;
