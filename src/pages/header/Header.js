import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-slate-800 shadow-md text-white">
      <div className="navbar  lg:w-3/4 m-auto">
        <div className="navbar-start w-12/12">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <hr />

              {user?.uid ? (
                <div className="mt-2">
                  <button
                    onClick={handleLogout}
                    className="px-4 py-1 bg-slate-900 rounded-md hover:bg-slate-300 font-semibold "
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl pl-0">
            <img src="" className="w-32 h-6 md:w-52  md:h-8" />
          </Link>
        </div>

        {/* navbar center */}
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0 font-bold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>

            {user?.uid ? (
              <></>
            ) : (
              <li>
                <Link to="/register">Register</Link>
              </li>
            )}
          </ul>
        </div>

        {/* //user display option */}
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <div>
                <button
                  onClick={handleLogout}
                  className="px-2 py-1 bg-slate-100 rounded-md hover:bg-rose-400 font-semibold text-black hover:text-white"
                >
                  Logout
                </button>
              </div>
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar ml-1"
                id="user-container"
              >
                <span id="user-text">{user?.displayName}</span>
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-1 bg-slate-100 rounded-md hover:bg-slate-300 mr-3 text-black">
                  Login
                </button>
              </Link>
              <div className="p-2 bg-white rounded-full">
                <FaUser className="text-black"></FaUser>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
