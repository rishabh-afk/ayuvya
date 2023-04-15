import { testimonials } from "../../data/testimonial";
import TestimonialCard from "../common/card/TestimonialCard";
import CustomSwiper from "./CustomSwiper";

const Testimonials = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto py-10">
        <CustomSwiper
          data={testimonials}
          category="WHAT OUR CUSTOMERS SAY"
          cardHeadingSize="text-2xl"
          componentToBeRender={TestimonialCard}
          noOfSlidePerView={[
            {
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              980: {
                slidesPerView: 3,
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Testimonials;
