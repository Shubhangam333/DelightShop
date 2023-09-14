import React from "react";
import Layout from "../components/Layout";
import Benefits from "../components/Benefits";
import SpecialOffers from "../components/Offers/SpecialOffers";
import HomeCategory from "../components/HomeCategory/HomeCategory";
import Latest from "../components/LatestGoods/Latest";

const Home = () => {
  return (
    <Layout>
      <Benefits />
      <SpecialOffers />
      <HomeCategory />
      <Latest />
    </Layout>
  );
};

export default Home;
