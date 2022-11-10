import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  console.log(reviews);

  return (
    <div>
      thi is my review page
      {reviews.length}
    </div>
  );
};

export default Reviews;
