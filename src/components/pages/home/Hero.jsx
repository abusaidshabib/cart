import React from 'react';
import EED from "@/assets/home/hero/EED.png";
import TYHMD from "@/assets/home/hero/TYHMD.png";

const Hero = () => {
    return (
      <div className="grid grid-cols-4 w-5/6 mx-auto p-5 gap-5">
        <div className="bg-neural rounded-lg p-5">
          <p className="font-black text-4xl">Elegance in Every Drop</p>
          <img src={EED} alt="" />
        </div>
        <div className="col-span-2 rounded-lg p-5 bg-primary/30">
          <p className="font-black text-4xl">Elegance in Every Drop</p>
          <img src={TYHMD} alt="" />
        </div>
        <div></div>
      </div>
    );
};

export default Hero;