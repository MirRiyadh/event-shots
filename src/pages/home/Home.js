import React from "react";
import Banner from "./shared/Banner/Banner";
import Choose from "./shared/choose/Choose";
import Gallery from "./shared/gallery/Gallery";
import Intro from "./shared/Intro/Intro";
import Package from "./shared/package/Package";
import Subscribe from "./shared/subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Package></Package>
      <Intro></Intro>
      <Gallery></Gallery>
      <Choose></Choose>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
