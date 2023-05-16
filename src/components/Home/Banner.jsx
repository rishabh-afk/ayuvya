import { Swiper, SwiperSlide } from "swiper/react";
import { BANNERS, MOBILE_BANNERS } from "../../data/banner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

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
          modules={[Autoplay, Pagination, Navigation]}
        >
          {BANNERS.map((banner) => (
            <SwiperSlide>
              <Link to={banner?.imageUrl} key={banner.id}>
                <img
                  className="w-full object-contain cursor-none lg:cursor-pointer"
                  src={banner.image}
                  alt=""
                />
              </Link>
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
          modules={[Autoplay, Pagination, Navigation]}
        >
          {MOBILE_BANNERS.map((banner) => (
            <SwiperSlide>
              <Link to={banner.imageUrl} key={banner.id}>
                <img
                  className="w-full object-contain"
                  src={banner.image}
                  alt=""
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
