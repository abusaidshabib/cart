import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryCard from "../../common/CategoryCard";

const ProductsCategory = () => {
  const { category } = useSelector((state) => state.productSlice);

  return (
    <div className="w-5/6 mx-auto p-5 gap-5 relative py-5 border-b">
      <div className="flex items-center justify-between">
        <p className="text-2xl pb-5 font-semibold">Get it all right here</p>
        <Link to="" className="text-primary">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {category?.map((value, index) => (
          <CategoryCard {...value} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductsCategory;
