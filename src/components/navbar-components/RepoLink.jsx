import React from "react";
import { NavLink } from "react-router-dom";

const RepoLink = () => {
  return (
    <div className="max-md:w-3/5 lg:w-9/12 text-right max-md:pr-[5rem] max-sm:pr-[2rem] pr-[10rem] max-sm:w-1/2">
      <NavLink
        to="https://github.com/Av-Akshay/educ-ademy-project"
        target="_blank"
        className="max-sm:text-sm max-md:text-lg text-2xl transition-all duration-300 ease-linear hover:text-white"
      >
        Repo Link
      </NavLink>
    </div>
  );
};

export default RepoLink;
