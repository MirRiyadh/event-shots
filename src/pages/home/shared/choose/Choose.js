import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaAngellist, FaCheck, FaRegSmileBeam } from "react-icons/fa";
import photo1 from "../../../../assets/photos/5274708.jpg";

const Choose = () => {
  return (
    <div>
      <div className="w-11/12  lg:w-9/12 m-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <img src={photo1} alt="" />
          </div>

          <div className="text-center md:text-left mb-4">
            <p className="text-base text-amber-500 font-semibold">CHOOSE </p>
            <h2 className="text-3xl lg:text-5xl font-semibold mb-4 text-blue-900">
              Why Choose Us
            </h2>
            <p className="text-slate-400">
              — photography is an art but today, anyone can take a picture.
              However, the love of taking pictures of something or someone you
              love can inspire you to partake photography as a career. Art
              requires motivation, inspiration and passion. Taking photography
              as a career needs one to be open minded and creative.
            </p>
            <div className="flex items-center  font-semibold justify-center md:justify-start mt-4">
              <BsCurrencyDollar className="mr-1 bg-purple-500 p-2 rounded-full text-4xl text-white" />{" "}
              <span className="text-2xl md:text-3xl text-slate-500">
                Affordable Price
              </span>
            </div>
            <div className="flex items-center  font-semibold justify-center md:justify-start mt-4">
              <FaAngellist className="mr-1 bg-purple-500 p-2 rounded-full text-4xl text-white" />{" "}
              <span className="text-2xl md:text-3xl text-slate-500">
                Professional Management
              </span>
            </div>
            <div className="flex items-center  font-semibold justify-center md:justify-start mt-4">
              <FaRegSmileBeam className="mr-1 bg-purple-500 p-2 rounded-full text-4xl text-white" />{" "}
              <span className="text-2xl md:text-3xl text-slate-500">
                Client Satisfaction
              </span>
            </div>
            <div className="flex items-center mt-8  font-semibold justify-center md:justify-start">
              <button className="bg-amber-500 py-2 px-5 text-white rounded-md">
                Choose Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
