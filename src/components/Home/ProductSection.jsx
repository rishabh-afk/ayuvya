import { useSelector } from "react-redux";
import ProductCard from "../product/ProductCard";
import CustomSwiper from "../common/custom/CustomSwiper";
// import { product } from "../../data/products";

const ProductSection = () => {
  // const products = product;
  const products = useSelector((state) => state.product.products);
  const newLaunches = products.filter((item) => item.new_launched === true);
  const bestSelling = products.filter((item) => item.best_selling === true);
  const combos = products.filter((item) => item.is_combo === true);
  return (
    <>
      <CustomSwiper
        height={"h-96"}
        navigation={true}
        marginTop="mt-10"
        data={newLaunches}
        marginVertical="my-10"
        category="New Launches"
        cardHeadingSize="text-2xl"
        componentToBeRender={ProductCard}
        marginHorizontal={"md:mx-16 mx-4"}
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
        navigation={true}
        marginTop="mt-10"
        data={bestSelling}
        marginVertical="my-10"
        height={"h-48 md:h-72"}
        cardHeadingSize="lg:text-md"
        category="Best Selling Products"
        componentToBeRender={ProductCard}
        marginHorizontal={"md:mx-14 mx-4"}
        noOfSlidePerView={[
          {
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
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
        height={"h-96"}
        marginTop="mt-10"
        navigation={true}
        marginVertical="my-10"
        cardHeadingSize="text-2xl"
        category="Best Selling Combos"
        componentToBeRender={ProductCard}
        marginHorizontal={"md:mx-16 mx-4"}
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
