import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navList = [
    {
      path:"/",
      text:"home"
    },
    {
      path:"/about",
      text:"about"
    },
    {
      path:"/services",
      text:"services"
    },
    {
      path:"/contact",
      text:"contact"
    },
  ];
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MyLogo</div>

          {/* Navigation Links */}
          <ul className=" w-[40%] flex items-center justify-around capitalize">
            {navList.map((ele, index) => {
              return (
                <li key={index}>
                  <Link to={ele.path}
                    className="text-gray-700 hover:text-blue-600 font-medium transition"
                  >
                    {ele.text}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Login Button */}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
