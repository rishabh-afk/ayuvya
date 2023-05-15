import { motion } from "framer-motion";
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
  const [paymentMode, setPaymentMode] = useState("online");
  const cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
  const userDetails = JSON.parse(localStorage.getItem("AYUVYA_USERDATA"));
  const navigate = useNavigate();

  // Payment Types
  const handlePaymentType = async (typeOfPayment) => {
    console.log(typeOfPayment)
    if (typeOfPayment === "COD") {
      setPaymentMode("offline");
    } else {
      setPaymentMode("online");
    }
  };

  // redirect to homepage if no item is selected
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
    if (cart?.items.length === 0 || cart === null) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      {cart?.items.length > 0 && (
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
              cart={cart}
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
      )}
    </>
  );
};

export default Checkout;
