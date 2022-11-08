import React from "react";
import Banner from "./shared/Banner/Banner";
import Intro from "./shared/Intro/Intro";
import Package from "./shared/package/Package";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Package></Package>
      <Intro></Intro>
    </div>
  );
};

export default Home;
