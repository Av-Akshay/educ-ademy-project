import React from "react";

import Logo from "./components/navbar-components/Logo";
import RepoLink from "./components/navbar-components/RepoLink";

const NavBar = () => {
  return (
    <div className="flex font-akshay w-screen h-[5vh] items-center justify-between bg-blue-300">
      <Logo />
      <RepoLink />
    </div>
  );
};

export default NavBar;
