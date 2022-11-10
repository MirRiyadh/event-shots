import React from "react";
import {
  BsClockFill,
  BsCurrencyDollar,
  BsFillStarFill,
  BsFillTelephoneFill,
  BsHeart,
} from "react-icons/bs";
import { FaPhone, FaRegClock } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import "./Details.css";
import DetailsReviews from "./DetailsReviews";

const ServicesDeatils = () => {
  const serviceDeatils = useLoaderData();
  const {
    name,
    price,
    favourite,
    rating,
    session,
    img,
    description,
    Photographer,
    reviews,
    _id,
  } = serviceDeatils;

  return (
    <div>
      <div className="img-container ">
        <div className="text-white  w-11/12  md:w-10/12 lg:w-10/12 m-auto py-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold ">
            {name}
          </h1>
          <div className="flex justify-center pt-4 pb-2 font-semibold text-xl">
            <p className="mr-20 lg:mr-20 flex items-center">
              <BsCurrencyDollar /> {price}
            </p>
            <p className="flex items-center">
              {" "}
              <BsHeart className="mr-1" />
              {favourite}
            </p>
          </div>
          <div className="flex justify-center font-semibold text-xl">
            <p className="mr-20 lg:mr-20 flex items-center">
              <BsFillStarFill className="mr-1" /> {rating}
            </p>
            <p className="flex items-center">
              {" "}
              <FaRegClock className="mr-1" />
              {session}/hr
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-4 text-3xl font-semibold underline text-blue-800 ">
        Details
      </div>

      {/* services details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-11/12 m-auto my-8">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="font-semibold">
          <p className="mb-2">Title: {name}</p>
          <p className="mb-2">
            Details:{" "}
            <span className="font-normal text-sm text-gray-500">
              {description}
            </span>{" "}
          </p>
          <p className="mb-1">
            Price: <span className=" text-sky-700">{price}$</span>{" "}
          </p>
          <p className="mb-1">
            Session: <span className="text-sky-700">{session}/hr</span>{" "}
          </p>
          <p className="mb-1">
            Ratings: <span className="text-sky-700">{rating}</span>{" "}
          </p>
          <p className="mb-1">
            Photographer: <span className="text-sky-700">{Photographer}</span>{" "}
          </p>
          <p className="mb-4">
            Liked: <span className="text-sky-700">{favourite}</span>{" "}
          </p>
          <button className="px-4 py-2 bg-sky-500 text-white flex items-center rounded-lg">
            <BsFillTelephoneFill className="mr-2" /> Call For Reservation
          </button>
        </div>
      </div>

      {/* extra feature */}
      <div className="text-center my-16">
        <h1 className="text-5xl font-semibold text-sky-800 mb-2">ADD ON</h1>
        <hr className=" w-11/12 lg:w-8/12 mx-auto pb-2" />
        <p className="md:text-2xl text-gray-500 mb-2 font-semibold">
          # Add 50 dollar more for 50 copy 4R Size Printed Hard copy.
        </p>
        <p className="md:text-2xl text-gray-500 mb-2 font-semibold">
          # Add 30 dollar more for Photo Album.
        </p>
        <p className="md:text-2xl text-gray-500 mb-2 font-semibold">
          # Add 50 for more for hours.
        </p>
        <p className="md:text-2xl text-gray-500 mb-2 font-semibold">
          # Elegant Class Photography & Cinematography at Attractive Price!
        </p>
      </div>

      {/* this is review section */}
      <div className="text-center text-3xl font-semibold mb-4 underline text-blue-900">
        <h1>Review</h1>
      </div>
      {reviews ? (
        <div>
          {reviews?.map((review) => (
            <DetailsReviews key={review.num} review={review}></DetailsReviews>
          ))}
        </div>
      ) : (
        <div className="border w-8/12 m-auto text-center h-32 ">
          <h1 className="pt-12 font-semibold text-2xl text-gray-500">
            No reviews yet
          </h1>
        </div>
      )}
    </div>
  );
};

export default ServicesDeatils;
