import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/images/banner/b001.webp";
import banner2 from "../../assets/images/banner/b002.webp";
import banner3 from "../../assets/images/banner/b003.webp";
import banner4 from "../../assets/images/banner/b004.webp";
import banner5 from "../../assets/images/banner/b010.webp";
import banner6 from "../../assets/images/banner/b011.webp";
import banner7 from "../../assets/images/banner/b013.webp";
import mobilebanner1 from "../../assets/images/banner/mobile-b002.webp";
import mobilebanner2 from "../../assets/images/banner/mobile-b004.webp";
import mobilebanner3 from "../../assets/images/banner/mobile-b1.webp";
import mobilebanner4 from "../../assets/images/banner/mobile-b03.webp";
import mobilebanner5 from "../../assets/images/banner/mobile-b010.webp";
import mobilebanner6 from "../../assets/images/banner/mobile-b011.webp";
import mobilebanner7 from "../../assets/images/banner/mobile-b013.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const Banner = () => {
  const BANNERS = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
    {
      id: 4,
      image: banner4,
    },
    {
      id: 5,
      image: banner5,
    },
    {
      id: 6,
      image: banner6,
    },
    {
      id: 7,
      image: banner7,
    },
  ];
  const MOBILE_BANNERS = [
    {
      id: 8,
      image: mobilebanner1,
    },
    {
      id: 9,
      image: mobilebanner2,
    },
    {
      id: 10,
      image: mobilebanner3,
    },
    {
      id: 11,
      image: mobilebanner4,
    },
    {
      id: 12,
      image: mobilebanner5,
    },
    {
      id: 13,
      image: mobilebanner6,
    },
    {
      id: 14,
      image: mobilebanner7,
    },
  ];
  return (
    <>
      <div className="hidden md:block">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {BANNERS.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img className="w-full object-cover" src={banner.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          autoplay={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        >
          {MOBILE_BANNERS.map((banner) => (
            <SwiperSlide key={banner.id}>
              <img className="w-full object-cover" src={banner.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
