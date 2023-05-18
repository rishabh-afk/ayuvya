import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [thankYou, showThankYou] = useState(false);

  const orderId = localStorage.getItem("AYUVYA_ORDER_ID");
  const cart = JSON.parse(localStorage.getItem("AYUVYA_CART"));
  const userDetails = JSON.parse(localStorage.getItem("AYUVYA_USERDATA"));
  const payment_status = useSelector((state) => state.order.payment_status);
  const cartData = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (orderId === null) {
      return navigate("/");
    }
    // prepaid order status
    if (orderId.includes("order")) {
      dispatch(
        verifyPaymentStatus({
          order_id: orderId,
        })
      );
      if (payment_status === "SUCCESS") {
        dispatch(fetchCartAuth()).then(() => showThankYou(true));
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
      showThankYou(true);
    }
  }, [orderId, dispatch, payment_status, navigate]);
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
              total_amount={
                isLoggedIn ? cartData.total_amount : cart?.total_amount
              }
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
            <OrderDetails cart={isLoggedIn ? cartData : cart} />
          </motion.div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ThankYou;
