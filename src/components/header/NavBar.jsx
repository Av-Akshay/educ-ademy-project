import React from "react";

import Logo from "../navbar-components/Logo";
import RepoLink from "../navbar-components/RepoLink";

const NavBar = () => {
  return (
    <div className="flex font-akshay w-screen h-[5vh] items-center justify-between bg-blue-300">
      <Logo />
      <RepoLink />
    </div>
  );
};

export default NavBar;
