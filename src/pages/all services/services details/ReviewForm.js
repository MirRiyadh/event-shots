import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const ReviewForm = () => {
  const details = useLoaderData();
  const { _id, img, price, name } = details;
  const { user } = useContext(AuthContext);

  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;

    const userName = form.name.value;
    const ratings = form.ratings.value;
    const email = user?.email || "unregister";
    const message = form.message.value;
    console.log(userName, ratings, email, message, user.photoURL);

    const reviews = {
      service: _id,
      serviceName: name,
      price,
      userName: userName,
      email,
      ratings,
      message,
      img,
      user_img: user.photoURL,
    };

    if (ratings > 5) {
      toast.error("Rating should be less than 5", { autoClose: 800 });
      return;
    }

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",

        authorization: `Bearer ${localStorage.getItem("eventshots-token")}`,
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success(
            "Review added successfully, Go-to see My reviews to see all reviews",
            { autoClose: 500 }
          );
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="border w-11/12 md:w-8/12 lg:w-4/12 m-auto mt-12 p-2 shadow-md border-amber-500 rounded-lg">
      <form onSubmit={handleReviews}>
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
