import { Navigation } from "swiper";
import { testimonials } from "../../data/testimonial";
import TestimonialCard from "../common/card/TestimonialCard";
import CustomSwiper from "../common/custom/CustomSwiper";

const Testimonials = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto py-10">
        <CustomSwiper
          navigation={true}
          data={testimonials}
          modules={[Navigation]}
          marginVertical="my-10"
          cardHeadingSize="text-2xl"
          category="WHAT OUR CUSTOMERS SAY"
          componentToBeRender={TestimonialCard}
          marginHorizontal={"mx-4 md:mx-14 lg:mx-20"}
          noOfSlidePerView={[
            {
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              980: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Testimonials;
