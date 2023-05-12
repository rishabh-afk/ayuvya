import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loader from "../components/common/Loader";
import { useDispatch, useSelector } from "react-redux";
import OrderDetails from "../components/order/OrderDetails";
import OrderSummary from "../components/order/OrderSummary";
import { verifyPaymentStatus } from "../store/slices/orderSlice";
import { useNavigate } from "react-router-dom";

const variants = {
  initial: { y: -500 },
  animate: { y: 0 },
  transition: { duration: 0.5, type: "spring", stiffness: 100 },
};

const ThankYou = () => {
  const orderId = localStorage.getItem("AYUVYA_ORDER_ID");
  const [thankYou, showThankYou] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
  const userDetails = JSON.parse(localStorage.getItem("AYUVYA_USERDATA"));
  const payment_status = useSelector((state) => state.order.payment_status);
  useEffect(() => {
    if (orderId === null) {
      return navigate("/");
    }
    if (orderId.includes("order")) {
      const paymentCheck = setInterval(() => {
        if (payment_status === "SUCCESS") {
          clearInterval(paymentCheck);
          showThankYou(true);
        }
        dispatch(
          verifyPaymentStatus({
            order_id: orderId,
          })
        );
      }, 5000);
    } else {
      showThankYou(true);
    }
  }, [orderId, dispatch, payment_status, navigate]);
  return (
    <>
      {!thankYou ? (
        <Loader />
      ) : (
        <div className="lg:pl-20 flex flex-col lg:flex-row">
          <motion.div
            variants={variants}
            initial={variants.initial}
            animate={variants.animate}
            transition={variants.transition}
            className="w-full lg:w-[55%] p-4 lg:p-12 order-last lg:order-first"
          >
            <OrderSummary
              userDetails={userDetails}
              totalAmount={cart?.totalAmount}
              orderId={orderId}
            />
          </motion.div>
          <motion.div
            variants={variants}
            initial={variants.initial}
            animate={variants.animate}
            transition={variants.transition}
            className="w-full lg:w-[45%] px-4 lg:p-12 bg-gray-100 border-l border-[#e1e1e1] order-first lg:order-last"
          >
            <OrderDetails cart={cart} />
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ThankYou;
