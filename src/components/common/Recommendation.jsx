import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import RecommendationCard from "./card/RecommendationCard";

const Recommendation = ({
  products,
  headingText,
  noOfSlidePerView,
  cardHeadingSize,
}) => {
  return (
    <div className="max-w-7xl m-auto">
      <h3 className="font-semibold text-lg pb-4">{headingText}</h3>
      <div className="">
        <div>
          <Swiper
            breakpoints={noOfSlidePerView[0]}
            cssMode={true}
            // navigation={true}
            // pagination={true}
            spaceBetween={15}
            slidesPerGroup={2}
            autoplay={true}
            modules={[Navigation, Pagination]}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <RecommendationCard
                  key={product.id}
                  product={product}
                  headingSize={cardHeadingSize}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
