import { useNavigate } from "react-router-dom";
import CardHoc from "../UI/CardHoc";
import Button from "../common/Button";
import { addCartItem } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import ProductBriefCard from "./ProductBriefCard";

const ProductCard = ({
  itemObj,
  headingSize,
  width,
  marginVertical,
  isProductPage,
}) => {
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
        className={`w-auto rounded-t-lg relative flex justify-center text-white ${
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
                className="bg-black rounded-none py-2 px-6 text-lg hover:bg-gray-500"
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
      <ProductBriefCard
        headingSize={headingSize}
        itemObj={itemObj}
        addItemToCart={addItemToCart}
        buyNow={buyNow}
        isProductPage={isProductPage}
      />
    </CardHoc>
  );
};

export default ProductCard;
