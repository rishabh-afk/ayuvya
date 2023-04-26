import { useNavigate } from "react-router-dom";
import CardHoc from "../../UI/CardHoc";
import Button from "../Button";
import { addCartItem } from "../../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import ProgressBarWithStars from "../custom/ProgressBarWithStars";
// import { AiFillStar } from "react-icons/ai";

const ProductCard = ({
  itemObj,
  headingSize,
  width,
  marginVertical,
  isProductPage,
}) => {
  // const items = new Array(Math.round(itemObj?.rating)).fill(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addItemToCart = (id) => {
    const data = {
      product: id,
      quantiy: 1,
    };
    dispatch(addCartItem(data));
  };
  const buyNow = () => {
    navigate(
      `/${itemObj?.product_category?.category_slug}/${itemObj?.product_slug}`,
      {
        state: { productId: itemObj?.id, scroll: true },
      }
    );
  };

  return (
    <CardHoc
      className={`bg-white cursor-none lg:cursor-pointer ${marginVertical} ${
        width && width
      }`}
    >
      <div
        className={`w-auto rounded-t-lg relative text-white ${
          isProductPage ? "h-48 md:h-72 bg-white/60 group" : "h-96"
        }`}
      >
        <img
          className={`absolute rounded-t-lg h-full object-cover ${
            isProductPage
              ? "transition delay-75 ease-in-out duration-200 group-hover:opacity-30"
              : ""
          }`}
          src={itemObj?.primary_image}
          alt=""
        />
        {isProductPage && (
          <>
            <div className="relative transition-all ease-in-out duration-200 delay-75 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
              <Button
                handler={buyNow}
                className="bg-black py-2 px-6 rounded hover:bg-gray-500"
              >
                Buy Now
              </Button>
            </div>
            <div className="bg-black absolute bottom-0 w-full text-center opacity-0 group-hover:opacity-100 transition delay-75 ease-in-out duration-200">
              Quick View
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col items-center text-center p-4 gap-2 h-56">
        <h1 className={`font-semibold ${headingSize}`}>
          {itemObj?.product_name.slice(0, 40)}{" "}
          {itemObj?.product_name.length > 40 && <span>...</span>}
        </h1>
        <div className="flex flex-wrap justify-center items-center">
          {/* {items.map((item, i) => {
            return <AiFillStar key={i} size={25} color="yellowGreen" />;
          })} */}
          <ProgressBarWithStars
            iconSize={25}
            noOfStar={Math.round(itemObj?.rating || 5)}
          />
          <span className="px-2 break-words">
            {Math.round(itemObj?.rating || "")}
          </span>
          <span className="break-words">
            ({itemObj?.review_count || ""}+ Reviews)
          </span>
        </div>
        <div className="flex gap-2">
          <span className="line-through">₹ {itemObj?.cut_price}</span>
          <span className="">₹ {itemObj?.price}</span>
        </div>
        <Button
          handler={isProductPage ? () => addItemToCart(itemObj.id) : buyNow}
          className={`bg-black text-md md:text-xl text-white rounded-lg outline-none hover:bg-gray-500 ${
            isProductPage ? "px-6" : "px-4"
          }`}
        >
          {isProductPage ? "Add To Cart" : "Buy Now"}
        </Button>
      </div>
    </CardHoc>
  );
};

export default ProductCard;
