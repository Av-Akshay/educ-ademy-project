import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="max-md:w-2/5 w-3/12 flex items-center justify-center max-sm:w-1/2">
      <NavLink
        to="https://chauhansportfolio.netlify.app"
        target="_blank"
        className="max-sm:text-sm max-md:text-lg text-2xl font cursor-pointer w-fit text-center transition-all duration-300 ease-linear hover:text-white "
      >
        Akshay chauhan
      </NavLink>
    </div>
  );
};

export default Logo;
