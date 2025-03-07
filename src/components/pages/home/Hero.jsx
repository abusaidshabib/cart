import React from "react";
import EED from "@/assets/home/hero/EED.png";
import TYHMD from "@/assets/home/hero/TYHMD.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-4 w-5/6 mx-auto p-5 gap-5">
      <div className="bg-neural rounded-lg p-5 relative flex items-end">
        <div className="absolute top-5">
          <p className="font-black text-4xl">Elegance in Every Drop</p>
        </div>
        <img src={EED} alt="" />
      </div>
      <div className="bg-primary/30 rounded-lg p-5 relative flex items-end col-span-2">
        <div className="l absolute top-5">
          <p className="font-black text-4xl pb-2">Elegance in Every Drop</p>
          <p>
            Elevate your space with stylish, functional and trend-forward
            pieces.
          </p>
        </div>
        <img src={TYHMD} alt="" />
      </div>
      <div className="bg-primary/30 rounded-lg p-5 relative flex items-end">
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
