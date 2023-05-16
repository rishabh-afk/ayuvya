// import toast from "react-toastify";
import Button from "../../common/Button";
import {
  addToCartAuth,
  fetchCartAuth,
  addCartItem,
  fetchCart,
} from "../../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllRelatedProducts } from "../../../store/slices/commonSlice";

const AddProductButton = (product) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart);

  const addItemToCart = async ({ product }) => {
    const data = {
      quantity: 1,
      id: product.id,
      price: product.price,
      cut_price: product.cut_price,
      product_name: product.product_name,
      primary_image: product?.product_images[0].product_image,
    };
    if (isLoggedIn) {
      dispatch(addToCartAuth([{ quantity: 1, product: product.id }])).then(
        (response) => {
          if (response.meta.requestStatus === "fulfilled") {
            dispatch(fetchCartAuth());
            // toast.success("Item added successfully", {
            //   position: "bottom-left",
            // });
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
    <div className="flex mt-3 flex-col gap-5">
      <Button
        handler={() => addItemToCart(product)}
        className="w-full md:w-3/4 bg-white border-2 border-slate-200 py-3"
      >
        <span className="text-3xl font-bold text-[#7d8801] text-center mx-auto">
          Add To Cart
        </span>
      </Button>
      <Button className="w-full md:w-3/4 bg-[#7d8801] border-2 border-[#7d8801] py-3">
        <span className="text-3xl font-bold text-white text-center mx-auto">
          Buy Now
        </span>
      </Button>
    </div>
  );
};

export default AddProductButton;
