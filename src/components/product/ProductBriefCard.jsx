import ProgressBarWithStars from "../common/custom/ProgressBarWithStars";
import Button from "../common/Button";

const ProductBriefCard = ({
  headingSize,
  product,
  addItemToCart,
  buyNow,
  isSwiperProduct,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-4 gap-2 h-56">
      <h1 className={`font-semibold ${headingSize}`}>
        {product?.product_name.slice(0, 45)}{" "}
        {product?.product_name.length > 45 && <span>...</span>}
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex text-sm">
          <ProgressBarWithStars
            iconSize={15}
            noOfStar={Math.round(product?.rating || 5)}
          />
          <span className="px-2 break-words">{product?.rating || ""}</span>
        </div>
        <span className="break-words text-sm">
          ({product?.review_count || ""}+ Reviews)
        </span>
      </div>
      <div className="flex gap-2 font-semibold text-xl">
        <span className="line-through text-gray-500">
          ₹ {product?.cut_price}
        </span>
        <span className="">₹ {product?.price}</span>
      </div>
      {isSwiperProduct && (
        <span className="text-xs">
          (save ₹ {product.cut_price - product.price})
        </span>
      )}
      <Button
        handler={isSwiperProduct ? () => addItemToCart(product.id) : buyNow}
        className={`bg-black text-md md:text-xl text-white rounded-lg outline-none hover:bg-gray-500 ${
          isSwiperProduct ? "px-6" : "px-4"
        }`}
      >
        {isSwiperProduct ? "Add To Cart" : "Buy Now"}
      </Button>
    </div>
  );
};

export default ProductBriefCard;
