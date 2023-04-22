import CustomSwiper from "../common/custom/CustomSwiper";
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
        marginHorizontal={"md:mx-20"}
        navigation={true}
        marginTop="mt-10"
        componentToBeRender={ProductCard}
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
      <CustomSwiper
        data={bestSelling}
        category="Best Selling Products"
        cardHeadingSize="text-md"
        marginHorizontal={"md:mx-20"}
        marginTop="mt-10"
        navigation={true}
        componentToBeRender={ProductCard}
        noOfSlidePerView={[
          {
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          },
        ]}
      />
      <CustomSwiper
        data={combos}
        category="Best Selling Combos"
        cardHeadingSize="text-2xl"
        marginHorizontal={"md:mx-20"}
        marginTop="mt-10"
        navigation={true}
        componentToBeRender={ProductCard}
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
    </>
  );
};

export default ProductSection;
