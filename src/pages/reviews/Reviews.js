import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewList from "./ReviewList";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  // const handleDelete = (id) => {
  //   const proceed = window.confirm("Are you sure, cancel this reviews? ");
  //   if (proceed) {
  //     fetch(`http://localhost:5000/reviews/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.deletedCount > 0) {
  //           alert("deleted successfully");
  //           const remaining = reviews.filter((odr) => odr._id !== id);
  //           setReviews(remaining);
  //         }
  //       });
  //   }
  // };

  // const handleUpdate = (id) => {
  //   const proceed = window.confirm("Are you sure? ");
  //   if (proceed) {
  //     fetch(`http://localhost:5000/reviews/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "content-type": "application/json",
  //         authorization: `Bearer ${localStorage.getItem("genius-token")}`,
  //       },
  //       body: JSON.stringify({ status: "Apporoved" }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.modifiedCount > 0) {
  //           alert("deleted successfully");
  //           const remaining = reviews.filter((odr) => odr._id !== id);
  //           const approving = reviews.find((odr) => odr._id === id);
  //           approving.status = "Apporevd";

  //           const newreviews = [approving, ...remaining];
  //           setReviews(newreviews);
  //         }
  //       });
  //   }
  // };

  return (
    <div>
      <h1>review: {reviews.length}</h1>
      <h1 className="text-5xl my-4 text-center mb-8 underline text-blue-900">
        My review
      </h1>
      <div className="overflow-x-auto w-full">
        {reviews?.map((reviews) => (
          <ReviewList
            key={reviews._id}
            reviews={reviews}
            // handleDelete={handleDelete}
            // handleUpdate={handleUpdate}
          ></ReviewList>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
