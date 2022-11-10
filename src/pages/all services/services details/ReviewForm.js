import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const ReviewForm = () => {
  const details = useLoaderData();
  const { _id, img, price, name } = details;
  const { user } = useContext(AuthContext);
  console.log(details);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;

    const customerName = form.name.value;
    const ratings = form.ratings.value;
    const email = user?.email || "unregister";
    const message = form.message.value;
    console.log(customerName, ratings, email, message);

    if (ratings === 5) {
      alert("ratings number should be less than 5 digit");
      return;
    }

    const reviews = {
      service: _id,
      serviceName: name,
      price,
      customer: customerName,
      email,
      ratings,
      message,
    };
  };

  return (
    <div className="border w-11/12 md:w-8/12 lg:w-4/12 m-auto mt-12 p-2 shadow-md border-amber-500 rounded-lg">
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-2xl text-blue-900 font-semibold mb-2">
          **Write a review{" "}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            name="name"
            type="text"
            placeholder="Full name"
            className="input input-ghost w-full  input-bordered"
          />

          <input
            name="ratings"
            type="number"
            placeholder="rate out of 5"
            className="input input-ghost w-full  input-bordered"
            required
          />
        </div>
        <input
          name="email"
          type="text"
          placeholder="Your email"
          defaultValue={user?.email}
          className="input input-ghost w-full  input-bordered mb-4"
        />
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full mb-4"
          placeholder="Write a review"
          required
        ></textarea>

        <input
          className=" py-2 px-5 bg-amber-400 hover:bg-amber-500 font-semibold mb-2 cursor-pointer"
          type="submit"
          value="Submit Review"
        />
      </form>
    </div>
  );
};

export default ReviewForm;
