import React from "react";

import homePageImg from "../../../assets/home.png";

const ImageSection = () => {
  return (
    <div className="w-2/4 max-md:w-[80%] max-md:m-[auto]">
      <img
        className="max-md:w-[55%] w-2/4 m-[auto] animate-dheere"
        src={homePageImg}
        alt="AnimatedImage"
      />
    </div>
  );
};

export default ImageSection;
