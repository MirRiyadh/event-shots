import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const AddServices = () => {
  useTitle("Add services");
  const details = useLoaderData();

  const handleReviews = (event) => {
    event.preventDefault();
    const form = event.target;

    const servicerName = form.name.value;
    const ratings = form.ratings.value;
    const price = form.price.value;
    const img = form.img.value;
    const descrip = form.descrip.value;
    const session = form.session.value;

    console.log(ratings);

    const services = {
      servicerName,
      ratings,
      price,
      img,
      descrip,
      session,
    };

    if (ratings > 5) {
      toast.error("Rating should be less than 5", { autoClose: 800 });
      return;
    }

    fetch("https://react-assignment-eleven-server.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("eventshots-token")}`,
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("services added successfully, ", { autoClose: 500 });
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="border w-11/12 md:w-8/12 lg:w-4/12 m-auto mt-12 p-2 shadow-md border-amber-500 rounded-lg">
      <h1 className="text-4xl font-semibold text-center">Add Services</h1>
      <form onSubmit={handleReviews}>
        <h2 className="text-2xl text-blue-900 font-semibold mb-2"></h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            name="name"
            type="text"
            placeholder="services name"
            className="input input-ghost w-full  input-bordered"
          />

          <input
            name="ratings"
            type="number"
            placeholder="rate out of 5"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="price"
            type="number"
            placeholder="price"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="img"
            type="text"
            placeholder="image url"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="descrip"
            type="text"
            placeholder="service description"
            className="input input-ghost w-full  input-bordered"
            required
          />
          <input
            name="session"
            type="text"
            placeholder="session"
            className="input input-ghost w-full  input-bordered"
            required
          />
        </div>

        <input
          className=" py-2 px-5 bg-amber-400 hover:bg-amber-500 font-semibold mb-2 cursor-pointer"
          type="submit"
          value="Add service"
        />
      </form>
    </div>
  );
};

export default AddServices;
