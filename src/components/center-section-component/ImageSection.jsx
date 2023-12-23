import React from "react";
import homePageImg from "../../assets/home.png";

const ImageSection = () => {
  return (
    <div className="w-2/4 max-md:w-[80%] max-md:m-[auto]">
      <img
        className="max-md:w-[80%] w-2/4 m-[auto]"
        src={homePageImg}
        alt="home page image"
      />
    </div>
  );
};

export default ImageSection;
