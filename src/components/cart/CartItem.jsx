import { RiDeleteBin6Line } from "react-icons/ri";
import {
  updateCartItem,
  removeCartItem,
  fetchCart,
  addToCartAuth,
  fetchCartAuth,
} from "../../store/slices/cartSlice";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getAllRelatedProducts } from "../../store/slices/commonSlice";

const CartItem = ({ product, isCheckoutPage }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  //add quantity to the list of products
  const addItemQuantity = (id, quantity, price) => {
    if (isLoggedIn) {
      dispatch(addToCartAuth([{ quantity: quantity + 1, product: product.id }]))
        .then(() => dispatch(fetchCartAuth()))
        .then(() => setQuantity(quantity + 1));
    } else {
      dispatch(
        updateCartItem({
          id: id,
          quantity: quantity + 1,
          price: price,
        })
      );
      dispatch(fetchCart());
    }
  };
  //remove quantity from the list of products
  const removeItemQuantity = (id, quantity, price) => {
    if (quantity !== 1) {
      if (isLoggedIn) {
        dispatch(
          addToCartAuth([{ quantity: quantity - 1, product: product.id }])
        )
          .then(() => dispatch(fetchCartAuth()))
          .then(() => setQuantity(quantity - 1));
      } else {
        setQuantity(quantity - 1);
        dispatch(
          updateCartItem({
            id: id,
            quantity: quantity - 1,
            price: price,
            type: "remove",
          })
        );
        dispatch(fetchCart());
      }
    } else {
      removeProductFromCart(id, price);
    }
  };
  //remove product from cart
  const removeProductFromCart = async (id, price) => {
    if (isLoggedIn) {
      dispatch(addToCartAuth([{ quantity: 0, product: id }])).then(() =>
        dispatch(fetchCartAuth())
      );
    } else {
      dispatch(removeCartItem({ id: id, total_item_price: price }));
      dispatch(fetchCart());
    }
    dispatch(
      getAllRelatedProducts(
        cart?.related_product_Id.filter((item) => {
          return id !== item;
        })
      )
    );
  };

  return (
    <div className={`flex gap-5 ${isCheckoutPage ? "pt-2" : "border-b"}`}>
      <figure className="relative">
        <img
          className="w-20 lg:w-24 m-2 aspect-square rounded-md"
          src={product?.primary_image}
          alt=""
        />
        {isCheckoutPage && (
          <span className="absolute top-0 right-0 bg-gray-500 text-white px-2 rounded-full">
            {product.quantity}
          </span>
        )}
      </figure>
      <figcaption className="w-2/3">
        <h2 className="text-sm lg:text-sm font-semibold py-2">
          {product?.product_name}
        </h2>
        {!isCheckoutPage && (
          <div className="flex justify-between items-center">
            <div className="flex items-center border border-gray-300 rounded-sm gap-2 w-fit">
              <span
                onClick={() =>
                  removeItemQuantity(product.id, quantity, product.price)
                }
                className="cursor-none lg:cursor-pointer text-xl font-medium px-2 rounded-md hover:shadow-2xl"
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
                className="cursor-none lg:cursor-pointer text-xl font-medium px-2 rounded-md hover:shadow-2xl"
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
