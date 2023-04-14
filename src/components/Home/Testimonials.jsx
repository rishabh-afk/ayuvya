import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "../common/HeadingText";
import { testimonials } from "../../data/testimonial";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import TestimonialCard from "../common/card/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto py-10">
        <HeadingText heading="WHAT OUR CUSTOMERS SAY" />
        <div className="mx-4 md:mx-20 mb:5 md:my-10">
          <div>
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                980: {
                  slidesPerView: 3,
                },
              }}
              cssMode={true}
              navigation={true}
              pagination={true}
              spaceBetween={25}
              slidesPerGroup={2}
              autoplay={true}
              modules={[Navigation, Pagination]}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
