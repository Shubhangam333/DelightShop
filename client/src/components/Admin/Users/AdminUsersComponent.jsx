import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAdminUsersAsync } from "../../../features/adminSlice";

const AdminUsersComponent = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <tr className=" text-center ">
      <td>{user._id}</td>
      <td className="truncate ">{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>{user.isActive ? "True" : "False"}</td>
      <td>
        <Link to={`/admin/edit-user/${user._id}`}>
          <button>
            <AiOutlineEdit />
          </button>
        </Link>
      </td>
      <td>
        <button>
          <AiOutlineDelete
            onClick={() => dispatch(deleteAdminUsersAsync(user._id))}
          />
        </button>
      </td>
    </tr>
  );
};

export default AdminUsersComponent;
