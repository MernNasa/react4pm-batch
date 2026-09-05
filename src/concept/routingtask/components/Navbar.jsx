import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MyLogo</div>

          {/* Navigation Links */}
          <ul className=" w-[40%] flex items-center justify-around capitalize">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">contact</Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium transition">Dashboard</Link>
            </li>
          </ul>

          {/* Login Button */}
          <Link to="/login" className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
