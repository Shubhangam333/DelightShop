import React from "react";
import Layout from "../components/Layout";
import Benefits from "../components/Benefits";
import SpecialOffers from "../components/Offers/SpecialOffers";
import HomeCategory from "../components/HomeCategory/HomeCategory";

const Home = () => {
  return (
    <Layout>
      <Benefits />
      <SpecialOffers />
      <HomeCategory />
    </Layout>
  );
};

export default Home;
