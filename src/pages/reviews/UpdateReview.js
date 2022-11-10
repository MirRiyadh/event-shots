import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const reviewUpdate = useLoaderData();
  const [review, setReview] = useState(reviewUpdate);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const messageOld = form.message.value;

    const review = {
      message: messageOld,
    };

    fetch(
      `https://react-assignment-eleven-server.vercel.app/${reviewUpdate._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review update successfully", { autoClose: 500 });
        }
      });
  };
  return (
    <div className="border w-11/12 md:w-8/12 lg:w-4/12  m-auto mt-12 p-2 shadow-md border-blue-500 rounded-lg">
      {/* //update data */}
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl text-blue-900 font-semibold mb-2">
          **update your review{" "}
        </h2>

        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full mb-4"
          placeholder="Write a review"
          required
          defaultValue={reviewUpdate.message}
        ></textarea>

        <input
          className=" py-2 px-5 bg-blue-400 hover:bg-blue-500 font-semibold mb-2 cursor-pointer"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateReview;
