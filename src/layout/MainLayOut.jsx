import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";
import Trend from "../components/Trend";
import Footer from "../components/Footer";

const MainLayOut = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOut;
