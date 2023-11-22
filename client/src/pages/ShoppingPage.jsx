import React, { useEffect } from "react";
import Layout from "../components/Layout";
import LinkSection from "../components/ShoppingSection/LinkSection/LinkSection";
import ShoppingContainer from "../components/ShoppingSection/ShoppingContainer";

const ShoppingPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Layout>
      <LinkSection />
      <ShoppingContainer />
    </Layout>
  );
};

export default ShoppingPage;
