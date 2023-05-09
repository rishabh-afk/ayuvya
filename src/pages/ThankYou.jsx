// import axios from "axios";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Loader from "../components/common/Loader";
import OrderDetails from "../components/order/OrderDetails";
import OrderSummary from "../components/order/OrderSummary";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyPaymentStatus } from "../store/slices/orderSlice";

const variants = {
  initial: { y: -500 },
  animate: { y: 0 },
  transition: { duration: 0.5, type: "spring", stiffness: 100 },
};

const ThankYou = () => {
  const { orderId } = useParams();
  const [thankYou, showThankYou] = useState(false);
  const dispatch = useDispatch();
  const cart = JSON.parse(localStorage.getItem("ayuvya-cart"));
  const userDetails = JSON.parse(localStorage.getItem("ayuvya-user-details"));
  const payment_status = useSelector((state) => state.order.payment_status);
  // console.log(cart, userDetails);

  // const fetchDetails = async (orderId) => {
  //   const resp = await axios.post(
  //     "http://192.168.0.105:80/api/checkout/verify/payment/",
  //     {
  //       order_id: orderId,
  //     }
  //   );
  //   if (resp.status === 200 && resp.data.payment_status === "SUCCESS") {
  //     showThankYou(true);
  //   } else {
  //     return <Loader />;
  //   }
  // };
  useEffect(() => {
    if (orderId.includes("order")) {
      const data = {
        order_id: orderId,
      };
      dispatch(verifyPaymentStatus(data));
      if (payment_status === "SUCCESS") {
        showThankYou(true);
      }
    } else {
      showThankYou(true);
    }
  }, [orderId, dispatch, payment_status]);

  if (payment_status !== "SUCCESS") {
    return <Loader />;
  }

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
