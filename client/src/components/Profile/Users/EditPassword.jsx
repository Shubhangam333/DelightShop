import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  clearErrors,
  updateUserPasswordAsync,
} from "../../../features/authSlice";
import { useNavigate } from "react-router-dom";

const EditPassword = () => {
  const dispatch = useDispatch();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { error } = useSelector((state) => state.auth);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateUserPasswordAsync({ oldPassword, newPassword, confirmPassword })
    )
      .unwrap()
      .then(() => {
        toast.success("Password Updated Successfully");
        Navigate("/profile");
      })
      .catch(() => {});
  };

  useEffect(() => {
    toast.error(error);
    dispatch(clearErrors());
  }, [error, dispatch]);
  return (
    <div className="py-12 px-18 grid items-center justify-center border-red-500 border-2 ">
      <h1 className="text-3xl text-slate-950 py-4">Edit Password</h1>

      <form className="flex flex-col justify-between " onSubmit={handleSubmit}>
        <label htmlFor="oldpassword" className="py-2">
          Enter Current Password
        </label>
        <input
          name="oldpassword"
          type="password"
          id="oldpassword"
          onChange={(e) => setOldPassword(e.target.value)}
          className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
        />

        <label htmlFor="newpassword" className="py-2">
          Enter New Password
        </label>
        <input
          name="newpassword"
          type="password"
          id="newpassword"
          onChange={(e) => setNewPassword(e.target.value)}
          className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
        />
        <label htmlFor="confirmpassword" className="py-2">
          Confirm your Password
        </label>
        <input
          name="confirmpassword"
          type="password"
          id="confirmpassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
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
  );
};

export default EditPassword;
