import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex w-screen h-[5vh] items-center justify-between bg-blue-300">
      <div className="w-3/12 flex items-center justify-center">
        <p className="w-fit text-center transition-all duration-300 ease-linear hover:text-white ">
          Lorem IPSUM
        </p>
      </div>
      <div className="w-9/12 text-right pr-[10rem]">
        <Link className=" text-xl transition-all duration-300 ease-linear hover:text-white">
          Link
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
