import React from "react";
import img1 from "@/assets/categories/Baby.png";
import img2 from "@/assets/categories/drink.png";
import img3 from "@/assets/categories/electronic.png";
import Button from "../../common/Button";

const CollectionCard = ({ title, img, cssbg, details }) => {
  return (
    <div
      className={`${cssbg} flex p-4 rounded-lg justify-between relative overflow-hidden`}
    >
      <div>
        <p className="text-xl font-semibold capitalize pb-1">{title}</p>
        <p className="pb-5">{details}</p>
        <Button>Shop Now</Button>
      </div>
      <div className="h-36 flex items-end justify-end z-40">
        <img className="w-full" src={img} alt="" />
      </div>
    </div>
  );
};

const FeaturedCollection = () => {
  const collections = [
    {
      id: 1,
      cssbg: "bg-primary/20",
      title: "Stay Connected,Stay Fast",
      details: "The Best Routers for Seamless Networking",
      img: img1,
    },
    {
      id: 2,
      cssbg: "bg-primary/5 ",
      title: "Power Meets Portability",
      details: "Find the Perfect Laptop for Work & Play",
      img: img2,
    },
    {
      id: 3,
      cssbg: "bg-neural4/20",
      title: "Future in Your Hands",
      details: "Discover Gadgets That Make Life Easier",
      img: img3,
    },
  ];

  return (
    <div className="w-5/6 mx-auto p-5 gap-5 relative py-5">
      <div className="grid grid-cols-3 gap-5">
        {collections.map((collection) => (
          <CollectionCard {...collection}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollection;
