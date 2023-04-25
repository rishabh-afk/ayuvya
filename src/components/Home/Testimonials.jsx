import { testimonials } from "../../data/testimonial";
import TestimonialCard from "../common/card/TestimonialCard";
import CustomSwiper from "../common/custom/CustomSwiper";

const Testimonials = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto py-10">
        <CustomSwiper
          data={testimonials}
          category="WHAT OUR CUSTOMERS SAY"
          cardHeadingSize="text-2xl"
          marginHorizontal={"md:mx-20 mx-4"}
          navigation={false}
          marginVertical="my-10"
          componentToBeRender={TestimonialCard}
          noOfSlidePerView={[
            {
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              980: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Testimonials;
