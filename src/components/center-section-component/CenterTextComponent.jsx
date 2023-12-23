import React from "react";

const CenterTextComponent = () => {
  return (
    <div className=" max-md:w-[90%] max-md:m-[auto] max-sm:w-full w-2/4 flex items-center content-center ">
      <div className=" w-3/4 m-[auto] flex flex-col gap-3 max-sm:px-2">
        <h1 className=" cursor-pointer text-5xl max-sm:text-[1.5rem] font-semibold relative after:content-[''] after:bg-slate-950 after:absolute max-sm:after:w-[30%] after:w-[40%] after:top-[90%] after:h-[2.5px] ">
          Akshay Chauhan
        </h1>
        <p className=" max-sm:text-lg text-blue-400 text-xl cursor-pointer font-medium">
          I am a React js Developer. I have one month internship experience in
          web development.
        </p>
      </div>
    </div>
  );
};

export default CenterTextComponent;
