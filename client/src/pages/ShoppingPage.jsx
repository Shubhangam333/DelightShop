import React from "react";
import Layout from "../components/Layout";
import LinkSection from "../components/ShoppingSection/LinkSection/LinkSection";
import ShoppingContainer from "../components/ShoppingSection/ShoppingContainer";

const ShoppingPage = () => {
  return (
    <Layout>
      <LinkSection />
      <ShoppingContainer />
    </Layout>
  );
};

export default ShoppingPage;
