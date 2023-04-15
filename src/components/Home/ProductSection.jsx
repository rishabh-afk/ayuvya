import CustomSwiper from "./CustomSwiper";
import ProductCard from "../common/card/ProductCard";

const ProductSection = ({ product }) => {
  return (
    <>
      <CustomSwiper
        data={product}
        category="New Launches"
        cardHeadingSize="text-2xl"
        componentToBeRender={ProductCard}
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
      <CustomSwiper
        data={product}
        category="Best Selling Products"
        cardHeadingSize="text-md"
        componentToBeRender={ProductCard}
        noOfSlidePerView={[
          {
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          },
        ]}
      />
      <CustomSwiper
        data={product}
        category="Best Selling Combos"
        cardHeadingSize="text-2xl"
        componentToBeRender={ProductCard}
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
    </>
  );
};

export default ProductSection;
