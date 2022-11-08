import React, { useEffect, useState } from "react";
import SinglePackage from "./SinglePackage";

const Package = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <div className="w-8/12 mx-auto mt-12">
        <div>
          <p className="text-amber-500 font-semibold">CATEGORIES</p>
          <h1 className="text-4xl font-semibold text-blue-800">
            Popular Packages
          </h1>
        </div>
        <div>
          {packages.map((singlePackage) => (
            <SinglePackage
              key={singlePackage._id}
              singlePackage={singlePackage}
            ></SinglePackage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Package;
