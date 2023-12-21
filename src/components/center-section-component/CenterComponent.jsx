import React from "react";

const CenterComponent = () => {
  return (
    <div className=" w-3/4 m-[auto]">
      <h1 className=" cursor-pointer text-3xl font-semibold relative after:content-[''] after:bg-slate-950 after:absolute after:w-[45%] after:top-[90%] after:h-[2.5px] ">
        Akshay Chauhan
      </h1>
      <p className="text-blue-400 text-lg cursor-pointer font-medium">
        I am a React js Developer. I have one month internship experience in web
        development.
      </p>
    </div>
  );
};

export default CenterComponent;
