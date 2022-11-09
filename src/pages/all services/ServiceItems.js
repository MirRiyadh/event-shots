import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  FaBook,
  FaBookReader,
  FaHeart,
  FaRegCaretSquareRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceItems = ({ service }) => {
  const { img, name, _id, description, favourite, price } = service;

  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <div className="card  bg-base-100 border shadow-sm hover:shadow-xl transition ease-in-out delay-100 cursor-pointer">
      <figure className="px-8 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="p-4 card-body items-center text-center">
        <h2 className="text-2xl font-semibold text-blue-800">{name}</h2>
        <p className="text-sm text-slate-500">
          {description?.slice(0, 100)}...
        </p>
        <div className="flex justify-center">
          <p className=" flex items-center text-xl">
            <BsCurrencyDollar className="text-amber-500 " />
            <span className=" font-semibold">{price}</span>
          </p>
          <p className="pl-32 flex items-center text-xl">
            <FaHeart className="text-red-500 mr-1" />
            <span className=" font-semibold">{favourite}</span>
          </p>
        </div>
        <div className="card-actions text-center">
          <button
            onClick={() => handleClick(_id)}
            className="py-2 px-8 bg-amber-400 mt-4 rounded-md font-semibold hover:bg-amber-500 text-white uppercase flex items-center"
          >
            <FaBook className="mr-1" />
            <Link>View details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItems;
