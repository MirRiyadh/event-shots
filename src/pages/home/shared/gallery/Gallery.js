import React from "react";
import gallery1 from "../../../../assets/gallery/gallery1.jpg";
import gallery2 from "../../../../assets/gallery/gallery2.jpg";
import gallery3 from "../../../../assets/gallery/gallery3.jpg";
import gallery4 from "../../../../assets/gallery/gallery4.jpg";
import gallery5 from "../../../../assets/gallery/gallery5.jpg";
import gallery6 from "../../../../assets/gallery/gallery6.jpg";

const Gallery = () => {
  return (
    <div className=" mt-24 mb-10 md:mb-24 bg-gray-100 py-12">
      <div className="mb-10  w-11/12 lg:w-9/12 mx-auto">
        <p className="text-amber-500 font-semibold">Gallery</p>
        <h1 className="text-5xl font-semibold text-blue-800">
          Here's Some Work Sample
        </h1>
      </div>

      <div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 w-11/12 lg:w-9/12 mx-auto">
            <div>
              <img src={gallery1} alt="" />
            </div>
            <div>
              <img src={gallery2} alt="" />
            </div>
            <div>
              <img src={gallery3} alt="" />
            </div>
            <div>
              <img src={gallery4} alt="" />
            </div>
            <div>
              <img src={gallery5} alt="" />
            </div>
            <div>
              <img src={gallery6} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
