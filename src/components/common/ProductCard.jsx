import React from "react";
import cart from "@/assets/products/cart.png";
import wishlist from "@/assets/products/wishlist.svg";

const ProductCard = ({ title, image, price }) => {
  return (
    <div className="relative">
      <div className="h-40 pb-4 flex items-center justify-center">
        <img className="h-full" src={image} alt="" />
      </div>
      <div className="grid gap-2">
        <p className="text-lg">
          {title.length > 35 ? title.slice(0, 35) + "..." : title}
        </p>
        <p>${price}</p>
        <div>
          <button className="bg-primary/30 flex items-center justify-start gap-2 px-3 py-1 rounded">
            <img className="h-5 w-5 inline-block" src={cart} alt="" /> Cart
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <img className="w-6" src={wishlist} alt="" />
      </div>
    </div>
  );
};

export default ProductCard;
