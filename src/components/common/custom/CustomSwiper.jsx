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
  marginVertical,
  marginTop,
  marginBottom,
  headingText,
  navigation,
  componentToBeRender: Component,
}) => {
  return (
    <>
      {data.length > 0 && (
        <div className="max-w-7xl m-auto mb-10">
          <div className={`${marginTop && marginTop}`}>
            <HeadingText heading={category} />
          </div>
          {headingText && (
            <h3 className="font-semibold text-lg pb-4">{headingText}</h3>
          )}
          <div className={`${marginHorizontal} ${marginBottom}`}>
            <div>
              <Swiper
                breakpoints={noOfSlidePerView[0]}
                navigation={navigation}
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
                {data.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <Component
                      key={item.id ? item.id : index}
                      itemObj={item}
                      marginVertical={marginVertical}
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
