import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "100vh", margin: "4rem" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
