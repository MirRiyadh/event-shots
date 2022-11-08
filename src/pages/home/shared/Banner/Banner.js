import React from "react";
import banner1 from "../../../../assets/banner/banner1.jpg";
import banner2 from "../../../../assets/banner/banner2.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="mt-4 text-white">
        <div className="carousel w-full ">
          <div id="slide1" className="carousel-item relative w-full ">
            <img src={banner1} className="w-full " />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-20 md:left-36 lg:left-56 top-1/4">
              <h1 className=" text-3xl text-center md:text-left lg:text-7xl font-bold text-white">
                Caputre Your <br /> Every Momemts
              </h1>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-20 md:left-36 lg:left-56 top-1/4 pt-28 md:pt-36 lg:pt-48">
              <p className="text-xs md:text-base">
                Our pride is in offering the best shoots as we help you tell
                your story in photos
              </p>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-28 md:left-36 lg:left-56 top-1/4 pt-56 md:pt-60 lg:pt-72">
              <button className="py-2 px-5 bg-rose-600 hover:bg-white font-bold hover:text-black">
                See our Package
              </button>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full ">
            <img src={banner2} className="w-full h-56 md:h-full" />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-20 md:left-36 lg:left-56 top-2/4">
              <h1 className=" text-3xl text-center md:text-left lg:text-7xl font-bold text-white mb-8 lg:mb-48">
                Memories
                <br /> Won't Wait <br />
                Showcase Your Art
              </h1>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-28 md:left-36 lg:left-56 top-1/4 pt-64 md:pt-80 lg:pt-96">
              <button className="py-2 px-5 bg-rose-600 hover:bg-white font-bold hover:text-black">
                See our Package
              </button>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
