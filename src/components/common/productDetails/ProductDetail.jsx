import React from "react";
import CommonDetails from "./CommonDetails";
import { product } from "../../../data/ProductDetail";
import img from "../../../assets/images/1920x747_proud_statistics_zero_hairfall_7.webp";
// import ImagesSwiper from "./ImagesSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { platforms } from "../../../data/ottplatform";
import Button from "../Button";
import Ingredients from "./Ingredients";
import Benefits from "./Benefits";
import CustomerReview from "./CustomerReview";
import Reviews from "./Reviews";
import ProductCard from "../card/ProductCard";
// import ProgressBar from "../ProgressBar";

const ProductDetail = () => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row mx-4 lg:mx-16 my-8">
        <div className="w-full md:w-1/2 p-4">{/* <ImagesSwiper /> */}</div>
        <div className="w-full md:w-1/2 p-4">
          <CommonDetails product={product} />
          <div className="border-y bg-slate-100 cursor-none lg:cursor-pointer py-6 my-4">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                980: {
                  slidesPerView: 4,
                  spaceBetween: 25,
                },
              }}
              //   navigation={true}
              centeredSlides={true}
              loop={true}
              slidesPerGroup={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Autoplay, Navigation, Pagination]}
            >
              {platforms.map((item) => (
                <SwiperSlide key={item.id}>
                  <img className="mx-auto" src={item.image_url} alt={item.id} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col gap-5">
            <Button className="w-full md:w-3/4 bg-white border-2 border-slate-200 py-3">
              <span className="text-3xl font-bold text-[#7d8801] text-center mx-auto">
                Add To Cart
              </span>
            </Button>
            <Button className="w-full md:w-3/4 bg-[#7d8801] border-2 border-[#7d8801] py-3">
              <span className="text-3xl font-bold text-white text-center mx-auto">
                Buy Now
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-4 lg:mx-20">
        <Ingredients ingredients={product.ingredients} />
        <Benefits />
        <CustomerReview customerReview={product} />
      </div>
      <Reviews reviews={product.reviews} />
      <img src={img} alt="" className="" />
      <div className="flex gap-5 flex-wrap mx-4 lg:mx-20">
        {product.related_products.map((item) => {
          return (
            <ProductCard
              width={"w-48 lg:w-64"}
              key={item.id}
              itemObj={item}
              headingSize="text-xl"
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductDetail;
