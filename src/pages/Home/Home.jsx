import React from "react";
import Hero from "@/components/pages/home/Hero";
import Whyus from "../../components/pages/home/Whyus";
import FeaturedProducts from "../../components/pages/home/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <Whyus />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
