import CustomSwiper from "./CustomSwiper";
import ProductCard from "../common/card/ProductCard";
import { useSelector } from "react-redux";

const ProductSection = () => {
  const products = useSelector((state) => state.product.products);
  const newLaunches = products.filter((item) => item.new_launched === true);
  const bestSelling = products.filter((item) => item.best_selling === true);
  const combos = products.filter((item) => item.is_combo === true);
  return (
    <>
      <CustomSwiper
        data={newLaunches}
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
        data={bestSelling}
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
        data={combos}
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
