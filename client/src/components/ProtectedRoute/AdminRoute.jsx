import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {isAuthenticated && userInfo && userInfo.role === "admin" ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default AdminRoute;
