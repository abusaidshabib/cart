import React from "react";
import EED from "@/assets/home/hero/EED.png";
import TYHMD from "@/assets/home/hero/TYHMD.png";
import IYF from "@/assets/home/hero/IYF.png";
import FSSE from "@/assets/home/hero/FSSE.png";
import Button from "../../common/Button";

const Hero = () => {
  return (
    <div className="grid grid-cols-4 w-5/6 mx-auto p-5 gap-5">
      <div className="bg-neural rounded-lg p-5 relative flex items-end">
        <div className="absolute top-5">
          <p className="font-black text-3xl pb-5">Elegance in Every Drop</p>
          <Button>Shop Now</Button>
        </div>
        <img src={EED} alt="" />
      </div>
      <div className="bg-primary/30 rounded-lg p-5 relative flex items-end col-span-2">
        <div className="l absolute top-5">
          <p className="font-black text-4xl pb-2">Elegance in Every Drop</p>
          <p className="pb-5">
            Elevate your space with stylish, functional and trend-forward
            pieces.
          </p>
          <Button>Shop Now</Button>
        </div>
        <img src={TYHMD} alt="" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="bg-neural1/30 rounded-lg relative flex items-start h-1/2 justify-between p-5">
          <div>
            <p className="font-black text-3xl pb-5">
              Innovation at Your Fingertips
            </p>
            <Button>Shop Now</Button>
          </div>
          <img src={IYF} alt="" className="" />
        </div>
        <div className="bg-neural1/30 rounded-lg relative flex items-start h-1/2 justify-between p-5">
          <div>
            <p className="font-black text-3xl pb-5">
              Fast & Secure Shopping Experience
            </p>
            <Button>Shop Now</Button>
          </div>
          <img src={FSSE} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
