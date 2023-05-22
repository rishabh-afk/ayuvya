import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from "../components/common/Loader";
import { useDispatch, useSelector } from "react-redux";
import OrderDetails from "../components/order/OrderDetails";
import OrderSummary from "../components/order/OrderSummary";
import { verifyPaymentStatus } from "../store/slices/orderSlice";
import { fetchCartAuth } from "../store/slices/cartSlice";

const variants = {
  initial: { y: -500 },
  animate: { y: 0 },
  transition: { duration: 0.5, type: "spring", stiffness: 100 },
};

const ThankYou = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [thankYou, showThankYou] = useState(false);

  const cart = useSelector((state) => state.cart);
  const orderId = localStorage.getItem("AYUVYA_ORDER_ID");
  const userDetails = JSON.parse(localStorage.getItem("AYUVYA_USERDATA"));
  const payment_type = useSelector((state) => state.cart.payment_type);
  const payment_status = useSelector((state) => state.order.payment_status);

  useEffect(() => {
    if (orderId === null) {
      return navigate("/");
    }
    // prepaid order status
    if (orderId.includes("order")) {
      if (payment_status === "SUCCESS") {
        localStorage.getItem("SET_ROUTE_HISTORY", location.pathname);
        dispatch(fetchCartAuth()).then(() => {
          showThankYou(true);
        });
      } else if (payment_status === "FAILED") {
        navigate("/");
      } else {
        dispatch(
          verifyPaymentStatus({
            order_id: orderId,
          })
        );
      }
      // COD orders
    } else {
      localStorage.getItem("SET_ROUTE_HISTORY", location.pathname);
      showThankYou(true);
    }
  }, [orderId, dispatch, payment_status, navigate, location]);
  return (
    <>
      {thankYou ? (
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
              final_amount={cart?.final_amount}
              orderId={orderId}
              payment_type={payment_type}
            />
          </motion.div>
          <motion.div
            variants={variants}
            initial={variants.initial}
            animate={variants.animate}
            transition={variants.transition}
            className="w-full lg:w-[45%] px-4 lg:p-12 bg-gray-100 border-l border-[#e1e1e1] order-first lg:order-last"
          >
            <OrderDetails cart={cart} payment_type={payment_type} />
          </motion.div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ThankYou;
