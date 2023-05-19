import ProgressBarWithStars from "../common/custom/ProgressBarWithStars";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const ProductBriefCard = ({
  buyNow,
  product,
  headingSize,
  cardStarSize,
  addItemToCart,
  isNotSwiperProduct,
  productBriefHeight,
  cardDescriptionSize,
}) => {
  return (
    <div className={`text-center px-2 py-4 md:p-4 gap-1`}>
      <div
        className={`flex flex-col items-center gap-1 pb-2 ${productBriefHeight}`}
      >
        <Link to={`${product?.get_product_url}`}>
          <h2
            className={`font-semibold leading-tight hover:text-gray-700 transition-all duration-200 ${headingSize}`}
          >
            {product?.product_name}
          </h2>
        </Link>
        <div className="flex flex-wrap justify-center items-center">
          <div className="flex text-sm gap-2 items-center">
            <ProgressBarWithStars
              iconSize={cardStarSize}
              noOfStar={Math.round(product?.rating || 5)}
              className="hidden lg:block"
            />
            <ProgressBarWithStars
              iconSize={20}
              noOfStar={Math.round(product?.rating || 5)}
              className="lg:hidden"
            />
            <span className="break-words flex text-[12px]">
              {product?.review_count}+{" "}
              <span
                className={`${
                  isNotSwiperProduct ? "hidden md:block" : "block"
                }`}
              >
                Reviews
              </span>
            </span>
          </div>
        </div>
        <div className={`flex gap-2 font-semibold ${cardDescriptionSize}`}>
          <span className="line-through text-gray-500">
            ₹ {product?.cut_price}
          </span>
          <span className="">₹ {product?.price}</span>
        </div>
        {isNotSwiperProduct && (
          <span className="text-xs">
            (save ₹ {product.cut_price - product.price})
          </span>
        )}
      </div>
      <Button
        handler={buyNow}
        className={`bg-black ${
          isNotSwiperProduct ? "md:hidden" : "hidden"
        } text-md md:text-xl text-white justify-center m-auto mb-2 rounded-lg outline-none hover:bg-gray-500 ${
          isNotSwiperProduct ? "px-6" : "px-4"
        }`}
      >
        Buy Now
      </Button>
      <Button
        handler={isNotSwiperProduct ? () => addItemToCart(product) : buyNow}
        className={`bg-black text-md md:text-xl m-auto justify-center  text-white rounded-md outline-none hover:bg-gray-500 ${
          isNotSwiperProduct ? "px-6 lg:w-full" : "px-4"
        }`}
      >
        {isNotSwiperProduct ? "Add To Cart" : "Buy Now"}
      </Button>
    </div>
  );
};

export default ProductBriefCard;
