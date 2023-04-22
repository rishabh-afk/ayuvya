import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import CartItem from "../cart/CartItem";
import { useSelector } from "react-redux";
import Subtotal from "../cart/Subtotal";

const OrderDetails = ({ paymentMode }) => {
  const [toggle, setToggle] = useState(false);
  const products = useSelector((state) => state.product.products);
  return (
    <div className="h-auto">
      <h2 className="text-2xl lg:hidden py-4">Ayuvya Ayurveda</h2>
      <div className="flex lg:hidden justify-between items-center border-y py-3">
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
          <Subtotal paymentMode={paymentMode} price={1349.2} />
        </>
      )}
      <div className="hidden lg:block">
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
        <Subtotal paymentMode={paymentMode} price={1349.2} />
      </div>
    </div>
  );
};

export default OrderDetails;
