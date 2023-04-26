import ProgressBarWithStars from "../common/custom/ProgressBarWithStars";
import Button from "../common/Button";

const ProductBriefCard = ({
  headingSize,
  itemObj,
  addItemToCart,
  buyNow,
  isProductPage,
}) => {
  return (
    <div className="flex flex-col items-center text-center p-4 gap-2 h-56">
      <h1 className={`font-semibold ${headingSize}`}>
        {itemObj?.product_name.slice(0, 45)}{" "}
        {itemObj?.product_name.length > 45 && <span>...</span>}
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex text-sm">
          <ProgressBarWithStars
            iconSize={15}
            noOfStar={Math.round(itemObj?.rating || 5)}
          />
          <span className="px-2 break-words">{itemObj?.rating || ""}</span>
        </div>
        <span className="break-words text-sm">
          ({itemObj?.review_count || ""}+ Reviews)
        </span>
      </div>
      <div className="flex gap-2 font-semibold text-xl">
        <span className="line-through text-gray-500">
          ₹ {itemObj?.cut_price}
        </span>
        <span className="">₹ {itemObj?.price}</span>
      </div>
      {isProductPage && (
        <span className="text-xs">
          (save ₹ {itemObj.cut_price - itemObj.price})
        </span>
      )}
      <Button
        handler={isProductPage ? () => addItemToCart(itemObj.id) : buyNow}
        className={`bg-black text-md md:text-xl text-white rounded-lg outline-none hover:bg-gray-500 ${
          isProductPage ? "px-6" : "px-4"
        }`}
      >
        {isProductPage ? "Add To Cart" : "Buy Now"}
      </Button>
    </div>
  );
};

export default ProductBriefCard;
