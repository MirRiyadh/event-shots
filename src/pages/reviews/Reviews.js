import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import ReviewList from "./ReviewList";

const Reviews = () => {
  useTitle("My reviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://react-assignment-eleven-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("eventshots-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut().then().catch();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, logOut]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, Delete this review? ");
    if (proceed) {
      fetch(`https://react-assignment-eleven-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("eventshots-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((odr) => odr._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="text-5xl my-4 text-center mb-8 underline text-blue-900">
        My review
      </h1>
      {reviews.length === 0 ? (
        <div className="border w-11/12 md:w-8/12 lg:w-4/12 m-auto text-center text-3xl font-bold p-8 text-gray-500">
          No reviews found
        </div>
      ) : (
        <div className="overflow-x-auto w-full">
          {reviews?.map((reviews) => (
            <ReviewList
              key={reviews._id}
              reviews={reviews}
              handleDelete={handleDelete}
            ></ReviewList>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reviews;
