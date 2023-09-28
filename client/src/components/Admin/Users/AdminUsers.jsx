import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdminUsersAsync } from "../../../features/adminSlice";
import AdminUsersComponent from "./AdminUsersComponent";
import Loader from "../../Loader/Loader";

const AdminUsers = () => {
  const { AdminUsers } = useSelector((state) => state.admin);
  console.log(AdminUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAdminUsersAsync());
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl mb-2">Users</h1>
      <table className="text-left bg-slate-300 h-full border-spacing-2 border-separate border-red-500 border-2 ">
        <thead className="bg-black text-white ">
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
            <th>ISACTIVE</th>
            <th className="col-span-2">Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {!AdminUsers ? (
            <Loader className="text-center" />
          ) : (
            AdminUsers.map((user) => (
              <AdminUsersComponent user={user} key={user._id} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
