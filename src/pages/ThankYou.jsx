import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Loader from "../components/common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartAuth } from "../store/slices/cartSlice";
import { useNavigate, useLocation } from "react-router-dom";
import OrderDetails from "../components/order/OrderDetails";
import OrderSummary from "../components/order/OrderSummary";
import { verifyPaymentStatus } from "../store/slices/orderSlice";

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
  const payment_status = useSelector((state) => state.order.payment_status);
  
  const showThankYouPage = useCallback(() => {
    localStorage.setItem("SET_ROUTE_HISTORY", location.pathname);
    showThankYou(true);
  }, [location.pathname]);

  useEffect(() => {
    if (orderId === null) {
      return navigate("/");
    }
    if (orderId.includes("order")) {
      if (payment_status === "SUCCESS") {
        dispatch(fetchCartAuth()).then(() => showThankYouPage());
      } else if (payment_status === "FAILED") navigate("/");
      else dispatch(verifyPaymentStatus({ order_id: orderId }));
    } else showThankYouPage();
  }, [orderId, dispatch, payment_status, navigate, location, showThankYouPage]);
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
              payment_type={cart?.payment_type}
            />
          </motion.div>
          <motion.div
            variants={variants}
            initial={variants.initial}
            animate={variants.animate}
            transition={variants.transition}
            className="w-full lg:w-[45%] px-4 lg:p-12 bg-gray-100 border-l border-[#e1e1e1] order-first lg:order-last"
          >
            <OrderDetails cart={cart} payment_type={cart?.payment_type} />
          </motion.div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ThankYou;
