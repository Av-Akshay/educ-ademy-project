import React from "react";

import CenterTextComponent from "./center-section-component/CenterTextComponent";
import ImageSection from "./center-section-component/ImageSection";
// import CenterTextComponent from "./center-section-component/CenterTextComponent";
// import ImageSection from "./center-section-component/ImageSection";

const CenterSection = () => {
  return (
    <div className="max-md:justify-center justify-center max-md:flex-wrap-reverse w-screen h-[90vh] relative flex items-center bg-slate-100  ">
      <CenterTextComponent />
      <ImageSection />
    </div>
  );
};

export default CenterSection;
