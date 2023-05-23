import Button from "../Button";
import { Link } from "react-router-dom";
import { TbDiscount2 } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCart,
  fetchCartAuth,
  addCartItem,
  addToCartAuth,
} from "../../../store/slices/cartSlice";
import { getAllRelatedProducts } from "../../../store/slices/commonSlice";

const RecommendationCard = ({ product, marginVertical }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Add Item to cart
  const addItemToCart = async (product) => {
    const data = {
      quantity: 1,
      id: product.id,
      price: product.price,
      cut_price: product.cut_price,
      product_name: product.product_name,
      primary_image: product.primary_image,
    };
    if (isLoggedIn) {
      const alreadyExists = cart.items?.find((item) => item.id === product.id);
      dispatch(
        addToCartAuth([
          {
            quantity: alreadyExists ? alreadyExists.quantity + 1 : 1,
            product: product.id,
          },
        ])
      ).then(() => dispatch(fetchCartAuth()));
    } else {
      dispatch(addCartItem(data));
      dispatch(fetchCart());
    }
    dispatch(getAllRelatedProducts([product.id, ...cart?.related_product_Id]));
  };
  return (
    <div className={`flex flex-col gap-2 cursor-pointer ${marginVertical}`}>
      <figure className="flex justify-center">
        <img
          className="h-40 aspect-square object-cover"
          src={product.primary_image}
          alt=""
        />
      </figure>
      <figcaption className="flex flex-col gap-1 p-2 text-center">
        <Link to={`${product?.get_product_url}`}>
          <h2 className="text-base font-semibold hover:text-gray-700">
            {product.product_name}
          </h2>
        </Link>
        <div className="flex gap-2 text-center mx-auto font-semibold mt-1">
          <span className="">₹ {product.price}</span>
          <span className="line-through text-gray-500">
            ₹ {product.cut_price}
          </span>
        </div>
        <span className="text-sm font-semibold flex gap-1 justify-center">
          <TbDiscount2 size={20} color="skyblue" />
          {100 - Math.round((product.price / product.cut_price) * 100)}% OFF
        </span>
        <div className="text-center mx-auto">
          <Button
            handler={() => addItemToCart(product)}
            className="rounded-full border justify-center px-4 w-fit border-black hover:bg-black hover:text-white outline-none"
          >
            <span className="text-xs font-semibold cursor-pointer">
              Add To Cart
            </span>
          </Button>
        </div>
      </figcaption>
    </div>
  );
};

export default RecommendationCard;
