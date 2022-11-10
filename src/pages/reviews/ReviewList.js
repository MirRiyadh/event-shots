import React from "react";
import { FaPen, FaStar } from "react-icons/fa";

const ReviewList = ({ reviews }) => {
  const { img, serviceName, message, ratings, userName, user_img, _id } =
    reviews;
  console.log(reviews);

  const handledelete = (id) => {
    console.log(id);
  };
  return (
    <div className="grid grid-cols-4 border w-10/12 lg:w-6/12 m-auto p-2 flex items-center justify-center text-center mb-4 rounded-lg md:text-left">
      <div>
        <button
          onClick={() => handledelete(_id)}
          className="px-2 bg-slate-400 font-bold text-white hover:bg-red-500 ml-12"
        >
          X
        </button>
      </div>
      <div className="col-span-2 ">
        <h1 className="font-semibold text-sm mb-2">{serviceName}</h1>
        <div className="flex justify-between text-sm  mb-2 ">{message}</div>
        <p className="flex justify-center md:justify-start items-center font-semibold mb-2">
          {ratings} <FaStar className="ml-1 text-amber-500" />
        </p>
        <div className="flex items-center">
          <img className="h-6 rounded-full" src={user_img} alt="" />
          <p className="font-semibold ml-2">{userName}</p>
        </div>
      </div>
      <div>
        {" "}
        <button className="pl-12 md:pl-32">
          <FaPen className="hover:text-emerald-500" />
        </button>
      </div>
    </div>
  );
};

export default ReviewList;
