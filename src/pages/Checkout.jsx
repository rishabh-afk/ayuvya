import { useState } from "react";
import CheckoutForm from "../components/common/forms/CheckoutForm";
import OrderDetails from "../components/order/OrderDetails";
import { cart } from "../data/cartData";
import { motion } from "framer-motion";

const variants = {
  initial: { y: -500 },
  animate: { y: 0 },
  transition: { duration: 0.5, type: "spring", stiffness: 100 },
};

const Checkout = () => {
  const [paymentMode, setPaymentMode] = useState("online");
  const handlePaymentType = async (typeOfPayment) => {
    if (typeOfPayment === "cashOnDelivery") {
      setPaymentMode("offline");
    } else {
      setPaymentMode("online");
    }
  };
  return (
    <div className="lg:pl-20 flex flex-col lg:flex-row">
      <motion.div
        variants={variants}
        initial={variants.initial}
        animate={variants.animate}
        transition={variants.transition}
        className="w-full lg:w-[55%] p-6 lg:p-12 order-last lg:order-first"
      >
        <CheckoutForm
          handlePaymentType={handlePaymentType}
          paymentMode={paymentMode}
        />
      </motion.div>
      <motion.div
        variants={variants}
        initial={variants.initial}
        animate={variants.animate}
        transition={variants.transition}
        className="w-full lg:w-[45%] px-6 lg:p-12 bg-gray-100 border-l border-[#e1e1e1] order-first lg:order-last"
      >
        <OrderDetails
          handlePaymentType={handlePaymentType}
          paymentMode={paymentMode}
          cart={cart}
        />
      </motion.div>
    </div>
  );
};

export default Checkout;
