import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import CartItem from "../cart/CartItem";
import Subtotal from "../cart/Subtotal";
import { motion } from "framer-motion";

const variants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const OrderDetails = ({ paymentMode, cart }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="h-auto">
      <h2 className="text-2xl lg:hidden py-4">Ayuvya Ayurveda</h2>
      <div className="flex lg:hidden justify-between items-center border-y py-3">
        <div className="flex gap-2 items-center">
          <BsCart3 color="blue" />
          <p className="text-lg">Show order summary</p>
          <motion.div animate={toggle ? "open" : "closed"} variants={variants}>
            <RiArrowDropDownLine onClick={() => setToggle(!toggle)} size={45} />
          </motion.div>
        </div>
        <p className="">
          ₹{" "}
          {paymentMode === "online"
            ? cart?.totalAmount - cart?.totalAmount / 10
            : cart?.totalAmount}
        </p>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: toggle ? "auto" : 0, opacity: toggle ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="border-b">
          {cart?.items.map((product) => {
            return (
              <CartItem
                key={product.id}
                product={product}
                isCheckoutPage={true}
              />
            );
          })}
        </div>
        <Subtotal paymentMode={paymentMode} price={cart?.totalAmount} />
      </motion.div>
      <div className="hidden lg:block">
        <div className="border-b">
          {cart?.items.map((product) => {
            return (
              <CartItem
                key={product.id}
                product={product}
                isCheckoutPage={true}
              />
            );
          })}
        </div>
        <Subtotal paymentMode={paymentMode} price={cart?.totalAmount} />
      </div>
    </div>
  );
};

export default OrderDetails;
