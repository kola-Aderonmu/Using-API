import React from "react";
import NewsList from "../components/NewsList";

const Economy = () => {
  return (
    <div>
      {/* <NewsList category={"economy"} /> */}
      {/* Check if NewsList component renders any news, and if not, display a message */}
      <div className="text-center mt-4 flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">
          No latest News . Check back later!
        </p>{" "}
      </div>
      <div className="mx-5 shadow-2xl max-w-xs">
        {/* Use anchor element to navigate back to the home page */}
        <a
          href="/"
          className="font-extrabold shadow-orange-200 shadow-xl font-mono"
        >
          Return
        </a>
      </div>
    </div>
  );
};

export default Economy;
