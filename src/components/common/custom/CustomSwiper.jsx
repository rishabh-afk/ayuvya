import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "../../product/HeadingText";

const CustomSwiper = ({
  data,
  height,
  modules,
  category,
  marginTop,
  navigation,
  headingText,
  cardStarSize,
  marginVertical,
  cardHeadingSize,
  marginHorizontal,
  noOfSlidePerView,
  productBriefHeight,
  cardDescriptionSize,
  componentToBeRender: Component,
}) => {
  return (
    <>
      {data.length > 0 && (
        <div className="max-w-7xl m-auto mb-10">
          <div className={`${marginTop}`}>
            <HeadingText heading={category} />
          </div>
          {headingText && (
            <h3 className="font-semibold text-lg pb-4">{headingText}</h3> // To Show Heading Text
          )}
          <div className={`${marginHorizontal}`}>
            <Swiper
              loop={true} // Loop or not
              navigation={navigation} // to show navigation or not
              breakpoints={noOfSlidePerView[0]} // Breakpoints based on screen orientation
              autoplay={{
                // to automatically autoplay or not
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                // to show pagination
                clickable: true,
              }}
              modules={modules} // to import modules
            >
              {data.map((item) => (
                <SwiperSlide key={item.id} className="px-2">
                  <Component
                    cardStarSize={cardStarSize} // size of the stars
                    product={item} // product of component
                    isheight={height} // height of component image
                    isBlogPage={false} // isBlogPage or not
                    headingSize={cardHeadingSize} // heading size of product
                    marginVertical={marginVertical} // margin vertical
                    productBriefHeight={productBriefHeight} // height of product brief section
                    cardDescriptionSize={cardDescriptionSize} // height of product description section
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomSwiper;
