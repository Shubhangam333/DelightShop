import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdminUsersAsync } from "../../../features/adminSlice";
import AdminUsersComponent from "./AdminUsersComponent";
import Loader from "../../Loader/Loader";
import Pagination from "../../Pagination/Pagination";

const AdminUsers = () => {
  const { AdminUsers } = useSelector((state) => state.admin);
  console.log(AdminUsers);

  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const usersPerPage = 7;

  console.log(totalPages);

  const indexofLastElement = currentPage * usersPerPage;
  const indexofFirstElement = indexofLastElement - usersPerPage;

  const visibleUsers =
    AdminUsers && AdminUsers.slice(indexofFirstElement, indexofLastElement);

  const getAllUsers = useCallback(() => {
    dispatch(getAllAdminUsersAsync())
      .unwrap()
      .then((res) => {
        console.log("res", res);
        setTotalPages(Math.ceil(res.length / usersPerPage));
      });
  }, [dispatch]);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl mb-2">Users</h1>
      <table className="text-left bg-slate-300 h-96 border-spacing-2 border-separate border-red-500 border-2 ">
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
            visibleUsers.map((user) => (
              <AdminUsersComponent user={user} key={user._id} />
            ))
          )}
        </tbody>
      </table>
      {totalPages > 1 && (
        <div className="flex items-center justify-center w-full">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
