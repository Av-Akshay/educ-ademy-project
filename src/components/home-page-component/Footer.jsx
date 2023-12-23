import React from "react";

const Footer = () => {
  const date = new Date().toLocaleDateString();
  // console.log(date);
  return (
    <div className="bg-slate-900 h-[5vh] flex items-center text-white pl-24 max-md:pl-14 max-sm:pl-4 max-sm:text-sm">
      <p> © {date} Akshay Chauhan. All Right Reserved | Term and conditions</p>
    </div>
  );
};

export default Footer;
