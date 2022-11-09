import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceItems from "./ServiceItems";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="b w-11/12  lg:w-8/12 m-auto">
      <div>
        <h1 className="text-center text-4xl py-4 underline">Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {services.map((service) => (
          <ServiceItems key={service._id} service={service}></ServiceItems>
        ))}
      </div>
    </div>
  );
};

export default Services;
