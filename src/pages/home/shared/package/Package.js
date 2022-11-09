import React, { useEffect, useState } from "react";
import SinglePackage from "./SinglePackage";
import { FaRegPlusSquare } from "react-icons/fa";

const Package = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/package")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div className="my-12 lg:my-20">
      <div className=" w-11/12 lg:w-9/12 mx-auto ">
        <div className="my-8 lg:my-16">
          <p className="text-amber-500 font-semibold">CATEGORIES</p>
          <h1 className="text-5xl font-semibold text-blue-800">
            Popular Packages
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10">
          {packages.map((singlePackage) => (
            <SinglePackage
              key={singlePackage._id}
              singlePackage={singlePackage}
            ></SinglePackage>
          ))}
        </div>
        <div className="text-center my-8 lg:my-16 ">
          <button className="rounded-lg bg-amber-400 px-8 py-2 font-bold hover:bg-amber-500 ">
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package;
