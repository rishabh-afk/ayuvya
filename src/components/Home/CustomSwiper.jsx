import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "../common/HeadingText";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const CustomSwiper = ({
  category,
  data,
  noOfSlidePerView,
  cardHeadingSize,
  componentToBeRender: Component,
}) => {
  return (
    <div className="max-w-7xl m-auto my-10">
      <HeadingText heading={category} />
      <div className="mx-4 md:mx-20 my-10">
        <div>
          <Swiper
            breakpoints={noOfSlidePerView[0]}
            cssMode={true}
            navigation={true}
            pagination={true}
            spaceBetween={25}
            slidesPerGroup={2}
            autoplay={true}
            modules={[Navigation, Pagination]}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <Component
                  key={item.id}
                  itemObj={item}
                  headingSize={cardHeadingSize}
                  isBlogPage={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomSwiper;
