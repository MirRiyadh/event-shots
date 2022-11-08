import React from "react";
import { FaFacebookF, FaGlobe, FaWeebly } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import sideImage from "../../../../assets/photos/intro.jpg";

const Intro = () => {
  return (
    <div className="w-11/12  lg:w-9/12 m-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="text-center md:text-left mb-4">
          <p className="text-base text-amber-500 font-semibold">WHO I AM!! </p>
          <h2 className="text-3xl lg:text-5xl font-semibold mb-4 text-blue-900">
            I Am Jack. Professional Photographer
          </h2>
          <p className="text-slate-500">
            — Being a professional photographer means working with people.
            whether it’s a client, a model, or even a fellow photographer. Thus,
            being a good photographer requires good people skills it’s one of
            the essential photographer qualities. You’ll also need to network to
            obtain clients and partnerships, so knowing how to connect and
            communicate effectively with others is imperative. When you’re
            photographing people, knowing how to take a good photo simply isn’t
            enough. You also have to know how to interact with your subjects to
            make them feel at ease, get them to cooperate, or draw out all the
            right emotions out of them.
          </p>
          <div className="flex items-center mt-2 text-purple-700 font-semibold justify-center md:justify-start">
            <FiMail className="mr-1 " /> <span>jackph143@gmail.com</span>
          </div>
          <div className="flex items-center mt-2 text-purple-700 font-semibold justify-center md:justify-start">
            <FaFacebookF className="mr-1 " />{" "}
            <span>www.facebook.com/eventshots</span>
          </div>
          <div className="flex items-center mt-2 text-purple-700 font-semibold justify-center md:justify-start">
            <FaGlobe className="mr-1 " /> <span>www.jackmorgan.com/</span>
          </div>
        </div>

        <div>
          <img src={sideImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
