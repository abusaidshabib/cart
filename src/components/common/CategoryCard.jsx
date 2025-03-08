import React from "react";
import catimg1 from "@/assets/categories/Baby.png";
import catimg2 from "@/assets/categories/Beauty.png";
import catimg3 from "@/assets/categories/drink.png";
import catimg4 from "@/assets/categories/electronic.png";
import catimg6 from "@/assets/categories/Fashion.png";
import catimg7 from "@/assets/categories/Health.png";
import catimg8 from "@/assets/categories/toy.png";

const CategoryCard = ({ index, name }) => {
  const images = [
    {
      cssbg: "bg-primary/20",
      cssshape: "bg-primary/60",
      img: catimg1,
    },
    {
      cssbg: "bg-primary/5 ",
      cssshape: "bg-primary/20",
      img: catimg2,
    },
    {
      cssbg: "bg-neural4/20",
      cssshape: "bg-neural4/60",
      img: catimg3,
    },
    {
      cssbg: "bg-neural2/20",
      cssshape: "bg-neural2/60",
      img: catimg4,
    },
    {
      cssbg: "bg-neural2/20",
      cssshape: "bg-neural2/60",
      img: catimg6,
    },
    {
      cssbg: "bg-primary/20",
      cssshape: "bg-primary/60",
      img: catimg7,
    },
    {
      cssbg: "bg-primary/20",
      cssshape: "bg-primary/60",
      img: catimg8,
    },
  ];
  return (
    <div
      className={`${images[index]?.cssbg} flex p-4 rounded-lg justify-between relative overflow-hidden`}
    >
      <p className="text-xl font-semibold capitalize">{name}</p>
      <div className="h-28 flex items-end justify-end z-40">
        <img className="w-full" src={images[index]?.img} alt="" />
      </div>
      <div
        className={`w-28 h-28 absolute right-0 bottom-0 rounded-full ${images[index]?.cssshape }`}
      ></div>
    </div>
  );
};

export default CategoryCard;
