import React, { useEffect, useState, useRef, memo } from "react";
import ProductCard from "@/components/common/ProductCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { getProducts } from "@/services/productServices";
import { CgSpinner } from "react-icons/cg";
import rightArrow from "@/assets/products/arrow.png";
import { Link } from "react-router-dom";

const MemoizedProductCard = memo(ProductCard);

const FeaturedProducts = () => {
  const [fetchState, setFetchState] = useState({
    products: null,
    isLoading: true,
    isSuccess: false,
    isError: false,
  });

  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setFetchState((prev) => ({
        ...prev,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }));

      try {
        const productData = await getProducts();
        setFetchState((prev) => ({
          ...prev,
          products: productData,
          isSuccess: true,
          isLoading: false,
        }));
      } catch (error) {
        setFetchState((prev) => ({
          ...prev,
          isError: true,
          isLoading: false,
        }));
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      setTimeout(() => {
        if (swiperRef.current.swiper) {
          const swiperInstance = swiperRef.current.swiper;
          swiperInstance.params.navigation.prevEl = prevRef.current;
          swiperInstance.params.navigation.nextEl = nextRef.current;
          swiperInstance.navigation.init();
          swiperInstance.navigation.update();
        }
      }, 100);
    }
  }, [fetchState.products]);

  const { products, isLoading, isError } = fetchState;

  if (isLoading)
    return (
      <div className="w-5/6 mx-auto p-5 gap-5">
        <CgSpinner className="animate-spin" size={40} />
      </div>
    );
  if (isError)
    return (
      <div className="w-5/6 mx-auto p-5 gap-5">
        <p>Error fetching data.</p>
      </div>
    );

  return (
    <div className="w-5/6 mx-auto p-5 gap-5 relative py-5 border-y">
      <div className="flex items-center justify-between">
        <p className="text-2xl pb-5 font-semibold">Featured</p>
        <Link to="" className="text-primary">
          View all
        </Link>
      </div>
      <div className="relative">
        <button
          ref={prevRef}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md transition-opacity w-10 ${
            isBeginning ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <img className="rotate-180" src={rightArrow} alt="" />
        </button>
        <button
          ref={nextRef}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md transition-opacity w-10 ${
            isEnd ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <img src={rightArrow} alt="" />
        </button>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={6}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <MemoizedProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedProducts;
