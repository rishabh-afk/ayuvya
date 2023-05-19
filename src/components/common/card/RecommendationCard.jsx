import Button from "../Button";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
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
  const cartItems = useSelector((state) => state.cart);
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
      dispatch(addToCartAuth([{ quantity: 1, product: product.id }])).then(
        (response) => {
          if (response.meta.requestStatus === "fulfilled") {
            dispatch(fetchCartAuth());
            toast.success("Item added successfully", {
              position: "bottom-left",
            });
          }
        }
      );
    } else {
      dispatch(addCartItem(data));
      dispatch(fetchCart());
    }
    const relatedIds = await JSON.parse(localStorage.getItem("AYUVYA_CART"));
    dispatch(
      getAllRelatedProducts(
        cartItems?.related_product_Id || relatedIds?.related_product_Id
      )
    );
  };
  return (
    <div className={`flex flex-col gap-2 cursor-pointer ${marginVertical}`}>
      <figure className="flex justify-center">
        <img
          className="h-32 aspect-square object-cover"
          src={product.primary_image}
          alt=""
        />
      </figure>
      <figcaption className="flex flex-col gap-1 py-2 text-center">
        <Link to={`${product?.get_product_url}`}>
          <h2 className="text-lg font-bold hover:text-gray-700">
            {product.product_name}
          </h2>
        </Link>
        <div className="flex gap-2 text-center mx-auto">
          <span className="">₹ {product.price}</span>
          <span className="line-through">₹ {product.cut_price}</span>
        </div>
        <span>
          {100 - Math.round((product.price / product.cut_price) * 100)}% OFF
        </span>
        <div className="text-center mx-auto">
          <Button
            handler={() => addItemToCart(product)}
            className="rounded-full border justify-center px-4 w-fit border-black hover:bg-black hover:text-white outline-none"
          >
            <span className="text-sm">Add To Cart</span>
          </Button>
        </div>
      </figcaption>
    </div>
  );
};

export default RecommendationCard;
