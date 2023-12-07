import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    "/",
    "business",
    "economy",
    "sport",
    "entertainment",
    "health",
    "technology",
    "education",
  ];

  return (
    <>
      <div className="">
        <img
          src="https://th.bing.com/th/id/OIP.ueZStPHsNz0KztztxH9oagAAAA?rs=1&pid=ImgDetMain"
          alt="News-logo"
          className="w-20 rounded-2xl absolute left-20 mt-2"
        />
        <nav className="p-4 md: flex-grow flex-wrap bg-red-400 rounded-lg sticky top-0 max-w-[900px] mx-auto">
          {/* <div className="container mx-auto flex justify-between items-center"> */}
          <div className="flex items-center justify-center space-x-4 text-white">
            {links.map((item, index) => (
              <NavLink key={index} to={item} className="capitalize font-mono">
                {item === "/" ? "Home" : item}
              </NavLink>
            ))}

            {/* <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a> */}

            {/* Dropdown menu */}
            {/* <div className="relative inline-block text-white">
            <button className="hover:text-gray-300 focus:outline-none">
              Services
            </button>
          </div> */}
          </div>
          {/* </div> */}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
