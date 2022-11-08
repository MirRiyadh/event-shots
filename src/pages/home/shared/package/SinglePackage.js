import React from "react";

const SinglePackage = ({ singlePackage }) => {
  const { img, name } = singlePackage;
  console.log(singlePackage);
  return (
    <div className="card w-full bg-base-100 shadow-sm hover:shadow-2xl transition ease-in-out delay-100 cursor-pointer text-center border">
      <figure>
        <img src={img} alt="package" />
      </figure>
      <div className="card-body ">
        <h2 className=" font-semibold text-blue-900 text-2xl  ">{name} </h2>

        <div className="card-actions justify-center">
          <button className="bg-blue-500 py-2 px-4 text-white font-semibold rounded-lg">
            All Packages
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePackage;
