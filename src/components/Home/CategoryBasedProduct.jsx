import { Swiper, SwiperSlide } from "swiper/react";
import HeadingText from "../common/HeadingText";
import ProductCard from "../common/ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

const CategoryBasedProduct = ({
  category,
  product,
  noOfSlidePerView,
  cardHeadingSize,
}) => {
  return (
    <div className="max-w-7xl m-auto my-10">
      <HeadingText heading={category} />
      <div className="mx-10 md:mx-20 my-10">
        <div>
          <Swiper
            breakpoints={noOfSlidePerView[0]}
            cssMode={true}
            navigation={true}
            pagination={true}
            spaceBetween={25}
            slidesPerGroup={2}
            modules={[Navigation, Pagination]}
          >
            {product.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
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

export default CategoryBasedProduct;
