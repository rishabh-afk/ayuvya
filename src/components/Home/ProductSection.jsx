import CustomSwiper from "../common/custom/CustomSwiper";
import ProductCard from "../product/ProductCard";
// import { useSelector } from "react-redux";
import { product } from "../../data/products";

const ProductSection = () => {
  const products = product;
  // const products = useSelector((state) => state.product.products);
  // console.log(products);
  const newLaunches = products.filter((item) => item.new_launched === true);
  const bestSelling = products.filter((item) => item.best_selling === true);
  const combos = products.filter((item) => item.is_combo === true);
  console.log(newLaunches);
  return (
    <>
      <CustomSwiper
        data={newLaunches}
        category="New Launches"
        cardHeadingSize="text-2xl"
        marginHorizontal={"md:mx-20 mx-4"}
        navigation={true}
        marginTop="mt-10"
        marginVertical="my-10"
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
        cardHeadingSize="lg:text-md"
        marginHorizontal={"md:mx-20 mx-4"}
        marginTop="mt-10"
        navigation={true}
        marginVertical="my-10"
        componentToBeRender={ProductCard}
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
        category="Best Selling Combos"
        cardHeadingSize="text-2xl"
        marginHorizontal={"md:mx-20 mx-4"}
        marginTop="mt-10"
        navigation={true}
        marginVertical="my-10"
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