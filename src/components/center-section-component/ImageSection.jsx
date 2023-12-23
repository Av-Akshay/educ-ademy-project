import React from "react";
import homePageImg from "../../assets/home.png";

const ImageSection = () => {
  return (
    <div className="w-2/4">
      <img className="w-2/4 m-[auto]" src={homePageImg} alt="home page image" />
    </div>
  );
};

export default ImageSection;
