import ProgressBarWithStars from "../common/custom/ProgressBarWithStars";
import Button from "../common/Button";

const ProductBriefCard = ({
  headingSize,
  product,
  addItemToCart,
  buyNow,
  isNotSwiperProduct,
}) => {
  return (
    <div className="flex flex-col items-center text-center px-2 py-4 md:p-4 gap-2 min-h-64">
      <h1 className={`font-semibold break-all ${headingSize}`}>
        {product?.product_name.slice(0, 40)}{" "}
        {product?.product_name.length > 40 && <span>...</span>}
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex text-sm items-center">
          <ProgressBarWithStars
            iconSize={25}
            noOfStar={Math.round(product?.rating || 5)}
            className="hidden lg:block"
          />
          <ProgressBarWithStars
            iconSize={20}
            noOfStar={Math.round(product?.rating || 5)}
            className="lg:hidden"
          />
          <span className="px-2 break-words">{product?.rating}</span>
        </div>
        <span className="break-words text-sm">
          ({product?.review_count}+ Reviews)
        </span>
      </div>
      <div className="flex gap-2 font-semibold text-xl">
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
      <Button
        handler={buyNow}
        className={`bg-black ${
          isNotSwiperProduct ? "lg:hidden" : "hidden"
        } text-md md:text-xl text-white rounded-lg outline-none hover:bg-gray-500 ${
          isNotSwiperProduct ? "px-6" : "px-4"
        }`}
      >
        Buy Now
      </Button>
      <Button
        handler={isNotSwiperProduct ? () => addItemToCart(product) : buyNow}
        className={`bg-black text-md md:text-xl text-white rounded-lg outline-none hover:bg-gray-500 ${
          isNotSwiperProduct ? "px-6" : "px-4"
        }`}
      >
        {isNotSwiperProduct ? "Add To Cart" : "Buy Now"}
      </Button>
    </div>
  );
};

export default ProductBriefCard;
