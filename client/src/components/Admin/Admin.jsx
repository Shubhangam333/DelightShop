import React from "react";
import DashBoardNavigation from "./DashBoardNavigation";
import AdminDashBoard from "./AdminDashBoard";

const Admin = () => {
  return (
    <div className="grid grid-cols-3 mx-16 my-12">
      <DashBoardNavigation />
      <AdminDashBoard />
    </div>
  );
};

export default Admin;
