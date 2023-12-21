import React from "react";

const Footer = () => {
  const date = new Date().toLocaleDateString();
  // console.log(date);
  return (
    <div className="bg-slate-900 h-[5vh] flex items-center text-white pl-24">
      <p> © {date} Akshay Chauhan. All Right Reserved | Term and conditions</p>
    </div>
  );
};

export default Footer;
