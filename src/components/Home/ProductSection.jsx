import CategoryBasedProduct from "./CategoryBasedProduct";

const ProductSection = ({ product }) => {
  return (
    <>
      <CategoryBasedProduct
        product={product}
        category="New Launches"
        cardHeadingSize="text-2xl"
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
      <CategoryBasedProduct
        product={product}
        category="Best Selling Products"
        cardHeadingSize="text-md"
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
      <CategoryBasedProduct
        product={product}
        category="Best Selling Combos"
        cardHeadingSize="text-2xl"
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
