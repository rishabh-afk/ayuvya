import { Swiper, SwiperSlide } from "swiper/react";
import { BANNERS, MOBILE_BANNERS } from "../../data/banner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

const Banner = () => {
  return (
    <>
      <div className="hidden md:block">
        <Swiper
          navigation={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
        >
          {BANNERS.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img
                className="w-full object-contain cursor-none lg:cursor-pointer"
                src={banner.image}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden">
        <Swiper
          navigation={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
        >
          {MOBILE_BANNERS.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img
                className="w-full object-contain"
                src={banner.image}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
