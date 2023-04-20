import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "../../product/HeadingText";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

const CustomSwiper = ({
  category,
  data,
  noOfSlidePerView,
  cardHeadingSize,
  marginHorizontal,
  marginTop,
  componentToBeRender: Component,
}) => {
  return (
    <>
      {data.length > 0 && (
        <div className="max-w-7xl m-auto mb-10">
          <div className={`${marginTop && marginTop}`}>
            <HeadingText heading={category} />
          </div>
          <div className={`mx-4 mb-10 ${marginHorizontal}`}>
            <div>
              <Swiper
                breakpoints={noOfSlidePerView[0]}
                navigation={true}
                loop={true}
                slidesPerGroup={2}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Navigation, Pagination]}
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Component
                      key={item.id}
                      itemObj={item}
                      marginVertical="my-10"
                      headingSize={cardHeadingSize}
                      isBlogPage={false}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomSwiper;
