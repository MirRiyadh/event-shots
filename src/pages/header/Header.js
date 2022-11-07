import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const Header = () => {
  // const { user, logOut } = useContext(AuthContext);
  // const [changeColor, setChangeColor] = useState(false);

  // const handleLogout = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <div className="bg-gradient-to-l from-sky-200 via-sky-300 to-sky-200 shadow-md">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <hr />

              {/* {user?.uid ? (
                <div className="mt-2">
                  <button
                    onClick={handleLogout}
                    className="px-4 py-1 bg-slate-200 rounded-md hover:bg-slate-300 font-semibold"
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
              )} */}
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
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {/* {user?.uid ? (
              <></>
            ) : (
              <li>
                <Link to="/register">Register</Link>
              </li>
            )} */}
          </ul>
        </div>

        {/* //user display option */}
        <div className="navbar-end">
          <div className="mr-3">
            {/* {changeColor ? (
              <button
                title="Dark Mode"
                onClick={() => setChangeColor(!changeColor)}
                className="px-2 py-2 bg-slate-900 text-white rounded-full "
              >
                <FaMoon />
              </button>
            ) : (
              <button
                title="Light Mode"
                onClick={() => setChangeColor(!changeColor)}
                className="px-2 py-2 bg-white  rounded-full"
              >
                <BsSunFill></BsSunFill>
              </button>
            )} */}
          </div>

          {/* {user?.uid ? (
            <>
              <div>
                <button
                  onClick={handleLogout}
                  className="px-2 py-1 bg-slate-100 rounded-md hover:bg-slate-300 font-semibold"
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
                <button className="px-4 py-1 bg-slate-100 rounded-md hover:bg-slate-300 mr-3">
                  Login
                </button>
              </Link>
              <div>
                <FaUser></FaUser>
              </div>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
