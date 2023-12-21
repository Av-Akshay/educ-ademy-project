import React from "react";
import CenterComponent from "../center-section-component/CenterComponent";

const CenterSection = () => {
  return (
    <div className=" w-screen h-[90vh] relative flex items-center bg-slate-100  ">
      <div className="w-2/4 flex items-center content-center ">
        <CenterComponent />
      </div>
      <div className="w-2/4"></div>
    </div>
  );
};

export default CenterSection;
