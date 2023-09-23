import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/HomePage/Hero/Hero";
import Benefits from "../components/HomePage/Benefits";
import SpecialOffers from "../components/HomePage/Offers/SpecialOffers";
import Latest from "../components/HomePage/LatestGoods/Latest";
import HomeCategory from "../components/HomePage/HomeCategory/HomeCategory";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <SpecialOffers />
      <Benefits />

      <HomeCategory />
      <Latest />
    </Layout>
  );
};

export default Home;
