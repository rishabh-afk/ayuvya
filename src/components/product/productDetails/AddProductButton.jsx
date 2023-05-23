import { useState } from "react";
import Button from "../../common/Button";
import {
  addToCartAuth,
  fetchCartAuth,
  addCartItem,
  fetchCart,
} from "../../../store/slices/cartSlice";
import CartModal from "../../modals/CartModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllRelatedProducts } from "../../../store/slices/commonSlice";

const AddProductButton = (product) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  //to show cart modal when user clicks
  const [cartModal, showCartModal] = useState(false);
  function handleClose() {
    showCartModal(false);
  }

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
      const alreadyExists = cart.items?.find((item) => item.id === product.id);
      dispatch(
        addToCartAuth([
          {
            quantity: alreadyExists ? alreadyExists.quantity + 1 : 1,
            product: product.id,
          },
        ])
      )
        .then(() => dispatch(fetchCartAuth()))
        .then(() => showCartModal(true));
    } else {
      dispatch(addCartItem(data));
      dispatch(fetchCart());
      showCartModal(true);
    }
    dispatch(getAllRelatedProducts([product.id, ...cart?.related_product_Id]));
  };

  return (
    <div className="flex mt-3 flex-col gap-5">
      <CartModal handleClose={handleClose} cartModal={cartModal} />
      <Button
        handler={() => addItemToCart(product)}
        className="w-full lg:w-3/4 bg-white border-2 border-slate-200 py-3"
      >
        <span className="text-3xl font-bold text-[#7d8801] text-center mx-auto">
          Add To Cart
        </span>
      </Button>
      <Button className="w-full lg:w-3/4 bg-[#7d8801] border-2 border-[#7d8801] py-3">
        <span className="text-3xl font-bold text-white text-center mx-auto">
          Buy Now
        </span>
      </Button>
    </div>
  );
};

export default AddProductButton;
