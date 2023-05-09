import { RiDeleteBin6Line } from "react-icons/ri";
import {
  updateCartItem,
  removeCartItem,
  fetchCart,
} from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { motion } from "framer-motion";
import imageData from "../../assets/images/product/Intimate-Wellness.webp";
import { toast } from "react-toastify";
import { getAllRelatedProducts } from "../../store/slices/commonSlice";

const CartItem = ({ product, isCheckoutPage }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.qty);
  const addItemQuantity = (id, qty, price) => {
    setQuantity(qty + 1);
    const data = {
      id: id,
      qty: qty + 1,
      price: price,
    };
    dispatch(updateCartItem(data));
    dispatch(fetchCart());
  };
  const removeItemQuantity = (id, qty, price) => {
    if (qty !== 1) {
      setQuantity(qty - 1);
      const data = {
        id: id,
        qty: qty - 1,
        price: price,
        type: "remove",
      };
      dispatch(updateCartItem(data));
      dispatch(fetchCart());
    } else {
      removeProductFromCart(id, price);
    }
  };
  const removeProductFromCart = async (id, price) => {
    const data = {
      id: id,
      total_item_price: price,
    };
    dispatch(removeCartItem(data));
    dispatch(fetchCart());
    const relatedIds = await JSON.parse(localStorage.getItem("ayuvya-cart"));
    dispatch(getAllRelatedProducts(relatedIds?.related_product_Id));
    toast("Product deleted successfully", { position: "top-center" });
  };
  return (
    <div
      className={`flex pr-4 gap-5 ${isCheckoutPage ? "pt-2" : "border-b pb-2"}`}
    >
      <figure className="relative">
        <img
          className="w-20 lg:w-28 m-2 aspect-square rounded-md"
          src={imageData || product?.product_image}
          alt=""
        />
        {isCheckoutPage && (
          <span className="absolute top-0 right-0 bg-gray-500 text-white px-2 rounded-full">
            {product.qty}
          </span>
        )}
      </figure>
      <figcaption className="w-2/3">
        <h2 className="text-sm lg:text-base font-medium py-2">
          {product?.product_name}
        </h2>
        {!isCheckoutPage && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 w-fit">
              <span
                onClick={() =>
                  removeItemQuantity(product.id, quantity, product.price)
                }
                className="cursor-none lg:cursor-pointer text-xl font-medium border shadow-lg px-2 rounded-md hover:shadow-2xl"
              >
                -
              </span>
              <span className="text-base font-semibold text-gray-500">
                {quantity}
              </span>
              <span
                onClick={() =>
                  addItemQuantity(product.id, quantity, product.price)
                }
                className="cursor-none lg:cursor-pointer text-xl font-medium border shadow-lg px-2 rounded-md hover:shadow-2xl"
              >
                +
              </span>
            </div>
            <p className="font-semibold text-gray-500">₹ {product?.price}</p>
            <motion.div whileHover={{ scale: 1.1 }}>
              <RiDeleteBin6Line
                onClick={() => {
                  removeProductFromCart(product.id, product.price);
                }}
                className="cursor-none lg:cursor-pointer"
                size={20}
              />
            </motion.div>
          </div>
        )}
        {isCheckoutPage && (
          <p className="font-semibold text-base lg:text-xl text-gray-500">
            ₹ {product?.price}
          </p>
        )}
      </figcaption>
    </div>
  );
};

export default CartItem;
