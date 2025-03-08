import React, { lazy, Suspense } from "react";
import Hero from "@/components/pages/home/Hero";
import Whyus from "@/components/pages/home/Whyus";
import ProductsCategory from "@/components/pages/home/ProductsCategory";
import { CgSpinner } from "react-icons/cg";
import OnSaleProducts from "../../components/pages/home/OnSaleProducts";
import FeaturedCollection from "../../components/pages/home/FeaturedCollection";
import GroceryProducts from "../../components/pages/home/GroceryProducts";
import HomeKitchenProducts from "../../components/pages/home/HomeKitchenProducts";
import GadgetProducts from "../../components/pages/home/GadgetProducts";

// Lazy load FeaturedProducts
const FeaturedProducts = lazy(() =>
  import("@/components/pages/home/FeaturedProducts")
);

const Home = () => {
  return (
    <div>
      <Hero />
      <Whyus />
      <Suspense
        fallback={
          <div className="w-5/6 mx-auto p-5 gap-5">
            <CgSpinner className="animate-spin" size={40} />
          </div>
        }
      >
        <FeaturedProducts />
      </Suspense>
      <ProductsCategory />
      <OnSaleProducts />
      <FeaturedCollection />
      <GroceryProducts />
      <HomeKitchenProducts />
      <GadgetProducts />
    </div>
  );
};

export default Home;
