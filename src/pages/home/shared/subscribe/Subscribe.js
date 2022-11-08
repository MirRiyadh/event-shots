import React from "react";

const Subscribe = () => {
  return (
    <div>
      <div className="mt-12">
        <footer className="flex justify-center px-4  bg-gray-200 w-11/12 md:w-8/12 lg:w-4/12 m-auto py-8 rounded-md shadow-md">
          <div className="container py-6">
            <h1 className="text-center text-lg font-bold lg:text-2xl">
              Join 10,000+ other and never miss <br /> out on new offer,
              packages, and more.
            </h1>

            <div className="flex justify-center mt-6">
              <div className="bg-white rounded-lg">
                <div className="flex flex-wrap justify-between md:flex-row">
                  <input
                    type="email"
                    className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <button className="w-full m-1 p-2 text-sm bg-sky-400 hover:bg-sky-500 text-white rounded-lg font-semibold uppercase lg:w-auto">
                    subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Subscribe;
