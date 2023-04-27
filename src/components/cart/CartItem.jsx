import { RiDeleteBin6Line } from "react-icons/ri";
import { updateCartItem, removeCartItem } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CartItem = ({ product, isCheckoutPage }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);
  const addItemQuantity = (id, qty) => {
    setQuantity(qty + 1);
    const data = {
      product: id,
      quantity: qty + 1,
    };
    dispatch(updateCartItem(data));
  };
  const removeItemQuantity = (id, qty) => {
    if (qty !== 1) {
      setQuantity(qty - 1);
      const data = {
        product: id,
        quantity: qty - 1,
      };
      dispatch(updateCartItem(data));
    } else {
      removeProductFromCart(id);
    }
  };
  const removeProductFromCart = (id) => {
    const data = {
      product: id,
    };
    dispatch(removeCartItem(data));
  };
  return (
    <div
      className={`flex pr-4 gap-5 ${isCheckoutPage ? "pt-2" : "border-b pb-2"}`}
    >
      <figure className="relative">
        <img
          className="w-20 lg:w-28 p-3 aspect-square rounded-md"
          src={product?.product.product_images[0].product_image}
          alt=""
        />
        {isCheckoutPage && (
          <span className="absolute top-0 right-0 bg-gray-500 text-white px-2 rounded-full">
            {product.quantity}
          </span>
        )}
      </figure>
      <figcaption className="w-2/3">
        <h2 className="text-sm lg:text-base font-medium py-2">
          {product?.name}
        </h2>
        {!isCheckoutPage && (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 w-fit">
              <span
                onClick={() => removeItemQuantity(product.id, quantity)}
                className="cursor-none lg:cursor-pointer text-xl font-medium border shadow-lg px-2 rounded-md hover:shadow-2xl"
              >
                -
              </span>
              <span className="text-base font-semibold text-gray-500">
                {quantity || product.quantity}
              </span>
              <span
                onClick={() => addItemQuantity(product.id, quantity)}
                className="cursor-none lg:cursor-pointer text-xl font-medium border shadow-lg px-2 rounded-md hover:shadow-2xl"
              >
                +
              </span>
            </div>
            <p className="font-semibold text-gray-500">
              ₹ {product?.unit_price}
            </p>
            <RiDeleteBin6Line
              onClick={() => {
                removeProductFromCart(product.id);
              }}
              className="cursor-none lg:cursor-pointer"
              size={20}
            />
          </div>
        )}
        {isCheckoutPage && (
          <p className="font-semibold text-base lg:text-xl text-gray-500">
            ₹ {product?.unit_price}
          </p>
        )}
      </figcaption>
    </div>
  );
};

export default CartItem;
