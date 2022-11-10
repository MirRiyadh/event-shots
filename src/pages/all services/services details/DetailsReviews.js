import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const DetailsReviews = ({ review }) => {
  const { text, rev_rating, rev_name, rev_img } = review;
  return (
    <div className="border mb-4 w-11/12 md:w-8/12 lg:w-4/12  m-auto p-2 rounded-md shadow-md">
      {" "}
      <h1>{text}</h1>
      <div className="flex items-center">
        <img className="h-10 w-10 p-2 rounded-full" src={rev_img} alt="" />
        <p className="font-semibold">{rev_name}</p>
      </div>
      <p className="flex items-center font-semibold">
        <FaStar className="mr-1 text-amber-500"></FaStar> {rev_rating}
      </p>
    </div>
  );
};

export default DetailsReviews;
