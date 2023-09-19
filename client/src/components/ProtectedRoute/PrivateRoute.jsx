import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { loadUserAsync } from "../../features/authSlice";

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
