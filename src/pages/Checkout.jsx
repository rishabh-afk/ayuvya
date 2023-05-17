import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderDetails from "../components/order/OrderDetails";
import CheckoutForm from "../components/common/forms/CheckoutForm";

const variants = {
  initial: { y: -500 },
  animate: { y: 0 },
  transition: { duration: 0.5, type: "spring", stiffness: 100 },
};

const Checkout = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [paymentMode, setPaymentMode] = useState("online");
  const cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
  const userDetails = JSON.parse(localStorage.getItem("AYUVYA_USERDATA"));
  
  // Payment Types
  const handlePaymentType = async (typeOfPayment) => {
    if (typeOfPayment === "COD") {
      setPaymentMode("offline");
    } else {
      setPaymentMode("online");
    }
  };

  // redirect to homepage if no item is selected
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
    if (
      (cart && cart?.items.length === 0) ||
      (cartData && cartData.items.length === 0)
    ) {
      navigate("/");
    }
  }, [navigate, cartData]);

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
          userDetails={userDetails}
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
          cart={isLoggedIn ? cartData : cart}
        />
      </motion.div>
    </div>
  );
};

export default Checkout;
