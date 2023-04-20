import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import CartItem from "../cart/CartItem";
import { useSelector } from "react-redux";

const OrderDetails = (props) => {
  const [toggle, setToggle] = useState(false);
  const products = useSelector((state) => state.product.products);
  return (
    <div className="">
      <h2 className="text-2xl lg:hidden py-4">Ayuvya Ayurveda</h2>
      <div className="flex justify-between items-center border-y py-3">
        <div className="flex gap-2 items-center">
          <BsCart3 color="blue" />
          <p className="text-lg">Show order summary</p>
          <RiArrowDropDownLine onClick={() => setToggle(!toggle)} size={35} />
        </div>
        <p className="">₹ 1357.9</p>
      </div>
      {toggle && (
        <>
          <div className="border-b">
            {products.slice(5, 8).map((product) => {
              return (
                <CartItem
                  key={product.id}
                  product={product}
                  isCheckoutPage={true}
                />
              );
            })}
          </div>
          <div className="flex flex-col gap-5 py-8 text-gray-600 border-b">
            <p className="flex justify-between text-xl">
              <span className="">Subtotal</span>
              <span className="">₹ 1357.9</span>
            </p>
            <p className="flex justify-between text-xl">
              <span className="">Online Discount</span>
              <span className="">₹ 135.9</span>
            </p>
            <p className="flex justify-between text-xl">
              <span className="">Shipping</span>
              <span className="">Free</span>
            </p>
          </div>
          <p className="flex justify-between text-xl border-b py-6 text-gray-700">
            <span className="">Total</span>
            <span className="">₹ 1357.9</span>
          </p>
        </>
      )}
    </div>
  );
};

export default OrderDetails;
