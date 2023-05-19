import { useSelector } from "react-redux";
import { Autoplay, Navigation } from "swiper";
import ProductCard from "../product/ProductCard";
import CustomSwiper from "../common/custom/CustomSwiper";
// import { product } from "../../data/products";

const ProductSection = () => {
  // const products = product;
  const products = useSelector((state) => state.product.products);            // All products from Redux store
  const newLaunches = products.filter((item) => item.new_launched === true);  // New launches
  const bestSelling = products.filter((item) => item.best_selling === true);  // Best selling products
  const combos = products.filter((item) => item.is_combo === true);           // Best selling Combos

  return (
    <>
      <CustomSwiper
        marginTop="mt-10"                             // margin top of whole component
        navigation={true}                             // toggle navigation
        data={newLaunches}                            // data to be displayed
        cardStarSize={25}                             // size of the star of the product
        marginVertical="my-10"                        // margin vertical position
        category="New Launches"                       // category name to be displayed
        cardHeadingSize="text-2xl"                    // size of the heading of the product
        cardDescriptionSize="text-lg"                 // size of the description of the product
        productBriefHeight={"h-40"}                   // height of product description section
        height={"h-88 md:h-84 lg:h-88"}               // height of image
        modules={[Autoplay, Navigation]}              // it defines how swiper works
        componentToBeRender={ProductCard}             // component to be rendered
        marginHorizontal={"mx-4 md:mx-14 lg:mx-20"}   // margin horizontal position
        noOfSlidePerView={[                           // to show number of slides in webview, mobile etc.
          {
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            980: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          },
        ]}
      />
      <CustomSwiper
        marginTop="mt-10"                             // margin top of whole component
        navigation={true}                             // toggle navigation
        data={bestSelling}                            // data to be displayed
        cardStarSize={25}                             // size of the star of the product
        marginVertical="my-10"                        // margin vertical position
        productBriefHeight={"h-28"}                   // height of product description section
        cardHeadingSize="lg:text-md"                  // size of the heading of the product
        cardDescriptionSize="text-md"                 // size of the description of the product
        height={"h-40 md:h-56 lg:h-68"}               // height of image
        category="Best Selling Products"              // category name to be displayed
        modules={[Autoplay, Navigation]}              // it defines how swiper works
        componentToBeRender={ProductCard}             // component to be rendered
        marginHorizontal={"mx-4 md:mx-14 lg:mx-20"}   // margin horizontal position
        noOfSlidePerView={[                           // to show number of slides in webview, mobile etc.
          {
            0: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
             768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
             1024: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          },
      ]}
    />
      <CustomSwiper
        data={combos}                                 // data to be displayed
        marginTop="mt-10"                             // margin top of whole component
        navigation={true}                             // toggle navigation
        cardStarSize={25}                             // size of the star of the product
        marginVertical="my-10"                        // margin vertical position
        cardHeadingSize="text-2xl"                     // size of the heading of the product
        cardDescriptionSize="text-lg"                 // size of the description of the product
        productBriefHeight={"h-36"}                   // height of product description section
        category="Best Selling Combos"                // category name to be displayed
        height={"h-88 md:h-84 lg:h-88"}               // height of image
        modules={[Autoplay, Navigation]}              // it defines how swiper works
        componentToBeRender={ProductCard}             // component to be rendered
        marginHorizontal={"mx-4 md:mx-14 lg:mx-20"}   // margin horizontal position
        noOfSlidePerView={[                           // to show number of slides in webview, mobile etc.
        {
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        },
      ]}
    />
    </>
  );
};

export default ProductSection;
