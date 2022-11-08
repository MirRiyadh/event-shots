import React from "react";
import Banner from "./shared/Banner/Banner";
import Gallery from "./shared/gallery/Gallery";
import Intro from "./shared/Intro/Intro";
import Package from "./shared/package/Package";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Package></Package>
      <Intro></Intro>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
